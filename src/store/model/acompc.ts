import {Store} from './store';

export const AComPC: Store = {
	currency: '€',
	labels: {
		inStock: {
			container: '.filial_stock',
			text: ['lagernd', 'im Zulauf']
		},
		maxPrice: {
			container: '.price',
			euroFormat: true
		},
		outOfStock: [
			{
				container: '.stockStatus',
				text: ['nicht lieferbar']
			}
		]
	},
	links: [
		{
			brand: 'asus',
			model: 'strix',
			series: '3080',
			url:
				'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/ASUS-ROG-STRIX-RTX3080-10G-GAMING-Grafikkarten-GF-RTX-3080-10-GB-GDDR6X-PCIe-4.0-2-x-HDMI-3-x-DisplayPort.html'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3080',
			url:
				'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/ASUS-ROG-STRIX-RTX3080-O10G-GAMING-OC-Edition-Grafikkarten-GF-RTX-3080-10-GB-GDDR6X-PCIe-4.0-2-x-HDMI-3-x-DisplayPort.html'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3080',
			url:
				'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/ASUS-TUF-Gaming-GeForce-RTX-3080-Grafikkarten-GF-RTX-3080-10-GB-GDDR6X-PCIe-4.0-x16-2x-HDMI-3x-DisplayPort.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3080',
			url:
				'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/ASUS-TUF-Gaming-GeForce-RTX-3080-OC-Grafikkarten-GF-RTX-3080-10-GB-GDDR6X-PCIe-4.0-x16-2x-HDMI-3x-DisplayPort.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3080',
			url:
				'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/Gigabyte-AORUS-GeForce-RTX-3080-MASTER-10G-Grafikkarten-GF-RTX-3080-10-GB-GDDR6X-PCIe-4.0-x16-3-x-DisplayPort-3-x-HDMI.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus xtreme',
			series: '3080',
			url:
				'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/Gigabyte-AORUS-GeForce-RTX-3080-XTREME-10G-Grafikkarten-GF-RTX-3080-10-GB-GDDR6X-PCIe-4.0-x16-3-x-DisplayPort-3-x-HDMI.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3080',
			url:
				'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/Gigabyte-GeForce-RTX-3080-Eagle-OC-10G-Grafikkarten-GF-RTX-3080-10-GB-GDDR6X-PCIe-4.0-x16-2x-HDMI-3x-DisplayPort.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle',
			series: '3080',
			url:
				'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/Gigabyte-GeForce-RTX-3080-Eagle-10G-Grafikkarte-10.240-MB.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3080',
			url:
				'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/Gigabyte-GeForce-RTX-3080-GAMING-OC-10G-Grafikkarten-GF-RTX-3080-10-GB-GDDR6X-PCIe-4.0-x16-2x-HDMI-3x-DisplayPort.html'
		},
		{
			brand: 'gigabyte',
			model: 'vision oc',
			series: '3080',
			url:
				'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/Gigabyte-GeForce-RTX-3080-Vision-OC-10G-Grafikkarten-GF-RTX-3080-10GB-GDDR6X-PCIe-4.0-x16-2x-HDMI-3x-DP-weiss.html'
		},
		{
			brand: 'inno3d',
			model: 'twin x2 oc',
			series: '3080',
			url:
				'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/Inno3D-GeForce-RTX-3080-Twin-X2-OC-Grafikkarten-GF-RTX-3080-10-GB-GDDR6-PCIe-4.0-x16-HDMI-3x-DisplayPort.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3080',
			url:
				'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/MSI-GeForce-RTX-3080-Gaming-X-Trio-10G-Grafikkarten-GF-RTX-3080-10-GB-GDDR6X-HDMI-3x-DisplayPort.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3080',
			url:
				'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/MSI-GeForce-RTX-3080-Ventus-3X-10G-OC-Grafikkarten-GF-RTX-3080-10-GB-GDDR6X-PCIe-4.0-x16-HDMI-3x-DisplayPort.html'
		},
		{
			brand: 'zotac',
			model: 'amp holo',
			series: '3080',
			url:
				'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/ZOTAC-GAMING-GeForce-RTX-3080-AMP-Holo-Grafikkarten-GF-RTX-3080-10-GB-GDDR6X-PCIe-4.0-HDMI-3-x-DisplayPort.html'
		},
		{
			brand: 'zotac',
			model: 'trinity oc',
			series: '3080',
			url:
				'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/ZOTAC-GAMING-GeForce-RTX-3080-Trinity-OC-Grafikkarten-GF-RTX-3080-10-GB-GDDR6X-PCIe-4.0-HDMI-3-x-DisplayPort.html'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3080',
			url:
				'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/ZOTAC-GAMING-GeForce-RTX-3080-Trinity-Grafikkarten-GF-RTX-3080-10-GB-GDDR6X-PCIe-4.0-HDMI-3x-DisplayPort.html'
		},
		{
			brand: 'asus',
			model: 'strix',
			series: '3090',
			url:
				'https://www.acom-pc.de/Peripherie-Zubehoer/noch-nicht-kategorisierte-Artikel/ASUS-ROG-Strix-GeForce-RTX-3090-ROG-STRIX-RTX3090-24G-GAMING-24GB-GDDR6X-2x-HDMI-3x-DP-90YV0F90-M0NM00-.html'
		},
		{
			brand: 'asus',
			model: 'strix oc',
			series: '3090',
			url:
				'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/ASUS-ROG-STRIX-RTX3090-O24G-GAMING-OC-Edition-Grafikkarten-GF-RTX-3090-24-GB-GDDR6X-PCIe-4.0-2-x-HDMI-3-x-DisplayPort.html'
		},
		{
			brand: 'asus',
			model: 'tuf',
			series: '3090',
			url:
				'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/ASUS-TUF-Gaming-GeForce-RTX-3090-Grafikkarten-GF-RTX-3090-24-GB-GDDR6X-PCIe-4.0-x16-2x-HDMI-3x-DisplayPort.html'
		},
		{
			brand: 'asus',
			model: 'tuf oc',
			series: '3090',
			url:
				'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/ASUS-TUF-Gaming-GeForce-RTX-3090-OC-Grafikkarten-GF-RTX-3090-24-GB-GDDR6X-PCIe-4.0-x16-2x-HDMI-3x-DisplayPort.html'
		},
		{
			brand: 'gigabyte',
			model: 'aorus master',
			series: '3090',
			url:
				'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/Gigabyte-Aorus-GeForce-RTX-3090-Master-24G-Grafikkarten-GF-RTX-3090-24-GB-GDDR6X-PCIe-4.0-x16-HDMI-3x-DisplayPort.html'
		},
		{
			brand: 'gigabyte',
			model: 'eagle oc',
			series: '3090',
			url:
				'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/Gigabyte-GeForce-RTX-3090-Eagle-OC-24G-Grafikkarten-GF-RTX-3090-24-GB-GDDR6X-PCIe-4.0-x16-2x-HDMI-3x-DisplayPort.html'
		},
		{
			brand: 'gigabyte',
			model: 'gaming oc',
			series: '3090',
			url:
				'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/Gigabyte-GeForce-RTX-3090-Gaming-OC-24G-Grafikkarten-GF-RTX-3090-24-GB-GDDR6X-PCIe-4.0-x16-2x-HDMI-3x-DisplayPort.html'
		},
		{
			brand: 'msi',
			model: 'gaming x trio',
			series: '3090',
			url:
				'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/MSI-RTX-3090-GAMING-X-TRIO-Grafikkarten-GF-RTX-3090-24-GB-GDDR6X-PCIe-4.0-x16-HDMI-3x-DisplayPort.html'
		},
		{
			brand: 'msi',
			model: 'ventus 3x oc',
			series: '3090',
			url:
				'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/MSI-GeForce-RTX-3090-Ventus-3X-24G-OC-Grafikkarten-GF-RTX-3090-24-GB-GDDR6X-PCIe-4.0-x16-HDMI-3x-DisplayPort.html'
		},
		{
			brand: 'zotac',
			model: 'trinity',
			series: '3090',
			url:
				'https://www.acom-pc.de/Hardware-Software/Grafikkarten-Zubehoer/Grafikkarten-NVIDIA-PCI-Express/ZOTAC-GAMING-GeForce-RTX-3090-Trinity-Grafikkarten-GF-RTX-3090-24-GB-GDDR6X-PCIe-4.0-HDMI-3x-DisplayPort.html'
		},
		{
			brand: 'amd',
			model: '5600x',
			series: 'ryzen5600',
			url:
				'https://www.acom-pc.de/Hardware-Software/CPU-Prozessor-/-CPU-Kuehler-Zubehoer/AMD-CPU/AMD-CPU-Socket-AM4/AMD-RYZEN-5-5600X-4.60GHZ-6-CORE-SKT-AM4-35MB-65W-PIB.html'
		},
		{
			brand: 'amd',
			model: '5800x',
			series: 'ryzen5800',
			url:
				'https://www.acom-pc.de/Hardware-Software/CPU-Prozessor-/-CPU-Kuehler-Zubehoer/AMD-CPU/AMD-CPU-Socket-AM4/AMD-RYZEN-7-5800X-4.70GHZ-8-CORE-SKT-AM4-36MB-105W-WOF.html'
		},
		{
			brand: 'amd',
			model: '5900x',
			series: 'ryzen5900',
			url:
				'https://www.acom-pc.de/Hardware-Software/CPU-Prozessor-/-CPU-Kuehler-Zubehoer/AMD-CPU/AMD-CPU-Socket-AM4/AMD-Ryzen-9-5900X-AMD-Ryzen-9-Socket-AM4-PC-7nm-AMD-3-7-GHz-AM4.html'
		},
		{
			brand: 'amd',
			model: '5950x',
			series: 'ryzen5950',
			url:
				'https://www.acom-pc.de/Hardware-Software/CPU-Prozessor-/-CPU-Kuehler-Zubehoer/AMD-CPU/AMD-CPU-Socket-AM4/AMD-RYZEN-9-5950X-4.90GHZ-16-CORE-SKT-AM4-72MB-105W-WOF.html'
		}
	],
	name: 'acompc'
};
