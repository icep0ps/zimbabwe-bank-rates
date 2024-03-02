import fs from 'fs';
import https from 'https';
import puppeteer from 'puppeteer';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

class Getpdf {
  static async run() {
    const url = await Getpdf.navigate();
    Getpdf.downloadpdf(url);
  }

  static async navigate() {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--disable-features=site-per-process'],
    });
    const page = await browser.newPage();

    await page.goto('https://www.rbz.co.zw/index.php/research/markets/exchange-rates', {
      waitUntil: 'domcontentloaded',
    });

    const hrefElement = await page.waitForSelector('#archive-items > .row0 >>> a');

    const html = await page.evaluate(
      (element) => element.getAttribute('href').toString(),
      hrefElement
    );

    await page.goto('https://www.rbz.co.zw' + html, { waitUntil: 'domcontentloaded' });

    const links = [];
    const linksHandlers = await page.$$('.item-page > table > tbody >>>> a');

    for (const linksHandler of linksHandlers) {
      const attribute = await linksHandler.getProperty('href');
      const attributeValue = await attribute.jsonValue();
      links.push(attributeValue);
    }

    await browser.close();

    return links[links.length - 1];
  }

  static downloadpdf(url) {
    const file = fs.createWriteStream('utils/extractor/rates.pdf');
    https.get(url, function (response) {
      response.pipe(file);

      file.on('finish', () => {
        file.close();
        console.log('Download Completed');
      });
    });
  }
}

export default Getpdf;
