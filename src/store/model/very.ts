import {Link, Store} from './store';
import {logger} from '../../logger';
import {parseCard} from './helpers/card';

export const Very: Store = {
	labels: {
		inStock: {
			container: '.stockMessaging .indicator',
			text: ['available', 'low stock']
		},
		outOfStock: {
			container: '.stockMessaging .indicator',
			text: ['pre-order']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'CARD',
			series: 'test:series',
			url: 'https://www.very.co.uk/msi-geforce-rtx-2060-super-ventus-gp-oc/1600463772.prd'
		}
	],
	linksBuilder: {
		builder: (docElement, series) => {
			const productElements = docElement.find('.productList .product');
			const links: Link[] = [];
			for (let i = 0; i < productElements.length; i++) {
				const productElement = productElements.eq(i);
				const titleElement = productElement.find('.productTitle').first();
				const title = titleElement.text()?.replace(/\n/g, ' ').trim();

				if (!title || ['RTX', series]
					.map(x => title.toLowerCase().includes(x.toLowerCase()))
					.filter(x => !x).length > 0
				) {
					continue;
				}

				const url = titleElement.attr()?.href;

				if (!url) {
					continue;
				}

				const card = parseCard(title);

				if (card) {
					links.push({
						brand: card.brand as any,
						model: card.model,
						series,
						url
					});
				} else {
					logger.error(`Failed to parse card: ${title}`);
				}
			}

			return links;
		},
		ttl: 300000,
		urls: [
			{
				series: '3070',
				url: 'https://www.very.co.uk/electricals/pc-components/graphics-cards/e/b/118786.end?sort=newin,0&numProducts=100'
			},
			{
				series: '3080',
				url: 'https://www.very.co.uk/electricals/pc-components/graphics-cards/e/b/118786.end?sort=newin,0&numProducts=100'
			},
			{
				series: '3090',
				url: 'https://www.very.co.uk/electricals/pc-components/graphics-cards/e/b/118786.end?sort=newin,0&numProducts=100'
			}
		]
	},
	name: 'very'
};
