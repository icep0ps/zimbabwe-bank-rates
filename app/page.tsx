import { currency } from '@/types';
import Rate from '@/components/rate';
import Rates from '@/components/rates';

const getOfficalRate = async () => {
  try {
    const data = await fetch('http://localhost:3000/api/rates/offical', {
      method: 'GET',
      cache: 'no-store',
    });

    const rates = await data.json();
    return rates as currency;
  } catch (error) {
    throw new Error('Error fetching offical rate: ' + error);
  }
};

const getRates = async () => {
  try {
    const data = await fetch('http://localhost:3000/api/rates', {
      method: 'GET',
      cache: 'no-store',
    });

    const rates = await data.json();
    return rates as currency[];
  } catch (error) {
    throw new Error('Error fetching rates: ' + error);
  }
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
