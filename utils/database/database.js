import 'dotenv/config';
import mysql from 'mysql2';

class Database {
  static connect() {
    const connection = mysql.createConnection({
      host: process.env.HOST,
      user: process.env.USER,
      database: process.env.DATABASE,
      password: process.env.PASSWORD,
    });

    return connection;
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
      });
    });
  }

  static get = {
    async rates() {
      return await Database.query(
        'SELECT * FROM `rates` WHERE `date_published` = CURRENT_DATE();'
      );
    },

    async offical(currency) {
      return await Database.query(
        'SELECT * FROM `rates` WHERE `date_published` = CURRENT_DATE() AND `currency` = ?;',
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
      }
    },
  };
}

export default Database;
