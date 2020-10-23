import {Link, Store} from './store';
import {logger} from '../../logger';
import {parseCard} from './helpers/card';

export const Very: Store = {
	labels: {
		inStock: {
			container: '.stockMessaging .indicator',
			text: ['available', 'low stock']
		},
		maxPrice: {
			container: '.priceNow',
			euroFormat: false // Note: Very uses non-euroFromat as price seperator
		},
		outOfStock: {
			container: '.stockMessaging .indicator',
			text: ['pre-order']
		}
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.very.co.uk/msi-geforce-gtx-1660-ti-gaming-x-6g-graphics-card/1600350984.prd'
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
