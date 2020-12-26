# Filter

| Environment variable | Description |
|:---:|---|
| `COUNTRY` | [Supported country](#supported-countries) you want to be scraped | Only used with `nvidia-api`, default: `usa` |
| `MAX_PRICE_SERIES_3060TI` | Maximum price allowed for a match, applies 3060 Ti series cards (does not apply to these sites: Nvidia, Asus, EVGA) |
| `MAX_PRICE_SERIES_3070` | Maximum price allowed for a match, applies 3070 series cards (does not apply to these sites: Nvidia, Asus, EVGA) |
| `MAX_PRICE_SERIES_3080` | Maximum price allowed for a match, applies 3080 series cards (does not apply to these sites: Nvidia, Asus, EVGA) |
| `MAX_PRICE_SERIES_3090` | Maximum price allowed for a match, applies 3090 series cards (does not apply to these sites: Nvidia, Asus, EVGA) |
| `MAX_PRICE_SERIES_CORSAIR_SF` | Maximum price allowed for a match, applies to Corsair PSUs |
| `MAX_PRICE_SERIES_DARKHERO` | Maximum price allowed for a match, applies to ASUS Dark Hero motherboards |
| `MAX_PRICE_SERIES_RYZEN5600` | Maximum price allowed for a match, applies AMD 5600 series cpus |
| `MAX_PRICE_SERIES_RYZEN5800` | Maximum price allowed for a match, applies AMD 5800 series cpus |
| `MAX_PRICE_SERIES_RYZEN5900` | Maximum price allowed for a match, applies AMD 5900 series cpus |
| `MAX_PRICE_SERIES_RYZEN5950` | Maximum price allowed for a match, applies AMD 5950 series cpus |
| `MAX_PRICE_SERIES_RX6800` | Maximum price allowed for a match, applies AMD RX 6800 |
| `MAX_PRICE_SERIES_RX6800XT` | Maximum price allowed for a match,applies AMD RX 6800 XT |
| `MAX_PRICE_SERIES_RX6900XT` | Maximum price allowed for a match, applies AMD RX 6900 XT |
| `MAX_PRICE_SERIES_SONYPS5C` | Maximum price allowed for a match, applies PS5 console |
| `MAX_PRICE_SERIES_SONYPS5DE` | Maximum price allowed for a match, applies PS5 digital edition |
| `MAX_PRICE_SERIES_XBOXSS` | Maximum price allowed for a match, applies PS5 digital edition |
| `MAX_PRICE_SERIES_XBOXSX` | Maximum price allowed for a match, applies PS5 digital edition |
| `MAX_PRICE_SERIES_TEST` | Maximum price allowed for a match, applies `test:series` |
| `MICROCENTER_LOCATION` | Specific MicroCenter location(s) to search. Comma separated, e.g.: `marietta,duluth`, default: `web` |
| `NVIDIA_ADD_TO_CART_ATTEMPTS` | The maximum number of times the `nvidia-api` add to cart feature will be attempted before failing. Default: `10` |
| `NVIDIA_SESSION_TTL` | The time in milliseconds to keep the cart active while using `nvidia-api`. Default: `60000` |
| `SHOW_ONLY_BRANDS` | Filter to show specified brands. Comma separated, e.g.: `evga,zotac` |
| `SHOW_ONLY_MODELS` | Filter to show specified models. Comma separated, can include series. E.g.: `founders edition:3090,rog strix` |
| `SHOW_ONLY_SERIES` | Filter to show specified series. Comma separated, e.g.: `3080,ryzen5900` |
| `STORES` | [Supported stores](#supported-stores) you want to be scraped. Default: `amazon,bestbuy`. Comma separated, can include `PAGE_SLEEP_MIN` and `PAGE_SLEEP_MAX` values. E.g.: `amazon:10000:30000,bestbuy,newegg:50000:80000`. |

???+ note
    For `MAX_PRICE_SERIES_*` variables: enter a price (enter whole dollar amounts only, avoid use of: dollar symbols, commas, and periods). E.g.: `1234`. Merchandise found above this price will be skipped.

## Supported stores

Used with the `STORES` variable.

| Stores | Country | Environment variable |
|---|---|---|
| AComPC | DE | `acompc` |
| Adorama | US | `adorama`|
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
| Amazon | UK | `amazon-uk`|
| AMD | US | `amd`|
| AMD | CA | `amd-ca`|
| AMD | DE | `amd-de`|
| AMD | IT | `amd-it`|
| AMD | UK | `amd-uk`|
| AntOnline | US | `antonline`|
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
| CanadaComputers | CA | `canadacomputers` |
| Caseking | DE | `caseking`|
| CCL | UK | `ccl`|
| Centrecom | AU | `centrecom`|
| Comet | IT | `comet`|
| Computeruniverse | DE | `computeruniverse` |
| Coolblue | NL | `coolblue`|
| Coolmod | ES | `coolmod`|
| Corsair | US | `corsair`|
| CPL | AU | `cpl`|
| Currys | UK | `currys`|
| Cyberport | DE | `cyberport` |
| EBGames | CA | `ebgames`|
| eBuyer | UK | `ebuyer`|
| El Corte Inglés | ES | `elcorteingles`|
| ePrice | IT | `eprice`|
| Euronics | IT | `euronics`|
| Euronics | DE | `euronics-de`|
| Equippr | DE | `equippr`|
| EVGA | US | `evga`|
| EVGA | EU | `evga-eu`|
| Expert | DE | `expert`|
| Futurex | DE | `futurex`|
| Galaxus | DE | `galaxus`|
| Game | UK | `game`|
| Gamestop | US | `gamestop`|
| Gamestop | DE | `gamestop-de`|
| Gamestop | IE | `gamestop-ie`|
| Harvey Normans | IE | | `harveynorman-ie` |
| John Lewis | UK | `johnlewis`|
| Kabum | BR | `kabum`|
| Mediamarkt | DE | `mediamarkt`|
| Medimax | DE | `medimax`|
| Megekko | NL | `megekko`|
| MemoryExpress | CA | `memoryexpress`|
| Micro Center | US | `microcenter`|
| Mindfactory | DE | `mindfactory` |
| Mwave | AU | `mwave`|
| Newegg | US | `newegg`|
| Newegg | CA | `newegg-ca`|
| Notebooksbilliger | DE |`notebooksbilliger`|
| Novatech | UK | `novatech`|
| Nvidia | US | `nvidia`|
| Nvidia API | | `nvidia-api`|
| Office Depot | US | `officedepot`|
| Otto | DE | `otto`|
| Overclockers | UK | `overclockers`|
| PCCG | AU | `pccg`|
| PCComponentes | ES | `pccomponentes`|
| PCKing | DE | `pcking` |
| PlayStation | US | `playstation`|
| PNY | US | `pny`|
| Proshop | DE | `proshop-de`|
| Proshop | DK | `proshop-dk`|
| Saturn | DE | `saturn`|
| Scan | UK | `scan`|
| Scorptec | AU | `scorptec`|
| ShopTo | UK | `shopto`|
| Smyths Toys | UK | `smythstoys`|
| Smyths Toys | IE | `smythstoys-ie`|
| Spielegrotte | DE | `spielegrotte`|
| Target | US | `target`|
| Tesco | IE | `tesco-ie`|
| Toys R Us | US | `toysrus` |
| Umart | AU | `umart`|
| Unieuro | IT | `unieuro`|
| Very | UK | `very`|
| Walmart | US | `walmart`|
| Walmart | CA | `walmart-ca`|
| Wipoid | ES | `wipoid`|
| Zotac | US | `zotac`|
| TopAchat | GR | `topachat`|

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
| `asus` | `crosshair viii`, `dual`, `dual oc`, `strix`, `strix oc`, `tuf`, `tuf oc` |
| `corsair` | `750 platinum`, `600 platinum` |
| `colorful` | `igame advanced oc`, `igame vulcan oc` |
| `evga` | `ftw3`, `ftw3 ultra`, `ftw3 ultra hydro copper`, `xc3`, `xc3 black`, `xc3 ultra` |
| `gainward` | `phantom gs`, `phoenix`, `phoenix gs`, `phoenix gs oc` |
| `gigabyte` | `aorus master`, `aorus xtreme`, `aorus xtreme waterforce`, `aorus xtreme waterforce wb`, `eagle`, `eagle oc`, `gaming`, `gaming oc`, `turbo`, `vision`, `vision oc` |
| `galax` | `sg`, `sg oc` |
| `inno3d` | `gaming x3`, `ichill x3`, `ichill x4`, `ichill frostbite`, `twin x2 oc` |
| `kfa2` | `sg`, `sg oc` |
| `leadtek` | `hurricane` |
| `microsoft` | `xbox series x`, `xbox series s` |
| `msi` | `gaming x trio`, `suprim x`, `ventus 2x oc`, `ventus 3x`, `ventus 3x oc` |
| `nvidia` | `founders edition` |
| `palit` | `gamerock oc`, `gaming pro`, `gaming pro oc` |
| `pny` | `dual fan`, `xlr8 revel`, `xlr8 uprising` |
| `sony` | `ps5 console`, `ps5 digital` |
| `xfx` | `merc`, `amd reference` |
| `zotac` | `amp holo`, `amp extreme holo`, `trinity`, `trinity oc`, `twin edge`, `twin edge oc` |

## Supported series

Used with the `SHOW_ONLY_SERIES` variable.

| Series | Value |
|:---:|:---:|
| AMD Ryzen 5600x | `ryzen5600` |
| AMD Ryzen 5800x | `ryzen5800` |
| AMD Ryzen 5900x | `ryzen5900` |
| AMD Ryzen 5950x | `ryzen5950` |
| AMD RX 6800 | `rx6800` |
| AMD RX 6800XT | `rx6800xt` |
| AMD RX 6900XT | `rx6900xt` |
| Nvidia RTX 3060 Ti | `3060ti` |
| Nvidia RTX 3070 | `3070` |
| Nvidia RTX 3080 | `3080` |
| Nvidia RTX 3090 | `3090` |
| Corsair SFX PSU | `sf` |
| Crosshair VIII | `darkhero` |
| Sony PS5 | `sonyps5c` |
| Sony PS5 Digital Edition | `sonyps5de` |
| Xbox Series S | `xboxss` |
| Xbox Series X | `xboxsx` |

## Supported countries

Used with the `COUNTRY` variable.

???+ attention
    Used _only_ with `nvidia` and `nvidia-api`.

| Country | 3080 FE | 3090 FE | Test Card | Notes |
|:---:|:---:|:---:|:---:|:---:|
| `austria` | `✔` | `✔` | `✔` | |
| `belgium` | `✔` | `✔` | `✔` | |
| `canada` | `✔` | `✔` | `✔` | |
| `czechia` | `✔` | `✔` | `✔` | |
| `denmark` | `✔` | | `✔` | Missing RTX 3090 |
| `finland` | `✔` | | `✔` | Missing RTX 3090 |
| `france` | `✔` | `✔` | `✔` | |
| `germany` | `✔` | `✔` | `✔` | |
| `great_britain` | `✔` | `✔` | `✔` | |
| `ireland` | `✔` | `✔` | `✔` | |
| `italy` | `✔` | `✔` | `✔` | |
| `luxembourg` | `✔` | `✔` | `✔` | |
| `netherlands` | `✔` | `✔` | `✔` | |
| `norway` | `✔` | `✔` | `✔` | |
| `poland` | `✔` | `✔` | `✔` | |
| `portugal` | `✔` | | | RTX 3080 only |
| `spain` | `✔` | `✔` | `✔` | |
| `sweden` | `✔` | `✔` | `✔` | |
| `usa` | `✔` | `✔` | `✔` | |

