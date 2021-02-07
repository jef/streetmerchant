import { Store } from './store';

export const Chip7: Store = {
    currency: '€',
    labels: {
        inStock: {
            container: 'div[class="chip7-disponibilidade disponivel"]',
            text: [' Dísponivel'],
        },
        maxPrice: {
            container: '.our_price_display',
            euroFormat: true,
        },
        outOfStock: {
            container: 'div[class="chip7-disponibilidade esgotado"',
            text: [' Esgotado'],
          },
    },
    links: [
        {
            brand: 'amd',
            model: '5900x',
            series: 'ryzen5900',
            url: 'https://www.chip7.pt/desktop/91157-amd-ryzen-9-5900x-processador-37-ghz-64-mb-l3-0730143312738.html',
        },
        {
            brand: 'amd',
            model: '5600x',
            series: 'ryzen5600',
            url: 'https://www.chip7.pt/desktop/92423-amd-ryzen-5-5600x-processador-37-ghz-32-mb-l3-caixa-0730143312042.html',
        },
        {
            brand: 'gigabyte',
            model: 'eagle',
            series: '3060ti',
            url: 'https://www.chip7.pt/nvidia/90155-gigabyte-geforce-rtx-3060-ti-eagle-8g-nvidia-8-gb-gddr6-4719331307776.html',
        },
        {
            brand: 'gigabyte',
            model: 'gaming oc',
            series: '3060ti',
            url: 'https://www.chip7.pt/nvidia/90125-gigabyte-geforce-rtx-3060-ti-gaming-oc-8g-nvidia-8-gb-gddr6-4719331307752.html',
        },
        {
            brand: 'kfa2',
            model: '1-click',
            series: '3060ti',
            url: 'https://www.chip7.pt/nvidia/90770-placa-grafica-kfa2-rtx-3060-ti-1-click-oc-8gb-gddr6-36ISL6MD1VDK.html',
        },
        {
            brand: 'gigabyte',
            model: 'aorus master',
            series: '3060ti',
            url: 'https://www.chip7.pt/nvidia/90124-gigabyte-aorus-geforce-rtx-3060-ti-master-8g-nvidia-8-gb-gddr6-4719331307967.html',
        },
        {
            brand: 'asus',
            model: 'dual',
            series: '3060ti',
            url: 'https://www.chip7.pt/placas-graficas/91755-asus-dual-rtx3060ti-8g-nvidia-geforce-rtx-3060-ti-8-gb-gddr6-4718017962995.html',
        },
        {
            brand: 'asus',
            model: 'strix oc',
            series: '3060ti',
            url: 'https://www.chip7.pt/placas-graficas/91753-asus-rog-strix-rtx3060ti-o8g-gaming-nvidia-geforce-rtx-3060-ti-8-gb-gddr6-4718017953085.html',
        },
        {
            brand: 'asus',
            model: 'strix',
            series: '3060ti',
            url: 'https://www.chip7.pt/placas-graficas/91752-asus-rog-strix-rtx3060ti-8g-gaming-nvidia-geforce-rtx-3060-ti-8-gb-gddr6-4718017952880.html',
        },
        {
            brand: 'asus',
            model: 'strix',
            series: '3080',
            url: 'https://www.chip7.pt/nvidia/91932-asus-rog-strix-rtx3080-10g-gaming-nvidia-geforce-rtx-3080-10-gb-gddr6x-4718017909150.html',
        },
        {
            brand: 'asus',
            model: 'strix oc white',
            series: '3080',
            url: 'https://www.chip7.pt/nvidia/91931-asus-rog-strix-rtx3080-o10g-white-nvidia-geforce-rtx-3080-10-gb-gddr6x-4711081002925.html',
        },
        {
            brand: 'gigabyte',
            model: 'eagle oc',
            series: '3080',
            url: 'https://www.chip7.pt/nvidia/88698-gigabyte-gv-n3080eagle-oc-10gd-placa-de-video-nvidia-geforce-rtx-3080-10-gb-gddr6x-4719331307554.html',
        },
        {
            brand: 'gigabyte',
            model: 'gaming oc',
            series: '3080',
            url: 'https://www.chip7.pt/nvidia/87705-placa-grafica-gigabyte-nvidia-rtx-3080-gaming-oc-10gb-gddr6x-gvn3080go-00.html',
        },
        {
            brand: 'msi',
            model: 'gaming x trio',
            series: 'rx6800xt',
            url: 'https://www.chip7.pt/ati/92493-msi-radeon-rx-6800-xt-gaming-x-trio-16g-amd-16-gb-gddr6-4719072780746.html',
        },
    ],
    name: 'chip7',
};