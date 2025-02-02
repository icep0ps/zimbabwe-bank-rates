import Getpdf from "../../services/rates/getpdf.js";

describe("Getpdf is working", () => {
  test("navigation function to have been called", () => {
    Getpdf.navigate = jest.fn();
    Getpdf.downloadpdf = jest.fn((url) => url);
    jest.spyOn(Getpdf, "navigate");
    Getpdf.run();
    expect(Getpdf.navigate).toHaveBeenCalled();
  });

  test.only("naviate returns string", async () => {
    const url = await Getpdf.gotoExchangeRatesPage();
    expect(typeof url).toBe("string");
  });

  test.only("gotoExchangeRatesPage returns a valid URL", async () => {
    const url = await Getpdf.gotoExchangeRatesPage();
    await Getpdf.gotoExchangeRatesPage();
    const downloadURL = await Getpdf.gotoCurrentMonthExchangeRatesPage(url);
    expect(downloadURL).toBe("string");
  });

  test.only("navigate returns a valid URL", async () => {
    const url = await Getpdf.gotoExchangeRatesPage();
    expect(() => new URL(url)).not.toThrow();
  });

  describe("downloadpdf is working", () => {
    test("has been called", async () => {
      Getpdf.navigate = jest.fn();

      Getpdf.downloadpdf = jest.fn();
      jest.spyOn(Getpdf, "downloadpdf");

      await Getpdf.run();
      expect(Getpdf.downloadpdf).toHaveBeenCalled();
    });

    test("has been called with url", async () => {
      const pdflink = "https://example.com";
      Getpdf.navigate = jest.fn().mockReturnValueOnce(pdflink);

      Getpdf.downloadpdf = jest.fn();
      jest.spyOn(Getpdf, "downloadpdf");

      await Getpdf.run();
      expect(Getpdf.downloadpdf).toHaveBeenCalledWith(pdflink);
    });

    test("has created rates pdf", async () => {
      const pdflink = "https://example.com";
      Getpdf.navigate = jest.fn().mockReturnValueOnce(pdflink);

      Getpdf.downloadpdf = jest.fn();
      jest.spyOn(Getpdf, "downloadpdf");

      await Getpdf.run();
      expect(Getpdf.downloadpdf).toHaveBeenCalledWith(pdflink);
    });
  });
});
