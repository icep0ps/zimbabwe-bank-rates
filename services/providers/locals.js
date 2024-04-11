import dotenv from 'dotenv';

if (process.env.NODE_ENV === 'production') dotenv.config({ path: ['.env.production'] });
else dotenv.config({ path: ['.env.local'] });

class Locals {
  static config() {
    for (const [key, value] of Object.entries(process.env)) {
      if (value === undefined)
        throw new Error(`Please set ${key} in environment variables file`);
    }

    return {
      host: process.env.HOST,
      user: process.env.USER,
      database: process.env.DATABASE,
      password: process.env.PASSWORD,
      port: process.env.PORT,
    };
  }
}

export default Locals;
