import React from 'react';
import RateStatus from './rateStatus';
import { TrendingDown, TrendingUp } from 'lucide-react';

type Props = {
  date_published: String;
  previous_date_published: Date;
  previous_mid_rate_zwl: number;
};

const LastUpdated = (props: Props) => {
  const rateDate = props.date_published;

  const previousRateDate = new Date(props.previous_date_published).toLocaleDateString(
    'en-us',
    {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  );

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <p className="font-bold text-xs text-left max-sm:text-center">
        Last updated · {rateDate}
      </p>

      <div className="flex items-center max-sm:justify-center gap-3 flex-wrap">
        <div className="max-sm:flex max-sm:flex-col max-sm:gap-1 max-sm:items-center">
          <RateStatus rateDate={rateDate} />
          <p className="text-xs flex ">
            {props.previous_mid_rate_zwl < 0
              ? `Down by ${props.previous_mid_rate_zwl} ZiG from ${previousRateDate}`
              : `Up by ${props.previous_mid_rate_zwl} ZiG from ${previousRateDate}`}
          </p>
        </div>

        {props.previous_mid_rate_zwl < 0 ? (
          <TrendingDown className="bg-red-600 p-1 rounded-xl" />
        ) : (
          <TrendingUp className="bg-green-600 p-1 rounded-xl" />
        )}
      </div>
    </div>
  );
};

export default LastUpdated;
