'use server';

import { currency } from '@/types';

import Rates from '@/components/rates';
import Faq from '@/components/faq/faq';
import Hero from '@/components/hero/hero';
import Footer from '@/components/footer/footer';
import { RatesTable } from '@/components/ratesTable/table';
import Statistics from '@/components/statistics/statistics';
import { Currencies } from 'currencies-map';

let baseurl = `http://${process.env.NEXT_PUBLIC_DEV_URL}`;

if (process.env.VERCEL_ENV === 'preview') baseurl = `https://${process.env.VERCEL_URL}`;

if (process.env.VERCEL_ENV === 'development')
  baseurl = `http://${process.env.NEXT_PUBLIC_DEV_URL}`;

if (process.env.VERCEL_ENV === 'production')
  baseurl = `https://${process.env.NEXT_PUBLIC_DEV_URL}`;

const getOfficalRate = async () => {
  try {
    const data = await fetch(`${baseurl}/api/rates/offical`, {
      method: 'GET',
      cache: 'no-cache',
    });

    const rates = await data.json();
    return rates as currency;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const getRates = async () => {
  try {
    const data = await fetch(`${baseurl}/api/rates`, {
      method: 'GET',
      cache: 'no-cache',
    });

    const rates = (await data.json()) as currency[];

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
  const rate = await getOfficalRate().catch((error) => {
    console.log('Error occured getting offical rate in component:' + error.message);
    return null;
  });
  const rates = await getRates().catch((error) => {
    console.log('Error occured getting rates in component:' + error.message);
    return null;
  });

  if (rates?.length) {
    return (
      <>
        {rate ? <Hero rate={rate} rates={rates} /> : <h1>No Offical rate found</h1>}
        <Statistics data={rate} />
        <Rates data={rates} />
        <RatesTable data={rates} />
        <Faq />
        <Footer />
      </>
    );
  }

  return <h1>No Rates Found</h1>;
}
