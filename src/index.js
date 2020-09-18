const puppeteer = require("puppeteer");
const opn = require("opn");

const timeout = 3000;

async function buy() {
  const links = [
    {
      name: "nvidia.com",
      url: "https://www.nvidia.com/en-us/geforce/buy/",
      oosText: "out of stock",
    },
    {
      name: "nvidia.com 2",
      url:
        "https://www.nvidia.com/en-us/shop/geforce/?page=1&limit=9&locale=en-us&search=3080",
      oosText: "out of stock",
    },
    {
      name: "bestbuy.com",
      url:
        "https://www.bestbuy.com/site/nvidia-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card-titanium-and-black/6429440.p?skuId=6429440",
      oosText: "sold out",
    },
  ];
  for (const link of links) {
    await goto(link);
  }

  setTimeout(buy, timeout);
}

async function goto(link) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
  );

  page.setViewport({
    width: 1920,
    height: 1080,
  });

  await page.goto(link.url);
  await page.waitForTimeout(1000);

  const dom = await page.evaluate(() => {
    return {
      body: document.body.innerText,
    };
  });

  console.log(dom);

  if (
    dom.body.toLowerCase().includes("out of stock") ||
    dom.body.toLowerCase().includes(link.oosText.toLowerCase())
  ) {
    console.log(link.name + " is still out of stock... Attempting next link.");
  } else {
    console.log(
      "*** IN STOCK AT " + link.name.toUpperCase() + " , BUY NOW ***"
    );
    opn(link);
  }

  await page.screenshot({ path: `nvidia-${Date.now()}.png` });

  await browser.close();
}

buy().then();
