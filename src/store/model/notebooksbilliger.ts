import {Store} from './store';

export const Notebooksbilliger: Store = {
	labels: {
		inStock: {
			container: '.warehouse',
			text: ['sofort ab lager', 'verfügbarkeit: ca. 2-4 werktage', 'verfügbarkeit: ca. 5-10 werktage']
		},
		maxPrice: {
			container: 'form[name="cart_quantity"]  span[class*="product-price__regular"]',
			euroFormat: true
		},
		outOfStock: [{
			container: '.warehouse',
			text: ['liefertermin noch unbestimmt']
		},
		{
			container: '.soldOut',
			text: ['dieses produkt ist leider ausverkauft.']
		},
		{
			container: '#product_error_text',
			text: ['leider ist dieser artikel nicht mehr verfügbar.']
		}]
	},
	links: [
		{
			brand: 'test:brand',
			model: 'test:model',
			series: 'test:series',
			url: 'https://www.notebooksbilliger.de/gainward+geforce+rtx+2070+super+phoenix+v1+grafikkarte+656238'
		},
		{
			brand: 'gainward',
			model: 'phoenix gs',
			series: '3080',
			url: 'https://www.notebooksbilliger.de/gainward+geforce+rtx+3080+phoenix+gs+10gb+gddr6x+grafikkarte+677618'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url: 'https://www.notebooksbilliger.de/gigabyte+geforce+rtx+3080+eagle+oc+10gb+gddr6x+grafikkarte+677501'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url: 'https://www.notebooksbilliger.de/gigabyte+geforce+rtx+3080+gaming+oc+10gb+gddr6x+grafikkarte+677499'
		},
		{
			brand: 'inno3d',
			model: 'ichill x3',
			series: '3080',
			url: 'https://www.notebooksbilliger.de/inno3d+geforce+rtx+3080+ichill+x3+grafikkarte+678588'
		},
		{
			brand: 'inno3d',
			model: 'twin x2 oc',
			series: '3080',
			url: 'https://www.notebooksbilliger.de/inno3d+geforce+rtx+3080+twin+x2+oc+grafikkarte+679190'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url: 'https://www.notebooksbilliger.de/msi+geforce+rtx+3080+gaming+x+trio+10g+grafikkarte+678527'
		},
		{
			brand: 'nvidia',
			model: 'founders edition',
			series: '3080',
			url: 'https://www.notebooksbilliger.de/nvidia+geforce+rtx+3080+founders+edition+683301'
		},
		{
			brand: 'palit',
			model: 'gaming pro',
			series: '3080',
			url: 'https://www.notebooksbilliger.de/palit+geforce+rtx+3080+gamingpro+10gb+gddr6x+grafikkarte+677609'
		},
		{
			brand: 'palit',
			model: 'gaming pro oc',
			series: '3080',
			url: 'https://www.notebooksbilliger.de/palit+geforce+rtx+3080+gamingpro+oc+10gb+gddr6x+grafikkarte+677606'
		},
		{
			brand: 'pny',
			model: 'xlr8 rgb',
			series: '3080',
			url: 'https://www.notebooksbilliger.de/pny+geforce+rtx+3080+xlr8+gaming+10gb+gddr6x+grafikkarte+677407'
		},
		{
			brand: 'pny',
			model: 'xlr8 rgb',
			series: '3080',
			url: 'https://www.notebooksbilliger.de/pny+geforce+rtx+3080+10gb+xlr8+gaming+revel+epic+x+grafikkarte+677412'
		},
		{
			brand: 'asus',
			model: 'rog strix',
			series: '3090',
			url: 'https://www.notebooksbilliger.de/asus+rog+strix+geforce+rtx+3090+24gb+gddr6x+grafikkarte+677343'
		},
		{
			brand: 'asus',
			model: 'rog strix oc',
			series: '3090',
			url: 'https://www.notebooksbilliger.de/asus+rog+strix+geforce+rtx+3090+oc+24gb+gddr6x+grafikkarte+677308'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3090',
			url: 'https://www.notebooksbilliger.de/gigabyte+geforce+rtx+3090+master+24gb+gddr6x+grafikkarte+683868'
		},
		{
			brand: 'nvidia',
			model: 'founders edition',
			series: '3090',
			url: 'https://www.notebooksbilliger.de/nvidia+geforce+rtx+3090+founders+edition+683300'
		},
		{
			brand: 'palit',
			model: 'gaming pro oc',
			series: '3090',
			url: 'https://www.notebooksbilliger.de/palit+geforce+rtx+3090+gamingpro+oc+24gb+gddr6x+grafikkarte+677599'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3090',
			url: 'https://www.notebooksbilliger.de/zotac+gaming+geforce+rtx+3090+trinity+24gb+gddr6x+grafikkarte+677550'
		}
	],
	name: 'notebooksbilliger'
};
