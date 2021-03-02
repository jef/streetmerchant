# Changelog

## [3.5.0](https://www.github.com/jef/streetmerchant/compare/v3.4.1...v3.5.0) (2021-03-02)


### Features

* add restart time for leaking Chromium in Ubuntu ([#1880](https://www.github.com/jef/streetmerchant/issues/1880)) ([1009ce6](https://www.github.com/jef/streetmerchant/commit/1009ce6636c21c378121bd83b251a371a1b8568e))
* add terraform infra as code for AWS fargate ([#1987](https://www.github.com/jef/streetmerchant/issues/1987)) ([d341ef7](https://www.github.com/jef/streetmerchant/commit/d341ef72aa6b74e54c11aeb455516b2a69a8a664))
* clean up proxy logging with n/N in each lookup ([#1839](https://www.github.com/jef/streetmerchant/issues/1839)) ([8df4339](https://www.github.com/jef/streetmerchant/commit/8df4339bdb3d96cb448e3acb727fdc534688bfc0))
* **notification:** add simple SmartThings switch activation ([#1902](https://www.github.com/jef/streetmerchant/issues/1902)) ([c22c960](https://www.github.com/jef/streetmerchant/commit/c22c960dc179f5ed74ae41a25178e6d2feed0bf9))
* **notification:** add Streamlabs support ([#1872](https://www.github.com/jef/streetmerchant/issues/1872)) ([edb39f8](https://www.github.com/jef/streetmerchant/commit/edb39f8f05451c3cc1994c0beb2338bae04ab585))
* **nvidia:** updated store for europe ([#1732](https://www.github.com/jef/streetmerchant/issues/1732)) ([2143b15](https://www.github.com/jef/streetmerchant/commit/2143b158090dc065a29bdde4c6dc592a5a745c07))
* **sms:** add US Cellular ([#1874](https://www.github.com/jef/streetmerchant/issues/1874)) ([4455e4e](https://www.github.com/jef/streetmerchant/commit/4455e4ed8df84a37fa16fdc58d130c11a997f9b5))
* **store:** add globaldata ([#2004](https://www.github.com/jef/streetmerchant/issues/2004)) ([5effbae](https://www.github.com/jef/streetmerchant/commit/5effbae882bed9d287f8ccc84e9dd38a6ebdebb1))
* **store:** add ldlc (FR) ([#2037](https://www.github.com/jef/streetmerchant/issues/2037)) ([a7be09d](https://www.github.com/jef/streetmerchant/commit/a7be09d56eda441cb1625ebb642cccab63d71f31))
* **store:** add netonnet-no ([#1989](https://www.github.com/jef/streetmerchant/issues/1989)) ([e6803d4](https://www.github.com/jef/streetmerchant/commit/e6803d4d7c60424c043b540f0cb555bd29b9d7aa))
* **store:** add Norwegian stores ([#1985](https://www.github.com/jef/streetmerchant/issues/1985)) ([5a5927b](https://www.github.com/jef/streetmerchant/commit/5a5927ba1ef5d138f5741b672b1fe2466e5760c2))
* **store:** add novoatalho (PT) ([#2043](https://www.github.com/jef/streetmerchant/issues/2043)) ([a3c726b](https://www.github.com/jef/streetmerchant/commit/a3c726b45c5ab8f0a6c8a239e0de0a913c4e0c55))
* **store:** add PCDiga.com ([#1990](https://www.github.com/jef/streetmerchant/issues/1990)) ([2501f6b](https://www.github.com/jef/streetmerchant/commit/2501f6b5cc46aa05bfe94ca238b5866e4fd60f36))
* **store:** corsair-uk ([#1733](https://www.github.com/jef/streetmerchant/issues/1733)) ([c81282e](https://www.github.com/jef/streetmerchant/commit/c81282ef9fd95c39dc6d338f3d79de16906c89b6))
* use node 15, use package version ([#2066](https://www.github.com/jef/streetmerchant/issues/2066)) ([eee669b](https://www.github.com/jef/streetmerchant/commit/eee669b1b3e54ada1180877fe766aaded9e02936))


### Bug Fixes

* **alternate:** update URLs ([#1814](https://www.github.com/jef/streetmerchant/issues/1814)) ([d63685f](https://www.github.com/jef/streetmerchant/commit/d63685f2905eb7f207f13da7682ad6a81d9d7aca))
* **amazon-ca:** out of stock check was missing ([#1885](https://www.github.com/jef/streetmerchant/issues/1885)) ([0e65f33](https://www.github.com/jef/streetmerchant/commit/0e65f336902dec99aa10a4b4823f4d2411674cae))
* **amazon-ca:** update selector ([#1851](https://www.github.com/jef/streetmerchant/issues/1851)) ([3293184](https://www.github.com/jef/streetmerchant/commit/329318427fc3eb1081751289401269119a252905))
* **amazon-uk:** add label for ps5 ([8ee6815](https://www.github.com/jef/streetmerchant/commit/8ee6815c0fb6ea129d2de600d10e6732e90ce924)), closes [#2036](https://www.github.com/jef/streetmerchant/issues/2036)
* **discord:** ensure first group in list is notified ([#1788](https://www.github.com/jef/streetmerchant/issues/1788)) ([9791568](https://www.github.com/jef/streetmerchant/commit/9791568cd4205b00ce9c5d301937efc17089b769))
* **docs:** nvidia store changes ([#1797](https://www.github.com/jef/streetmerchant/issues/1797)) ([de1427c](https://www.github.com/jef/streetmerchant/commit/de1427c076e5051673635fb9ec7e9880f0e3c260))
* **galaxus:** update selector ([#1730](https://www.github.com/jef/streetmerchant/issues/1730)) ([1015358](https://www.github.com/jef/streetmerchant/commit/1015358b502a30a8cfc9fedfeab2dc09098d9615))
* **microcenter:** properly flag in stock items ([#1754](https://www.github.com/jef/streetmerchant/issues/1754)) ([ce609fb](https://www.github.com/jef/streetmerchant/commit/ce609fb518fa7811a77e3ab7d26ecacf86ac35e6))
* **nvidia:** update inStock text ([#1850](https://www.github.com/jef/streetmerchant/issues/1850)) ([4f57df0](https://www.github.com/jef/streetmerchant/commit/4f57df016ba2ab6fdd5e7ca7e98ea6d9fba463a7))
* remove package-lock.json ([e3d0980](https://www.github.com/jef/streetmerchant/commit/e3d09803ad3d53b5c4310b3e369a69c99515fd8c))
* **vuugo:** add out of stock check ([#1731](https://www.github.com/jef/streetmerchant/issues/1731)) ([9695e29](https://www.github.com/jef/streetmerchant/commit/9695e29a02ea320842954db9f2ea51612b983490))
* **web:** 404 Error / page not visible ([#1825](https://www.github.com/jef/streetmerchant/issues/1825)) ([95b4a15](https://www.github.com/jef/streetmerchant/commit/95b4a153bd8b708cfefd07e3f16e787bb069da48))
* **wipoid:** corrected 3070 / 3080 links ([#1879](https://www.github.com/jef/streetmerchant/issues/1879)) ([2572c8a](https://www.github.com/jef/streetmerchant/commit/2572c8af80685be514ff762f8203e7de7cab8634))

### [3.4.1](https://www.github.com/jef/streetmerchant/compare/v3.4.0...v3.4.1) (2021-01-17)


### Bug Fixes

* **proxy:** build proxyList correctly ([c177aed](https://www.github.com/jef/streetmerchant/commit/c177aedd210e14cb7d401295cb16ece1dfb1ebe7))

## [3.4.0](https://www.github.com/jef/streetmerchant/compare/v3.3.0...v3.4.0) (2021-01-17)


### Features

* add browser opening to test:notification ([f87053c](https://www.github.com/jef/streetmerchant/commit/f87053cb02e04b3cb2c0cf253187a9e9857c9858))
* add c8 and mocha for testing ([f87053c](https://www.github.com/jef/streetmerchant/commit/f87053cb02e04b3cb2c0cf253187a9e9857c9858))
* add command parameter to set custom dotenv conf ([#1590](https://www.github.com/jef/streetmerchant/issues/1590)) ([b03d242](https://www.github.com/jef/streetmerchant/commit/b03d24217f8ff5a56ddf19c019d10b48afec813f))
* add redis ([#1390](https://www.github.com/jef/streetmerchant/issues/1390)) ([fb82526](https://www.github.com/jef/streetmerchant/commit/fb82526a427e503fff1f1cf56b091ff0c8a5a96e))
* **asus:** add outOfStock label ([#1653](https://www.github.com/jef/streetmerchant/issues/1653)) ([d0a4667](https://www.github.com/jef/streetmerchant/commit/d0a4667a643398d836652642b993107ed05619d8)), closes [#368](https://www.github.com/jef/streetmerchant/issues/368)
* **azerty:** add ryzen 5000 series  ([#878](https://www.github.com/jef/streetmerchant/issues/878)) ([ca59777](https://www.github.com/jef/streetmerchant/commit/ca59777917777401affc5b72a68238983f286237))
* **caseking:** add 3060ti/3070 cards / add missing 3080/3090 cards ([#1715](https://www.github.com/jef/streetmerchant/issues/1715)) ([b2ebac3](https://www.github.com/jef/streetmerchant/commit/b2ebac36c078d8001501d45e3a2bbf5f91a1a489))
* **galaxus:** update selector, add out of stock check ([#1607](https://www.github.com/jef/streetmerchant/issues/1607)) ([c9cda1e](https://www.github.com/jef/streetmerchant/commit/c9cda1e4e597c7103a32c32c9e5a79824ad44de5))
* **lookup:** add max price for xbox ([f34a808](https://www.github.com/jef/streetmerchant/commit/f34a808451b735c384f4b763cedd816c85ab7abc)), closes [#1436](https://www.github.com/jef/streetmerchant/issues/1436)
* **lookup:** add protection against infinite recursion for Cloudflare ([#1505](https://www.github.com/jef/streetmerchant/issues/1505)) ([1cf618c](https://www.github.com/jef/streetmerchant/commit/1cf618c1c12d3ab94688139a8410bed181af3eb2)), closes [#1459](https://www.github.com/jef/streetmerchant/issues/1459) [#1490](https://www.github.com/jef/streetmerchant/issues/1490)
* **lookup:** handle Cloudflare DDoS protection ([#1434](https://www.github.com/jef/streetmerchant/issues/1434)) ([f86a825](https://www.github.com/jef/streetmerchant/commit/f86a8259f37f0ed25b00e243b29aa28c3e68bdff)), closes [#1297](https://www.github.com/jef/streetmerchant/issues/1297)
* **proshop-de:** add proshop-de inStock selector ([#1633](https://www.github.com/jef/streetmerchant/issues/1633)) ([9c2ea8d](https://www.github.com/jef/streetmerchant/commit/9c2ea8dbe91f46e24eae1e9e717164d99f94d0e1))
* **proxy:** fallback to a global proxy list ([#1388](https://www.github.com/jef/streetmerchant/issues/1388)) ([be1953b](https://www.github.com/jef/streetmerchant/commit/be1953b2069fce72969904c1bc18055df73f4b6b))
* **pushover:** add screenshot to push notification if available ([#1552](https://www.github.com/jef/streetmerchant/issues/1552)) ([f9a3d03](https://www.github.com/jef/streetmerchant/commit/f9a3d03f356d7ed2072772b86c7776f62dcd32b5))
* remove stale user agents, use top 50 ([6e2a162](https://www.github.com/jef/streetmerchant/commit/6e2a16238c54bc448f3ae5243ef8729f384ea59b))
* **store:** add `johnlewis` store, add `shopto` store ([#1481](https://www.github.com/jef/streetmerchant/issues/1481)) ([ec8d357](https://www.github.com/jef/streetmerchant/commit/ec8d3571cfbbd3a028aed9b5650eb8a52c9af587))
* **store:** add equippr & futurex for DE region ([#1501](https://www.github.com/jef/streetmerchant/issues/1501)) ([5b70ff1](https://www.github.com/jef/streetmerchant/commit/5b70ff14cb9ab5e0a72922624d54b40bb0642bcd))
* **store:** add GPU and CPU support for Vuugo ([#1555](https://www.github.com/jef/streetmerchant/issues/1555)) ([8ab6e1f](https://www.github.com/jef/streetmerchant/commit/8ab6e1f1d801c3ae52987fe9e8550adbe2015ea6))
* **store:** add more italian sites ([#1701](https://www.github.com/jef/streetmerchant/issues/1701)) ([cb898c7](https://www.github.com/jef/streetmerchant/commit/cb898c7923ce8a45548807571e734ad232ce0004))
* **store:** add pcking and acompc ([#1470](https://www.github.com/jef/streetmerchant/issues/1470)) ([beee355](https://www.github.com/jef/streetmerchant/commit/beee35556376056b31d6719fb090ce58b7ea985f))
* **store:** add SG Location for Amazon and Newegg ([#1600](https://www.github.com/jef/streetmerchant/issues/1600)) ([ef926d2](https://www.github.com/jef/streetmerchant/commit/ef926d2282cedaef38bc3d4d427820f4aa65dc8d))
* **store:** addition of several australian sites ([#1651](https://www.github.com/jef/streetmerchant/issues/1651)) ([2fa8937](https://www.github.com/jef/streetmerchant/commit/2fa893795f21535e1799116843e0668b669835ab))
* **store:** specify links to navigate to between product searches ([#1542](https://www.github.com/jef/streetmerchant/issues/1542)) ([0982774](https://www.github.com/jef/streetmerchant/commit/09827741aec2158e88c19fd6b0156c32736671c8))
* **twilio:** add support to have multiple numbers ([#1450](https://www.github.com/jef/streetmerchant/issues/1450)) ([83508bc](https://www.github.com/jef/streetmerchant/commit/83508bc5ea509aac0742c525a6434ef8f8001899))
* update Docker and ci ([f87053c](https://www.github.com/jef/streetmerchant/commit/f87053cb02e04b3cb2c0cf253187a9e9857c9858))
* **vsgamers:** add maxPrice selector([#1682](https://www.github.com/jef/streetmerchant/issues/1682)) ([84382de](https://www.github.com/jef/streetmerchant/commit/84382def6f23b1e8b1ad8c14fb4f423f32a35eb7))
* **web:** properly set `for` attribute for labels ([#1626](https://www.github.com/jef/streetmerchant/issues/1626)) ([c0638d2](https://www.github.com/jef/streetmerchant/commit/c0638d2e4b923abacaf81fb09fd80948cd5e7ce9))


### Bug Fixes

* **acompc:** false positives ([#1699](https://www.github.com/jef/streetmerchant/issues/1699)) ([0a1198b](https://www.github.com/jef/streetmerchant/commit/0a1198b69c4e7b22fcf9c9d0ed94ff51da4f8bce))
* **amazon-de-warehouse:** update wrong maxPrice selector ([#1514](https://www.github.com/jef/streetmerchant/issues/1514)) ([90fb430](https://www.github.com/jef/streetmerchant/commit/90fb430b712aa6a89227a17d37a83380326db21b))
* **bandh:** asus cards / out of stock check added ([#1670](https://www.github.com/jef/streetmerchant/issues/1670)) ([b821eab](https://www.github.com/jef/streetmerchant/commit/b821eab273f3d8d4cecc1642467dbbad63f4e763))
* **bestbuy:** shorter pageview urls and missing carturl links ([#1613](https://www.github.com/jef/streetmerchant/issues/1613)) ([8faf320](https://www.github.com/jef/streetmerchant/commit/8faf3202e79825de5289659435c5f93b4e892086)), closes [#1610](https://www.github.com/jef/streetmerchant/issues/1610)
* **computeruniverse:** false positives ([#1698](https://www.github.com/jef/streetmerchant/issues/1698)) ([e0849c4](https://www.github.com/jef/streetmerchant/commit/e0849c4dc2427a9f8be1927847a1fb2609a24600))
* disable redis if not configured ([6bc7737](https://www.github.com/jef/streetmerchant/commit/6bc7737ef04e5592e19b0b6a76e5fb0cd4b048df)), closes [#1516](https://www.github.com/jef/streetmerchant/issues/1516)
* **galaxus:** maxPrice selector ([#1469](https://www.github.com/jef/streetmerchant/issues/1469)) ([7a5bc22](https://www.github.com/jef/streetmerchant/commit/7a5bc22ba8cede51311b80182c18fb0227532cd2))
* **galaxus:** update selector  ( 14.01.2020 07:00 ) ([#1664](https://www.github.com/jef/streetmerchant/issues/1664)) ([a768eb4](https://www.github.com/jef/streetmerchant/commit/a768eb4cf54f81657532ae0c5e00588cc167eae2))
* **galaxus:** update selector ([#1578](https://www.github.com/jef/streetmerchant/issues/1578)) ([ad5bd55](https://www.github.com/jef/streetmerchant/commit/ad5bd55c1ad9f54c9c1aa7ae875bd430d6304fac))
* **galaxus:** update selector ([#1599](https://www.github.com/jef/streetmerchant/issues/1599)) ([445a007](https://www.github.com/jef/streetmerchant/commit/445a00728fec1c8b6bded8583d4a6712c195143b))
* **galaxus:** update selector ([#1705](https://www.github.com/jef/streetmerchant/issues/1705)) ([2120d29](https://www.github.com/jef/streetmerchant/commit/2120d2901d03ae2238bd56d46e0c43dcb16af70e))
* **lookup:** check out of stock before price ([#1422](https://www.github.com/jef/streetmerchant/issues/1422)) ([02d29c3](https://www.github.com/jef/streetmerchant/commit/02d29c3c64a7976622da6cbdf099b76b455082d0))
* **lookup:** remove mobile versions of user agent ([96ae818](https://www.github.com/jef/streetmerchant/commit/96ae818e84c99d0597e0ddd7b5ecfe1a0615d1ed))
* **newegg:** false positives (all stores) ([#1714](https://www.github.com/jef/streetmerchant/issues/1714)) ([3f191bb](https://www.github.com/jef/streetmerchant/commit/3f191bbd00e7474fbef71ddd28955672835ef1a0))
* properly pass array entries as separate indices ([#1502](https://www.github.com/jef/streetmerchant/issues/1502)) ([0c6e2d5](https://www.github.com/jef/streetmerchant/commit/0c6e2d587d81041b07a561b3f53b8b1ebcb9f843))
* **proxy:** fix requests with proxies ([#1408](https://www.github.com/jef/streetmerchant/issues/1408)) ([f65df4c](https://www.github.com/jef/streetmerchant/commit/f65df4ce56891c368dab8dd6fe85a584cf9e6f49))
* **proxy:** update proxy module ([#1451](https://www.github.com/jef/streetmerchant/issues/1451)) ([ab03702](https://www.github.com/jef/streetmerchant/commit/ab037029b654f5e169a97c9e7a2c4dfa6cf1e768)), closes [#1437](https://www.github.com/jef/streetmerchant/issues/1437)
* **store:** link builder in UK stores ([#1486](https://www.github.com/jef/streetmerchant/issues/1486)) ([eb59dc3](https://www.github.com/jef/streetmerchant/commit/eb59dc3433c54027695fb68cfe69b1d90fce3fec))
* **store:** Update 30 series links and models for store.asus.com ([#1645](https://www.github.com/jef/streetmerchant/issues/1645)) ([20bea85](https://www.github.com/jef/streetmerchant/commit/20bea85e411277f70b987675b53055b69d450e0f)), closes [#1637](https://www.github.com/jef/streetmerchant/issues/1637)
* **store:** update missing/mislabeled cards for Canadian retailers ([#1574](https://www.github.com/jef/streetmerchant/issues/1574)) ([082776c](https://www.github.com/jef/streetmerchant/commit/082776cfca740ac0a22736f791c62705a62185be))
* **store:** update out of stock detection for MediaMarkt and Saturn ([#1549](https://www.github.com/jef/streetmerchant/issues/1549)) ([4f86d24](https://www.github.com/jef/streetmerchant/commit/4f86d2462e5d1eba6a7d7839585c0fe8c1b70da5)), closes [#1545](https://www.github.com/jef/streetmerchant/issues/1545)
* **webui:** handling of file serving ([#1383](https://www.github.com/jef/streetmerchant/issues/1383)) ([445689e](https://www.github.com/jef/streetmerchant/commit/445689efc49bf8edb0b5a027611f02ea0d0f126f))
* **wipoid:** added 3090/3080/3070/3060ti/ryzen store items ([#1683](https://www.github.com/jef/streetmerchant/issues/1683)) ([be54171](https://www.github.com/jef/streetmerchant/commit/be541713a8855f18b5102917751842e514796e00))

## [3.3.0](https://www.github.com/jef/streetmerchant/compare/v3.2.0...v3.3.0) (2020-12-13)


### Features

* **discord:** dynamic currency symbol ([#1328](https://www.github.com/jef/streetmerchant/issues/1328)) ([cccfde2](https://www.github.com/jef/streetmerchant/commit/cccfde245affc11506c69d1ef6c30c09953307d4))
* **docs:** add mkdocs ([243109a](https://www.github.com/jef/streetmerchant/commit/243109a4ffdfe1d1efe961af0b5cf28fd7e6ef1d))
* **docs:** add table sorting ([#1258](https://www.github.com/jef/streetmerchant/issues/1258)) ([5955d10](https://www.github.com/jef/streetmerchant/commit/5955d10a7f2106c5ae1275fadacf2945626ca008))
* **lookup:** use random user agents ([#1335](https://www.github.com/jef/streetmerchant/issues/1335)) ([b599c23](https://www.github.com/jef/streetmerchant/commit/b599c23b51735212e5369ce03a44bbd1bccafa42))
* **notification:** add discord groups ([#1211](https://www.github.com/jef/streetmerchant/issues/1211)) ([2632386](https://www.github.com/jef/streetmerchant/commit/2632386a5b99f3b23166e88f92af809f0036a6b7))
* **notification:** add sound player executable option ([#1301](https://www.github.com/jef/streetmerchant/issues/1301)) ([8d19231](https://www.github.com/jef/streetmerchant/commit/8d192317badfd71a7cd8f0115ba9e6fc951c1874))
* **playstation:** add queuing selector ([#1173](https://www.github.com/jef/streetmerchant/issues/1173)) ([67b19a7](https://www.github.com/jef/streetmerchant/commit/67b19a7a8b3dead5f5ab9575ee2b4f09924ce851))
* **store:** add darkhero motherboard to asus and microcenter ([#1336](https://www.github.com/jef/streetmerchant/issues/1336)) ([29175c7](https://www.github.com/jef/streetmerchant/commit/29175c77a8fcbc082c944b057a919dfcc22ba606))
* **store:** add EBGames ([#1281](https://www.github.com/jef/streetmerchant/issues/1281)) ([27cfb94](https://www.github.com/jef/streetmerchant/commit/27cfb94de8d9ccef3c7fc76b250aee17d7c80257))
* **store:** add Irish store variants ([#1373](https://www.github.com/jef/streetmerchant/issues/1373)) ([f70998f](https://www.github.com/jef/streetmerchant/commit/f70998f0d9a6cdfbc59fb31fecb87f801b0b3037))
* **store:** add Megekko ([#1216](https://www.github.com/jef/streetmerchant/issues/1216)) ([30bed2a](https://www.github.com/jef/streetmerchant/commit/30bed2ac016e9e543f67b1098819a484bc1394c3))
* **store:** add several Australian stores, add some 3080 brands/models ([#1367](https://www.github.com/jef/streetmerchant/issues/1367)) ([579cb97](https://www.github.com/jef/streetmerchant/commit/579cb97a0d151cc374a37493b043ba4a399b55db))
* **store:** add Toys R Us ([#1257](https://www.github.com/jef/streetmerchant/issues/1257)) ([ac0bd2a](https://www.github.com/jef/streetmerchant/commit/ac0bd2ac14d686a0f30931e885da65a1d7af6856))
* **store:** add Walmart (CA) ([#1253](https://www.github.com/jef/streetmerchant/issues/1253)) ([b535b47](https://www.github.com/jef/streetmerchant/commit/b535b470cad38af034889b4d27578b20136e166d))


### Bug Fixes

* **adblock:** proxy another function to produce less errors ([#1379](https://www.github.com/jef/streetmerchant/issues/1379)) ([eb70076](https://www.github.com/jef/streetmerchant/commit/eb700762a4eee3a802bd81f0fb62e76243027c42))
* **amazon-it:** maxPrice selector and links ([#1239](https://www.github.com/jef/streetmerchant/issues/1239)) ([84f2cb7](https://www.github.com/jef/streetmerchant/commit/84f2cb7d52fac7c3dbdd31318a51330e25808784))
* **amazon-nl:** inStock selector ([b6964b0](https://www.github.com/jef/streetmerchant/commit/b6964b02f38c947fd476d86de35d5983e5b229dd)), closes [#1366](https://www.github.com/jef/streetmerchant/issues/1366)
* **bestbuy-ca:** add outOfStock text ([58f0a9c](https://www.github.com/jef/streetmerchant/commit/58f0a9c7740c46f3d820c8765dee5b0fc8516353)), closes [#1269](https://www.github.com/jef/streetmerchant/issues/1269)
* **bestbuy-ca:** update selectors to help false positives ([#1278](https://www.github.com/jef/streetmerchant/issues/1278)) ([0525119](https://www.github.com/jef/streetmerchant/commit/0525119b9bae47425a6c01720d6a1ea6ab8e6a02)), closes [#895](https://www.github.com/jef/streetmerchant/issues/895)
* **ci:** mkdocs deps ([1f63e99](https://www.github.com/jef/streetmerchant/commit/1f63e9980499ac567845473dc48e51cab78c838e))
* **config:** disable docker by default ([dca916b](https://www.github.com/jef/streetmerchant/commit/dca916b64e9ac2d05d5e6af19e5466b8a0623ed5))
* **config:** remove quotes ([ef452d8](https://www.github.com/jef/streetmerchant/commit/ef452d8e586536a5039ee532d655d2951d551ac3))
* **discord:** notification groupings ([ad0b2fe](https://www.github.com/jef/streetmerchant/commit/ad0b2fe525d6403735ddcbf4ef55b91eb36ac10a))
* **docker:** run in docker, and build scripts for docker ([#1291](https://www.github.com/jef/streetmerchant/issues/1291)) ([c74ea28](https://www.github.com/jef/streetmerchant/commit/c74ea28014ee0d827ea216083844f92e30f142c9))
* **eprice:** inStock selector ([5e1dfc3](https://www.github.com/jef/streetmerchant/commit/5e1dfc35680029620a1de7bc7a523140f2dae8af)), closes [#1067](https://www.github.com/jef/streetmerchant/issues/1067)
* **newegg:** dedupe nitro+ models ([#1300](https://www.github.com/jef/streetmerchant/issues/1300)) ([7329c6e](https://www.github.com/jef/streetmerchant/commit/7329c6ede0a5ab6d644b30ac878f4e7da11e43a8)), closes [#1230](https://www.github.com/jef/streetmerchant/issues/1230)
* **newegg:** price selector and mobile inStock ([c3beedc](https://www.github.com/jef/streetmerchant/commit/c3beedced82141e6bbb0735b3edb7c573907aa7a)), closes [#1356](https://www.github.com/jef/streetmerchant/issues/1356)
* **pushover:** add `expire` and `retry` ([0072dda](https://www.github.com/jef/streetmerchant/commit/0072dda90b637b93647cf3a35dc612cf43d89445)), closes [#983](https://www.github.com/jef/streetmerchant/issues/983)
* **store:** update UK stores ([#1372](https://www.github.com/jef/streetmerchant/issues/1372)) ([02825d0](https://www.github.com/jef/streetmerchant/commit/02825d009bd028f6dcdca02e2c155e77a7df8654))
* `.env` backwards compatibility ([9b7c7e2](https://www.github.com/jef/streetmerchant/commit/9b7c7e2881d756909af191094bda435ca7ef7e9b))
* add setRequestInterception ([#1312](https://www.github.com/jef/streetmerchant/issues/1312)) ([a44621f](https://www.github.com/jef/streetmerchant/commit/a44621f8f50cac9ba6614b0f89320d210370047a)), closes [#826](https://www.github.com/jef/streetmerchant/issues/826)
* **store:** italian store checks ([#1212](https://www.github.com/jef/streetmerchant/issues/1212)) ([e3eb386](https://www.github.com/jef/streetmerchant/commit/e3eb38655a3cefb85c4dbd573494955e06c72f71))


### Reverts

* allow users to still use `USER_AGENT` ([3386e8f](https://www.github.com/jef/streetmerchant/commit/3386e8f50da27a800c5289c3b6bd7a1f76e77a49))

## [3.2.0](https://www.github.com/jef/streetmerchant/compare/v3.1.0...v3.2.0) (2020-12-06)


### Features

* **bestbuy:** add 3060 series ([#1074](https://www.github.com/jef/streetmerchant/issues/1074)) ([e9a39c4](https://www.github.com/jef/streetmerchant/commit/e9a39c40925736a2126f6138c369710989904d1d))
* **bestbuy-ca:** add 3060ti cards ([29478bf](https://www.github.com/jef/streetmerchant/commit/29478bff2d27d780cc6142526f3970b4a87290bc))
* **notification:** add price to links ([#1209](https://www.github.com/jef/streetmerchant/issues/1209)) ([15ec12b](https://www.github.com/jef/streetmerchant/commit/15ec12b0a3a95716243bfd06f6d41959bff7c36e)), closes [#1188](https://www.github.com/jef/streetmerchant/issues/1188) [#673](https://www.github.com/jef/streetmerchant/issues/673) [#1187](https://www.github.com/jef/streetmerchant/issues/1187)
* **proxy:** socks5 support ([#933](https://www.github.com/jef/streetmerchant/issues/933)) ([364c6c2](https://www.github.com/jef/streetmerchant/commit/364c6c25dfe9dcbeb29cb20cb46e9e8dcc2fe86b))
* **store:** add 3060ti to newegg-ca, canadacomputer, memoryexpress ([#1172](https://www.github.com/jef/streetmerchant/issues/1172)) ([09f0236](https://www.github.com/jef/streetmerchant/commit/09f0236086c59b25ebe611041bf063d536e3cc3d))
* **store:** add amazon-de-warehouse ([#1102](https://www.github.com/jef/streetmerchant/issues/1102)) ([6de8c4a](https://www.github.com/jef/streetmerchant/commit/6de8c4a5eec8d66fb47d87e309866ba18f3e28c7))
* **store:** add antonline store ([#1042](https://www.github.com/jef/streetmerchant/issues/1042)) ([19eece1](https://www.github.com/jef/streetmerchant/commit/19eece18dccd4489e1e441b92061fc3b5743e4cd))
* **store:** add argos with ps5 ([b2f5c1a](https://www.github.com/jef/streetmerchant/commit/b2f5c1a3ed93cfd56e575ec634d235565a17b6bc))
* **store:** add awd(uk), add 3060ti link builders ([#1114](https://www.github.com/jef/streetmerchant/issues/1114)) ([36e3806](https://www.github.com/jef/streetmerchant/commit/36e38068d8cd284c741d4906d5ba5fe8cff85d24))
* **store:** add custom labels for links ([#1183](https://www.github.com/jef/streetmerchant/issues/1183)) ([f7b32e8](https://www.github.com/jef/streetmerchant/commit/f7b32e8ac56c29207c6b30b9168c34c021a5e227)), closes [#1132](https://www.github.com/jef/streetmerchant/issues/1132) [#1163](https://www.github.com/jef/streetmerchant/issues/1163)
* **store:** add el corte ingles ([#1107](https://www.github.com/jef/streetmerchant/issues/1107)) ([75ee95b](https://www.github.com/jef/streetmerchant/commit/75ee95b2217fb4bf667869011a009210ff8c22e7))
* **store:** add ePrice store ([#1016](https://www.github.com/jef/streetmerchant/issues/1016)) ([30a51a3](https://www.github.com/jef/streetmerchant/commit/30a51a38bee1c399276466e5db457bbe702edd5c))
* **store:** add Euronics DE ([#1045](https://www.github.com/jef/streetmerchant/issues/1045)) ([1774afc](https://www.github.com/jef/streetmerchant/commit/1774afc1c3010bd0b183907baa4f3486dc9e8c23))
* **store:** add expert ([#1105](https://www.github.com/jef/streetmerchant/issues/1105)) ([202698f](https://www.github.com/jef/streetmerchant/commit/202698f9179b081bd4214979f054e5ff7c805621))
* **store:** add Gamestop DE ([#1046](https://www.github.com/jef/streetmerchant/issues/1046)) ([79a3f33](https://www.github.com/jef/streetmerchant/commit/79a3f33150188c7ff0228a38f276ae1fe88b9714))
* **store:** add Medimax ([#1057](https://www.github.com/jef/streetmerchant/issues/1057)) ([7d29ef8](https://www.github.com/jef/streetmerchant/commit/7d29ef80ba1ae6682b486ac0b65a516b15a19f93))
* **store:** add Otto ([#1096](https://www.github.com/jef/streetmerchant/issues/1096)) ([af96c5f](https://www.github.com/jef/streetmerchant/commit/af96c5f2e808af7496f3c3299e4cf173105de48b))
* **store:** add smythstoys ([1ed0593](https://www.github.com/jef/streetmerchant/commit/1ed05937676c3b6961fcbbb1f3aa80afc3411ac3))
* **store:** add some italian stores with ps5 links ([#976](https://www.github.com/jef/streetmerchant/issues/976)) ([f663579](https://www.github.com/jef/streetmerchant/commit/f663579f3d744a5270878975407ad30b31ee0c0a))
* **store:** add spielegrotte ([#1056](https://www.github.com/jef/streetmerchant/issues/1056)) ([cf70f1f](https://www.github.com/jef/streetmerchant/commit/cf70f1ff4f942922bfa52adcd5b905e0b39c812a))
* **store:** add wipoid store ([#1018](https://www.github.com/jef/streetmerchant/issues/1018)) ([feae978](https://www.github.com/jef/streetmerchant/commit/feae978de9e90b96f542d2e53807144d82e380a4))
* **store:** update the italian store links ([#1002](https://www.github.com/jef/streetmerchant/issues/1002)) ([de7036c](https://www.github.com/jef/streetmerchant/commit/de7036c7cc6dd7e436ad1d31b988d9d56ad31f76))
* **topachat:** add `maxPrice` ([d7f2427](https://www.github.com/jef/streetmerchant/commit/d7f242780ef1a0a06d5b65ccfc0999e36a87d49d)), closes [#1097](https://www.github.com/jef/streetmerchant/issues/1097)
* add proxy rotation (settable per store) ([#1026](https://www.github.com/jef/streetmerchant/issues/1026)) ([490d44e](https://www.github.com/jef/streetmerchant/commit/490d44e1fdfdf91db7344dd3050ba8fd8d069631))


### Bug Fixes

* **amazon:** price and cart buttons ([6fd023e](https://www.github.com/jef/streetmerchant/commit/6fd023e81e0c54e8fb53b45817b63cb49b8a37ce)), closes [#1125](https://www.github.com/jef/streetmerchant/issues/1125)
* **amazon-de:** `inStock` selector ([14cbd5a](https://www.github.com/jef/streetmerchant/commit/14cbd5a05b6f9c3a3ebbc5978156ff2b090efd32)), closes [#1178](https://www.github.com/jef/streetmerchant/issues/1178)
* **amazon-de:** remove xbox cart links ([cbc4330](https://www.github.com/jef/streetmerchant/commit/cbc43304bf49863000f422fbff4ed200ea610914)), closes [#1095](https://www.github.com/jef/streetmerchant/issues/1095)
* **bestbuy-ca:** model always indicating in stock ([#1145](https://www.github.com/jef/streetmerchant/issues/1145)) ([06f3aaf](https://www.github.com/jef/streetmerchant/commit/06f3aafae6ec460c6227a92e6105639be71fc9b3))
* **bestbuy-ca:** replace old evga xc3 ultra ([#1058](https://www.github.com/jef/streetmerchant/issues/1058)) ([65df944](https://www.github.com/jef/streetmerchant/commit/65df9449730bce2acb82f5edac25a91bdddd94db))
* **canadacomputers:** add `inStock` selector, use english links ([#889](https://www.github.com/jef/streetmerchant/issues/889)) ([06214eb](https://www.github.com/jef/streetmerchant/commit/06214eb4a8a5c2d8a180e8dcf846f828d5cce2ed))
* **memoryexpress:** add backorder to `outOfStock` selector ([#890](https://www.github.com/jef/streetmerchant/issues/890)) ([67605a6](https://www.github.com/jef/streetmerchant/commit/67605a6e280af35f210c536bc03571a84ea1a7e9))
* **newegg:** maxPrice selector using used price ([feddac7](https://www.github.com/jef/streetmerchant/commit/feddac76d3824e947b0a96524cd940e6b45ffe70)), closes [#1052](https://www.github.com/jef/streetmerchant/issues/1052)
* **newegg:** typo in 5800x url([#903](https://www.github.com/jef/streetmerchant/issues/903)) ([a99eecb](https://www.github.com/jef/streetmerchant/commit/a99eecb4613bc136e65afe4e5e8788316beae39e))
* **scan:** links builder ([#1161](https://www.github.com/jef/streetmerchant/issues/1161)) ([ca5553c](https://www.github.com/jef/streetmerchant/commit/ca5553cb2044c00857412a2af009e5e7f2c1aabf))
* **smythstoys:** add out of stock label ([5bbdfa2](https://www.github.com/jef/streetmerchant/commit/5bbdfa2abc23c2e1fb1c606227754a1701cab194))
* **store:** add backoffStatusCodes and new captcha container ([#1110](https://www.github.com/jef/streetmerchant/issues/1110)) ([0b11238](https://www.github.com/jef/streetmerchant/commit/0b11238370040e9cd31e793e9a782ad384c22abf))
* **store:** removes unnecessary newegg links from bestbuy ([#1126](https://www.github.com/jef/streetmerchant/issues/1126)) ([f2ae423](https://www.github.com/jef/streetmerchant/commit/f2ae423fa83d1671a98b9cf3733e587d33727a59)), closes [#1119](https://www.github.com/jef/streetmerchant/issues/1119)
* **store:** update euroFormat for expert and otto ([#1108](https://www.github.com/jef/streetmerchant/issues/1108)) ([e198e44](https://www.github.com/jef/streetmerchant/commit/e198e44613cda27c0e67dc7e42ca514e66e9cf48))
* **walmart:** instock container and add test:series ([21e74cf](https://www.github.com/jef/streetmerchant/commit/21e74cfe76a5ccf82247315c9951a25e44bb1ce5)), closes [#1106](https://www.github.com/jef/streetmerchant/issues/1106)
* related products being picked up on scan ([#954](https://www.github.com/jef/streetmerchant/issues/954)) ([db18157](https://www.github.com/jef/streetmerchant/commit/db18157a490b9c9672c32de3372bff0b472a48f3))

## [3.1.0](https://www.github.com/jef/streetmerchant/compare/v3.0.0...v3.1.0) (2020-11-22)


### Features

* **asus:** add backoff codes ([#790](https://www.github.com/jef/streetmerchant/issues/790)) ([501ea34](https://www.github.com/jef/streetmerchant/commit/501ea34a54e877600050d5a99fd3b71ec799e96a))
* **canadacomputers:** add ryzen 5000 series ([#842](https://www.github.com/jef/streetmerchant/issues/842)) ([6f27330](https://www.github.com/jef/streetmerchant/commit/6f273305df69ac7b420b5446b4c6824866821a7e))
* **coolmod:** add `maxPrice` ([#862](https://www.github.com/jef/streetmerchant/issues/862)) ([4b689cb](https://www.github.com/jef/streetmerchant/commit/4b689cb94e99b83c8829c11d1bfe4cd6db9fbd7a))
* **newegg-ca:** add big navi links ([#843](https://www.github.com/jef/streetmerchant/issues/843)) ([6d292a1](https://www.github.com/jef/streetmerchant/commit/6d292a11cd53bd3893d4a0ff5d13eb2ce3319faa))
* **notification:** add product link to email and telegram ([#816](https://www.github.com/jef/streetmerchant/issues/816)) ([777c31b](https://www.github.com/jef/streetmerchant/commit/777c31b420a38cab860d98bc6bd8b7ba990c55e7))
* **playstation:** add `outOfStock` label ([#812](https://www.github.com/jef/streetmerchant/issues/812)) ([eb314af](https://www.github.com/jef/streetmerchant/commit/eb314afda557369dd27266429ac991c47ecc6375))
* **store:** add `PlayStation` store ([#806](https://www.github.com/jef/streetmerchant/issues/806)) ([7c28c7f](https://www.github.com/jef/streetmerchant/commit/7c28c7f72b171ce914aba770d88e8b1213c41233))
* **store:** add 3070 models to pccomponentes & coolmod ([#820](https://www.github.com/jef/streetmerchant/issues/820)) ([d0ebffd](https://www.github.com/jef/streetmerchant/commit/d0ebffd056dc166e3557ccf694379bf8c10148b5))
* **store:** add amd rx 6000 series model ([#832](https://www.github.com/jef/streetmerchant/issues/832)) ([89a762e](https://www.github.com/jef/streetmerchant/commit/89a762e2f5cd2ebd56c2586b1ebead4171b67153))
* **store:** add captcha check to saturn and mediamarkt ([#876](https://www.github.com/jef/streetmerchant/issues/876)) ([2d01cfd](https://www.github.com/jef/streetmerchant/commit/2d01cfddff557f112c6d53473dad25eb299f2fc0))
* **store:** add corsair sfx PSUs ([#881](https://www.github.com/jef/streetmerchant/issues/881)) ([e552c91](https://www.github.com/jef/streetmerchant/commit/e552c9102dd9801dcfc35652f2aaa0b1eea18ebb))
* **store:** add topachat ([#776](https://www.github.com/jef/streetmerchant/issues/776)) ([c38bebb](https://www.github.com/jef/streetmerchant/commit/c38bebb49dbe8243d0e3f1205150a33f9ce745aa))
* **store:** add vsgamers ([#767](https://www.github.com/jef/streetmerchant/issues/767)) ([53739e0](https://www.github.com/jef/streetmerchant/commit/53739e05abf50bbaddb8079087339c9f353096c8))
* add amazon-fr to stores. ([#766](https://www.github.com/jef/streetmerchant/issues/766)) ([02d7c47](https://www.github.com/jef/streetmerchant/commit/02d7c47c4093ad71dfab31f93a9b1390f4cad8a0))
* **store:** support for canadacomputers ([#772](https://www.github.com/jef/streetmerchant/issues/772)) ([bd69e47](https://www.github.com/jef/streetmerchant/commit/bd69e471f7b47e7faf1d9858992d4157145518aa))


### Bug Fixes

* **amazon:** add 5800x and 5600x ([#802](https://www.github.com/jef/streetmerchant/issues/802)) ([167713b](https://www.github.com/jef/streetmerchant/commit/167713bb14080e5e1d2f77c7ee933918b6fd5cfc))
* **bestbuy-ca:** use proper selector ([#801](https://www.github.com/jef/streetmerchant/issues/801)) ([63d550c](https://www.github.com/jef/streetmerchant/commit/63d550ca63b9bfd534f37b7747a1fae057abedb4))
* **config:** correcting newline split for multiple user agents ([#824](https://www.github.com/jef/streetmerchant/issues/824)) ([f16a9fb](https://www.github.com/jef/streetmerchant/commit/f16a9fb331fd38590325f399bde369ffa17dbe10))
* **store:** generate links only for selected stores ([292e360](https://www.github.com/jef/streetmerchant/commit/292e3603fd527a4454639c9abb73bd80a8a95fae)), closes [#694](https://www.github.com/jef/streetmerchant/issues/694)


### Reverts

* correcting newline split for multiple user agents ([af631c8](https://www.github.com/jef/streetmerchant/commit/af631c86f1a74d810cabf2d0de1b7bb31d350095)), closes [#824](https://www.github.com/jef/streetmerchant/issues/824)
* pipeline changes ([efe0d64](https://www.github.com/jef/streetmerchant/commit/efe0d64f060e812fd9846073a13837a3f2a27862))

## [3.0.0](https://www.github.com/jef/streetmerchant/compare/v2.0.0...v3.0.0) (2020-11-12)


### ⚠ BREAKING CHANGES

* removed duplicated `Model`

### Features

* **amazon:** add more 3070s ([#719](https://www.github.com/jef/streetmerchant/issues/719)) ([dde9837](https://www.github.com/jef/streetmerchant/commit/dde9837829b9d52e43800a2ac826b5dd00f5a744))
* **coolmod:** add zen 3 ([#754](https://www.github.com/jef/streetmerchant/issues/754)) ([3270292](https://www.github.com/jef/streetmerchant/commit/32702929a97236d7dc51aa8f669140bc6d89aa9a))
* **discord:** add cart link to embed ([#762](https://www.github.com/jef/streetmerchant/issues/762)) ([ccb207a](https://www.github.com/jef/streetmerchant/commit/ccb207abeb43b8e85f32c5c0a7a02aa33b5cdd7c))
* **store:** support for kabum (amd and rtx 30 series) ([#727](https://www.github.com/jef/streetmerchant/issues/727)) ([23d061b](https://www.github.com/jef/streetmerchant/commit/23d061b387b540803a81212fee937d4c8c9b17ad))
* add option to disable auto add to cart ([#759](https://www.github.com/jef/streetmerchant/issues/759)) ([a5249ec](https://www.github.com/jef/streetmerchant/commit/a5249ecc7c3acc29a1f9d5285bd77397263cb135))
* fix metadata in logging, lint prettier, typed `Model`s ([#747](https://www.github.com/jef/streetmerchant/issues/747)) ([318e626](https://www.github.com/jef/streetmerchant/commit/318e626e78c18524c4d8624176ccb659c6b6d17c))
* **amazon-ca:** add ps5 ([#713](https://www.github.com/jef/streetmerchant/issues/713)) ([2570056](https://www.github.com/jef/streetmerchant/commit/25700567c57a303a9376351daf015741193350a3))
* **amd:** add 5950 config ([#685](https://www.github.com/jef/streetmerchant/issues/685)) ([31a3d8f](https://www.github.com/jef/streetmerchant/commit/31a3d8f7e068a17c72e0c296e176b93625bf9063))
* **amd:** add env vars and series filtering ([#696](https://www.github.com/jef/streetmerchant/issues/696)) ([df3b10b](https://www.github.com/jef/streetmerchant/commit/df3b10b9a5c2467e00cacb3ab93f818aafc95f02))
* **galaxus:** add zen 3 ([#729](https://www.github.com/jef/streetmerchant/issues/729)) ([4e086e9](https://www.github.com/jef/streetmerchant/commit/4e086e92675df97fe7f94c4e6d51b73d63e7effb))
* **mindfactory:** add ryzen 5900x, 5950x  ([#720](https://www.github.com/jef/streetmerchant/issues/720)) ([0362bf8](https://www.github.com/jef/streetmerchant/commit/0362bf808198d47e6aaa4a4838251f870d6dce4a))
* **notification:** add philips hue ([#681](https://www.github.com/jef/streetmerchant/issues/681)) ([c8a9b0b](https://www.github.com/jef/streetmerchant/commit/c8a9b0ba3ed581a9fef7ee2b459b1de84d976ff0))
* **notification:** support for multiple phone numbers ([#738](https://www.github.com/jef/streetmerchant/issues/738)) ([9f28fe5](https://www.github.com/jef/streetmerchant/commit/9f28fe5803fc71bf64d303cd1e7d20d0be8fecac))
* **ps5:** add console and digital edition ([#709](https://www.github.com/jef/streetmerchant/issues/709)) ([42ef7cf](https://www.github.com/jef/streetmerchant/commit/42ef7cfdced8ae3bc4192e245469798324bc42d3))
* **store:** add `arlt` and `amd-de` ([#721](https://www.github.com/jef/streetmerchant/issues/721)) ([38937f6](https://www.github.com/jef/streetmerchant/commit/38937f6880fcffb3a56ef17acd278f7c2f8d251c))
* **store:** add `game` store, add ps5 for uk stores ([#736](https://www.github.com/jef/streetmerchant/issues/736)) ([0128718](https://www.github.com/jef/streetmerchant/commit/0128718ba76b0c431d790cea7dd2183d10a02278))
* **store:** add ps5 to german stores ([#715](https://www.github.com/jef/streetmerchant/issues/715)) ([2291b8e](https://www.github.com/jef/streetmerchant/commit/2291b8eff5b23613d1233cc4c3ead83a42286d85))
* **store:** add xbox series x and s ([#732](https://www.github.com/jef/streetmerchant/issues/732)) ([314f533](https://www.github.com/jef/streetmerchant/commit/314f533f0bab0a466a276c5895d2f00bf86741f4))
* **store:** add zen 3 to german stores ([#702](https://www.github.com/jef/streetmerchant/issues/702)) ([71d5cb4](https://www.github.com/jef/streetmerchant/commit/71d5cb426179f5e587adeba1ec60f9a9233ec7b6))
* **store:** add zen 3 to more stores ([#698](https://www.github.com/jef/streetmerchant/issues/698)) ([760ddf5](https://www.github.com/jef/streetmerchant/commit/760ddf5d8523e28e294146643dda16e105176dff))
* **store:** Adds AM3 to microcenter ([#707](https://www.github.com/jef/streetmerchant/issues/707)) ([8a45905](https://www.github.com/jef/streetmerchant/commit/8a459056c5ba8a5a90de55cfbb08c4c89ccb19d3))
* **target:** add additional selector for 'ship it' ([#737](https://www.github.com/jef/streetmerchant/issues/737)) ([ab1fddf](https://www.github.com/jef/streetmerchant/commit/ab1fddf20c3a735b746befda0e21462701882645))
* add production scripts and better `Dockerfile` ([0d14500](https://www.github.com/jef/streetmerchant/commit/0d14500d5d8b93204bb99baf34dc9de745ae645d)), closes [#710](https://www.github.com/jef/streetmerchant/issues/710)
* bring back ascii banner, but make it configurable ([#703](https://www.github.com/jef/streetmerchant/issues/703)) ([0a680e9](https://www.github.com/jef/streetmerchant/commit/0a680e977b7904e7f62a8c1c0f3d533329b23fb0))
* memoryexpress website support ([#717](https://www.github.com/jef/streetmerchant/issues/717)) ([c02241c](https://www.github.com/jef/streetmerchant/commit/c02241c7528656c2c2fba9befc36628b4db7befb))


### Bug Fixes

* **docker:** copy web directory ([#745](https://www.github.com/jef/streetmerchant/issues/745)) ([0754fec](https://www.github.com/jef/streetmerchant/commit/0754feccaea2ce2dd37e7caeed3fa0b53c0cdcb3))
* **walmart:** ps5 digital url ([#763](https://www.github.com/jef/streetmerchant/issues/763)) ([841647c](https://www.github.com/jef/streetmerchant/commit/841647c06c488cf6b9d6d6af3c3eb6c8dbadab7e))
* environment variables to match ryzen cpus ([5db8348](https://www.github.com/jef/streetmerchant/commit/5db83484f301d48509205d9d0b5146c5d7114d26))
* revert to 14.15.0 until 15 is stable for `tsc` ([2955ea7](https://www.github.com/jef/streetmerchant/commit/2955ea70ab59c1b0dd82ec506c7a03952f81ea01)), closes [#691](https://www.github.com/jef/streetmerchant/issues/691)


### Code Refactoring

* removed duplicated `Model` ([d19dd5a](https://www.github.com/jef/streetmerchant/commit/d19dd5a404f2a585dd80f4d23d0e3af2d435ae85))

## [2.0.0](https://www.github.com/jef/streetmerchant/compare/v1.7.0...v2.0.0) (2020-11-05)


### ⚠ BREAKING CHANGES

* update naming to `streetmerchant`

### Features

* **asus:** realtime api ([#675](https://www.github.com/jef/streetmerchant/issues/675)) ([018784e](https://www.github.com/jef/streetmerchant/commit/018784e653831103465e8278db4929e04c52397c))
* **newegg-ca:** realtime api ([#674](https://www.github.com/jef/streetmerchant/issues/674)) ([3c5407f](https://www.github.com/jef/streetmerchant/commit/3c5407f5cfc635ae989101131188e999faa01d3c))


### Bug Fixes

* **filterBrandsSeriesModels:** always loop all stores ([#680](https://www.github.com/jef/streetmerchant/issues/680)) ([6ced13e](https://www.github.com/jef/streetmerchant/commit/6ced13e993f7b30bbdda5dc7615e895bac3e4f77))


### Miscellaneous Chores

* update naming to `streetmerchant` ([3f9b3c6](https://www.github.com/jef/streetmerchant/commit/3f9b3c6017431074d59550a6cd61c80a8897a9ae))

## [1.7.0](https://www.github.com/jef/streetmerchant/compare/v1.6.0...v1.7.0) (2020-11-03)


### Features

* add deprecation notices ([601742c](https://www.github.com/jef/streetmerchant/commit/601742cf2c0b5ccf0131e4c4e904ad4037d80a8d))
* newegg realtime api ([#664](https://www.github.com/jef/streetmerchant/issues/664)) ([5b3e95a](https://www.github.com/jef/streetmerchant/commit/5b3e95acdf2f427a6098f15b9fbe65e88354a678))


### Bug Fixes

* **banner:** add version to docker image ([#649](https://www.github.com/jef/streetmerchant/issues/649)) ([1d2a33b](https://www.github.com/jef/streetmerchant/commit/1d2a33b1d765fece9d1c9bf7d548818d1f0c8d92))

## [1.6.0](https://www.github.com/jef/streetmerchant/compare/v1.5.0...v1.6.0) (2020-10-29)


### Features

* add series to Discord webhook ([#618](https://www.github.com/jef/streetmerchant/issues/618)) ([273d058](https://www.github.com/jef/streetmerchant/commit/273d05841451ed896f1d505bcd24f2230a143d3a))
* **api:** add rudimentary web control panel ([#183](https://www.github.com/jef/streetmerchant/issues/183)) ([373d1a9](https://www.github.com/jef/streetmerchant/commit/373d1a973865b14b5753517aa70eabf85b136d94))
* **store:** add founders editions to notebooksbilliger.de ([#593](https://www.github.com/jef/streetmerchant/issues/593)) ([2e5db7a](https://www.github.com/jef/streetmerchant/commit/2e5db7af04e6ce79660477d8deb6636ec2e7845e))
* **store:** add max price containers to multiple stores ([#579](https://www.github.com/jef/streetmerchant/issues/579)) ([f9c4c25](https://www.github.com/jef/streetmerchant/commit/f9c4c258748ffd3735f1e7385bde15b6112a1ca7))
* **store:** add new cards to german web shops ([#597](https://www.github.com/jef/streetmerchant/issues/597)) ([699de57](https://www.github.com/jef/streetmerchant/commit/699de573f6579b59ba2c65cc2bf4dd6ccba3c863))
* **store:** Add PCComponentes and Amazon-ES Stores. ([#558](https://www.github.com/jef/streetmerchant/issues/558)) ([062201f](https://www.github.com/jef/streetmerchant/commit/062201f092c7a271202f27e7297b8eb9d7269c02))
* **store:** support for azerty ([#557](https://www.github.com/jef/streetmerchant/issues/557)) ([58416e1](https://www.github.com/jef/streetmerchant/commit/58416e1994006cc2e4055937c675e0f9191f6339))
* **store:** support for coolmod ([#605](https://www.github.com/jef/streetmerchant/issues/605)) ([c1dda4f](https://www.github.com/jef/streetmerchant/commit/c1dda4f9871988fad43d79f3bfe65f7c7860b9f7))
* add `meta` to logger ([#437](https://www.github.com/jef/streetmerchant/issues/437)) ([ae6bc86](https://www.github.com/jef/streetmerchant/commit/ae6bc86bcb75c154a2a68adda324f34f18281700))
* add alternate.nl support ([#552](https://www.github.com/jef/streetmerchant/issues/552)) ([aca6523](https://www.github.com/jef/streetmerchant/commit/aca65233339ddbbcc1dbd06f9011d6d44c6650cf))
* add asus-de store and asus 3080 tuf/oc to amazon-de ([#436](https://www.github.com/jef/streetmerchant/issues/436)) ([b4d8733](https://www.github.com/jef/streetmerchant/commit/b4d8733d1823e2fa5d3a1b80d2d4218bfa737cd7))
* add caseking and proshop-de store ([#521](https://www.github.com/jef/streetmerchant/issues/521)) ([1aaa102](https://www.github.com/jef/streetmerchant/commit/1aaa102c06281b60da593d04ced01f8b20a37a3b))
* add coolblue store ([#482](https://www.github.com/jef/streetmerchant/issues/482)) ([5c61333](https://www.github.com/jef/streetmerchant/commit/5c61333df00c0c30f04e4aced01a498c5816ad58))
* add german stores ([#462](https://www.github.com/jef/streetmerchant/issues/462)) ([85a07dc](https://www.github.com/jef/streetmerchant/commit/85a07dc0dc6a8dfe2aba1d4ea3e4cde6ec083086))
* add incognito mode ([#534](https://www.github.com/jef/streetmerchant/issues/534)) ([2b6457e](https://www.github.com/jef/streetmerchant/commit/2b6457e8409658b843204fa0aeafb00d48f9e53e))
* add link series to error message for better context ([#265](https://www.github.com/jef/streetmerchant/issues/265)) ([332b4a8](https://www.github.com/jef/streetmerchant/commit/332b4a8246320e458729c0b58c310d290df12530))
* Add PagerDuty Integration ([#565](https://www.github.com/jef/streetmerchant/issues/565)) ([11ee0bf](https://www.github.com/jef/streetmerchant/commit/11ee0bf1a3e2d0d550d2731f9de9e178c382ea1f))
* add proshop-dk ([#524](https://www.github.com/jef/streetmerchant/issues/524)) ([dc2fcf5](https://www.github.com/jef/streetmerchant/commit/dc2fcf5ab4dba8be459bd5aa6a41e3e097205d45))
* add support for multiple browser user agents ([#547](https://www.github.com/jef/streetmerchant/issues/547)) ([10a81dc](https://www.github.com/jef/streetmerchant/commit/10a81dcbd54557652537cb641cbbd727d39e34e5))
* add uk stores ([#455](https://www.github.com/jef/streetmerchant/issues/455)) ([b9b6b55](https://www.github.com/jef/streetmerchant/commit/b9b6b55c29d11f48b683816e5b8c1cab127ed5fd))
* allow filtering per model by a specific series ([#595](https://www.github.com/jef/streetmerchant/issues/595)) ([a42418f](https://www.github.com/jef/streetmerchant/commit/a42418f814dcd91354c136288d4c6a24e03a168d))
* optional per store min and max page sleep time ([#576](https://www.github.com/jef/streetmerchant/issues/576)) ([503d76f](https://www.github.com/jef/streetmerchant/commit/503d76f3c7d01368fc978af4ab02924d3d036ac0))
* **notification:** add `to` field for email ([#327](https://www.github.com/jef/streetmerchant/issues/327)) ([8828dd1](https://www.github.com/jef/streetmerchant/commit/8828dd15cd08959cd434bd256e8eac474dd17c49))
* **store:** add ttl for `scan` ([#555](https://www.github.com/jef/streetmerchant/issues/555)) ([4847725](https://www.github.com/jef/streetmerchant/commit/4847725d3a54d2f4dd0c349ff0ad80eb4bc4e9e3))
* add rog strix oc to amazon-de ([#471](https://www.github.com/jef/streetmerchant/issues/471)) ([e5909c5](https://www.github.com/jef/streetmerchant/commit/e5909c532da1c8b731e9835bffd8f31b76550d4d))
* add support for specifying smtp server ([#458](https://www.github.com/jef/streetmerchant/issues/458)) ([160ae37](https://www.github.com/jef/streetmerchant/commit/160ae37d7bee4f0323cb939566d586f1300aece6))
* allow multiple microcenter locations ([#487](https://www.github.com/jef/streetmerchant/issues/487)) ([2b0eab6](https://www.github.com/jef/streetmerchant/commit/2b0eab656d81314ce7d05064662ec138407550c3))
* clear cookies and cache ([#515](https://www.github.com/jef/streetmerchant/issues/515)) ([1f89945](https://www.github.com/jef/streetmerchant/commit/1f89945c5746befb2131381a358efdf8ac530e0c)), closes [#417](https://www.github.com/jef/streetmerchant/issues/417)
* max price per series ([#451](https://www.github.com/jef/streetmerchant/issues/451)) ([8adc07a](https://www.github.com/jef/streetmerchant/commit/8adc07a03e411dd536bebfdc7270db4bbf8ddb34))
* mqtt alerts ([#538](https://www.github.com/jef/streetmerchant/issues/538)) ([68ff5bf](https://www.github.com/jef/streetmerchant/commit/68ff5bf836c63c8e14d02c06777e02e64a6a0f38))
* twitch chat notification, multiple telegram chat ids and german web shop overhaul ([#528](https://www.github.com/jef/streetmerchant/issues/528)) ([675f13a](https://www.github.com/jef/streetmerchant/commit/675f13abb892d1158c92c41e3d57049313a5e0b8))
* **docker:** add docker and publish images to ghcr ([#411](https://www.github.com/jef/streetmerchant/issues/411)) ([c857985](https://www.github.com/jef/streetmerchant/commit/c857985a6d3736287976caf5b173f19046306465))
* **notification:** add at&t prepaid carrier ([#425](https://www.github.com/jef/streetmerchant/issues/425)) ([eb9d082](https://www.github.com/jef/streetmerchant/commit/eb9d082d178a42e35789ba822cfae7b35c0413c1))
* **notification:** add pushover priority setting ([#186](https://www.github.com/jef/streetmerchant/issues/186)) ([f277172](https://www.github.com/jef/streetmerchant/commit/f2771721914a20619833df8ccb2ac44298687b4d))
* **notification:** add Twillio notification provider ([#344](https://www.github.com/jef/streetmerchant/issues/344)) ([f2f8d81](https://www.github.com/jef/streetmerchant/commit/f2f8d81498d1acfb9359f4a690962042ec20d166))
* **store:** add `pny` ([#295](https://www.github.com/jef/streetmerchant/issues/295)) ([f6760d3](https://www.github.com/jef/streetmerchant/commit/f6760d3c65d60eae9e4b1e0fdba34e814f446a4c))
* **store:** add 3090s to amazon-ca ([#274](https://www.github.com/jef/streetmerchant/issues/274)) ([e992cf4](https://www.github.com/jef/streetmerchant/commit/e992cf4db85f045fc8d03c9b93286fb72bad1061))
* **store:** add additional cards to all stores ([#286](https://www.github.com/jef/streetmerchant/issues/286)) ([d25a643](https://www.github.com/jef/streetmerchant/commit/d25a643425020fa3f7cd48972360ede17501afeb))
* **store:** add amazon cards and `cartUrl`s ([#284](https://www.github.com/jef/streetmerchant/issues/284)) ([d69189f](https://www.github.com/jef/streetmerchant/commit/d69189f12c893fb6d88b198d802ff8e36a69bc88))
* **store:** add asus strix oc to asus store ([#385](https://www.github.com/jef/streetmerchant/issues/385)) ([e55398e](https://www.github.com/jef/streetmerchant/commit/e55398e789d52def6e15d1e5e10f56cdf5ea5bea))
* **store:** add evga 3090 to newegg canada ([#396](https://www.github.com/jef/streetmerchant/issues/396)) ([313d176](https://www.github.com/jef/streetmerchant/commit/313d176848a25f183334db8926ac0ec445a2c481))
* **store:** add ftw3 ultra to microcenter ([#448](https://www.github.com/jef/streetmerchant/issues/448)) ([5109227](https://www.github.com/jef/streetmerchant/commit/5109227e8899f57b828b157309a76c397c872559))
* **store:** add gamestop ([#390](https://www.github.com/jef/streetmerchant/issues/390)) ([7148451](https://www.github.com/jef/streetmerchant/commit/7148451b66e97f4f7dcdcc86ce06ba8712211bd5))
* **store:** add models to bestbuy ([#421](https://www.github.com/jef/streetmerchant/issues/421)) ([4085136](https://www.github.com/jef/streetmerchant/commit/4085136269b00f6bc5c8414836de8310dfec4166))
* **store:** add rog-strix-3080 to newegg-ca ([#489](https://www.github.com/jef/streetmerchant/issues/489)) ([207bc41](https://www.github.com/jef/streetmerchant/commit/207bc411ed240cd9150e018b21e735ba08a4d134))
* add `norway` to `nvidia-api` ([#304](https://www.github.com/jef/streetmerchant/issues/304)) ([eda6c85](https://www.github.com/jef/streetmerchant/commit/eda6c85fc03a70c5933308e96c572a480bb6c8a0))
* configurable status code behaviours ([#340](https://www.github.com/jef/streetmerchant/issues/340)) ([3b7487e](https://www.github.com/jef/streetmerchant/commit/3b7487e97ac9d93344403f50153f2de6243b1f0d))
* enhanced lookup behaviour ([#270](https://www.github.com/jef/streetmerchant/issues/270)) ([b868d1a](https://www.github.com/jef/streetmerchant/commit/b868d1a4833a8ec5ac1c79481530d75cd0c4b01e))
* in stock wait time per link now ([c7a716f](https://www.github.com/jef/streetmerchant/commit/c7a716f981976a76afe61a4d985bd6fe4343595b))
* low bandwidth mode ([#294](https://www.github.com/jef/streetmerchant/issues/294)) ([0aa7ab5](https://www.github.com/jef/streetmerchant/commit/0aa7ab596c907ce72c188eb4b1acdee088307437))
* max price filtering ([#383](https://www.github.com/jef/streetmerchant/issues/383)) ([fd294d2](https://www.github.com/jef/streetmerchant/commit/fd294d2baa06a1c0a68852497889a0412dea492e))
* **store:** adds aorus master 3080 to newegg ([#402](https://www.github.com/jef/streetmerchant/issues/402)) ([fddc002](https://www.github.com/jef/streetmerchant/commit/fddc0021d36e4d0a9dacccc546da8260684f0eeb))
* retry logic for nvidia session token and adding to cart ([#347](https://www.github.com/jef/streetmerchant/issues/347)) ([1bac1b9](https://www.github.com/jef/streetmerchant/commit/1bac1b928d401a819698848f3367edf54836b26f))
* support for proxy server ([#352](https://www.github.com/jef/streetmerchant/issues/352)) ([fdcd787](https://www.github.com/jef/streetmerchant/commit/fdcd787f91f26229db23e2291e8922b947007902))
* **store:** nvidia debug card for "product details" page ([#337](https://www.github.com/jef/streetmerchant/issues/337)) ([5b8d774](https://www.github.com/jef/streetmerchant/commit/5b8d774b7c7d31d6ba6fc43be3ea7b16a87d2e49))


### Bug Fixes

* `amazon.{nl,de}` test urls ([#345](https://www.github.com/jef/streetmerchant/issues/345)) ([589fbbc](https://www.github.com/jef/streetmerchant/commit/589fbbcd34393ceb2bd7c0a8ac391c54e14a21be))
* `envOrNumber` behavior ([#364](https://www.github.com/jef/streetmerchant/issues/364)) ([7d8897c](https://www.github.com/jef/streetmerchant/commit/7d8897cd9fb9ae0db796fd85da3f2b9d1a9f73af))
* `nvidia-api` ([#314](https://www.github.com/jef/streetmerchant/issues/314)) ([8d8e5b5](https://www.github.com/jef/streetmerchant/commit/8d8e5b587d2279a95d3e7837a99bea8c5990a477))
* add `amazon-nl`, captcha `amazon-de`, add ftw3 `newegg` ([#293](https://www.github.com/jef/streetmerchant/issues/293)) ([a2983eb](https://www.github.com/jef/streetmerchant/commit/a2983eb54c419ba3a56abf80d316ea136a05e0fa))
* add status code `429` to bandh `backOffStatusCodes` ([#404](https://www.github.com/jef/streetmerchant/issues/404)) ([7a981e7](https://www.github.com/jef/streetmerchant/commit/7a981e745673f2b12d48d7eed71fc34a6e4ba5b2))
* add support for stores label text to have uppercase letters ([#526](https://www.github.com/jef/streetmerchant/issues/526)) ([5ea7cc4](https://www.github.com/jef/streetmerchant/commit/5ea7cc4ca45c506d2b98d4b643b44ca4ede1d7a9))
* asus store links ([#573](https://www.github.com/jef/streetmerchant/issues/573)) ([f6db348](https://www.github.com/jef/streetmerchant/commit/f6db3489b8b8a737dfc425880703928d5bc8916d))
* bestbuy label container selector precision ([#491](https://www.github.com/jef/streetmerchant/issues/491)) ([cbc3b0b](https://www.github.com/jef/streetmerchant/commit/cbc3b0b025469e9882ba8267f18f909c08c6c931))
* corrected norway locales ([#356](https://www.github.com/jef/streetmerchant/issues/356)) ([d2476dd](https://www.github.com/jef/streetmerchant/commit/d2476ddb08606545b32b9676e2d299d57ec5cb6a))
* cyclical dependencies ([ed970fc](https://www.github.com/jef/streetmerchant/commit/ed970fc397210eb6ff684c7e82c79eb685a5d0d9)), closes [#468](https://www.github.com/jef/streetmerchant/issues/468)
* denver `microcenter` name ([#296](https://www.github.com/jef/streetmerchant/issues/296)) ([349f55d](https://www.github.com/jef/streetmerchant/commit/349f55d3603517b5741fce6ac42b29141816ea79))
* dutch stores components ([#513](https://www.github.com/jef/streetmerchant/issues/513)) ([586029c](https://www.github.com/jef/streetmerchant/commit/586029c92aa19bdddcc85b7a837bb7a16bb1d28d))
* gamestop false positives ([#395](https://www.github.com/jef/streetmerchant/issues/395)) ([d3bb507](https://www.github.com/jef/streetmerchant/commit/d3bb507edca112124115ed88fb03cf14440d95ef))
* in stock wait time ([#325](https://www.github.com/jef/streetmerchant/issues/325)) ([07bd246](https://www.github.com/jef/streetmerchant/commit/07bd246e876cd27df1b5019af5ee8613bb5368f0)), closes [#315](https://www.github.com/jef/streetmerchant/issues/315)
* max price getter updated to match .env ([#516](https://www.github.com/jef/streetmerchant/issues/516)) ([32f114b](https://www.github.com/jef/streetmerchant/commit/32f114b23527ee247c84c081a2cd0264de3b4847)), closes [#514](https://www.github.com/jef/streetmerchant/issues/514) [#510](https://www.github.com/jef/streetmerchant/issues/510)
* page sleep ([#586](https://www.github.com/jef/streetmerchant/issues/586)) ([a2af30b](https://www.github.com/jef/streetmerchant/commit/a2af30b70334cdbbfa51140d5de23a2d6b8429c8)), closes [#594](https://www.github.com/jef/streetmerchant/issues/594) [#576](https://www.github.com/jef/streetmerchant/issues/576)
* remove 3090 drid for DK/FI regions ([#361](https://www.github.com/jef/streetmerchant/issues/361)) ([f1d22d1](https://www.github.com/jef/streetmerchant/commit/f1d22d1684c8e70f09acd9978e6ea802d7224c8b))
* trim strings from comma-separated values ([#472](https://www.github.com/jef/streetmerchant/issues/472)) ([f7ed865](https://www.github.com/jef/streetmerchant/commit/f7ed86506b4e76d5bc20787068be83a44ec485b5))
* typo in maxPrice for 3090 ([#496](https://www.github.com/jef/streetmerchant/issues/496)) ([e073590](https://www.github.com/jef/streetmerchant/commit/e0735903b7b4b0d542dbbd76b9a860b1eca24e96))
* update gigabyte model `vision oc` ([#550](https://www.github.com/jef/streetmerchant/issues/550)) ([4fefe22](https://www.github.com/jef/streetmerchant/commit/4fefe22a907094fa39af5b4f2e3f8f3fe6897115))
* update new additions with web panel and sleep operations ([#606](https://www.github.com/jef/streetmerchant/issues/606)) ([61a23fe](https://www.github.com/jef/streetmerchant/commit/61a23fe9782223dc067dbc8251c3b09adbca0a43))
* update pushbullet import to match package ([#637](https://www.github.com/jef/streetmerchant/issues/637)) ([d7360f7](https://www.github.com/jef/streetmerchant/commit/d7360f71ef1a076713246ad2832ca58e7163e492))
* **env:** default `LOG_LEVEL` ([9636572](https://www.github.com/jef/streetmerchant/commit/9636572c7de36f7ac6800ba31ac60fcd7bd2fd03))
* **notification:** discord false triggers ([#346](https://www.github.com/jef/streetmerchant/issues/346)) ([3b90bbb](https://www.github.com/jef/streetmerchant/commit/3b90bbbe5d751003a39823e9113eaee8cbfcf1a2))
* **notification:** sms subject output ([#298](https://www.github.com/jef/streetmerchant/issues/298)) ([03755d5](https://www.github.com/jef/streetmerchant/commit/03755d5eb117ac14797e0180c74f50b401e50cb5))
* **notifications:** twilio client creation ([#349](https://www.github.com/jef/streetmerchant/issues/349)) ([5414b24](https://www.github.com/jef/streetmerchant/commit/5414b249a6f938615cfad02ca22c171a5f86e127))
* **store:** gamestop `label.inStock` ([9e7976d](https://www.github.com/jef/streetmerchant/commit/9e7976df5778a953c4fb6ca7553773655c1f4127))
* **store:** pccomponents model normalization ([#563](https://www.github.com/jef/streetmerchant/issues/563)) ([699e77d](https://www.github.com/jef/streetmerchant/commit/699e77d960b17dcb50378975a1913b0badeabfcc))
* updating amazon test model card to an in stock product ([#492](https://www.github.com/jef/streetmerchant/issues/492)) ([81daa7c](https://www.github.com/jef/streetmerchant/commit/81daa7c5596ab23bd9e6aac29fa63ee09e136827))
* **config:** `MAX_PRICE` quotations ([#426](https://www.github.com/jef/streetmerchant/issues/426)) ([b7e5941](https://www.github.com/jef/streetmerchant/commit/b7e5941a9598a09afabbb79c5636b768345009a3))
* **store:** container names on `nvidia` ([#333](https://www.github.com/jef/streetmerchant/issues/333)) ([772de90](https://www.github.com/jef/streetmerchant/commit/772de900a1386e9635d139e152fe86366404ded4))
* **store:** update `inStock` and `maxPrice` for newegg, newegg-ca ([#433](https://www.github.com/jef/streetmerchant/issues/433)) ([628cab1](https://www.github.com/jef/streetmerchant/commit/628cab1b605e4363c8dd5ad43476292ecb12db74)), closes [#400](https://www.github.com/jef/streetmerchant/issues/400)


### Reverts

* reduce false-positive during ci/cd ([79b9bfe](https://www.github.com/jef/streetmerchant/commit/79b9bfe9a83858117f7a58b4b8b1a1569d80c442))

## [1.5.0](https://www.github.com/jef/streetmerchant/compare/v1.4.0...v1.5.0) (2020-09-24)


### Features

* filter models ([#261](https://www.github.com/jef/streetmerchant/issues/261)) ([e1b34a9](https://www.github.com/jef/streetmerchant/commit/e1b34a9ccfa45fa1a11da9af9074059b6084904b))
* **log:** colors for console logs ([#207](https://www.github.com/jef/streetmerchant/issues/207)) ([0ad67fe](https://www.github.com/jef/streetmerchant/commit/0ad67fe20453898ce0a6b5faff00062735411119))
* **notification:** add desktop notifications ([#140](https://www.github.com/jef/streetmerchant/issues/140)) ([722eaf3](https://www.github.com/jef/streetmerchant/commit/722eaf3cd680c4600b79f842c6c5acdb9e51ad71))
* **notification:** add pushbullet, add url with notifications ([#226](https://www.github.com/jef/streetmerchant/issues/226)) ([74490ea](https://www.github.com/jef/streetmerchant/commit/74490eae3ab30de7d7a708d5dd970e070f27f2ea))
* **notification:** twitter integration ([#224](https://www.github.com/jef/streetmerchant/issues/224)) ([908ed35](https://www.github.com/jef/streetmerchant/commit/908ed358826f9de530f5892ded1a54964a304d15))
* **store:** add `bannedSeller` label for stores ([#173](https://www.github.com/jef/streetmerchant/issues/173)) ([71c6774](https://www.github.com/jef/streetmerchant/commit/71c6774511f7ba13d34d2e40b69abf52d06e6225))
* **store:** add amazon-de ([#167](https://www.github.com/jef/streetmerchant/issues/167)) ([8a70f14](https://www.github.com/jef/streetmerchant/commit/8a70f147438584cc334710bc66220d05eb32fcbd))
* **store:** add bestbuy.ca ([#229](https://www.github.com/jef/streetmerchant/issues/229)) ([22fd22f](https://www.github.com/jef/streetmerchant/commit/22fd22fe743d3e286eae3430aecd6e7a0a5de8c0))
* **store:** add evga eu ([#172](https://www.github.com/jef/streetmerchant/issues/172)) ([605bdd7](https://www.github.com/jef/streetmerchant/commit/605bdd7ca73c585734f6c5df1a86f4fbfbff9163))
* **store:** add evga model ([#220](https://www.github.com/jef/streetmerchant/issues/220)) ([190388c](https://www.github.com/jef/streetmerchant/commit/190388cfe4a5e3f19abccd0ff786f654b9a04d2f))
* **store:** add microcenter store location config ([#215](https://www.github.com/jef/streetmerchant/issues/215)) ([d6a27c9](https://www.github.com/jef/streetmerchant/commit/d6a27c988c7b1011c7a10084d8283a60ed8aea5c))
* **stores:** add 3090 for bestbuy, newegg ([#249](https://www.github.com/jef/streetmerchant/issues/249)) ([dd45dba](https://www.github.com/jef/streetmerchant/commit/dd45dba82cb86f7e7664298dd202b93bbbd46d9f))
* **stores:** add 3090s for amazon-ca, bestbuy-ca, newegg-ca ([#258](https://www.github.com/jef/streetmerchant/issues/258)) ([482fb58](https://www.github.com/jef/streetmerchant/commit/482fb58cbfde6f95fb6f77de790d76e6aa2a5926))
* add chromium sandbox skipping ([#209](https://www.github.com/jef/streetmerchant/issues/209)) ([2065680](https://www.github.com/jef/streetmerchant/commit/20656805c1259637bb3a4db465a8d16d4780296a))
* deprecate nvidia (api), add 3080 add 3090 ([9f470f0](https://www.github.com/jef/streetmerchant/commit/9f470f06e9e9fb605d340c0b0f9016d7288e8c0b))
* invert logic ([#141](https://www.github.com/jef/streetmerchant/issues/141)) ([6608a79](https://www.github.com/jef/streetmerchant/commit/6608a79769ff03543ab4ed2f2cead3410d7d7e99))
* multiple discord roles and webhooks, qol for envs ([#260](https://www.github.com/jef/streetmerchant/issues/260)) ([8913879](https://www.github.com/jef/streetmerchant/commit/8913879593252c9c83020b2e2c46bad7537b2a20))
* **store:** add newegg.ca ([#160](https://www.github.com/jef/streetmerchant/issues/160)) ([76f5849](https://www.github.com/jef/streetmerchant/commit/76f584988979a40269fd3641e996800a63b4b163)), closes [#159](https://www.github.com/jef/streetmerchant/issues/159)
* **store:** add office depot ([#157](https://www.github.com/jef/streetmerchant/issues/157)) ([0df2dcf](https://www.github.com/jef/streetmerchant/commit/0df2dcfbd48235fba7126d96cd912634c5b4fdd9))
* **store:** add zotac store ([#214](https://www.github.com/jef/streetmerchant/issues/214)) ([7875855](https://www.github.com/jef/streetmerchant/commit/78758552b22e608dbdf3e76397f5b5efb893fef5))
* add delay on captcha to try and evade faster ([#119](https://www.github.com/jef/streetmerchant/issues/119)) ([4f83b3b](https://www.github.com/jef/streetmerchant/commit/4f83b3b233657841a4068a8ff9dd6c8dbff631c0))
* bestbuy bypass international splash, newegg add to cart ([#153](https://www.github.com/jef/streetmerchant/issues/153)) ([133a54f](https://www.github.com/jef/streetmerchant/commit/133a54fa170bb16dd26b0d72b1a02c56b3851b7f))
* card series filter, fix: newegg `oosLabels` ([#120](https://www.github.com/jef/streetmerchant/issues/120)) ([252459d](https://www.github.com/jef/streetmerchant/commit/252459d5d3de2b8cb25deee9ae318108e3dda2be))
* custom user agent ([#121](https://www.github.com/jef/streetmerchant/issues/121)) ([d9be3fe](https://www.github.com/jef/streetmerchant/commit/d9be3fe6183eaa9694b186c7a75e1f28bb31dace))
* include screenshot for emails + sms notifications ([#144](https://www.github.com/jef/streetmerchant/issues/144)) ([7191e03](https://www.github.com/jef/streetmerchant/commit/7191e03a80e577b59b2861289aa658cfa0ffc0fa))
* load puppeteer faster, run stores in parallel ([#83](https://www.github.com/jef/streetmerchant/issues/83)) ([d1a5aa1](https://www.github.com/jef/streetmerchant/commit/d1a5aa1f02ff0a8f293b93e3c078b5943908a95b))
* set country in config, login to nvidia when starting ([#162](https://www.github.com/jef/streetmerchant/issues/162)) ([ebd6091](https://www.github.com/jef/streetmerchant/commit/ebd6091a09fb5e52a66742767ae4b58323cd7447))
* temporarily pause requests if store has stock ([#147](https://www.github.com/jef/streetmerchant/issues/147)) ([6413144](https://www.github.com/jef/streetmerchant/commit/6413144c1cae89f33f852cc93870b407a784f2bb))
* update for complex add to cart, fix nvidia ([#108](https://www.github.com/jef/streetmerchant/issues/108)) ([3ea146d](https://www.github.com/jef/streetmerchant/commit/3ea146da14ea40d145ccfc05436beeb0a9fed8d9))
* **notification:** discord integration ([#82](https://www.github.com/jef/streetmerchant/issues/82)) ([a3fc07d](https://www.github.com/jef/streetmerchant/commit/a3fc07daf0a3f33f18e03d4cfc13d3477a9c4fa0))
* **scraping:** change lookup impl, add randomize sleep ([#110](https://www.github.com/jef/streetmerchant/issues/110)) ([dc0f710](https://www.github.com/jef/streetmerchant/commit/dc0f7106749b0afa0ff1c91cabb90b65be30e909))
* **store:** add adorama ([#104](https://www.github.com/jef/streetmerchant/issues/104)) ([5b91065](https://www.github.com/jef/streetmerchant/commit/5b910650430ad4806b22722efa9a013e72ea47e7))
* **store:** add asus ([#102](https://www.github.com/jef/streetmerchant/issues/102)) ([a501cf7](https://www.github.com/jef/streetmerchant/commit/a501cf703bb05f47af6240a4b16a3dc4dcf3baf5))


### Bug Fixes

* **store:** adorama captcha config ([#234](https://www.github.com/jef/streetmerchant/issues/234)) ([9a53917](https://www.github.com/jef/streetmerchant/commit/9a539175860f98de3b023009f751e59d94f0aaef))
* color logs and notification ([76b28a6](https://www.github.com/jef/streetmerchant/commit/76b28a6dbdf5480c12a8c82b031c3f2880d17b11))
* **notification:** change discord ping visibility ([#168](https://www.github.com/jef/streetmerchant/issues/168)) ([9675c5b](https://www.github.com/jef/streetmerchant/commit/9675c5b8d61226db4652964e7f1e7399bb82d04e))
* **store:** bandh removed cards ([#201](https://www.github.com/jef/streetmerchant/issues/201)) ([6409646](https://www.github.com/jef/streetmerchant/commit/6409646d57bf2b2bb5a4bcf8239740abed8edafb))
* `rateLimitTimeout` not being defaulted ([#106](https://www.github.com/jef/streetmerchant/issues/106)) ([28947be](https://www.github.com/jef/streetmerchant/commit/28947be9bc8981d7a45a5d0e69c18d039fcd9ed3))
* check response for rate limiting ([#58](https://www.github.com/jef/streetmerchant/issues/58)) ([#98](https://www.github.com/jef/streetmerchant/issues/98)) ([b7d9462](https://www.github.com/jef/streetmerchant/commit/b7d9462e794ef3961fb57c79ef8f66e77d25d20a))
* keep single `Store` from draining ([e819e46](https://www.github.com/jef/streetmerchant/commit/e819e46116d4e0b067a59791094b5cfbd2d7cd45))
* memory leak due to adblocker ([#139](https://www.github.com/jef/streetmerchant/issues/139)) ([0f6e570](https://www.github.com/jef/streetmerchant/commit/0f6e570cc817dfc10bcddc5743a0faf3b1489270))
* **nvidia:** false positives ([#132](https://www.github.com/jef/streetmerchant/issues/132)) ([a75d214](https://www.github.com/jef/streetmerchant/commit/a75d214dd555d5e0388cb54b15be324cc25b6a15))
* newegg out-of-stock ([#124](https://www.github.com/jef/streetmerchant/issues/124)) ([770a13a](https://www.github.com/jef/streetmerchant/commit/770a13ac3559401b430547908d1df014582c1e37))
* newegg out-of-stock labels ([#134](https://www.github.com/jef/streetmerchant/issues/134)) ([19c8f18](https://www.github.com/jef/streetmerchant/commit/19c8f188c796258c469c2b4c6461fc5da3907a47))
* **notification:** wrong condition for sounds playing ([#91](https://www.github.com/jef/streetmerchant/issues/91)) ([103d96d](https://www.github.com/jef/streetmerchant/commit/103d96dc81d6fd097fcdbed5bdd7487d7d73bf6e))
* **store:** false positives for nvidia. ([#85](https://www.github.com/jef/streetmerchant/issues/85)) ([c65fa04](https://www.github.com/jef/streetmerchant/commit/c65fa04666775060532e28076a0b4af50f8dd30b))

## [1.4.0](https://www.github.com/jef/streetmerchant/compare/v1.3.0...v1.4.0) (2020-09-19)


### Features

* **notification:** add mint mobile carrier ([#70](https://www.github.com/jef/streetmerchant/issues/70)) ([8aba7ec](https://www.github.com/jef/streetmerchant/commit/8aba7ecbdb0bfce06257b7b9066e8fccbd82e47e))
* **notification:** add pushover ([#55](https://www.github.com/jef/streetmerchant/issues/55)) ([c85658b](https://www.github.com/jef/streetmerchant/commit/c85658bf82fdf360e5e9d8345eaa846f0572e67c))
* **notification:** add telegram ([#71](https://www.github.com/jef/streetmerchant/issues/71)) ([393d5f6](https://www.github.com/jef/streetmerchant/commit/393d5f689887bf1d6f30a37eea163b2e6bbd4efa))
* **notification:** add telus sms ([6be74a1](https://www.github.com/jef/streetmerchant/commit/6be74a19f3d3f999145d17ac8e91c59db2502071))
* **store:** add amazon.ca, fix timeout ([#75](https://www.github.com/jef/streetmerchant/issues/75)) ([d4de1a4](https://www.github.com/jef/streetmerchant/commit/d4de1a4638e903eb9518354ab6fb2f8c4befc347))
* webpage toggle, sound notification, fix evga links ([#52](https://www.github.com/jef/streetmerchant/issues/52)) ([a217409](https://www.github.com/jef/streetmerchant/commit/a21740942bbbbe967948062fa06cfc82c31eb755))


### Performance Improvements

* browser abstraction ([#68](https://www.github.com/jef/streetmerchant/issues/68)) ([#81](https://www.github.com/jef/streetmerchant/issues/81)) ([ebbdfe3](https://www.github.com/jef/streetmerchant/commit/ebbdfe3f6378516112f4b6e004bbd6ccf13af685))

## [1.3.0](https://www.github.com/jef/streetmerchant/compare/v1.2.0...v1.3.0) (2020-09-19)


### Features

* **logging:** add timestamp ([#48](https://www.github.com/jef/streetmerchant/issues/48)) ([6c3cd01](https://www.github.com/jef/streetmerchant/commit/6c3cd016850d03a6c6a894cab24ba2d3781a9af1))


### Bug Fixes

* **store:** amazon captcha false-positives ([#54](https://www.github.com/jef/streetmerchant/issues/54)) ([5c9e0b6](https://www.github.com/jef/streetmerchant/commit/5c9e0b6d06bd7e1223a7587fec067c8e79c9cfd6))
* evga xc3 ultra link ([#56](https://www.github.com/jef/streetmerchant/issues/56)) ([d907092](https://www.github.com/jef/streetmerchant/commit/d907092b443b056605e09cb2ca3e94e6ca811d9e))
* screenshot size, add screenshot config setting ([#53](https://www.github.com/jef/streetmerchant/issues/53)) ([7cfc7c7](https://www.github.com/jef/streetmerchant/commit/7cfc7c74429c808fa14468cdd497eb9f9aeb922c))
* sms carrier config, add google carrier ([#44](https://www.github.com/jef/streetmerchant/issues/44)) ([971fec2](https://www.github.com/jef/streetmerchant/commit/971fec20e441e2b12a38d5c8d17d2d4cb5e64d6b))

## [1.2.0](https://www.github.com/jef/streetmerchant/compare/v1.1.0...v1.2.0) (2020-09-19)


### Features

* **ci:** add `npm run build` ([faad3e6](https://www.github.com/jef/streetmerchant/commit/faad3e68efafaab135b77080b02af83429b6eca6))
* **store:** microcenter ([#39](https://www.github.com/jef/streetmerchant/issues/39)) ([edf17e9](https://www.github.com/jef/streetmerchant/commit/edf17e926f3d186e7630da2834d78de3e540a956))
* add Amazon links ([#26](https://www.github.com/jef/streetmerchant/issues/26)) ([f0560ce](https://www.github.com/jef/streetmerchant/commit/f0560ce72bfbfdd6360b85e23edaa875d58f228f))
* add email test, fix memory leak ([#24](https://www.github.com/jef/streetmerchant/issues/24)) ([a2fb973](https://www.github.com/jef/streetmerchant/commit/a2fb97333c6eb81250b24ccb6859e9356acded21))
* more Best Buy AIBs ([#41](https://www.github.com/jef/streetmerchant/issues/41)) ([7d7bd18](https://www.github.com/jef/streetmerchant/commit/7d7bd18b4dd656ec01ef2fb2d8519e2a7f34ef70))
* page timeout ([#22](https://www.github.com/jef/streetmerchant/issues/22)) ([643045c](https://www.github.com/jef/streetmerchant/commit/643045c7e0158fb6526bd09427b96cce7958bcea))
* slack integration ([#34](https://www.github.com/jef/streetmerchant/issues/34)) ([c0a881a](https://www.github.com/jef/streetmerchant/commit/c0a881a16ebb573bf35b7f29cb27e5b3c2e1fe78))
* sms notification for usa carriers ([#40](https://www.github.com/jef/streetmerchant/issues/40)) ([5a3636b](https://www.github.com/jef/streetmerchant/commit/5a3636bcb639bb33bc586af96264f5df2f3a8307))
* update to check if FE in-stock via Digital River ([#29](https://www.github.com/jef/streetmerchant/issues/29)) ([00ede13](https://www.github.com/jef/streetmerchant/commit/00ede13501082f530ea672a349816be1d31621a8))


### Bug Fixes

* small error in `isOutOfStock` logic ([#33](https://www.github.com/jef/streetmerchant/issues/33)) ([c2a210c](https://www.github.com/jef/streetmerchant/commit/c2a210cc815c3aa06f6f14d33954f65577d95954))

## [1.1.0](https://www.github.com/jef/streetmerchant/compare/v1.0.0...v1.1.0) (2020-09-18)


### Features

* add conventional commits ([#14](https://www.github.com/jef/streetmerchant/issues/14)) ([eb4f5e0](https://www.github.com/jef/streetmerchant/commit/eb4f5e034176a286eabe381c98ced77cd197d7fb))
* add evga ([#17](https://www.github.com/jef/streetmerchant/issues/17)) ([#18](https://www.github.com/jef/streetmerchant/issues/18)) ([6c65032](https://www.github.com/jef/streetmerchant/commit/6c6503219f7c188783c24a44f7052b276a4b39a3))


### Bug Fixes

* exception handling `TimeoutError` ([#20](https://www.github.com/jef/streetmerchant/issues/20)) ([#21](https://www.github.com/jef/streetmerchant/issues/21)) ([00a0687](https://www.github.com/jef/streetmerchant/commit/00a0687d3eba6a8fca871161b447529be00c8896))

## 1.0.0 (2020-09-18)


### Features

* use ts, update cd, update `README` ([#12](https://www.github.com/jef/streetmerchant/issues/12)) ([e9fc0bf](https://www.github.com/jef/streetmerchant/commit/e9fc0bf5f770481d5e508d8b520e1020624e05d2))
