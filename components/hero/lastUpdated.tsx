import React from 'react';
import Chart from '../chart/chart';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import { TrendingDown, TrendingUp } from 'lucide-react';

type Props = {
  date_published: String;
  previous_date_published: Date;
  previous_mid_rate_zwl: number;
};

const LastUpdated = (props: Props) => {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

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
    <div className="w-full h-full flex flex-col gap-3">
      <p className="font-bold text-xs text-left">Last updated · {rateDate}</p>

      <div className="flex items-center gap-3">
        <div>
          <p className="text-xs flex font-bold">
            Rate status:{' '}
            {today === rateDate ? (
              <span className="text-green-600 pl-2"> Up-to Date</span>
            ) : (
              <span className="text-red-600 pl-2"> Outdated</span>
            )}
          </p>

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
