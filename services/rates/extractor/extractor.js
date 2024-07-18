import PDFParser from 'pdf2json';
import Database from '../../database/database.js';

class Extractor {
  static async read() {
    console.log('Extracting from pdf rates');
    const pdfParser = new PDFParser();

    pdfParser.loadPDF('./rates/extractor/rates.pdf');

    return await new Promise((resolve) => {
      pdfParser.on('pdfParser_dataError', (errData) =>
        console.error(errData.parserError)
      );
      pdfParser.on('pdfParser_dataReady', async (pdfData) => {
        const data = JSON.stringify(pdfData);
        await Extractor.success(data);
        resolve();
      });
    });
  }

  static async success(pdfData) {
    console.log('Extracting from pdf rates');
    const ratesdata = Extractor.genarateRates(JSON.parse(pdfData));
    console.log('creating rates in database');
    await Database.create.rates(ratesdata);
  }

  static error(err) {
    console.log('Error: ' + err);
  }

  static genarateRates(data) {
    console.log('Genarating rates');
    const rates = {};
    let groupedRates = [];
    const currency = new RegExp(/^[A-Z]{3}(%2F[A-Z]+)?$/);
    const isBidOrAsk = /\b(?:BID|ASK|ZWG)\b/i;
    const whitespace = new RegExp(/%20/);
    const textNodes = data.Pages[0].Texts.filter((node) => !whitespace.test(node.R.T));

    const filteredCurrencies = textNodes
      .map((node) => {
        if (currency.test(node.R[0].T)) {
          return node.R[0].T.replace('%2F', ' ');
        }
      })
      .filter((currency) => currency != undefined);

    const currencies = filteredCurrencies.filter((text) => !text.match(isBidOrAsk));

    const ungroupedRates = data.Pages[0].Texts.map((node) => {
      return Number(node.R[0].T.replace('%2C', ''));
    }).filter((item) => typeof item === 'number' && !isNaN(item) && item != 0);

    for (let i = currencies.length; i >= 0; i--) {
      const rate = ungroupedRates.splice(0, Math.ceil(ungroupedRates.length / i));
      if (rate.length !== 0) groupedRates.push(rate);
    }

    if (groupedRates.length !== currencies.length)
      throw new Error(
        `Error extracting data from pdf: Number of rates does not match number of currecies got ${currencies.length} currencies and ${groupedRates.length} rates`
      );

    for (let currency = 0; currency < currencies.length; currency++) {
      const rate = groupedRates[currency];
      Object.assign(rates, {
        [currencies[currency]]: {
          bid: rate[0],
          ask: rate[1],
          mid_rate: rate[2],
          bid_zwl: rate[3],
          ask_zwl: rate[4],
          mid_zwl: rate[5],
        },
      });
    }

    return rates;
  }
}

export default Extractor;
