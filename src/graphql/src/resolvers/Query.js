const feeds = () => {
	const feedEntry = {
		productName: 'Ryzen 9 5900X',
		productSlug: 'ryzen5900',
		status: 'IN STOCK',
		url: 'https://www.amd.com/en/direct-buy/5450881500/us?add-to-cart=true'
	};

	return [{feedEntry}];
};

module.exports = {feeds};
