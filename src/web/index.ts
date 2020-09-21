import {IncomingMessage, Server, ServerResponse, createServer} from 'http';
import {config, setConfig} from '../config';
import {createReadStream, readdir} from 'fs';
import {getAllBrands, getAllModels, getAllSeries, storeList} from '../store/model';
import {join, normalize} from 'path';

const approot = join(__dirname, '../../');
const webroot = join(approot, './web');

const contentTypeMap: { [key: string]: string } = {
	css: 'text/css',
	htm: 'text/html',
	html: 'text/html',
	jpeg: 'image/jpeg',
	jpg: 'image/jpeg',
	js: 'application/javascript',
	json: 'application/json',
	png: 'image/png',
	txt: 'text/plain'
};

function sendFile(response: ServerResponse, path: string, relativeTo: string = webroot) {
	path = normalize(`./${path}`);

	const fsPath = join(relativeTo, path);
	try {
		const stream = createReadStream(fsPath);
		stream.on('error', error => {
			sendError(response, error.message);
		});

		const pathSplit = path.split('.');
		const ext = pathSplit[pathSplit.length - 1].toLowerCase();

		response.setHeader('Content-Type', contentTypeMap[ext] ?? contentTypeMap.txt);

		stream.on('end', () => response.end());
		stream.pipe(response);
	} catch (error) {
		sendError(response, error);
	}
}

function sendError(response: ServerResponse, data: string, statusCode = 500) {
	response.statusCode = statusCode;
	response.setHeader('Content-Type', contentTypeMap.txt);
	response.write(data);
	response.end();
}

function sendJSON(response: ServerResponse, data: any) {
	response.setHeader('Content-Type', contentTypeMap.json);
	response.write(JSON.stringify(data));
	response.end();
}

function sendConfig(response: ServerResponse) {
	sendJSON(response, config);
}

function handleAPI(request: IncomingMessage, response: ServerResponse, urlComponents: string[]) {
	if (urlComponents.length < 2) {
		sendError(response, 'No API route specified', 400);
		return;
	}

	switch (urlComponents[1]) {
		case 'config':
			if (request.method === 'PUT') {
				const data: string[] = [];
				request.on('data', chunk => {
					data.push(chunk);
				});
				request.on('end', () => {
					// We ignore errors, client just sent wrong data...
					try {
						setConfig(JSON.parse(data.join('')));
					} catch { }

					sendConfig(response);
				});
				return;
			}

			sendConfig(response);
			return;
		case 'stores':
			sendJSON(response, Array.from(storeList.keys()));
			return;
		case 'brands':
			sendJSON(response, getAllBrands());
			return;
		case 'series':
			sendJSON(response, getAllSeries());
			return;
		case 'models':
			sendJSON(response, getAllModels());
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

			readdir(approot, (error, files) => {
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

function requestListener(request: IncomingMessage, response: ServerResponse) {
	const url = request.url!;
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

let server: Server | undefined;

export async function startAPIServer() {
	await stopAPIServer();
	if (process.env.WEB_PORT) {
		server = createServer(requestListener);
		server.listen(Number(process.env.WEB_PORT));
	}
}

export async function stopAPIServer() {
	return new Promise(resolve => {
		if (server) {
			server.close(resolve);
			server = undefined;
			return;
		}

		resolve();
	});
}
