import dotenv from 'dotenv';
import postgres from 'postgres';
import Locals from '../../providers/locals.js';

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

      if (res.count === 0) {
        const lastUpatedCurrencies =
          await sql`SELECT * FROM rates ORDER BY date_published ASC LIMIT 41`;
        return lastUpatedCurrencies;
      }
      return res;
    },

    async offical(currency) {
      const sql = await Database.connect();
      const res =
        await sql`SELECT * FROM rates WHERE date_published = CURRENT_DATE AND currency=${currency}`;

      if (res.count === 0) {
        const res = await sql`SELECT * FROM rates WHERE currency=${currency}`;
        const lastRate = res.pop();
        if (lastRate) {
          return [lastRate];
        }
      }
      return res;
    },
  };

  static create = {
    async waitlist(email) {
      try {
        const sql = await Database.connect();
        const user = await sql`SELECT * FROM waitlist where email=${email}`;

        if (user.count !== 0) {
          return user[0];
        } else {
          await sql`INSERT INTO waitlist (email) VALUES(${email})`;
          return null;
        }
      } catch (error) {
        throw new Error('Error adding user to waitlist: ' + error);
      }
    },

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
