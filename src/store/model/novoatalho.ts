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
            brand: 'msi',
            model: 'amd reference',
            series: 'rx6800xt',
            url:
                'https://www.novoatalho.pt/pt-PT/produto/46279/Placa-Grafica-MSI-Radeon-RX-6800-XT-GAMING-X-TRIO-16GB/912-V395-001.html',
        },
        {
            brand: 'asus',
            model: 'strix oc',
            series: '3080',
            url:
                'https://www.novoatalho.pt/pt-PT/produto/44399/Placa-Grafica-Asus-GeForce-RTX-3080-ROG-STRIX-OC-10GB/90YV0FA1-M0NM00.html',
        },
        {
            brand: 'asus',
            model: 'tuf',
            series: '3080',
            url:
                'https://www.novoatalho.pt/pt-PT/produto/44312/Placa-Grafica-Asus-GeForce-RTX-3080-TUF-GAMING-10GB/90YV0FB0-M0NM00.html',
        },
        {
            brand: 'asus',
            model: 'tuf oc',
            series: '3080',
            url:
                'https://www.novoatalho.pt/pt-PT/produto/44313/Placa-Grafica-Asus-GeForce-RTX-3080-TUF-GAMING-OC-10GB/90YV0FB1-M0NM00.html',
        },
        {
            brand: 'gigabyte',
            model: 'aorus master',
            series: '3080',
            url:
                'https://www.novoatalho.pt/pt-PT/produto/46733/Placa-Grafica-Gigabyte-GeForce-RTX-3080-AORUS-MASTER-10GB-Re/GV-N3080AORUS%20M-10GD%202.0.html',
        },
        {
            brand: 'gigabyte',
            model: 'gaming oc',
            series: '3080',
            url:
                'https://www.novoatalho.pt/pt-PT/produto/45863/Placa-Grafica-Gigabyte-GeForce-RTX-3080-Gaming-OC-10GB/GVN3080GO-00-G.html',
        },
        {
            brand: 'msi',
            model: 'gaming x trio',
            series: '3080',
            url:
                'https://www.novoatalho.pt/pt-PT/produto/44314/Placa-Grafica-MSI-GeForce-RTX-3080-GAMING-X-TRIO-10GB/912-V389-005.html',
        },
        {
            brand: 'msi',
            model: 'ventus 3x oc',
            series: '3080',
            url:
                'https://www.novoatalho.pt/pt-PT/produto/44315/Placa-Grafica-MSI-GeForce-RTX-3080-VENTUS-3X-OC-10GB/912-V389-001.html',
        },
        {
            brand: 'asus',
            model: 'strix oc',
            series: '3060',
            url:
                'https://www.novoatalho.pt/pt-PT/produto/46701/Placa-Grafica-Asus-GeForce-RTX-3060-ROG-STRIX-OC-12GB/90YV0GC2-M0NA00.html',
        },
        {
            brand: 'asus',
            model: 'dual oc',
            series: '3060ti',
            url:
                'https://www.novoatalho.pt/pt-PT/produto/46052/Placa-Grafica-Asus-GeForce-RTX-3060-Ti-DUAL-OC-8GB/90YV0G12-M0NA00.html',
        },
        {
            brand: 'gigabyte',
            model: 'gaming oc',
            series: '3060ti',
            url:
                'https://www.novoatalho.pt/pt-PT/produto/46071/Placa-Grafica-Gigabyte-GeForce-RTX-3060-Ti-Gaming-OC-8GB/GVN306TGO-00-10.html',
        },
    ],
    name: 'novoatalho',
};