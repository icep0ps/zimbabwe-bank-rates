import 'dotenv/config';

import pkg from 'pg';
const { Client } = pkg;

class Database {
  static async connect() {
    const client = new Client({
      host: process.env.HOST,
      user: process.env.DB_USER,
      database: process.env.DATABASE,
      password: process.env.PASSWORD,
      port: process.env.DB_PORT,
    });

    await client.connect().catch((error) => {
      console.log('Error connecting to db: ' + error.message);
    });

    return client;
  }

  static async query(query, params) {
    const connection = await Database.connect();
    return await connection.query(query, params).then((res) => {
      return res.rows;
    });
  }

  static get = {
    async rates() {
      const rates = await Database.query(
        "SELECT * FROM rates WHERE date_published =  '2024-03-04'"
      );
      return rates;
    },

    async offical(currency) {
      const offical = await Database.query(
        "SELECT * FROM rates WHERE date_published = '2024-03-04' AND currency = $1",
        [currency]
      );
      return offical;
    },
  };

  static create = {
    async rates(rates) {
      console.log('Creaing rates in database');
      const connection = await Database.connect();

      for (const [currency, rate_values] of Object.entries(rates)) {
        const { bid, ask, mid_rate, bid_zwl, ask_zwl, mid_zwl } = rate_values;

        await connection
          .query(
            'INSERT INTO rates (currency, bid, ask, mid_rate, bid_zwl, ask_zwl, mid_zwl) VALUES ($1,$2,$3,$4,$5,$6,$7)',
            [
              currency.trim().replace('%2F', '/'),
              bid,
              ask,
              mid_rate,
              bid_zwl,
              ask_zwl,
              mid_zwl,
            ]
          )
          .then(() => {
            console.log('Created Rates successfully');
            connection.end();
          });
      }
    },
  };
}

export default Database;
