import {Browser, PuppeteerLifeCycleEvent} from 'puppeteer';

export type Element = {
  container?: string;
  text: string[];
};

export type Pricing = {
  container: string;
  euroFormat?: boolean;
};

export type Brand =
  | 'test:brand'
  | 'captcha-deterrent'
  | 'amd'
  | 'asrock'
  | 'asus'
  | 'colorful'
  | 'corsair'
  | 'evga'
  | 'gainward'
  | 'galax'
  | 'gigabyte'
  | 'inno3d'
  | 'kfa2'
  | 'leadtek'
  | 'microsoft'
  | 'msi'
  | 'nvidia'
  | 'palit'
  | 'pny'
  | 'sapphire'
  | 'sony'
  | 'ubiquiti'
  | 'xfx'
  | 'powercolor'
  | 'zotac';

export type Series =
  | 'test:series'
  | 'captcha-deterrent'
  | '3060'
  | '3060ti'
  | '3070'
  | '3080'
  | '3090'
  | 'ap'
  | 'dreammachienepro'
  | 'darkhero'
  | 'camera'
  | 'network'
  | 'Cloud Key'
  | 'switch'
  | 'accessory'
  | 'rx6800'
  | 'rx6700xt'
  | 'rx6800xt'
  | 'rx6900xt'
  | 'ryzen5600'
  | 'ryzen5800'
  | 'ryzen5900'
  | 'ryzen5950'
  | 'sonyps5c'
  | 'sonyps5de'
  | 'sf'
  | 'xboxsx'
  | 'xboxss';

export type Model =
  | 'test:model'
  | 'captcha-deterrent'
  | '5600x'
  | '5800x'
  | '5900x'
  | '5950x'
  | '600 platinum'
  | '600 gold'
  | '750 platinum'
  | 'amd reference'
  | 'amp extreme holo'
  | 'amp holo'
  | 'amp white'
  | 'aorus elite'
  | 'aorus master'
  | 'aorus master type-c'
  | 'aorus xtreme'
  | 'aorus xtreme waterforce'
  | 'aorus xtreme waterforce wb'
  | 'aorus'
  | 'battle-ax'
  | 'challenger'
  | 'challenger pro'
  | 'crosshair viii'
  | 'dual fan'
  | 'dual oc'
  | 'dual'
  | 'dual mini'
  | 'dual mini oc'
  | 'eagle oc'
  | 'eagle'
  | 'ekwb'
  | 'epic x'
  | 'ex gamer'
  | 'ex oc'
  | 'founders edition'
  | 'ftw3'
  | 'ftw3 black'
  | 'ftw3 ultra'
  | 'ftw3 ultra hybrid'
  | 'ftw3 ultra hydro copper'
  | 'gamerock'
  | 'gamerock oc'
  | 'gaming oc'
  | 'gaming oc pro'
  | 'gaming pro oc'
  | 'gaming pro'
  | 'gaming trio'
  | 'gaming x trio'
  | 'gaming x'
  | 'gaming x3'
  | 'ghost'
  | 'ghost oc'
  | 'suprim'
  | 'suprim x'
  | 'gaming'
  | 'hurricane'
  | 'ichill x2'
  | 'ichill x3'
  | 'ichill x3 red'
  | 'ichill x4'
  | 'ichill frostbite'
  | 'igame advanced'
  | 'igame advanced oc'
  | 'igame ultra oc'
  | 'igame vulcan oc'
  | 'jetstream'
  | 'jetstream oc'
  | 'ko oc'
  | 'ko'
  | 'master'
  | 'merc'
  | 'merc core'
  | 'merc ultra'
  | 'nitro+'
  | 'nitro+ se'
  | 'nitro+ oc'
  | 'nitro+ oc se'
  | 'nitro oc se'
  | 'nitro oc'
  | 'oc'
  | 'pegasus'
  | 'pegasus oc'
  | 'phantom'
  | 'phantom gaming'
  | 'phantom gs'
  | 'phoenix gs oc'
  | 'phoenix gs'
  | 'phoenix'
  | 'ps5 console'
  | 'ps5 digital'
  | 'pulse'
  | 'pulse oc'
  | 'red devil'
  | 'red dragon'
  | 'sg oc'
  | 'sg'
  | 'single fan'
  | 'stormx oc'
  | 'strix lc'
  | 'strix oc'
  | 'strix'
  | 'strix oc white'
  | 'strix white'
  | 'taichi'
  | 'taichi x oc'
  | 'trinity oc'
  | 'trinity'
  | 'tuf oc'
  | 'tuf'
  | 'turbo'
  | 'twin edge oc white'
  | 'twin edge oc'
  | 'twin edge'
  | 'twin x2 oc'
  | 'twin x2'
  | 'uprising'
  | 'ventus 2x oc'
  | 'ventus 2x'
  | 'ventus 3x oc'
  | 'ventus 3x'
  | 'vision oc'
  | 'vision'
  | 'x trio'
  | 'xbox series s'
  | 'xbox series x'
  | 'xc black'
  | 'xc gaming'
  | 'xc3 black'
  | 'xc3 ultra'
  | 'xc3 ultra hybrid'
  | 'xc3'
  | 'xlr8 epic x'
  | 'xlr8 gaming'
  | 'xlr8 revel'
  | 'xlr8 uprising'
  | 'xtreme'
  //START UI
  //start console
  | 'udm pro'
  | 'udm'
  | 'udm pro special edition'
  //start ap
  | 'wifi6 LR'
  | 'wifi6 lite'
  |'wifi6 pro'
  | 'BaseStation XG'
  | 'ap HD'
  | 'ap FLEX HD'
  | 'ap in wall'
  | 'ap in wall HD'
  | 'ap nanoHD'
  | 'ap beaconHD'
  | 'buildtobridgebuild'
  | 'ap XG'
  | 'ap SHD'
  | 'ap lr'
  | 'ap mesh pro'
  | 'ap pro'
  | 'ap mesh'
  | 'ap inwall'
  | 'ap lite'
  //switch
  | 'pro 24 POE'
  | 'pro 24'
  | '24 POE'
  | '48 POE'
  | '48 POE pro'
  | 'switch pro aggregation'
  | 'switch flex'
  | 'flex xg'
  | 'flex mini'
  | 'redundant power system'
  | 'pro 48'
  | 'lite 16 POE'
  | 'lite 8 POE'
  | '16 POE'
  |'switch aggregation'
  |'switch 24'
  | '8 (60w)'
  | 'POE+ 24(250w)'
  | 'POE+ 48(500w)'
  | 'POE 8(150w)'
  | 'POE 16(150w)'
  //start camera
  | 'G4 PRO'
  |'g4 ptz'
  |'g4 instant'
  |'ai 360'
  |'g3 pro'
  |'doorbell g4'
  |'g4 bullet'
  | 'G3 Bullet'
  | 'G3 Flex'
  | 'G4 Dome'
  | 'G3 Instant'
  | 'video recorder pro'
  | 'Gen2'
  | 'gen2+'
  |'nvr'
  |'nvr pro'
  | 'qick';

