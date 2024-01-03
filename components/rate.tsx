import { FC } from 'react';
import { currency } from '../types';

type Props = {
  rate: currency;
};

const Rate: FC<Props> = async (props) => {
  return (
    <section className="flex flex-col items-center">
      <p>Todays offical bank rate</p>
      <h1>{props.rate.mid_zwl} ZWL</h1>

      <p>Last updated on {new Date(props.rate.date_published).toDateString()}</p>
    </section>
  );
};

export default Rate;
