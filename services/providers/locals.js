import dotenv from 'dotenv';

if (process.env.NODE_ENV === 'production') dotenv.config({ path: '.env.production' });
else dotenv.config({ path: '.env.local' });

class Locals {
  static config() {
    if (Object.entries(process.env).length == 0)
      throw new Error('No environment variables found');

    for (const [key, value] of Object.entries(process.env)) {
      if (value === undefined)
        throw new Error(`Please set ${key} in environment variables file`);
    }

    console.log({
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      database: process.env.POSTGRES_DATABASE,
      password: process.env.POSTGRES_PASSWORD,
      port: process.env.POSTGRES_PORT,
    });

    return {
      host: process.env.POSTGRES_HOST,
      user: process.env.POSTGRES_USER,
      database: process.env.POSTGRES_DATABASE,
      password: process.env.POSTGRES_PASSWORD,
      port: process.env.POSTGRES_PORT,
    };
  }
}

export default Locals;
