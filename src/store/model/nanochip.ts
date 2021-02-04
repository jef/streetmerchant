import { Store } from './store';

export const NanoChip: Store = {
    currency: '€',
    labels: {
        inStock: {
            container: 'span.green',
            text: ['EM STOCK'],
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
            url: 'https://www.nanochip.pt/pt-pt/produto/gigabyte-geforce-rtx-3080-eagle-oc-10gb-ddr6-gigabytegvn3080eag',
        },
        {
            brand: 'asus',
            model: 'strix',
            series: '3080',
            url: 'https://www.nanochip.pt/pt-pt/produto/asus-geforce-rtx-3080-rog-strix-10gb-asusrtx3080ro10g',
        },
        {
            brand: 'asus',
            model: 'strix oc',
            series: '3080',
            url: 'https://www.nanochip.pt/pt-pt/produto/asus-geforce-rtx-3080-rog-strix-oc-10gb-asusrtx3080rooc10g',
        },
        {
            brand: 'msi',
            model: 'amd reference',
            series: 'rx6800xt',
            url: 'https://www.nanochip.pt/pt-pt/produto/msi-radeon-rx-6800-xt-16gb-gddr6-msirx6800v803896r',
        },
        {
            brand: 'msi',
            model: 'gaming x trio',
            series: 'rx6800xt',
            url: 'https://www.nanochip.pt/pt-pt/produto/msi-radeon-rx-6800-xt-gaming-x-trio-16g-msir680v395001r',
        },
        {
            brand: 'asus',
            model: 'dual',
            series: '3060ti',
            url: 'https://www.nanochip.pt/pt-pt/produto/asus-geforce-rtx3060-ti-dual-8gb-ddr6-pci-e-30-asusdualrtx3060ti',
        },
        {
            brand: 'asus',
            model: 'tuf',
            series: '3060ti',
            url: 'https://www.nanochip.pt/pt-pt/produto/asus-geforce-rtx3060-ti-tuf-gaming-8gb-gddr6-asusrtx3060titf8gb',
        },
        {
            brand: 'asus',
            model: 'strix',
            series: '3060ti',
            url: 'https://www.nanochip.pt/pt-pt/produto/asus-geforce-rtx3060-ti-rog-strix-gaming-8gb-gddr6-asusrtx3060tstrix8',
        },
        {
            brand: 'asus',
            model: 'strix oc',
            series: '3060ti',
            url: 'https://www.nanochip.pt/pt-pt/produto/asus-geforce-rtx3060-ti-rog-strix-oc-gaming-8gb-gddr6-asusrtx3060tstrixo',
        },
        {
            brand: 'msi',
            model: 'ventus 3x oc',
            series: '3060ti',
            url: 'https://www.nanochip.pt/pt-pt/produto/msi-geforce-rtx3060-ti-ventus-3x-8gb-oc-gddr6-msirtx3060tiven3x8',
        },
        {
            brand: 'asus',
            model: 'dual oc',
            series: '3060ti',
            url: 'https://www.nanochip.pt/pt-pt/produto/asus-geforce-rtx3060-ti-dual-oc-8gb-ddr6-pci-e-30-asusdualortx3060ti',
        },
        {
            brand: 'asus',
            model: 'tuf oc',
            series: '3060ti',
            url: 'https://www.nanochip.pt/pt-pt/produto/asus-geforce-rtx3060-ti-tuf-gaming-oc-8gb-gddr6-asusrtx3060titfoc8',
        },
        {
            brand: 'msi',
            model: 'gaming x trio',
            series: '3060ti',
            url: 'https://www.nanochip.pt/pt-pt/produto/msi-geforce-rtx3060-ti-gaming-x-trio-8gb-gddr6-msirtx3060tigamxt8',
        },
        {
            brand: 'msi',
            model: 'ventus 2x oc',
            series: '3060ti',
            url: 'https://www.nanochip.pt/pt-pt/produto/msi-geforce-rtx3060-ti-ventus-2x-8gb-oc-gddr6-msirtx3060tiven2x8',
        },
    ],
    name: 'nanochip',
};