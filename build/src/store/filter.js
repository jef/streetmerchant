"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterStoreLink = exports.filterSeries = void 0;
const config_1 = require("../config");
/**
 * Returns true if the brand should be checked for stock
 *
 * @param brand The brand of the GPU
 */
function filterBrand(brand) {
    if (config_1.config.store.showOnlyBrands.length === 0) {
        return true;
    }
    return config_1.config.store.showOnlyBrands.includes(brand);
}
/**
 * Returns true if the model should be checked for stock
 *
 * @param model The model of the GPU
 * @param series The series of the GPU
 */
function filterModel(model, series) {
    if (config_1.config.store.showOnlyModels.length === 0) {
        return true;
    }
    const sanitizedModel = model.replace(/\s/g, '');
    const sanitizedSeries = series.replace(/\s/g, '');
    for (const configModelEntry of config_1.config.store.showOnlyModels) {
        const sanitizedConfigModel = configModelEntry.name.replace(/\s/g, '');
        const sanitizedConfigSeries = configModelEntry.series.replace(/\s/g, '');
        if (sanitizedConfigSeries) {
            if (sanitizedSeries === sanitizedConfigSeries &&
                sanitizedModel === sanitizedConfigModel) {
                return true;
            }
        }
        else if (sanitizedModel === sanitizedConfigModel) {
            return true;
        }
    }
    return false;
}
/**
 * Returns true if the series should be checked for stock
 *
 * @param series The series of the GPU
 */
function filterSeries(series) {
    if (config_1.config.store.showOnlySeries.length === 0) {
        return true;
    }
    return config_1.config.store.showOnlySeries.includes(series);
}
exports.filterSeries = filterSeries;
/**
 * Returns true if the link should be checked for stock
 *
 * @param link The store link of the GPU
 */
function filterStoreLink(link) {
    return (filterBrand(link.brand) &&
        filterModel(link.model, link.series) &&
        filterSeries(link.series));
}
exports.filterStoreLink = filterStoreLink;
//# sourceMappingURL=filter.js.map