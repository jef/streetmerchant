# Filter

| Environment variable | Description |
|:---:|---|
| `MAX_PRICE_SERIES_3050` | Maximum price allowed for a match, applies 3050 series cards (does not apply to these sites: Nvidia, Asus, EVGA) |
| `MAX_PRICE_SERIES_3060` | Maximum price allowed for a match, applies 3060 series cards (does not apply to these sites: Nvidia, Asus, EVGA) |
| `MAX_PRICE_SERIES_3060TI` | Maximum price allowed for a match, applies 3060 Ti series cards (does not apply to these sites: Nvidia, Asus, EVGA) |
| `MAX_PRICE_SERIES_3070` | Maximum price allowed for a match, applies 3070 series cards (does not apply to these sites: Nvidia, Asus, EVGA) |
| `MAX_PRICE_SERIES_3080` | Maximum price allowed for a match, applies 3080 series cards (does not apply to these sites: Nvidia, Asus, EVGA) |
| `MAX_PRICE_SERIES_3080TI` | Maximum price allowed for a match, applies 3080 Ti series cards (does not apply to these sites: Nvidia, Asus, EVGA) |
| `MAX_PRICE_SERIES_3090` | Maximum price allowed for a match, applies 3090 series cards (does not apply to these sites: Nvidia, Asus, EVGA) |
| `MAX_PRICE_SERIES_4080_16G` | Maximum price allowed for a match, applies 4080 16G series cards (does not apply to these sites: Nvidia, Asus, EVGA) |
| `MAX_PRICE_SERIES_4090` | Maximum price allowed for a match, applies 4090 series cards (does not apply to these sites: Nvidia, Asus, EVGA) |
| `MAX_PRICE_SERIES_5070` | Maximum price allowed for a match, applies 5070 series cards (does not apply to these sites: Nvidia, Asus, EVGA) |
| `MAX_PRICE_SERIES_5070TI` | Maximum price allowed for a match, applies 5070 Ti series cards (does not apply to these sites: Nvidia, Asus, EVGA) |
| `MAX_PRICE_SERIES_5080` | Maximum price allowed for a match, applies 5080 series cards (does not apply to these sites: Nvidia, Asus, EVGA) |
| `MAX_PRICE_SERIES_5090` | Maximum price allowed for a match, applies 5080 series cards (does not apply to these sites: Nvidia, Asus, EVGA) |
| `MAX_PRICE_SERIES_A3_MATX` | Maximum price allowed for a match, applies to Lian Li A3-mATX Mini Tower Case |
| `MAX_PRICE_SERIES_ARC` | Maximum price allowed for a match, applies to Intel Arc B580 |
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
| `MAX_PRICE_SERIES_RX9070` | Maximum price allowed for a match, applies AMD RX 9070|
| `MAX_PRICE_SERIES_RX9070XT` | Maximum price allowed for a match, applies AMD RX 9070 XT |
| `MAX_PRICE_SERIES_RYZEN7800X3D` | Maximum price allowed for a match, applies AMD 7800X3D |
| `MAX_PRICE_SERIES_RYZEN7950X` | Maximum price allowed for a match, applies to AMD Ryzen 9 7950X CPU |
| `MAX_PRICE_SERIES_RYZEN9800X3D` | Maximum price allowed for a match, applies AMD 9800X3D |
| `MAX_PRICE_SERIES_RYZEN9600X` | Maximum price allowed for a match, applies AMD RX 9600X |
| `MAX_PRICE_SERIES_RYZEN9700X` | Maximum price allowed for a match, applies AMD RX 9700X |
| `MAX_PRICE_SERIES_RYZEN9900X` | Maximum price allowed for a match, applies AMD RX 9900X |
| `MAX_PRICE_SERIES_RYZEN9950X` | Maximum price allowed for a match, applies AMD RX 9950X |
| `MAX_PRICE_SERIES_SONYPS5C` | Maximum price allowed for a match, applies PS5 console |
| `MAX_PRICE_SERIES_SONYPS5DE` | Maximum price allowed for a match, applies PS5 digital edition |
| `MAX_PRICE_SERIES_SWITCH2` | Maximum price allowed for a match, applies to Nintendo Switch 2 |
| `MAX_PRICE_SERIES_XBOXSS` | Maximum price allowed for a match, applies Xbox Series S |
| `MAX_PRICE_SERIES_XBOXSX` | Maximum price allowed for a match, applies Xbox Series X |
| `MAX_PRICE_SERIES_TEST` | Maximum price allowed for a match, applies `test:series` |
| `MICROCENTER_LOCATION` | Specific MicroCenter location(s) to search. Comma separated, e.g.: `marietta,duluth`, default: `web` |
| `SHOW_ONLY_BRANDS` | Filter to show specified brands. Comma separated, e.g.: `evga,zotac` |
| `SHOW_ONLY_MODELS` | Filter to show specified models. Comma separated, can include series. E.g.: `founders edition:3090,rog strix` |
| `SHOW_ONLY_SERIES` | Filter to show specified series. Comma separated, e.g.: `3080,ryzen5900` |
| `STORES` | [Supported stores](#supported-stores) you want to be scraped. Default: `amazon,bestbuy`. Comma separated, can include `PAGE_SLEEP_MIN` and `PAGE_SLEEP_MAX` values. E.g.: `amazon:10000:30000,bestbuy,newegg:50000:80000`. |
| `SHOW_ONLY_COUNTRY` | <INCOMPLETE IMPLEMENTATION> Filter to show specific country stores. Comma separated, e.g.: `US,CA` |

???+ note
    For `MAX_PRICE_SERIES_*` variables: Use whole numbers only (no currency symbol is required). Avoid using any commas or decimal points. Example: `1234`. Merchandise found above this price will be skipped.

## Supported stores

Used with the `STORES` variable.

| Stores | Country | Environment variable |
|---|---|---|
| AComPC | DE | `acompc` |
| Adorama | US | `adorama` |
| Akinformatica | IT | `akinformatica` |
| Allneeds | AU | `allneeds` |
| Alternate | DE | `alternate-de` |
| Alternate | FR | `alternate-fr` |
| Alternate | NL | `alternate-nl` |
| Amazon | US | `amazon` |
| Amazon | CA | `amazon-ca` |
| Amazon | DE | `amazon-de` |
| Amazon Warehouse | DE | `amazon-de-warehouse` |
| Amazon | ES | `amazon-es` |
| Amazon | FR | `amazon-fr` |
| Amazon | IT | `amazon-it` |
| Amazon | NL | `amazon-nl` |
| Amazon | SG | `amazon-sg` |
| Amazon | UK | `amazon-uk` |
| AMD | US | `amd` |
| AMD | AT | `amd-at` |
| AMD | BE | `amd-be` |
| AMD | CA | `amd-ca` |
| AMD | DE | `amd-de` |
| AMD | IT | `amd-it` |
| AMD | NL | `amd-nl` |
| AMD | UK | `amd-uk` |
| AntOnline | US | `antonline` |
| AO | UK | `ao` |
| Argos | UK | `argos` |
| Argos | IE | `argos-ie` |
| Aria PC | UK | `aria` |
| ARLT | DE | `arlt` |
| ASUS | US | `asus` |
| ASUS | DE | `asus-de` |
| ASUS | ES | `asus-es` |
| AWD-IT | UK | `awd` |
| Azerty | NL | `azerty` |
| B&H | US | `bandh` |
| Best Buy | US | `bestbuy` |
| Best Buy | CA | `bestbuy-ca` |
| Box | UK | `box` |
| BPCTech | AU | `bpctech` |
| BPM-Power | IT | `bpm-power` |
| BT | UK | `bt` |
| CanadaComputers | CA | `canadacomputers` |
| Caseking | DE | `caseking` |
| CCL | UK | `ccl` |
| Centrecom | AU | `centrecom` |
| Comet | IT | `comet` |
| ComputerAlliance | AU | `computeralliance` |
| Computeruniverse | DE | `computeruniverse` |
| Coolblue | NL | `coolblue` |
| Coolmod | ES | `coolmod` |
| Corsair | US | `corsair` |
| Corsair | UK | `corsair-uk` |
| CPL | AU | `cpl` |
| Currys | UK | `currys` |
| Cyberport | DE | `cyberport` |
| Cyberport | AT | `cyberport-at` |
| DComp | AU | `dcomp` |
| Drako | IT | `drako` |
| DustinHome | NO | `dustinhome-no` |
| eBuyer | UK | `ebuyer` |
| El Corte Inglés | ES | `elcorteingles` |
| Eletronicamente | ES | `eletronicamente` |
| Elkjop | NO | `elkjop` |
| ePrice | IT | `eprice` |
| Equippr | DE | `equippr` |
| Euronics | IT | `euronics` |
| Euronics | DE | `euronics-de` |
| Evatech | AU |  `evatech` |
| EVGA | US | `evga` |
| EVGA | EU | `evga-eu` |
| Expert | DE | `expert` |
| Extremmedia | ES | `extremmedia` |
| Futurex | DE | `futurex` |
| Galaxus | DE | `galaxus` |
| Game | ES | `game-es` |
| Game | UK | `game` |
| Gamestop | US | `gamestop` |
| Gamestop | CA | `gamestop-ca` |
| Gamestop | DE | `gamestop-de` |
| Gamestop | IE | `gamestop-ie` |
| Gamestop | IT | `gamestop-it` |
| Globaldata | PT | `globaldata` |
| Hardware Planet | IT | | `hardware-planet` |
| HarrisTechnology | AU |  `harristechnology` |
| Harvey Normans | IE | `harveynorman-ie` |
| iGame Computer | AU |  `igame-computer` |
| John Lewis | UK | `johnlewis` |
| Kabum | BR | `kabum` |
| Komplett | NO | `komplett-no` |
| Landmark Computers | AU |  `landmark-computers` |
| Ldlc | FR |  `ldlc` |
| Ldlc | ES |  `ldlc-es` |
| Ldlc | IT |  `ldlc-it` |
| Mediamarkt | DE | `mediamarkt` |
| Mediamarkt | AT | `mediamarkt-at` |
| Medimax | DE | `medimax` |
| Megekko | NL | `megekko` |
| MemoryExpress | CA | `memoryexpress` |
| Materiel | FR | `materiel` |
| Micro Center | US | `microcenter` |
| Microsoft | US | `microsoft` |
| Microsoft | CA | `microsoft-ca` |
| MightyApe | NZ | `mightyape` |
| Mindfactory | DE | `mindfactory` |
| MSI | US | `msi` |
| MSY | AU |  `msy` |
| Multicom | NO |  `multicom` |
| Mwave | AU | `mwave` |
| Neobyte | ES | `neobyte` |
| Netonnet | NO | `netonnet-no` |
| Newegg | US | `newegg` |
| Newegg | CA | `newegg-ca` |
| Newegg | SG | `newegg-sg` |
| NoelLeeming | NZ | `noelleeming` |
| Notebooksbilliger | DE |`notebooksbilliger` |
| Novatech | UK | `novatech` |
| Novo Atalho | PT | `novoatalho` |
| Nvidia | EU/UK | [See below](#nvidia-store-reference) |
| Office Depot | US | `officedepot` |
| Ollo | IT | `ollo` |
| Opirata | ES | `opirata` |
| Otto | DE | `otto` |
| Overclockers | UK | `overclockers` |
| PBTech | AU |  `pbtech` |
| PCByte | AU |  `pcbyte` |
| PCCG | AU | `pccg` |
| PCComponentes | ES | `pccomponentes` |
| PCDiga | PT | `pcdiga` |
| PCKing | DE | `pcking` |
| PlayStation | US | `playstation` |
| PNY | US | `pny` |
| Power | NO | `power-no` |
| Proshop | DE | `proshop-de` |
| Proshop | DK | `proshop-dk` |
| Proshop | NO | `proshop-no` |
| Rosman | AU |  `rosman` |
| Rosman-Melb | AU |  `rosman-melb` |
| Saturn | DE | `saturn` |
| Save On It | AU |  `saveonit` |
| Scan | UK | `scan` |
| Scorptec | AU | `scorptec` |
| ShopTo | UK | `shopto` |
| Siabyte | ES | `siabyte` |
| Smyths Toys | UK | `smythstoys` |
| Smyths Toys | IE | `smythstoys-ie` |
| Spielegrotte | DE | `spielegrotte` |
| Storm Computers | AU |  `storm-computer` |
| Target | US | `target` |
| Tesco | IE | `tesco-ie` |
| TheWarehouse | NZ | `thewarehouse` |
| TopAchat | GR | `topachat` |
| Toys R Us | US | `toysrus` |
| Ultimainformatica | ES | `ultimainformatica` |
| Umart | AU | `umart` |
| Unieuro | IT | `unieuro` |
| Very | UK | `very` |
| Versus Gamers | ES | `vsgamers` |
| Vuugo | CA | `vuugo` |
| Walmart | US | `walmart` |
| Walmart | CA | `walmart-ca` |
| Wells Technology | AU |  `wellstechnology` |
| Wipoid | ES | `wipoid` |
| Xbox | US | `xbox` |
| Xtremmedia | ES | `xtremmedia` |
| Zotac | US | `zotac` |

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
| `amd` | `5600x`, `5800x`, `5900x`, `5950x`, `7800x3d`, `7950x`, `9600x`, `9700x`, `9800x3d`, `9900x`, `9950x`, `amd reference`, `tuf oc` |
| `asrock` | `amd reference`, `challenger`, `challenger oc`, `challenger pro`, `challenger pro oc`, `phantom gaming`, `phantom gaming oc`, `taichi`, `taichi x oc` |
| `asus` | `amd reference`, `astral`, `astral lc`, `astral oc`, `crosshair viii`, `dual`, `dual fan`, `dual mini`, `dual mini oc`, `dual oc`, `ekwb`, `gaming`, `gaming oc`, `ko`, `ko oc`, `phoenix 8G (LHR)`, `prime`, `prime oc`, `strix`, `strix lc`, `strix oc`, `strix oc lc`, `strix oc white`, `strix white`, `suprim x`, `tuf`, `tuf gaming`, `tuf gaming oc`, `tuf oc`, `turbo` |
| `ax` | `x3w` |
| `colorful` | `battle-ax`, `igame advanced`, `igame advanced oc`, `igame ultra oc`, `igame vulcan oc` |
| `corsair` | `600 gold`, `600 platinum`, `750 platinum` |
| `evga` | `ftw3`, `ftw3 black`, `ftw3 ultra`, `ftw3 ultra hybrid`, `ftw3 ultra hydro copper`, `gaming`, `ichill x3`, `kngpn hybrid`, `xc black`, `xc gaming`, `xc3`, `xc3 black`, `xc3 ultra`, `xc3 ultra hybrid` |
| `gainward` | `ghost`, `ghost oc`, `pegasus`, `pegasus oc`, `phantom`, `phantom gaming`, `phantom gs`, `phoenix`, `phoenix gs`, `phoenix gs oc` |
| `galax` | `sg oc` |
| `gigabyte` | `aero oc`, `aero oc sff`, `amd reference`, `aorus`, `aorus box`, `aorus elite`, `aorus master`, `aorus master 24g`, `aorus master type-c`, `aorus w`, `aorus x wb`, `aorus xtreme`, `aorus xtreme waterforce`, `aorus xtreme waterforce 24g`, `aorus xtreme waterforce wb`, `eagle`, `eagle oc`, `gaming`, `gaming oc`, `gaming oc pro`, `gaming oc waterforce wb`, `gaming pro`, `gaming pro oc`, `gaming x`, `master`, `master ice`, `turbo`, `vision`, `vision oc`, `windforce`, `windforce oc`, `windforce oc sff`, `windforce v2`, `xtreme` |
| `inno3d` | `gaming x3`, `ice dragon super`, `ichill frostbite`, `ichill x2`, `ichill x3`, `ichill x3 red`, `ichill x4`, `twin x2`, `twin x2 oc`, `x3 oc` |
| `intel` | `b580` |
| `kfa2` | `dual oc`, `ex`, `ex gamer`, `ex oc`, `gaming`, `oc`, `sg`, `sg oc` |
| `leadtek` | `hurricane` |
| `lianli` | `a3 matx wd` |
| `microsoft` | `xbox series s`, `xbox series x` |
| `msi` | `amd reference`, `dual`, `expert`, `gaming`, `gaming trio`, `gaming trio oc`, `gaming trio oc white`, `gaming x`, `gaming x slim`, `gaming x trio`, `gaming z trio`, `inspire 3x`, `inspire 3x oc`, `lp oc`, `mech 2x`, `mech 2x oc`, `shadow 3x`, `shadow 3x oc`, `strix`, `suprim`, `suprim liquid soc`, `suprim liquid x`, `suprim oc`, `suprim soc`, `suprim x`, `vanguard`, `vanguard soc`, `vanguard soc launch edition`, `ventus 2X (LHR)`, `ventus 2x`, `ventus 2x oc`, `ventus 2x white oc`, `ventus 3x`, `ventus 3x e1 oc`, `ventus 3x oc`, `ventus 3x oc plus`, `ventus 3x oc white`, `x trio` |
| `nintendo` | `switch 2`, `switch 2 bundle` |
| `nvidia` | `founders edition` |
| `palit` | `dual`, `dual oc`, `gamerock`, `gamerock oc`, `gaming oc pro`, `gaming pro`, `gaming pro oc`, `jetstream`, `jetstream oc`, `stormx oc`, `trinity oc` |
| `pny` | `aorus xtreme waterforce`, `dual`, `dual fan`, `epic x`, `epic x oc`, `gaming`, `gaming verto epic-x`, `single fan`, `suprim liquid soc`, `triple fan`, `triple fan oc`, `uprising`, `vetro`, `xlr8`, `xlr8 epic x`, `xlr8 gaming`, `xlr8 gaming uprising epic x`, `xlr8 revel`, `xlr8 revel epic x`, `xlr8 uprising`, `xlr8 verto`, `xlr8 verto epic x`, `xlr8 verto epic x oc`, `xlr8 verto oc` |
| `powercolor` | `amd reference`, `fighter`, `hellhound`, `hellhound white`, `red devil`, `red dragon` |
| `sapphire` | `amd reference`, `nitro oc`, `nitro oc se`, `nitro+`, `nitro+ oc`, `nitro+ oc se`, `nitro+ se`, `pulse`, `pulse oc` |
| `sony` | `ps5 console`, `ps5 digital` |
| `sparkle` | `b580` |
| `test:brand` | `test:model` |
| `ubiquiti` | `dream machine`, `dream machine pro`, `dream router`, `g4 doorbell pro`, `network video recorder`, `network video recorder pro` |
| `xfx` | `amd reference`, `merc`, `merc core`, `merc ultra`, `qick`, `qick ultra`, `swft` |
| `zotac` | `amp airo`, `amp extreme airo`, `amp extreme holo`, `amp extreme infinity`, `amp holo`, `amp white`, `gaming`, `solid`, `solid oc`, `trinity`, `trinity oc`, `trinity oc lhr`, `twin edge`, `twin edge oc`, `twin edge oc white` |

## Supported series

Used with the `SHOW_ONLY_SERIES` variable.

| Series | Value |
|:---:|:---:|
| AMD RX 6700XT | `rx6700xt` |
| AMD RX 6800 | `rx6800` |
| AMD RX 6800XT | `rx6800xt` |
| AMD RX 6900XT | `rx6900xt` |
| AMD RX 9070 | `rx9070` |
| AMD RX 9070XT | `rx9070xt` |
| AMD Ryzen 5600X | `ryzen5600` |
| AMD Ryzen 5800X | `ryzen5800` |
| AMD Ryzen 5900X | `ryzen5900` |
| AMD Ryzen 5950X | `ryzen5950` |
| AMD Ryzen 7800X3D | `ryzen7800x3d` |
| AMD Ryzen 7950X | `ryzen7950x` |
| AMD Ryzen 9600X | `ryzen9600x` |
| AMD Ryzen 9700X | `ryzen9700x` |
| AMD Ryzen 9800X3D | `ryzen9800x3d` | 
| AMD Ryzen 9900X | `ryzen9900x` |
| AMD Ryzen 9950X | `ryzen9950x` |
| Corsair SFX PSU | `sf` |
| Crosshair VIII | `darkhero` |
| Intel Arc B580 | `arc` |
| Lian Li A3-mATX | `a3-matx` |
| Nintendo Switch 2 | `switch2` |
| Nvidia RTX 3050 | `3050` |
| Nvidia RTX 3060 | `3060` |
| Nvidia RTX 3060 Ti | `3060ti` |
| Nvidia RTX 3070 | `3070` |
| Nvidia RTX 3070 Ti | `3070ti` |
| Nvidia RTX 3080 | `3080` |
| Nvidia RTX 3080 Ti | `3080ti` |
| Nvidia RTX 3090 | `3090` |
| Nvidia RTX 4060 | `4060` |
| Nvidia RTX 4070 | `4070` |
| Nvidia RTX 4070 SUPER | `4070super` |
| Nvidia RTX 4070 Ti | `4070ti` |
| Nvidia RTX 4080 16G | `4080-16g` |
| Nvidia RTX 4090 | `4090` |
| Nvidia RTX 5070 | `5070` |
| Nvidia RTX 5070 Ti | `5070ti` |
| Nvidia RTX 5080 | `5080` |
| Nvidia RTX 5090 | `5090` |
| Sony PS5 | `sonyps5c` |
| Sony PS5 Digital Edition | `sonyps5de` |
| Ubiquiti G4 Doorbell Pro | `g4-doorbell-pro` |
| Unifi Dream Machine | `udm-us` |
| Unifi Dream Machine Pro | `udm-pro` |
| Unifi Dream Router | `udm-us` |
| Unifi Network Video Recorder | `unvr` |
| Unifi Network Video Recorder Pro | `unvr-pro` |
| Xbox Series S | `xboxss` |
| Xbox Series X | `xboxsx` |

## Nvidia Store Reference

???+ note
    Use the Nvidia Store to check stock for Founders Edition cards only (3060 Ti/3070/3080/3080 Ti/3090/4090). For USA use `bestbuy` instead.

???+ info
    Use the `STORE` variable for your chosen country. For example, to check for a FE card in Belgium you would use the `nvidia-fr` store.

| Country | Store | Retailer
|:---:|:---:|:---:|
| Austria | `nvidia-de` | NBB |
| Belgium | `nvidia-fr` | LDLC |
| France | `nvidia-fr` | LDLC |
| Germany | `nvidia-de` | NBB |
| Ireland | `nvidia-gb` | Scan |
| Luxembourg | `nvidia-fr` | LDLC |
| Spain | `nvidia-es` | LDLC |
| United Kingdom | `nvidia-gb` | Scan |
