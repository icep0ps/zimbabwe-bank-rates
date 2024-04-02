'use server';

import { currency } from '@/types';

import Rates from '@/components/rates';
import Faq from '@/components/faq/faq';
import Hero from '@/components/hero/hero';
import Footer from '@/components/footer/footer';
import { DataTableDemo as RatesTable } from '@/components/ratesTable';
import Statistics from '@/components/statistics/statistics';

const baseurl =
  process.env.NODE_ENV == 'production'
    ? process.env.NEXT_PUBLIC_VERCEL_URL
    : process.env.DEV_URL;

const getOfficalRate = async () => {
  try {
    const data = await fetch(`${baseurl}/api/rates/offical`, {
      method: 'GET',
      cache: 'no-cache',
    });

    const rates = await data.json();
    return rates as currency;
  } catch (error) {
    throw new Error('Error fetching offical rate: ' + error);
  }
};

const getRates = async () => {
  try {
    const data = await fetch(`${baseurl}/api/rates`, {
      method: 'GET',
      cache: 'no-cache',
    });

    const rates = await data.json();
    return rates as currency[];
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
        <Statistics />
        <Rates />
        <RatesTable rates={rates} />
        <Faq />
        <Footer />
      </>
    );
  }

  return <h1>No Rates Found</h1>;
}
