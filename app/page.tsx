import { currency } from '@/types';
import Rate from '@/components/rate';
import Converter from '@/components/converter/converter';

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
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <Rate rate={rate} />
      <Converter rates={rates} />
    </main>
  );
}
