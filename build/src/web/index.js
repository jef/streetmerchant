"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stopAPIServer = exports.startAPIServer = void 0;
const http_1 = require("http");
const config_1 = require("../config");
const fs_1 = require("fs");
const model_1 = require("../store/model");
const path_1 = require("path");
const logger_1 = require("../logger");
const approot = path_1.join(__dirname, '../../../');
const webroot = path_1.join(approot, './web');
const contentTypeMap = {
    css: 'text/css',
    htm: 'text/html',
    html: 'text/html',
    jpeg: 'image/jpeg',
    jpg: 'image/jpeg',
    js: 'application/javascript',
    json: 'application/json',
    png: 'image/png',
    txt: 'text/plain',
};
function sendFile(response, path, relativeTo = webroot) {
    var _a;
    path = path_1.normalize(`./${path}`);
    const fsPath = path_1.join(relativeTo, path);
    const relPath = path_1.relative(relativeTo, fsPath);
    if (!relPath || relPath.startsWith('..') || path_1.isAbsolute(relPath)) {
        sendError(response, 'Bad request', 400);
        return;
    }
    try {
        const stream = fs_1.createReadStream(fsPath);
        let responseDead = false;
        stream.on('error', err => {
            responseDead = true;
            logger_1.logger.error(`Error in WebUI stream ${err.message}`);
            sendError(response, 'Not found', 404);
        });
        const pathSplit = path.split('.');
        const ext = pathSplit[pathSplit.length - 1].toLowerCase();
        if (responseDead) {
            return;
        }
        response.setHeader('Content-Type', (_a = contentTypeMap[ext]) !== null && _a !== void 0 ? _a : contentTypeMap.txt);
        stream.on('end', () => response.end());
        stream.pipe(response);
    }
    catch (error) {
        logger_1.logger.error(`Error in WebUI ${error.message}`);
        sendError(response, 'Internal server error');
    }
}
function sendError(response, data, statusCode = 500) {
    response.statusCode = statusCode;
    response.setHeader('Content-Type', contentTypeMap.txt);
    response.write(data);
    response.end();
}
function sendJSON(response, data) {
    response.setHeader('Content-Type', contentTypeMap.json);
    response.write(JSON.stringify(data));
    response.end();
}
function sendConfig(response) {
    sendJSON(response, config_1.config);
}
function handleAPI(request, response, urlComponents) {
    if (urlComponents.length < 2) {
        sendError(response, 'No API route specified', 400);
        return;
    }
    switch (urlComponents[1]) {
        case 'config':
            if (request.method === 'PUT') {
                const data = [];
                request.on('data', chunk => {
                    data.push(chunk);
                });
                request.on('end', () => {
                    // We ignore errors, client just sent wrong data...
                    try {
                        config_1.setConfig(JSON.parse(data.join('')));
                        model_1.updateStores();
                    }
                    catch (_a) {
                        logger_1.logger.warn('Could not setup config');
                    }
                    sendConfig(response);
                });
                return;
            }
            sendConfig(response);
            return;
        case 'stores':
            sendJSON(response, [...model_1.storeList.keys()]);
            return;
        case 'brands':
            sendJSON(response, model_1.getAllBrands());
            return;
        case 'series':
            sendJSON(response, model_1.getAllSeries());
            return;
        case 'models':
            sendJSON(response, model_1.getAllModels());
            return;
        case 'screenshots':
            if (urlComponents.length >= 3) {
                const timeStamp = urlComponents[2];
                if (/\D/.test(timeStamp)) {
                    sendError(response, 'Invalid screenshot timestamp', 400);
                    return;
                }
                sendFile(response, `../success-${timeStamp}.png`);
                return;
            }
            fs_1.readdir(approot, (error, files) => {
                if (error) {
                    sendError(response, error.message);
                    return;
                }
                const result = [];
                for (const file of files) {
                    const match = /^success-(\d+)\.png$/.exec(file);
                    if (!match) {
                        continue;
                    }
                    result.push(match[1]);
                }
                sendJSON(response, result);
            });
            return;
        default:
            sendError(response, 'No API route found for path', 400);
    }
}
function requestListener(request, response) {
    const url = request.url;
    const urlComponents = url.slice(1).split('/'); // Remove the leading /
    switch (urlComponents[0]) {
        case 'api':
            handleAPI(request, response, urlComponents);
            break;
        default:
            sendFile(response, url === '/' ? '/index.html' : url);
            break;
    }
}
let server;
async function startAPIServer() {
    await stopAPIServer();
    if (process.env.WEB_PORT) {
        server = http_1.createServer(requestListener);
        server.listen(Number(process.env.WEB_PORT));
    }
}
exports.startAPIServer = startAPIServer;
async function stopAPIServer() {
    return new Promise(resolve => {
        if (server) {
            server.close(resolve);
            server = undefined;
            return;
        }
        resolve(null);
    });
}
exports.stopAPIServer = stopAPIServer;
//# sourceMappingURL=index.js.map