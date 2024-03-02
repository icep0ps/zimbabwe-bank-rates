const pdf_table_extractor = require('pdf-table-extractor');
const Extractor = require('../../utils/extractor/extractor.js');

describe('methods return correct values', () => {
  let data = undefined;
  beforeAll(() => {
    function error(err) {
      console.error('Error: ' + err);
    }

    function success(result) {
      data = result;
    }

    pdf_table_extractor('tests/utils/mocks/rates.pdf', success, error);
  });

  test('getting object with offical rate', async () => {
    const rate = (bid, ask, mid_rate, bid_zwl, ask_zwl, mid_zwl) => {
      return {
        bid,
        ask,
        mid_rate,
        bid_zwl,
        ask_zwl,
        mid_zwl,
      };
    };

    expect(Extractor.genarateRates(data)).toBe('asdasdas');
  });
});
