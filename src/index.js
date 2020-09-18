const mailer = require("./mailer")

const puppeteer = require("puppeteer");
const opn = require("opn");

const timeout = 5000;
const waitForTimeout = 1000;

async function buy() {
  const links = [
	{ 
		name: "nvidia.com", 
		url: "https://www.nvidia.com/en-us/geforce/buy/", 
		oosText: ["out of stock"],
		cartUrl: "https://store.nvidia.com/store/nvidia/en_US/buy/productID.5438481700/clearCart.yes/nextPage.QuickBuyCartPage"
	}
	,{ 
		name: "nvidia.com 2", 
		url: "https://www.nvidia.com/en-us/shop/geforce/?page=1&limit=9&locale=en-us&search=3080", 
		oosText: ["out of stock"],
		cartUrl: "https://store.nvidia.com/store/nvidia/en_US/buy/productID.5438481700/clearCart.yes/nextPage.QuickBuyCartPage"
	}
	,{ 
		name: "bestbuy.com", 
		url: "https://www.bestbuy.com/site/nvidia-geforce-rtx-3080-10gb-gddr6x-pci-express-4-0-graphics-card-titanium-and-black/6429440.p?skuId=6429440", 
		oosText: ["sold out"] 
	}
	,{ 
		name: "newegg.com EVGA BLACK GAMING", 
		url: "https://www.newegg.com/evga-geforce-rtx-3080-10g-p5-3881-kr/p/N82E16814487522", 
		oosText: ["auto notify","out of stock"] 
	}
	,{ 
		name: "newegg.com MSI VENTUS", 
		url: "https://www.newegg.com/msi-geforce-rtx-3080-rtx-3080-ventus-3x-10g/p/N82E16814137600", 
		oosText: ["auto notify","out of stock"] 
	}
	,{ 
		name: "bestbuy.com GIGABYTE BLACK", 
		url: "https://www.bestbuy.com/site/gigabyte-geforce-rtx-3080-10g-gddr6x-pci-express-4-0-graphics-card-black/6430620.p?acampID=0&cmp=RMX&loc=Hatch&ref=198&skuId=6430620", 
		oosText: ["sold out"] 
	}
	,{ 
		name: "B&H GIGABYTE BLACK", 
		url: "https://www.bhphotovideo.com/c/product/1593333-REG/gigabyte_gv_n3080gaming_oc_10gd_geforce_rtx_3080_gaming.html?SID=s1600391647213ytuua52439", 
		oosText: ["notify when available"] 
	}
	,{ 
		name: "newegg.com EVGA ARGB LED iCX3", 
		url: "https://www.newegg.com/evga-geforce-rtx-3080-10g-p5-3883-kr/p/N82E16814487521", 
		oosText: ["auto notify","out of stock"] 
	}
	,{ 
		name: "newegg.com EVGA XC3 ULTRA GAMING", 
		url: "https://www.newegg.com/evga-geforce-rtx-3080-10g-p5-3885-kr/p/N82E16814487520", 
		oosText: ["auto notify","out of stock"] 
	}
	,{ 
		name: "newegg.com ASUS TUF", 
		url: "https://www.newegg.com/asus-geforce-rtx-3080-tuf-rtx3080-10g-gaming/p/N82E16814126453", 
		oosText: ["auto notify","out of stock"] 
	}	
  ]
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

  if (isOutOfStock(dom.body, link.oosText)) {
    console.log(link.name + " is still out of stock... Attempting next link.")

  } else {
    console.log("*** IN STOCK AT " + link.name.toUpperCase() + ", BUY NOW ***");
    await page.screenshot({ path: `nvidia-${Date.now()}.png` });
    let clickUrl;
    if (link.cartUrl) {
      clickUrl = link.cartUrl
    } else {
      clickUrl = link.url
    }
    opn(clickUrl);
    mailer.send(clickUrl)
  }

  await browser.close();
}

function isOutOfStock(domText, oosTextArray) {
	domText = domText.toLowerCase();
	var result = false;
	for(var text of oosTextArray) {
		result = domText.includes(text.toLowerCase());
	};
	return result;
}

try{
	buy().then();
}
catch(error)
{
	buy();
}
