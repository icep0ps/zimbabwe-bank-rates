import fs from 'fs';
import data from './rates.json' assert { type: 'json' };
import PDFParser from 'pdf2json';
import Database from '../database/database.js';

class Extractor {
  static read() {
    const pdfParser = new PDFParser();

    pdfParser.on('pdfParser_dataError', (errData) => console.error(errData.parserError));
    pdfParser.on('pdfParser_dataReady', (pdfData) => {
      fs.writeFile('./utils/extractor/rates.json', JSON.stringify(pdfData), (err) => {
        if (err) {
          console.error(err);
        } else {
          Extractor.success();
        }
      });
    });

    pdfParser.loadPDF('./utils/extractor/rates.pdf');
  }

  static async success() {
    const ratesdata = Extractor.genarateRates();
    await Database.create.rates(ratesdata);
  }

  static error() {
    console.log('Error: ' + err);
  }

  static genarateRates() {
    const rates = {};
    let groupedRates = [];
    const currency = new RegExp(/^[A-Z]{3}(%2F[A-Z]+)?$/);
    const whitespace = new RegExp(/%20/);
    const textNodes = data.Pages[0].Texts.filter((node) => !whitespace.test(node.R.T));

    const ungroupedRates = data.Pages[0].Texts.map((node) => {
      return Number(node.R[0].T.replace('%2C', ''));
    }).filter((item) => typeof item === 'number' && !isNaN(item) && item != 0);

    for (let i = 41; i >= 0; i--) {
      groupedRates.push(ungroupedRates.splice(0, Math.ceil(ungroupedRates.length / i)));
    }

    const filteredCurrencies = textNodes
      .map((node) => {
        if (currency.test(node.R[0].T)) {
          return node.R[0].T;
        }
      })
      .filter((currency) => currency != undefined);

    const currencies = filteredCurrencies.slice(7, filteredCurrencies.length);

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
