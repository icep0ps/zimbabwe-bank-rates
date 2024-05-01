import React from 'react';
import Chart from '../chart/chart';
import { ArrowTopRightIcon } from '@radix-ui/react-icons';
import { TrendingDown, TrendingUp } from 'lucide-react';

type Props = {
  date_published: Date;
};

const LastUpdated = (props: Props) => {
  return (
    <div className="w-full h-full flex flex-col gap-3">
      <p className="font-bold text-xs text-left">
        Last updated ·{' '}
        {new Date(props.date_published).toLocaleDateString('en-us', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>

      {new Date() !== props.date_published && (
        <div className="flex items-center gap-3">
          <div>
            <p className="text-xs flex font-bold">
              Rate status: <span className="text-red-600 pl-2"> Outdated</span>
            </p>
            <p className="text-xs flex ">Up by 0.02% from last month</p>
          </div>
          <TrendingUp className="bg-green-600 p-1 rounded-xl" />
          <TrendingDown className="bg-red-600 p-1 rounded-xl" />
        </div>
      )}
    </div>
  );
};

export default LastUpdated;
