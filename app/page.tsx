'use server';

import { currency } from '@/types';
import Rates from '@/components/rates';
import Hero from '@/components/hero/hero';

const baseurl =
  process.env.NODE_ENV == 'production'
    ? process.env.NEXT_PUBLIC_VERCEL_URL
    : process.env.DEV_URL;

const getOfficalRate = async () => {
  try {
    const data = await fetch(`${baseurl}/api/rates/offical`, {
      method: 'GET',
      cache: 'force-cache',
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
      cache: 'force-cache',
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

  if (rates) {
    return (
      <>
        {rates.length && rate ? (
          <Hero rate={rate} rates={rates} />
        ) : (
          <h1>No Offical rate found</h1>
        )}

        <div className="flex">
          <div className="p-4 border-r-2">
            <h6 className="text-zinc-300">Bid</h6>
            <p className="text-2xl font-semibold">29304 USD</p>
          </div>

          <div className="p-4 border-r-2">
            <h6 className="text-zinc-300">Ask</h6>
            <p className="text-2xl font-semibold">29304 USD</p>
          </div>

          <div className="p-4 border-r-2">
            <h6 className="text-zinc-300">Mid</h6>
            <p className="text-2xl font-semibold">29304 USD</p>
          </div>

          <div className="p-4 border-r-2">
            <h6 className="text-zinc-300">Bid (ZWL)</h6>
            <p className="text-2xl font-semibold">29304 ZWL</p>
          </div>

          <div className="p-4 border-r-2">
            <h6 className="text-zinc-300">Ask (ZWL)</h6>
            <p className="text-2xl font-semibold">29304 ZWL</p>
          </div>
        </div>
        <Rates rates={rates} />
      </>
    );
  }

  return <h1>No Rates Found</h1>;
}
