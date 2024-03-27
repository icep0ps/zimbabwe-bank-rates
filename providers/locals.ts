type locals = {
  host: string;
  user: string;
  database: string;
  password: string;
  port: string;
};

class Locals {
  static config(): locals {
    for (const [key, value] of Object.entries(process.env)) {
      if (value === undefined)
        throw new Error(`Please set ${key} in environment variables file`);
    }

    const dev = {
      host: process.env.DEV_DB_HOST as string,
      user: process.env.DEV_DB_USER as string,
      database: process.env.DEV_DB_DATABASE as string,
      password: process.env.DEV_DB_PASSWORD as string,
      port: process.env.DEV_DB_PORT as string,
    };

    const prod = {
      host: process.env.PROD_DB_HOST as string,
      user: process.env.PROD_DB_USER as string,
      database: process.env.PROD_DB_DATABASE as string,
      password: process.env.PROD_DB_PASSWORD as string,
      port: process.env.PROD_DB_PORT as string,
    };

    if (process.env.NODE_ENV === 'test') return dev;
    if (process.env.NODE_ENV === 'production') return prod;
    if (process.env.NODE_ENV === 'development') return dev;

    throw new Error('Unknown node environment');
  }
}

export default Locals;
