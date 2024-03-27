import React from 'react';

type Props = {
  date_published: Date;
};

const LastUpdated = (props: Props) => {
  return (
    <div className="w-fit">
      <p className="font-bold text-xs text-right w-full">
        Last updated ·{' '}
        {new Date(props.date_published).toLocaleDateString('en-us', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
    </div>
  );
};

export default LastUpdated;
