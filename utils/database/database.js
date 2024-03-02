import 'dotenv/config';

import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT,
});

class Database {
  static async connect() {
    const con = await client.connect();
    return con;
  }

  static async query(query, params) {
    const connection = Database.connect();
    return new Promise((res, rej) => {
      connection.query(query, params, function (err, results, fields) {
        if (err) {
          rej(err);
        } else {
          res(results);
        }
        connection.end();
      });
    });
  }

  static get = {
    async rates() {
      return await Database.query(
        'SELECT * FROM `rates` WHERE `date_published` =  "2024-01-03";'
      );
    },

    async offical(currency) {
      return await Database.query(
        'SELECT * FROM `rates` WHERE `date_published` = "2024-01-03" AND `currency` = ? ;',
        [currency]
      );
    },
  };

  static create = {
    rates(rates) {
      const connection = Database.connect();

      for (const [currency, rate_values] of Object.entries(rates)) {
        const { bid, ask, mid_rate, bid_zwl, ask_zwl, mid_zwl } = rate_values;

        connection.execute(
          'INSERT INTO `rates` (currency, bid, ask, mid_rate, bid_zwl, ask_zwl, mid_zwl) VALUES (?,?,?,?,?,?,?);',
          [currency, bid, ask, mid_rate, bid_zwl, ask_zwl, mid_zwl],
          function (err, results, fields) {
            if (err) {
              console.log(err);
            } else {
              console.log('created rates for ' + currency);
            }
          }
        );
        connection.end();
      }
    },
  };
}

export default Database;
