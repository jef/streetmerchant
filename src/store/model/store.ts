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
  | 'ax'
  | 'colorful'
  | 'corsair'
  | 'evga'
  | 'gainward'
  | 'galax'
  | 'gigabyte'
  | 'inno3d'
  | 'intel'
  | 'kfa2'
  | 'leadtek'
  | 'lianli'
  | 'microsoft'
  | 'msi'
  | 'nintendo'
  | 'nvidia'
  | 'palit'
  | 'pny'
  | 'powercolor'
  | 'sapphire'
  | 'sony'
  | 'sparkle'
  | 'ubiquiti'
  | 'xfx'
  | 'zotac';

export type Series =
  | 'test:series'
  | 'captcha-deterrent'
  | '3050'
  | '3060'
  | '3060ti'
  | '3070'
  | '3070ti'
  | '3080'
  | '3080ti'
  | '3090'
  | '4060'
  | '4070'
  | '4070super'
  | '4070ti'
  | '4080-16g'
  | '4090'
  | '5070'
  | '5070ti'
  | '5080'
  | '5090'
  | 'a3-matx'
  | 'arc'
  | 'darkhero'
  | 'g4-doorbell-pro'
  | 'rx6700xt'
  | 'rx6800'
  | 'rx6800xt'
  | 'rx6900xt'
  | 'rx9070'
  | 'rx9070xt'
  | 'ryzen5600'
  | 'ryzen5800'
  | 'ryzen5900'
  | 'ryzen5950'
  | 'ryzen7800x3d'
  | 'ryzen7950x'
  | 'ryzen9600x'
  | 'ryzen9700x'
  | 'ryzen9800x3d'
  | 'ryzen9900x'
  | 'ryzen9950x'
  | 'sf'
  | 'sonyps5c'
  | 'sonyps5de'
  | 'switch2'
  | 'udm-pro'
  | 'udm-us'
  | 'udr-us'
  | 'unvr-pro'
  | 'unvr'
  | 'xboxss'
  | 'xboxsx';

