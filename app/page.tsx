'use server';

import { currency } from '@/types';

import Rates from '@/components/rates';
import Faq from '@/components/faq/faq';
import Hero from '@/components/hero/hero';
import Footer from '@/components/footer/footer';
import { RatesTable } from '@/components/ratesTable/table';
import Statistics from '@/components/statistics/statistics';
import { Currencies } from 'currencies-map';
import CurrencyConverter from '@/components/converter/converter';

let baseurl = `http://${process.env.NEXT_PUBLIC_DEV_URL}`;

if (process.env.VERCEL_ENV === 'preview') baseurl = `https://${process.env.VERCEL_URL}`;

if (process.env.VERCEL_ENV === 'development')
  baseurl = `http://${process.env.NEXT_PUBLIC_DEV_URL}`;

if (process.env.VERCEL_ENV === 'production')
  baseurl = `https://${process.env.NEXT_PUBLIC_DEV_URL}`;

const getOfficalRate = async () => {
  try {
    const response = await fetch(`${baseurl}/api/rates/offical`, {
      method: 'GET',
      cache: 'no-cache',
    });

    if (!response.ok) throw new Error(response.statusText);

    const rate = await response.json().then((json) => json.data as currency);
    return rate;
  } catch (error: any) {
    throw new Error('Error fetching offical rate: ' + error.message);
  }
};

const getRates = async () => {
  try {
    const response = await fetch(`${baseurl}/api/rates`, {
      method: 'GET',
      cache: 'no-cache',
    });

    if (!response.ok) throw new Error(response.statusText);

    const rates = await response.json().then((json) => json.data as currency[]);

    return rates
      .map((rate) => {
        return {
          ...rate,
          name:
            Currencies.names.get(rate.currency.trim()) === undefined
              ? rate.currency
              : Currencies.names.get(rate.currency.trim()),
        };
      })
      .sort((a, b) => {
        if (a.name && b.name) {
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          }
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
        }

        return 0;
      });
  } catch (error) {
    throw new Error('Error fetching rates: ' + error);
  }
};

export default async function Home() {
  const rate = await getOfficalRate();
  const rates = await getRates();

  return (
    <>
      <Hero rate={rate} />
      <CurrencyConverter rate={rate} rates={rates} />
      <Statistics data={rate} />
      <Rates data={rates} />
      <RatesTable data={rates} />
      <Faq rates={rates} />
      <Footer />
    </>
  );
}
