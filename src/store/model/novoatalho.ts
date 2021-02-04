import { Store } from './store';

export const NovoAtalho: Store = {
    currency: '€',
    labels: {
        inStock: {
            container: 'span.stock',
            text: ['Poucas Unidades', 'Disponível'],
        },
        maxPrice: {
            container: 'span.product-price',
            euroFormat: true,
        },
        outOfStock: {
            container: 'span.stock',
            text: ['Indisponível'],
        },
    },
    links: [
        {
            brand: 'amd',
            model: '5900x',
            series: 'ryzen5900',
            url:
                'https://www.novoatalho.pt/pt-PT/produto/45060/Processador-AMD-Ryzen-9-5900X-3-7Ghz-12-Core-SktAM4/100-100000061WOF.html',
        },
        {
            brand: 'amd',
            model: 'amd reference',
            series: 'rx6800xt',
            url:
                'https://www.novoatalho.pt/pt-PT/produto/46279/Placa-Grafica-MSI-Radeon-RX-6800-XT-GAMING-X-TRIO-16GB/912-V395-001.html',
        },
    ],
    name: 'novoatalho',
};