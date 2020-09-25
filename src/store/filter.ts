import {Config} from '../config';
import {Link} from './model';

/**
 * Returns true if the brand should be checked for stock
 *
 * @param brand The brand of the GPU
 */
function filterBrand(brand: Link['brand']): boolean {
	if (Config.store.showOnlyBrands.length === 0) {
		return true;
	}

	return Config.store.showOnlyBrands.includes(brand);
}

/**
 * Returns true if the model should be checked for stock
 *
 * @param model The model of the GPU
 */
function filterModel(model: Link['model']): boolean {
	if (Config.store.showOnlyModels.length === 0) {
		return true;
	}

	const sanitizedModel = model.replace(/\s/g, '');
	for (const configModel of Config.store.showOnlyModels) {
		const sanitizedConfigModel = configModel.replace(/\s/g, '');
		if (sanitizedModel === sanitizedConfigModel) {
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
	if (Config.store.showOnlySeries.length === 0) {
		return true;
	}

	return Config.store.showOnlySeries.includes(series);
}

/**
 * Returns true if the link should be checked for stock
 *
 * @param link The store link of the GPU
 */
export function filterStoreLink(link: Link): boolean {
	return (
		filterBrand(link.brand) &&
		filterModel(link.model) &&
		filterSeries(link.series)
	);
}
