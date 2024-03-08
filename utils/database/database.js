import 'dotenv/config';
import postgres from 'postgres';

class Database {
  static async connect() {
    const client = postgres({
      host: process.env.HOST,
      user: process.env.DB_USER,
      database: process.env.DATABASE,
      password: process.env.PASSWORD,
      port: process.env.DB_PORT,
    });

    return client;
  }

  static get = {
    async rates() {
      const sql = await Database.connect();
      return sql`SELECT * FROM rates WHERE date_published =  '2024-03-04'`;
    },

    async offical(currency) {
      const sql = await Database.connect();
      return sql`SELECT * FROM rates WHERE date_published = '2024-03-04' AND currency=${currency}`;
    },
  };

  static create = {
    async rates(rates) {
      const sql = await Database.connect();
      console.log('Creaing rates in database');

      for (const [currency, rate_values] of Object.entries(rates)) {
        const { bid, ask, mid_rate, bid_zwl, ask_zwl, mid_zwl } = rate_values;
        const currencyName = currency.trim().replace('%2F', '/');
        return sql`INSERT INTO rates (currency, bid, ask, mid_rate, bid_zwl, ask_zwl, mid_zwl) VALUES (${currencyName},${bid},${ask},${mid_rate},${bid_zwl},${ask_zwl},${mid_zwl}) returning *`;
      }
    },
  };
}

export default Database;
