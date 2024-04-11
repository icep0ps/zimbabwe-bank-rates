import dotenv from 'dotenv';

if (process.env.NODE_ENV === 'production') dotenv.config({ path: '.env.production' });
else dotenv.config({ path: '.env.local' });

class Locals {
  static config() {
    for (const [key, value] of Object.entries(process.env)) {
      if (value === undefined)
        throw new Error(`Please set ${key} in environment variables file`);
    }

    return {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_DATABASE,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
    };
  }
}

export default Locals;
