import { FC } from 'react';
import Rate from './rate';
import Chart from '../chart/chart';
import { currency } from '../../types';
import LastUpdated from './lastUpdated';
import { Spotlight } from '../ui/Spotlight';
import { BackgroundBeams } from '../ui/background-beams';

type Props = {
  rate: currency;
  rates: currency[];
};

const Hero: FC<Props> = async (props) => {
  return (
    <section className="flex w-full relative h-full justify-between items-center gap-10 rounded-3xl p-5">
      <div className=" flex flex-col items-start text-center gap-5 h-fit">
        <div className="flex w-full justify-between">
          <Rate mid_zwl={props.rate.mid_zwl} />
        </div>
        <div id="disclamer">
          <LastUpdated date_published={props.rate.date_published} />
          <p className="text-xs gap-2 text-left mt-3 bg-secondary p-3 rounded-2xl">
            <span className="font-bold">Disclamer:</span> We use the mid-market rate for
            our bank rate and converter. This is for informational purposes only. These
            values represent the daily average of the Bid and Ask rates published by The
            Reserve Bank of Zimbabwe.
          </p>
        </div>
      </div>
      <Chart />
    </section>
  );
};

export default Hero;
