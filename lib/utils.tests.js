import rates from "./rates.json";
import { convert } from "./utils.ts";

const primary = {
  currency: "USD",
  bid: "1",
  ask: "1",
  mid_rate: "1",
  bid_zwl: "13.2226",
  ask_zwl: "13.9006",
  mid_zwl: "13.5616",
  date_published: "2024-04-09T00:00:00.000Z",
  name: "US dollars",
};

describe("convert", () => {
  describe("primary", () => {
    const amount = "13.5616";
    test("Argentine pesos should be equal to mid rate", () => {
      const ars = rates[1];
      const result = convert("primary", amount, { primary, secondary: ars });
      expect(result).toBe("862.75");
    });
  });

  describe("secondary", () => {
    const amount = "862.75";
    test("Argentine pesos should convert to ZiG", () => {
      const ars = rates[1];
      const result = convert("secondary", amount, { primary, secondary: ars });
      expect(result).toBe("13.56");
    });
  });
});
