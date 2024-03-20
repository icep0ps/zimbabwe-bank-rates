import { currency } from '@/types';
import Rate from '@/components/rate';
import Rates from '@/components/rates';

const getOfficalRate = async () => {
  try {
    const data = await fetch('http://127.0.0.1:3000/api/rates/offical', {
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
    const data = await fetch('http://127.0.0.1:3000/api/rates', {
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
          <Rate rate={rate} rates={rates} />
        ) : (
          <h1>No Offical rate found</h1>
        )}
        <Rates rates={rates} />
      </>
    );
  }

  return <h1>No Rates Found</h1>;
}
