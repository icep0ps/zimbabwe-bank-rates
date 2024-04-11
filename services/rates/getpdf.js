import fs from 'fs';
import 'dotenv/config';
import https from 'https';
import puppeteer from 'puppeteer';

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

class Getpdf {
  static async run() {
    console.log('Running in: ' + process.env.NODE_ENV + ' mode');
    const url = await Getpdf.navigate();
    return await Getpdf.downloadpdf(url);
  }

  static async navigate() {
    const browser = await puppeteer.launch({
      headless: true,
      ignoreHTTPSErrors: true,
      args: ['--disable-features=site-per-process'],
    });
    console.log('navigating to rbz');
    const page = await browser.newPage();

    await page.goto('https://www.rbz.co.zw/index.php/research/markets/exchange-rates', {
      waitUntil: 'domcontentloaded',
    });

    const hrefElement = await page.waitForSelector('#archive-items > .row0 >>> a');

    const html = await page.evaluate(
      (element) => element.getAttribute('href').toString(),
      hrefElement
    );

    console.log('navigating to rates');
    await page.goto('https://www.rbz.co.zw' + html, { waitUntil: 'domcontentloaded' });

    const links = [];
    console.log('fetching rates');
    const linksHandlers = await page.$$('.item-page > table > tbody >>>> a');

    for (const linksHandler of linksHandlers) {
      const attribute = await linksHandler.getProperty('href');
      const attributeValue = await attribute.jsonValue();
      links.push(attributeValue);
    }

    await browser.close();

    return links[links.length - 1];
  }

  static async downloadpdf(url) {
    console.log('downloading pdfs');
    const file = fs.createWriteStream('./rates/extractor/rates.pdf');
    return await new Promise((resolve) => {
      https.get(url, async function (response) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log('Download Completed');
          resolve();
        });
      });
    });
  }
}

export default Getpdf;
