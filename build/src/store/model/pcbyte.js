"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PCByte = void 0;
exports.PCByte = {
    backoffStatusCodes: [403, 429],
    currency: '$',
    labels: {
        inStock: {
            container: '.in-stock-label',
            text: ['in stock'],
        },
        maxPrice: {
            container: 'div.price-line.d-flex.mb-3 > div:nth-child(1) > span > span',
            euroFormat: false,
        },
        outOfStock: {
            container: 'a.btn:nth-child(3)',
            text: ['Pre Order', 'Pre-Order'],
        },
    },
    links: [
        {
            brand: 'asus',
            model: 'tuf',
            series: '3080',
            url: 'https://www.pcbyte.com.au/store/product/asus-nvidia-geforce-rtx-3080-tuf-gaming-10gb-video-card-tuf-rtx3080-10g-gaming-56837?search=rtx+3080',
        },
        {
            brand: 'asus',
            model: 'tuf oc',
            series: '3080',
            url: 'https://www.pcbyte.com.au/store/product/asus-nvidia-geforce-rtx-3080-tuf-gaming-oc-10gb-video-card-tuf-rtx3080-o10g-gaming-56838',
        },
        {
            brand: 'asus',
            model: 'strix oc',
            series: '3080',
            url: 'https://www.pcbyte.com.au/store/product/asus-nvidia-geforce-rtx-3080-rog-strix-oc-10gb-video-card-rog-strix-rtx3080-o10g-gaming-57717',
        },
        {
            brand: 'asus',
            model: 'strix oc white',
            series: '3080',
            url: 'https://www.pcbyte.com.au/store/product/asus-nvidia-geforce-rtx-3080-rog-strix-oc-10gb-video-card-white-rog-strix-rtx3080-o10g-white-151575',
        },
        {
            brand: 'galax',
            model: 'sg oc',
            series: '3080',
            url: 'https://www.pcbyte.com.au/store/product/galax-nvidia-geforce-rtx-3080-sg-1-click-oc-video-card-38nwm3md99nn-57223',
        },
        {
            brand: 'gigabyte',
            model: 'eagle',
            series: '3080',
            url: 'https://www.pcbyte.com.au/store/product/gigabyte-nvidia-geforce-rtx-3080-eagle-10g-video-card-gv-n3080eagle-10gd-63192',
        },
        {
            brand: 'gigabyte',
            model: 'eagle oc',
            series: '3080',
            url: 'https://www.pcbyte.com.au/store/product/gigabyte-nvidia-geforce-rtx-3080-eagle-oc-10gb-video-card-gv-n3080eagle-oc-10gd-24750',
        },
        {
            brand: 'gigabyte',
            model: 'vision oc',
            series: '3080',
            url: 'https://www.pcbyte.com.au/store/product/gigabyte-nvidia-geforce-rtx-3080-vision-oc-10g-video-card-gv-n3080vision-oc-10gd-57540',
        },
        {
            brand: 'gigabyte',
            model: 'gaming oc',
            series: '3080',
            url: 'https://www.pcbyte.com.au/store/product/gigabyte-nvidia-geforce-rtx-3080-gaming-oc-10gb-video-card-gv-n3080gaming-oc-10gd-53154',
        },
        {
            brand: 'gigabyte',
            model: 'aorus master',
            series: '3080',
            url: 'https://www.pcbyte.com.au/store/product/gigabyte-nvidia-geforce-rtx-3080-aorus-master-10g-video-card-gv-n3080aorus-m-10gd-57539',
        },
        {
            brand: 'gigabyte',
            model: 'aorus xtreme',
            series: '3080',
            url: 'https://www.pcbyte.com.au/store/product/gigabyte-nvidia-geforce-rtx-3080-aorus-xtreme-10gb-video-card-gv-n3080aorus-x-10gd-60222',
        },
        {
            brand: 'msi',
            model: 'ventus 3x oc',
            series: '3080',
            url: 'https://www.pcbyte.com.au/store/product/msi-nvidia-geforce-rtx-3080-ventus-3x-10g-oc-video-card-53151',
        },
        {
            brand: 'msi',
            model: 'gaming x trio',
            series: '3080',
            url: 'https://www.pcbyte.com.au/store/product/msi-nvidia-geforce-rtx-3080-gaming-x-trio-10g-video-card-53150',
        },
        {
            brand: 'msi',
            model: 'suprim x',
            series: '3080',
            url: 'https://www.pcbyte.com.au/store/product/msi-nvidia-geforce-rtx-3080-suprim-x-10g-video-card-64075',
        },
        {
            brand: 'asrock',
            model: 'taichi',
            series: 'rx6800xt',
            url: 'https://www.pcbyte.com.au/store/product/asrock-amd-radeon-rx-6800-xt-taichi-x-16g-oc-video-card-rx6800xt-tcx-16go-78693',
        },
        {
            brand: 'asrock',
            model: 'phantom gaming',
            series: 'rx6800xt',
            url: 'https://www.pcbyte.com.au/store/product/asrock-amd-radeon-rx-6800-xt-phantom-gaming-d-16g-oc-video-card-rx6800xt-pgd-16go-78692',
        },
        {
            brand: 'asus',
            model: 'tuf oc',
            series: 'rx6800',
            url: 'https://www.pcbyte.com.au/store/product/asus-amd-radeon-rx-6800-tuf-gaming-oc-16gb-video-card-tuf-rx6800-o16g-gaming-171072',
        },
        {
            brand: 'asus',
            model: 'strix oc',
            series: 'rx6800',
            url: 'https://www.pcbyte.com.au/store/product/asus-amd-radeon-rx-6800-rog-strix-oc-16gb-video-card-rog-strix-rx6800-o16g-gaming-171073',
        },
        {
            brand: 'gigabyte',
            model: 'gaming oc',
            series: 'rx6800',
            url: 'https://www.pcbyte.com.au/store/product/gigabyte-amd-radeon-rx-6800-gaming-oc-16gb-video-card-gv-r68gaming-oc-16gd-78455',
        },
        {
            brand: 'gigabyte',
            model: 'gaming oc',
            series: 'rx6800xt',
            url: 'https://www.pcbyte.com.au/store/product/gigabyte-amd-radeon-rx-6800-xt-gaming-oc-16gb-video-card-gv-r68xtgaming-oc-16gd-78453',
        },
        {
            brand: 'gigabyte',
            model: 'aorus master',
            series: 'rx6800xt',
            url: 'https://www.pcbyte.com.au/store/product/gigabyte-amd-radeon-rx-6800-xt-aorus-master-16g-video-card-gv-r68xtaorus-m-16gd-151405',
        },
        {
            brand: 'gigabyte',
            model: 'aorus master type-c',
            series: 'rx6800xt',
            url: 'https://www.pcbyte.com.au/store/product/gigabyte-amd-radeon-rx-6800-xt-aorus-master-type-c-16g-video-card-gv-r68xtaorus-m-16gc-151404',
        },
        {
            brand: 'msi',
            model: 'gaming x trio',
            series: 'rx6800',
            url: 'https://www.pcbyte.com.au/store/product/msi-amd-radeon-rx-6800-gaming-x-trio-16g-video-card-151402',
        },
        {
            brand: 'msi',
            model: 'gaming x trio',
            series: 'rx6800xt',
            url: 'https://www.pcbyte.com.au/store/product/msi-amd-radeon-rx-6800-xt-gaming-x-trio-16gb-video-card-152871',
        },
        {
            brand: 'sapphire',
            model: 'nitro+',
            series: 'rx6800',
            url: 'https://www.pcbyte.com.au/store/product/sapphire-amd-radeon-rx-6800-nitro-16gb-video-card-11305-01-20g-152047',
        },
        {
            brand: 'sapphire',
            model: 'nitro+ se',
            series: 'rx6800xt',
            url: 'https://www.pcbyte.com.au/store/product/sapphire-amd-radeon-rx-6800-xt-nitro-se-16gb-video-card-11304-01-20g-185859',
        },
        {
            brand: 'gigabyte',
            model: 'gaming oc',
            series: 'rx6900xt',
            url: 'https://www.pcbyte.com.au/store/product/gigabyte-amd-radeon-rx-6900-xt-gaming-oc-16g-video-card-gv-r69xtgaming-oc-16gd-205734',
        },
        {
            brand: 'sapphire',
            model: 'nitro+',
            series: 'rx6900xt',
            url: 'https://www.pcbyte.com.au/store/product/sapphire-amd-radeon-rx-6900-xt-nitro-16gb-video-card-11308-01-20g-185858',
        },
        {
            brand: 'amd',
            model: '5950x',
            series: 'ryzen5950',
            url: 'https://www.pcbyte.com.au/store/product/amd-ryzen-9-5950x-16-core-32-threads-3-4-4-9ghz-am4-cpu-processor-100-100000059wof-61095?search=5950x',
        },
        {
            brand: 'amd',
            model: '5900x',
            series: 'ryzen5900',
            url: 'https://www.pcbyte.com.au/store/product/amd-ryzen-9-5900x-12-core-24-threads-3-7-4-8ghz-am4-cpu-processor-100-100000061wof-61096?search=5900x',
        },
        {
            brand: 'amd',
            model: '5800x',
            series: 'ryzen5800',
            url: 'https://www.pcbyte.com.au/store/product/amd-ryzen-7-5800x-8-core-16-threads-3-8-4-7ghz-am4-cpu-processor-100-100000063wof-61098?search=5800x',
        },
        {
            brand: 'amd',
            model: '5600x',
            series: 'ryzen5600',
            url: 'https://www.pcbyte.com.au/store/product/amd-ryzen-5-5600x-6-core-12-threads-3-7-4-6ghz-am4-cpu-processor-100-100000065box-61099',
        },
    ],
    name: 'pcbyte',
};
//# sourceMappingURL=pcbyte.js.map