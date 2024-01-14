import { currency } from '@/types';
import Rate from '@/components/rate';
import Rates from '@/components/rates';
import Link from 'next/link';
import Information from '@/components/information/information';

const getOfficalRate = async () => {
  const data = await fetch('http://localhost:3000/api/rates/offical', {
    method: 'GET',
    cache: 'no-store',
  });

  const rates = await data.json();
  return rates as currency;
};

const getRates = async () => {
  const data = await fetch('http://localhost:3000/api/rates', {
    method: 'GET',
    cache: 'no-store',
  });

  const rates = await data.json();
  return rates as currency[];
};

export default async function Home() {
  const rate = await getOfficalRate();
  const rates = await getRates();

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly px-24 gap-8 pb-5">
      <nav className="flex justify-between w-full py-10">
        <h1 className="font-bold">Zimbabwe bank rates</h1>

        <ul className="flex gap-2">
          <li className="underline">
            <Link href={'#exchange_rates'}>Exchange rates</Link>
          </li>
          <li className="underline">
            <Link href={'#how_it_works'}>How it works</Link>
          </li>
          <li className="underline">
            <Link href={'https://github.com/icep0ps/zimbabwe-bank-rates'}>Github</Link>
          </li>
        </ul>
      </nav>
      <Rate rate={rate} rates={rates} />
      <Information />
      <Rates rates={rates} />
    </main>
  );
}