export type Model =
  | 'test:model'
  | 'captcha-deterrent'
  | '5600x'
  | '5800x'
  | '5900x'
  | '5950x'
  | '600 gold'
  | '600 platinum'
  | '750 platinum'
  | '7800x3d'
  | '7950x'
  | '9600x'
  | '9700x'
  | '9800x3d'
  | '9900x'
  | '9950x'
  | 'a3 matx wd'
  | 'aero oc'
  | 'aero oc sff'
  | 'amd reference'
  | 'amp airo'
  | 'amp extreme airo'
  | 'amp extreme holo'
  | 'amp extreme infinity'
  | 'amp holo'
  | 'amp white'
  | 'aorus box'
  | 'aorus x wb'
  | 'aorus elite'
  | 'master ice'
  | 'aorus master 24g'
  | 'aorus master type-c'
  | 'aorus master'
  | 'aorus w'
  | 'aorus x wb'
  | 'aorus xtreme waterforce 24g'
  | 'aorus xtreme waterforce wb'
  | 'aorus xtreme waterforce'
  | 'aorus xtreme'
  | 'aorus'
  | 'astral lc'
  | 'astral oc'
  | 'astral'
  | 'b580'
  | 'battle-ax'
  | 'challenger oc'
  | 'challenger pro oc'
  | 'challenger pro'
  | 'challenger'
  | 'crosshair viii'
  | 'dream machine pro'
  | 'dream machine'
  | 'dream router'
  | 'dual fan'
  | 'dual mini oc'
  | 'dual mini'
  | 'dual oc'
  | 'dual'
  | 'eagle oc'
  | 'eagle'
  | 'ekwb'
  | 'epic x oc'
  | 'epic x'
  | 'ex gamer'
  | 'ex oc'
  | 'ex'
  | 'expert'
  | 'fighter'
  | 'founders edition'
  | 'ftw3 black'
  | 'ftw3 ultra hybrid'
  | 'ftw3 ultra hydro copper'
  | 'ftw3 ultra'
  | 'ftw3'
  | 'g4 doorbell pro'
  | 'gamerock oc'
  | 'gamerock'
  | 'gaming oc pro'
  | 'gaming oc waterforce wb'
  | 'gaming oc'
  | 'gaming pro oc'
  | 'gaming pro'
  | 'gaming trio oc white'
  | 'gaming trio oc'
  | 'gaming trio'
  | 'gaming verto epic-x'
  | 'gaming x slim'
  | 'gaming x trio'
  | 'gaming x'
  | 'gaming x3'
  | 'gaming z trio'
  | 'gaming'
  | 'ghost oc'
  | 'ghost'
  | 'hellhound white'
  | 'hellhound'
  | 'hurricane'
  | 'ice dragon super'
  | 'ichill frostbite'
  | 'ichill x2'
  | 'ichill x3 red'
  | 'ichill x3'
  | 'ichill x4'
  | 'igame advanced oc'
  | 'igame advanced'
  | 'igame ultra oc'
  | 'igame vulcan oc'
  | 'inspire 3x'
  | 'inspire 3x oc'
  | 'jetstream'
  | 'jetstream oc'
  | 'jetstream'
  | 'kngpn hybrid'
  | 'ko oc'
  | 'ko'
  | 'lp oc'
  | 'master'
  | 'mech 2x oc'
  | 'mech 2x'
  | 'merc core'
  | 'merc ultra'
  | 'merc'
  | 'network video recorder pro'
  | 'network video recorder'
  | 'nitro oc se'
  | 'nitro oc'
  | 'nitro+ oc se'
  | 'nitro+ oc'
  | 'nitro+ se'
  | 'nitro+'
  | 'oc'
  | 'pegasus oc'
  | 'pegasus'
  | 'phantom gaming oc'
  | 'phantom gaming'
  | 'phantom gs'
  | 'phantom'
  | 'phoenix 8G (LHR)'
  | 'phoenix gs oc'
  | 'phoenix gs'
  | 'phoenix'
  | 'prime oc'
  | 'prime'
  | 'ps5 console'
  | 'ps5 digital'
  | 'pulse oc'
  | 'pulse'
  | 'qick ultra'
  | 'qick'
  | 'red devil'
  | 'red dragon'
  | 'sg oc'
  | 'sg'
  | 'shadow 3x'
  | 'shadow 3x oc'
  | 'solid'
  | 'solid oc'
  | 'single fan'
  | 'solid oc'
  | 'solid'
  | 'stormx oc'
  | 'strix lc'
  | 'strix oc lc'
  | 'strix oc white'
  | 'strix oc'
  | 'strix white'
  | 'strix'
  | 'suprim liquid soc'
  | 'suprim liquid x'
  | 'suprim oc'
  | 'suprim soc'
  | 'suprim x'
  | 'suprim'
  | 'swft'
  | 'switch 2'
  | 'switch 2 bundle'
  | 'taichi x oc'
  | 'taichi'
  | 'trinity oc lhr'
  | 'trinity oc'
  | 'trinity'
  | 'triple fan oc'
  | 'triple fan'
  | 'tuf oc'
  | 'tuf'
  | 'tuf gaming'
  | 'tuf gaming oc'
  | 'turbo'
  | 'twin edge oc white'
  | 'twin edge oc'
  | 'twin edge'
  | 'twin x2 oc'
  | 'twin x2'
  | 'uprising'
  | 'vanguard soc launch edition'
  | 'vanguard soc'
  | 'vanguard'
  | 'ventus 2X (LHR)'
  | 'ventus 2x oc'
  | 'ventus 2x white oc'
  | 'ventus 2x'
  | 'ventus 3x e1 oc'
  | 'ventus 3x oc plus'
  | 'ventus 3x oc white'
  | 'ventus 3x oc'
  | 'ventus 3x'
  | 'vetro'
  | 'vision oc'
  | 'vision'
  | 'windforce oc'
  | 'windforce oc sff'
  | 'windforce v2'
  | 'windforce'
  | 'x trio'
  | 'x3 oc'
  | 'x3w'
  | 'xbox series s'
  | 'xbox series x'
  | 'xc black'
  | 'xc gaming'
  | 'xc3 black'
  | 'xc3 ultra hybrid'
  | 'xc3 ultra'
  | 'xc3'
  | 'xlr8 epic x'
  | 'xlr8 gaming uprising epic x'
  | 'xlr8 gaming'
  | 'xlr8 revel epic x'
  | 'xlr8 revel'
  | 'xlr8 uprising'
  | 'xlr8 verto epic x oc'
  | 'xlr8 verto epic x'
  | 'xlr8 verto oc'
  | 'xlr8 verto'
  | 'xlr8'
  | 'xtreme';

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
  country: string;
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
