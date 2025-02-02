import fs from "fs";
import "dotenv/config";
import https from "https";
import * as cheerio from "cheerio";
import axios from "axios";
import path from "path";

const agent = new https.Agent({
  rejectUnauthorized: false,
});
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

class GetPDF {
  static async run() {
    console.log("Running in: " + process.env.NODE_ENV + " mode");
    const url = await GetPDF.gotoExchangeRatesPage();
    const downloadURL = await GetPDF.gotoCurrentMonthExchangeRatesPage(url);
    return await GetPDF.downloadpdf(downloadURL);
  }

  static async gotoExchangeRatesPage() {
    try {
      const response = await axios.get(
        "https://www.rbz.co.zw/index.php/research/markets/exchange-rates",
        { httpsAgent: agent },
      );
      const body = response.data;
      const $ = cheerio.load(body);

      const currentMonthURL = $(
        "div.row0:nth-child(1) > div:nth-child(1) > h2:nth-child(1) > a:nth-child(1)",
      ).attr("href");

      return (
        "https://www.rbz.co.zw/index.php/research/markets/exchange-rates" +
        currentMonthURL
      );
    } catch (error) {
      throw Error(`Could not get current month URL: ${error.message}`);
    }
  }

  static async gotoCurrentMonthExchangeRatesPage(url) {
    console.log("navigating to rates: " + url);
    try {
      const response = await axios.get(url, { httpsAgent: agent });

      const body = response.data;
      const $ = cheerio.load(body);

      const lastLink = $("td:has(a[href]):last a").attr("href");
      return "https://www.rbz.co.zw" + lastLink;
    } catch (error) {
      throw Error(`Could not get current month URL: ${error.message}`);
    }
  }

  static async downloadpdf(url) {
    console.log("downloading pdfs");
    const dirPath = path.join(process.cwd());
    const file = fs.createWriteStream(
      path.join(dirPath, "services/rates/rates.pdf"),
    );
    return await new Promise((resolve) => {
      https.get(url, async function (response) {
        response.pipe(file);
        file.on("finish", () => {
          file.close();
          console.log("Download Completed");
          resolve();
        });
      });
    });
  }
}

export default GetPDF;
