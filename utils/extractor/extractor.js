import fs from 'fs';
import pdf_table_extractor from 'pdf-table-extractor';

class Extractor {
  static read() {
    pdf_table_extractor('utils/extractor/rates.pdf', Extractor.success, Extractor.error);
  }

  static success(result) {
    const rates = Extractor.genarateRates(result);
    fs.writeFile(
      'utils/extractor/rates.json',
      JSON.stringify(rates),
      { encoding: 'utf-8' },
      () => console.log('done')
    );
  }

  static error() {
    console.log('Error: ' + err);
  }

  static genarateRates(result) {
    const rates = {};
    const rows = result.pageTables[0].tables;

    rows
      .slice(4, result.pageTables[0].tables.length)
      .filter((data) => data !== '')
      .forEach((currency) => {
        Object.assign(rates, {
          [currency[0]]: {
            bid: Number(currency[2].replace(',', '')),
            ask: Number(currency[3].replace(',', '')),
            mid_rate: Number(currency[4].replace(',', '')),
            bid_zwl: Number(currency[5].replace(',', '')),
            ask_zwl: Number(currency[6].replace(',', '')),
            mid_zwl: Number(currency[7].replace(',', '')),
          },
        });
      });

    return rates;
  }
}

export default Extractor;
