import dotenv from 'dotenv';
import postgres from 'postgres';
import Locals from '@/providers/locals';
dotenv.config({ path: 'services/.env' });

class Database {
  static async connect() {
    const client = postgres({
      host: Locals.config().host,
      user: Locals.config().user,
      database: Locals.config().database,
      password: Locals.config().password,
      port: Locals.config().port,
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
