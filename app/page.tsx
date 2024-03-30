'use server';

import { currency } from '@/types';
import RatesTable from '@/components/ratesTable';
import Hero from '@/components/hero/hero';
import Chart from '@/components/chart/chart';
import { faker } from '@faker-js/faker';
import Converter from '@/components/converter/converter';
import Rates from '@/components/rates';
import Faq from '@/components/faq/faq';
import Footer from '@/components/footer/footer';

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

        <div className="p-5 border rounded-3xl ">
          <h1 className="text-xl mb font-bold">Currency statistics</h1>
          <p className="text-xs font-normal">
            We use the mid-market rate for our bank rate and converter.
          </p>
          <div className="flex justify-between  py-10">
            <div className=" pl-0 pr-5 border-r">
              <h6 className="text-zinc-300 uppercase">Bid</h6>
              <p className="text-2xl ">
                {faker.number.float({
                  fractionDigits: 2,
                  min: 1000,
                  max: 10000,
                })}
                USD
              </p>
              <p className="text-xs text-zinc-300">+19% from last month</p>
            </div>

            <div className=" px-5 border-r">
              <h6 className="text-zinc-300 uppercase">Ask</h6>
              <p className="text-2xl ">
                {faker.number.float({
                  fractionDigits: 2,
                  min: 1000,
                  max: 10000,
                })}
                USD
              </p>
              <p className="text-xs text-zinc-300">-13% from last month</p>
            </div>

            <div className=" px-5 border-r">
              <h6 className="text-zinc-300 uppercase">Mid</h6>
              <p className="text-2xl ">
                {faker.number.float({
                  fractionDigits: 2,
                  min: 1000,
                  max: 10000,
                })}
                USD
              </p>
              <p className="text-xs text-zinc-300">+0.02% from last month</p>
            </div>

            <div className=" px-5 border-r">
              <h6 className="text-zinc-300 uppercase">Bid (ZWL)</h6>
              <p className="text-2xl ">
                {faker.number.float({
                  fractionDigits: 2,
                  min: 1000,
                  max: 10000,
                })}
                ZWL
              </p>
              <p className="text-xs text-zinc-300">+90% from last month</p>
            </div>

            <div className=" px-5">
              <h6 className="text-zinc-300 uppercase">Ask (ZWL)</h6>
              <p className="text-2xl ">
                {faker.number.float({
                  fractionDigits: 2,
                  min: 1000,
                  max: 10000,
                })}
                ZWL
              </p>
              <p className="text-xs text-zinc-300">-0.2% from last month</p>
            </div>
          </div>
        </div>
        <Rates />
        {/* <Converter rates={rates} rate={rate as currency} /> */}
        <RatesTable rates={rates} />
        <Faq />
        <Footer />
      </>
    );
  }

  return <h1>No Rates Found</h1>;
}
