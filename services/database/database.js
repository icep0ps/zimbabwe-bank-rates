import dotenv from 'dotenv';
dotenv.config({ path: 'services/.env' });

import postgres from 'postgres';

class Database {
  static async connect() {
    const client = postgres({
      host: process.env.SB_HOST,
      user: process.env.SB_USER,
      database: process.env.SB_DATABASE,
      password: process.env.SB_DB_PASSWORD,
      port: process.env.SB_PORT,
    });

    return client;
  }

  static get = {
    async rates() {
      const sql = await Database.connect();
      const res = await sql`SELECT * FROM rates WHERE date_published =  CURRENT_DATE `;
      return res;
    },

    async offical(currency) {
      const sql = await Database.connect();
      const res =
        await sql`SELECT * FROM rates WHERE date_published = CURRENT_DATE AND currency=${currency}`;
      return res;
    },
  };

  static create = {
    async rates(rates) {
      const ratesArray = [];
      const sql = await Database.connect();

      for (const [currency, rate_values] of Object.entries(rates)) {
        const currencyName = currency.trim().replace('%2F', '/');
        ratesArray.push({ currency: currencyName, ...rate_values });
      }
      return await sql`INSERT INTO rates ${sql(
        ratesArray,
        'currency',
        'bid',
        'ask',
        'mid_rate',
        'bid_zwl',
        'ask_zwl',
        'mid_zwl'
      )}`;
    },
  };
}

export default Database;
