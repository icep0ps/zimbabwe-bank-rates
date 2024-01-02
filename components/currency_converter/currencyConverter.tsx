'use client';

import { ChangeEvent, FC, useState } from 'react';

const CurrencyConverter: FC = () => {
  const [priamaryCurrency, setPriamaryCurrency] = useState('ZWL');
  const [secondaryCurrency, setSecondaryCurrency] = useState('USD');

  const handleCurrencyChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setPriamaryCurrency('ZWL');
  };

  return (
    <section>
      <div className="flex flex-col gap-3">
        <select name="" id="" onChange={handleCurrencyChange} value={priamaryCurrency}>
          <option value="">ZWL</option>
          <option value="">USD</option>
        </select>

        <input type="number" name="" id="" />

        <div className="flex gap-2">
          <button type="button">USD</button>
          <button type="button">ZWL</button>
          <button type="button">ZAR</button>
        </div>
      </div>
    </section>
  );
};

export default CurrencyConverter;
