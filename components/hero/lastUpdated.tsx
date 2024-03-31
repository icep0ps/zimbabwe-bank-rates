import React from 'react';
import Chart from '../chart/chart';

type Props = {
  date_published: Date;
};

const LastUpdated = (props: Props) => {
  return (
    <div className="w-fit h-full">
      <p className="font-bold text-xs text-right w-full">
        Last updated ·{' '}
        {new Date(props.date_published).toLocaleDateString('en-us', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
        {new Date() !== props.date_published && (
          <span className="text-red-700 uppercase"> (Outdated)</span>
        )}
      </p>
    </div>
  );
};

export default LastUpdated;
