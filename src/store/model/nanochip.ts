import { Store } from './store';

export const NanoChip: Store = {
    currency: '€',
    labels: {
        inStock: {
            container: 'span.input-group-btn.buy_btn',
            text: ['Comprar'],
        },
        maxPrice: {
            container: '#price_two',
            euroFormat: true,
        },
        outOfStock: {
            container: 'span.red',
            text: ['ESGOTADO'],
        },
    },
    links: [
        {
            brand: 'gigabyte',
            model: 'eagle oc',
            series: '3080',
            url:
                'https://www.nanochip.pt/pt-pt/produto/gigabyte-geforce-rtx-3080-eagle-oc-10gb-ddr6-gigabytegvn3080eag',
        },
        {
            brand: 'asus',
            model: 'strix',
            series: '3080',
            url:
                'https://www.nanochip.pt/pt-pt/produto/asus-geforce-rtx-3080-rog-strix-10gb-asusrtx3080ro10g',
        },
        {
            brand: 'asus',
            model: 'strix oc',
            series: '3080',
            url:
                'https://www.nanochip.pt/pt-pt/produto/asus-geforce-rtx-3080-rog-strix-oc-10gb-asusrtx3080rooc10g',
        },
        {
            brand: 'msi',
            model: 'amd reference',
            series: 'rx6800xt',
            url:
                'https://www.nanochip.pt/pt-pt/produto/msi-radeon-rx-6800-xt-16gb-gddr6-msirx6800v803896r',
        },
        {
            brand: 'msi',
            model: 'gaming x trio',
            series: 'rx6800xt',
            url:
                'https://www.nanochip.pt/pt-pt/produto/msi-radeon-rx-6800-xt-gaming-x-trio-16g-msir680v395001r',
        },
    ],
    name: 'nanochip',
};