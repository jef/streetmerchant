# Filter

| Environment variable | Description |
|:---:|---|
| `MAX_PRICE_SERIES_3060` | Maximum price allowed for a match, applies 3060 series cards (does not apply to these sites: Nvidia, Asus, EVGA) |
| `MAX_PRICE_SERIES_3060TI` | Maximum price allowed for a match, applies 3060 Ti series cards (does not apply to these sites: Nvidia, Asus, EVGA) |
| `MAX_PRICE_SERIES_3070` | Maximum price allowed for a match, applies 3070 series cards (does not apply to these sites: Nvidia, Asus, EVGA) |
| `MAX_PRICE_SERIES_3080` | Maximum price allowed for a match, applies 3080 series cards (does not apply to these sites: Nvidia, Asus, EVGA) |
| `MAX_PRICE_SERIES_3080TI` | Maximum price allowed for a match, applies 3080 Ti series cards (does not apply to these sites: Nvidia, Asus, EVGA) |
| `MAX_PRICE_SERIES_3090` | Maximum price allowed for a match, applies 3090 series cards (does not apply to these sites: Nvidia, Asus, EVGA) |
| `MAX_PRICE_SERIES_CORSAIR_SF` | Maximum price allowed for a match, applies to Corsair PSUs |
| `MAX_PRICE_SERIES_DARKHERO` | Maximum price allowed for a match, applies to ASUS Dark Hero motherboards |
| `MAX_PRICE_SERIES_RYZEN5600` | Maximum price allowed for a match, applies AMD 5600 series cpus |
| `MAX_PRICE_SERIES_RYZEN5800` | Maximum price allowed for a match, applies AMD 5800 series cpus |
| `MAX_PRICE_SERIES_RYZEN5900` | Maximum price allowed for a match, applies AMD 5900 series cpus |
| `MAX_PRICE_SERIES_RYZEN5950` | Maximum price allowed for a match, applies AMD 5950 series cpus |
| `MAX_PRICE_SERIES_RX6700XT` | Maximum price allowed for a match, applies AMD RX 6700 XT |
| `MAX_PRICE_SERIES_RX6800` | Maximum price allowed for a match, applies AMD RX 6800 |
| `MAX_PRICE_SERIES_RX6800XT` | Maximum price allowed for a match,applies AMD RX 6800 XT |
| `MAX_PRICE_SERIES_RX6900XT` | Maximum price allowed for a match, applies AMD RX 6900 XT |
| `MAX_PRICE_SERIES_SONYPS5C` | Maximum price allowed for a match, applies PS5 console |
| `MAX_PRICE_SERIES_SONYPS5DE` | Maximum price allowed for a match, applies PS5 digital edition |
| `MAX_PRICE_SERIES_XBOXSS` | Maximum price allowed for a match, applies Xbox Series S |
| `MAX_PRICE_SERIES_XBOXSX` | Maximum price allowed for a match, applies Xbox Series X |
| `MAX_PRICE_SERIES_TEST` | Maximum price allowed for a match, applies `test:series` |
| `MICROCENTER_LOCATION` | Specific MicroCenter location(s) to search. Comma separated, e.g.: `marietta,duluth`, default: `web` |
| `SHOW_ONLY_BRANDS` | Filter to show specified brands. Comma separated, e.g.: `evga,zotac` |
| `SHOW_ONLY_MODELS` | Filter to show specified models. Comma separated, can include series. E.g.: `founders edition:3090,rog strix` |
| `SHOW_ONLY_SERIES` | Filter to show specified series. Comma separated, e.g.: `3080,ryzen5900` |
| `STORES` | [Supported stores](#supported-stores) you want to be scraped. Default: `amazon,bestbuy`. Comma separated, can include `PAGE_SLEEP_MIN` and `PAGE_SLEEP_MAX` values. E.g.: `amazon:10000:30000,bestbuy,newegg:50000:80000`. |

???+ note
    For `MAX_PRICE_SERIES_*` variables: Use whole numbers only (no currency symbol is required). Avoid using any commas or decimal points. Example: `1234`. Merchandise found above this price will be skipped.

## Supported stores

Used with the `STORES` variable.

| Stores | Country | Environment variable |
|---|---|---|
| AComPC | DE | `acompc` |
| Adorama | US | `adorama`|
| Akinformatica | IT | `akinformatica`|
| Allneeds | AU | `allneeds`|
| Alternate | DE | `alternate`|
| Alternate | NL | `alternate-nl`|
| Amazon | US | `amazon`|
| Amazon | CA | `amazon-ca`|
| Amazon | DE | `amazon-de`|
| Amazon Warehouse | DE | `amazon-de-warehouse`|
| Amazon | ES | `amazon-es`|
| Amazon | FR | `amazon-fr`|
| Amazon | IT | `amazon-it`|
| Amazon | NL | `amazon-nl`|
| Amazon | SG | `amazon-sg`|
| Amazon | UK | `amazon-uk`|
| AMD | US | `amd`|
| AMD | AT | `amd-at`|
| AMD | BE | `amd-be`|
| AMD | CA | `amd-ca`|
| AMD | DE | `amd-de`|
| AMD | IT | `amd-it`|
| AMD | NL | `amd-nl`|
| AMD | UK | `amd-uk`|
| AntOnline | US | `antonline`|
| AO | UK | `ao`|
| Argos | UK | `argos`|
| Argos | IE | `argos-ie`|
| Aria PC | UK | `aria`|
| ARLT | DE | `arlt`|
| ASUS | US | `asus` |
| ASUS | DE | `asus-de` |
| AWD-IT | UK | `awd` |
| Azerty | NL | `azerty`|
| B&H | US | `bandh`|
| Best Buy | US | `bestbuy`|
| Best Buy | CA | `bestbuy-ca`|
| Box | UK | `box`|
| BPCTech | AU | `bpctech`|
| BPM-Power | IT | `bpm-power`|
| BT | UK | `bt`|
| CanadaComputers | CA | `canadacomputers` |
| Caseking | DE | `caseking`|
| CCL | UK | `ccl`|
| Centrecom | AU | `centrecom`|
| Comet | IT | `comet`|
| ComputerAlliance | AU | `computeralliance`|
| Computeruniverse | DE | `computeruniverse` |
| Coolblue | NL | `coolblue`|
| Coolmod | ES | `coolmod`|
| Corsair | US | `corsair`|
| Corsair | UK | `corsair-uk`|
| CPL | AU | `cpl`|
| Currys | UK | `currys`|
| Cyberport | DE | `cyberport` |
| Cyberport | AT | `cyberport-at` |
| DComp | AU | `dcomp`|
| Drako | IT | `drako` |
| DustinHome | NO | `dustinhome-no` |
| EBGames | CA | `ebgames`|
| eBuyer | UK | `ebuyer`|
| El Corte Inglés | ES | `elcorteingles`|
| Elkjop | NO | `elkjop`|
| ePrice | IT | `eprice`|
| Equippr | DE | `equippr`|
| Euronics | IT | `euronics`|
| Euronics | DE | `euronics-de`|
| Evatech | AU |  `evatech`|
| EVGA | US | `evga`|
| EVGA | EU | `evga-eu`|
| Expert | DE | `expert`|
| Futurex | DE | `futurex`|
| Galaxus | DE | `galaxus`|
| Game | UK | `game`|
| Gamestop | US | `gamestop`|
| Gamestop | DE | `gamestop-de`|
| Gamestop | IE | `gamestop-ie`|
| Gamestop | IT | `gamestop-it`|
| Globaldata | PT | `globaldata`|
| Hardware Planet | IT | | `hardware-planet` |
| HarrisTechnology | AU |  `harristechnology`|
| Harvey Normans | IE | `harveynorman-ie` |
| iGame Computer | AU |  `igame-computer`|
| John Lewis | UK | `johnlewis`|
| Kabum | BR | `kabum`|
| Komplett | NO | `komplett-no`|
| Landmark Computers | AU |  `landmark-computers`|
| Ldlc | FR |  `ldlc`|
| Mediamarkt | DE | `mediamarkt`|
| Mediamarkt | AT | `mediamarkt-at`|
| Medimax | DE | `medimax`|
| Megekko | NL | `megekko`|
| MemoryExpress | CA | `memoryexpress`|
| Materiel | FR | `materiel` |
| Micro Center | US | `microcenter`|
| MightyApe | NZ | `mightyape`|
| Mindfactory | DE | `mindfactory` |
| MSY | AU |  `msy`|
| Multicom | NO |  `multicom`|
| Mwave | AU | `mwave`|
| Netonnet | NO | `netonnet-no`|
| Newegg | US | `newegg`|
| Newegg | CA | `newegg-ca`|
| Newegg | SG | `newegg-sg`|
| NoelLeeming | NZ | `noelleeming`|
| Notebooksbilliger | DE |`notebooksbilliger`|
| Novatech | UK | `novatech`|
| Novo Atalho | PT | `novoatalho`|
| Nvidia | EU/UK | [See below](#nvidia-store-reference) |
| Office Depot | US | `officedepot`|
| Ollo | IT | `ollo`|
| Otto | DE | `otto`|
| Overclockers | UK | `overclockers`|
| PBTech | AU |  `pbtech`|
| PCByte | AU |  `pcbyte`|
| PCCG | AU | `pccg`|
| PCComponentes | ES | `pccomponentes`|
| PCDiga | PT | `pcdiga`|
| PCKing | DE | `pcking` |
| PlayStation | US | `playstation`|
| PNY | US | `pny`|
| Power | NO | `power-no`|
| Proshop | DE | `proshop-de`|
| Proshop | DK | `proshop-dk`|
| Proshop | NO | `proshop-no`|
| Rosman | AU |  `rosman`|
| Rosman-Melb | AU |  `rosman-melb`|
| Saturn | DE | `saturn`|
| Save On It | AU |  `saveonit`|
| Scan | UK | `scan`|
| Scorptec | AU | `scorptec`|
| ShopTo | UK | `shopto`|
| Smyths Toys | UK | `smythstoys`|
| Smyths Toys | IE | `smythstoys-ie`|
| Spielegrotte | DE | `spielegrotte`|
| Storm Computers | AU |  `storm-computer`|
| Target | US | `target`|
| Tesco | IE | `tesco-ie`|
| TheWarehouse | NZ | `thewarehouse`|
| TopAchat | GR | `topachat`|
| Toys R Us | US | `toysrus` |
| Umart | AU | `umart`|
| Unieuro | IT | `unieuro`|
| Very | UK | `very`|
| Vuugo | CA | `vuugo` |
| Walmart | US | `walmart`|
| Walmart | CA | `walmart-ca`|
| Wells Technology | AU |  `wellstechnology`|
| Wipoid | ES | `wipoid`|
| Zotac | US | `zotac`|

### Micro Center stores

Used with the `MICROCENTER_LOCATION` variable.

???+ note
    Before using `web`, please review [this issue comment](https://github.com/jef/streetmerchant/issues/442#issuecomment-703297393).

| | | | |
|---|---|---|---|
| `brooklyn` | `brentwood` | `cambridge` | `chicago` |
| `columbus` | `dallas` | `denver` | `duluth` |
| `fairfax` | `flushing` | `houston` | `madison-heights` |
| `marietta` | `mayfield-heights` | `north-jersey` | `overland-park` |
| `parkville` | `rockville` | `sharonville` | `st-davids` |
| `st-louis-park` | `tustin` | `westbury` | `westmont` |
| `yonkers` |

## Supported brands and models

Used with the `SHOW_ONLY_BRANDS` and `SHOW_ONLY_MODELS` variables.

| Brand | Model |
|:---:|---|
| `amd` | `5600x`, `5800x`, `5900x`, `5950x`, `amd reference` |
| `asus` | `crosshair viii`, `dual`, `dual oc`, `ekwb`, `strix`, `strix oc`, `strix white`, `tuf`, `tuf oc` |
| `corsair` | `750 platinum`, `600 platinum`, `600 gold` |
| `colorful` | `igame advanced oc`, `igame vulcan oc` |
| `evga` | `ftw3`, `ftw3 black`, `ftw3 ultra`, `ftw3 ultra hybrid`, `ftw3 ultra hydro copper`, `xc3`, `xc black`, `xc gaming`, `xc3 black`, `xc3 ultra`, `xc3 ultra hybrid` |
| `gainward` | `phantom gs`, `phoenix`, `phoenix gs`, `phoenix gs oc`, `ghost` |
| `gigabyte` | `aorus master`, `aorus xtreme`, `aorus xtreme waterforce`, `aorus xtreme waterforce wb`, `eagle`, `eagle oc`, `gaming`, `gaming oc`, `gaming oc pro`, `turbo`, `vision`, `vision oc` |
| `galax` | `sg`, `sg oc` |
| `inno3d` | `gaming x3`, `ichill x3`, `ichill x4`, `ichill frostbite`, `twin x2`, `twin x2 oc` |
| `kfa2` | `sg`, `sg oc` |
| `leadtek` | `hurricane` |
| `microsoft` | `xbox series x`, `xbox series s` |
| `msi` | `gaming x trio`, `suprim`, `suprim x`, `ventus 2x oc`, `ventus 3x`, `ventus 3x oc` |
| `nvidia` | `founders edition` |
| `palit` | `gamerock oc`, `gaming pro`, `gaming pro oc` |
| `pny` | `dual fan`, `xlr8 epic x`, `xlr8 revel`, `xlr8 uprising` |
| `sony` | `ps5 console`, `ps5 digital` |
| `xfx` | `merc`, `amd reference` |
| `zotac` | `amp holo`, `amp extreme holo`, `amp white`, `trinity`, `trinity oc`, `twin edge`, `twin edge oc`, `twin edge oc white` |

## Supported series

Used with the `SHOW_ONLY_SERIES` variable.

| Series | Value |
|:---:|:---:|
| AMD Ryzen 5600x | `ryzen5600` |
| AMD Ryzen 5800x | `ryzen5800` |
| AMD Ryzen 5900x | `ryzen5900` |
| AMD Ryzen 5950x | `ryzen5950` |
| AMD RX 6700XT | `rx6700xt` |
| AMD RX 6800 | `rx6800` |
| AMD RX 6800XT | `rx6800xt` |
| AMD RX 6900XT | `rx6900xt` |
| Nvidia RTX 3060 | `3060` |
| Nvidia RTX 3060 Ti | `3060ti` |
| Nvidia RTX 3070 | `3070` |
| Nvidia RTX 3080 | `3080` |
| Nvidia RTX 3080 Ti | `3080ti` |
| Nvidia RTX 3090 | `3090` |
| Corsair SFX PSU | `sf` |
| Crosshair VIII | `darkhero` |
| Sony PS5 | `sonyps5c` |
| Sony PS5 Digital Edition | `sonyps5de` |
| Xbox Series S | `xboxss` |
| Xbox Series X | `xboxsx` |

## Nvidia Store Reference

???+ note
    Use the Nvidia Store to check stock for Founders Edition cards only (3060 Ti/3070/3080/3080 Ti/3090). For USA use `bestbuy` instead.

???+ info
    Use the `STORE` variable for your chosen country. For example, to check for a FE card in Belgium you would use the `nvidia-fr` store.

| Country | Store | Retailer
|:---:|:---:|:---:|
| Austria | `nvidia-de`| NBB |
| Belgium | `nvidia-fr` | LDLC |
| France | `nvidia-fr` | LDLC |
| Germany | `nvidia-de` | NBB |
| Ireland | `nvidia-gb` | Scan |
| Luxembourg | `nvidia-fr` | LDLC |
| Spain | `nvidia-es` | LDLC |
| United Kingdom | `nvidia-gb` | Scan |
