export default class Locals {
  static config() {
    for (const [key, value] of Object.entries(process.env)) {
      if (value === undefined)
        throw new Error(`Please set ${key} in environment variables file`);
    }

    const dev = {
      host: process.env.DEV_DB_HOST,
      user: process.env.DEV_DB_USER,
      database: process.env.DEV_DB_DATABASE,
      password: process.env.DEV_DB_PASSWORD,
      port: process.env.DEV_DB_PORT,
    };

    const prod = {
      host: process.env.PROD_DB_HOST,
      user: process.env.PROD_DB_USER,
      database: process.env.PROD_DB_DATABASE,
      password: process.env.PROD_DB_PASSWORD,
      port: process.env.PROD_DB_PORT,
    };

    if (process.env.NODE_ENV === 'test') return dev;
    if (process.env.NODE_ENV === 'production') return prod;
    if (process.env.NODE_ENV === 'development') return dev;

    throw new Error('Unknown node environment');
  }
}
