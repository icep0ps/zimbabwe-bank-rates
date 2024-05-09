'use client';

import React from 'react';

type Props = {
  rateDate: String;
};

const RateStatus = (props: Props) => {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <p className="text-xs flex font-bold ">
      Rate status:{' '}
      {today === props.rateDate ? (
        <span className="text-green-600 pl-2"> Up-to-Date</span>
      ) : (
        <span className="text-red-600 pl-2"> Outdated</span>
      )}
    </p>
  );
};

export default RateStatus;
