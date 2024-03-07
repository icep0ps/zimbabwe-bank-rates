import Extractor from '@/utils/extractor/extractor.js';

describe('generateRates return correct values', () => {
  test('returns an object', () => {
    const rates = Extractor.genarateRates();
    expect(typeof rates == 'object').toBe(true);
  });

  test('currency is mapped to object', () => {
    const rates = Extractor.genarateRates();
    expect(typeof rates['USD'] == 'object').toBe(true);
  });

  test('currency value has correct stucture', () => {
    const rates = Extractor.genarateRates();
    expect(rates['USD']).toStrictEqual({
      bid: expect.any(Number),
      ask: expect.any(Number),
      mid_rate: expect.any(Number),
      bid_zwl: expect.any(Number),
      ask_zwl: expect.any(Number),
      mid_zwl: expect.any(Number),
    });
  });
});
