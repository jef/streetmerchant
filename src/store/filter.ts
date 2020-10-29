import {Link} from './model';
import {config} from '../config';

/**
 * Returns true if the brand should be checked for stock
 *
 * @param brand The brand of the GPU
 */
function filterBrand(brand: Link['brand']): boolean {
	if (config.store.showOnlyBrands.length === 0) {
		return true;
	}

	return config.store.showOnlyBrands.includes(brand);
}

/**
 * Returns true if the model should be checked for stock
 *
 * @param model The model of the GPU
 * @param series The series of the GPU
 */
function filterModel(model: Link['model'], series: Link['series']): boolean {
	if (config.store.showOnlyModels.length === 0) {
		return true;
	}

	const sanitizedModel = model.replace(/\s/g, '');
	const sanitizedSeries = series.replace(/\s/g, '');
	for (const configModelEntry of config.store.showOnlyModels) {
		const sanitizedConfigModel = configModelEntry.name.replace(/\s/g, '');
		const sanitizedConfigSeries = configModelEntry.series.replace(/\s/g, '');
		if (sanitizedConfigSeries ?
			sanitizedSeries === sanitizedConfigSeries && sanitizedModel === sanitizedConfigModel :
			sanitizedModel === sanitizedConfigModel
		) {
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
export function filterSeries(series: Link['series']): boolean {
	if (config.store.showOnlySeries.length === 0) {
		return true;
	}

	return config.store.showOnlySeries.includes(series);
}

/**
 * Returns true if the link should be checked for stock
 *
 * @param link The store link of the GPU
 */
export function filterStoreLink(link: Link): boolean {
	return (
		filterBrand(link.brand) &&
		filterModel(link.model, link.series) &&
		filterSeries(link.series)
	);
}
