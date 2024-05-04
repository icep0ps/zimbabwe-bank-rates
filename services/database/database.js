import dotenv from 'dotenv';
import postgres from 'postgres';
import Locals from '../providers/locals.js';

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
      const res =
        await sql`select *, mid_zwl - (select mid_zwl from rates where currency = r.currency and date_published < CURRENT_DATE order by date_published desc limit 1) as previous_mid_rate_zwl, (select date_published from rates where currency = r.currency and date_published < CURRENT_DATE order by date_published desc limit 1) as previous_date_published from rates r where date_published = CURRENT_DATE`;

      if (res.count === 0) {
        const lastUpatedCurrencies =
          await sql`SELECT * FROM rates ORDER BY date_published ASC LIMIT 41`;
        return lastUpatedCurrencies;
      }
      return res;
    },

    async offical(currency) {
      const sql = await Database.connect();
      let res =
        await sql`select *, mid_zwl - (select mid_zwl from rates where date_published < current_date order by date_published limit 1) as previous_mid_rate_zwl, (select date_published from rates where date_published < current_date order by date_published limit 1) as previous_date_published from rates where date_published = current_date and currency = ${currency};`;

      if (res.count === 0)
        res = await sql`SELECT * FROM rates WHERE currency=${currency} LIMIT 1`;
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
      )}`.catch((error) => {
        throw new Error('Failed to create rates', { cause: error });
      });
    },
  };
}

export default Database;
