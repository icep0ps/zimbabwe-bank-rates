import Getpdf from './../../utils/getpdf.js';

describe('Getpdf is working', () => {
  test('navigation function to have been called', () => {
    Getpdf.navigate = jest.fn();
    Getpdf.downloadpdf = jest.fn((url) => url);
    jest.spyOn(Getpdf, 'navigate');
    Getpdf.run();
    expect(Getpdf.navigate).toHaveBeenCalled();
  });

  describe('downloadpdf is working', () => {
    test('has been called', async () => {
      Getpdf.navigate = jest.fn();

      Getpdf.downloadpdf = jest.fn();
      jest.spyOn(Getpdf, 'downloadpdf');

      await Getpdf.run();
      expect(Getpdf.downloadpdf).toHaveBeenCalled();
    });

    test('has been called with url', async () => {
      const pdflink = 'https://example.com';
      Getpdf.navigate = jest.fn().mockReturnValueOnce(pdflink);

      Getpdf.downloadpdf = jest.fn();
      jest.spyOn(Getpdf, 'downloadpdf');

      await Getpdf.run();
      expect(Getpdf.downloadpdf).toHaveBeenCalledWith(pdflink);
    });
  });
});
