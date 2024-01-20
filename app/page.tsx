import { currency } from '@/types';
import Rate from '@/components/rate';
import Rates from '@/components/rates';

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
    <>
      <Rate rate={rate} rates={rates} />
      <Rates rates={rates} />
    </>
  );
}