export type Link = {
  brand: Brand;
  cartUrl?: string;
  itemNumber?: string;
  labels?: Labels;
  model: Model;
  openCartAction?: (browser: Browser) => Promise<string>;
  price?: number | null;
  series: Series;
  screenshot?: string;
  url: string;
};

export type CaptchaHandlerElements = {
  challenge: string;
  input: string;
  submit: string;
  captureType?: string;
};

export type LabelQuery = Element[] | Element | string[];

export type Labels = {
  bannedSeller?: LabelQuery;
  captcha?: LabelQuery;
  captchaHandler?: CaptchaHandlerElements;
  container?: string;
  inStock?: LabelQuery;
  outOfStock?: LabelQuery;
  maxPrice?: Pricing;
};

export type CaptchaDeterrent = {
  hardLinks?: string[];
  searchUrl?: string;
  searchTerms?: string[];
};

export type StatusCodeRangeArray = Array<number | [number, number]>;

export type Store = {
  realTimeInventoryLookup?: (itemNumber: string) => Promise<boolean>;
  /**
   * The range of status codes which will trigger backoff, i.e. an increasing
   * delay between requests. Setting an empty array will disable the feature.
   * If not defined, the default range will be used: 403.
   */
  backoffStatusCodes?: StatusCodeRangeArray;
  disableAdBlocker?: boolean;
  links: Link[];
  linksBuilder?: {
    builder: (docElement: cheerio.Cheerio, series: Series) => Link[];
    ttl?: number;
    waitUntil?: PuppeteerLifeCycleEvent;
    waitForSelector?: string;
    urls: Array<{series: Series; url: string | string[]}>;
  };
  labels: Labels;
  name: string;
  currency: '£' | '$' | '€' | 'R$' | 'kr.' | '';
  setupAction?: (browser: Browser) => void;
  /**
   * The range of status codes which considered successful, i.e. without error
   * allowing request parsing to continue. Setting an empty array will cause
   * all requests to fail. If not defined, the default range will be used:
   * 0 -> 399 inclusive.
   */
  successStatusCodes?: StatusCodeRangeArray;
  waitUntil?: PuppeteerLifeCycleEvent;
  minPageSleep?: number;
  maxPageSleep?: number;

  proxyList?: string[];
  currentProxyIndex?: number;
  captchaDeterrent?: CaptchaDeterrent;
};
