import Database from '@/services/database/database';
import Extractor from '@/services/rates/extractor/extractor';

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

  test('create rates in db function to have neeb called', () => {
    Extractor.genarateRates = jest.fn();
    Database.create.rates = jest.fn();
    Extractor.success();
    jest.spyOn(Database.create, 'rates');
    expect(Database.create.rates).toHaveBeenCalled();
  });
});
