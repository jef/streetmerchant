import {Link, Store} from './store';
import {logger} from '../../logger';
import {parseCard} from './helpers/card';

export const AmazonUk: Store = {
	backoffStatusCodes: [403, 429, 503],
	currency: '£',
	labels: {
		captcha: {
			container: 'body',
			text: ['enter the characters you see below']
		},
		inStock: {
			container: '#availability',
			text: ['in stock']
		},
		maxPrice: {
			container: '#priceblock_ourprice'
		},
		outOfStock: [
			{
				container: '#availability',
				text: ['out of stock', 'unavailable']
			},
			{
				container: '#backInStock',
				text: ['unavailable']
			}
		]
	},
	links: [
		{
			brand: 'test:brand',
			cartUrl:
				'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B0753R2TWC&Quantity.1=1',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.amazon.co.uk/dp/B0753R2TWC/'
		},
		{
			brand: 'sony',
			cartUrl:
				'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08H95Y452&Quantity.1=1',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.amazon.co.uk/dp/B08H95Y452'
		},
		{
			brand: 'sony',
			cartUrl:
				'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08H97NYGP&Quantity.1=1',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url: 'https://www.amazon.co.uk/dp/B08H97NYGP'
		},
		{
			brand: 'microsoft',
			cartUrl:
				'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08H93GKNJ&Quantity.1=1',
			model: 'xbox series x',
			series: 'xboxsx',
			url: 'https://www.amazon.co.uk/dp/B08H93GKNJ'
		},
		{
			brand: 'microsoft',
			cartUrl:
				'https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=B08GD9MNZB&Quantity.1=1',
			model: 'xbox series s',
			series: 'xboxss',
			url: 'https://www.amazon.co.uk/dp/B08GD9MNZB'
		}
	],
	linksBuilder: {
		builder: (docElement, series) => {
			const productElements = docElement.find(
				'.s-result-list .s-result-item[data-asin]'
			);
			const links: Link[] = [];
			for (let i = 0; i < productElements.length; i++) {
				const productElement = productElements.eq(i);
				const asin = productElement.attr()['data-asin'];

				if (!asin) {
					continue;
				}

				const url = `https://www.amazon.co.uk/dp/${asin}/`;
				const titleElement = productElement
					.find('.sg-col-inner h2 a.a-text-normal[href] span')
					.first();
				const title = titleElement.text().trim();

				if (!title || !new RegExp(`RTX.*${series}`, 'i').exec(title)) {
					continue;
				}

				const card = parseCard(title);

				if (card) {
					links.push({
						brand: card.brand as any,
						cartUrl: `https://www.amazon.co.uk/gp/aws/cart/add.html?ASIN.1=${asin}&Quantity.1=1`,
						model: card.model,
						series,
						url
					});
				} else {
					logger.error(`Failed to parse card: ${title}`, {url});
				}
			}

			return links;
		},
		ttl: 300000,
		urls: [
			{
				series: '3060ti',
				url:
					'https://www.amazon.co.uk/s?k=%2B%22RTX+3060+TI%22+-2060+-2070+-2080+-SUPER+-GTX&i=computers&rh=n%3A430500031%2Cp_n_availability%3A419162031&s=relevancerank&dc&qid=1601675291sb_noss'
			},
			{
				series: '3070',
				url:
					'https://www.amazon.co.uk/s?k=%2B%22RTX+3070%22+-2060+-2070+-2080+-SUPER+-GTX+-3080&rh=n%3A430500031&ref=nb_sb_noss'
			},
			{
				series: '3080',
				url: [
					'https://www.amazon.co.uk/s?k=%2B%22RTX+3080%22+-2080+-GTX&i=computers&rh=n%3A430500031%2Cp_n_availability%3A419162031&s=relevancerank&dc&qid=1601675291',
					'https://www.amazon.co.uk/s?k=%2B%22RTX+3080%22+-2080+-GTX&i=computers&rh=n%3A430500031%2Cp_n_availability%3A419162031&s=relevancerank&dc&qid=1601675594&page=2'
				]
			},
			{
				series: '3090',
				url: [
					'https://www.amazon.co.uk/s?k=%2B%22RTX+3090%22+-3080+-GTX&i=computers&rh=n%3A430500031%2Cp_n_availability%3A419162031&s=relevancerank&dc&qid=1601675291',
					'https://www.amazon.co.uk/s?k=%2B%22RTX+3090%22+-3080+-GTX&i=computers&rh=n%3A430500031%2Cp_n_availability%3A419162031&s=relevancerank&dc&qid=1601675594&page=2'
				]
			}
		]
	},
	name: 'amazon-uk'
};
