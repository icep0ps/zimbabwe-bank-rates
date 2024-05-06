import { FC } from 'react';
import Rate from './rate';
import LastUpdated from './lastUpdated';
import { currency } from '../../types';

type Props = {
  rate: currency;
};

const Hero: FC<Props> = async (props) => {
  const rateDate = new Date(props.rate.date_published).toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section className="flex w-full relative h-full justify-between items-center py-5 flex-wrap ">
      <div className=" flex flex-col items-start text-center gap-5 h-fit w-1/2 ">
        <div className="flex w-full justify-between">
          <Rate mid_zwl={props.rate.mid_zwl} />
        </div>
        <div id="disclamer">
          <LastUpdated
            date_published={rateDate}
            previous_mid_rate_zwl={Number(props.rate.previous_mid_rate_zwl)}
            previous_date_published={props.rate.previous_date_published}
          />
          <p className="text-xs gap-2 text-left mt-5 bg-secondary p-3 rounded-2xl">
            <span className="font-bold ">Disclamer:</span> We use the mid-market rate for
            our bank rate and converter. This is for informational purposes only. These
            values represent the daily average of the Bid and Ask rates published by The
            Reserve Bank of Zimbabwe.
          </p>
        </div>
      </div>

      <div className="w-1/2 pl-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-3xl font-bold text-primary">Offical Bank Rate</h1>
          <p>
            This is to inform you that the official bank rate for{' '}
            <span className="font-bold text-primary">{rateDate}</span>, has been
            established using the mid-rate. Please note that this information is provided
            solely for informational purposes. For more detailed and accurate information,
            kindly visit the official website of the{' '}
            <a
              href="https://www.rbz.co.zw/index.php/research/markets/exchange-rates"
              className="underline"
              target="_blank"
            >
              Reserve Bank of Zimbabwe (RBZ)
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
