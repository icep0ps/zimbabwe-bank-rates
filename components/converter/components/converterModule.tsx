import { currency } from '../../../types';
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

type Props = {
  currency: {
    value: string;
    setCurrency: Dispatch<SetStateAction<currency>>;
  };

  amount: {
    value: string;
    setAmount: (event: ChangeEvent<HTMLInputElement>) => void;
  };

  rates: currency[];
};

const ConverterModule = (props: Props) => {
  const { currency, amount, rates } = props;
  const [recentlyUsedCurrencies, setrecentlyUsedCurrencies] = useState<currency[]>([]);

  const findCurrency = (name: string) =>
    rates.filter((currency) => currency.currency === name)[0];

  const handleCurrencyChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const currencyIsFound = findCurrency(event.target.value);

    if (currencyIsFound) {
      currency.setCurrency(currencyIsFound);
      setrecentlyUsedCurrencies((prev) => prev);
    }
  };

  return (
    <div className="flex flex-col gap-3 text-black">
      <select
        id="selected-currenct"
        onChange={handleCurrencyChange}
        className="px-3 py-2 outline-none rounded-lg text-black"
      >
        {rates.map((rate) => (
          <option value={rate.currency} className="text-black" key={rate.currency}>
            {rate.currency}
          </option>
        ))}
      </select>

      <input
        id="amount"
        type="number"
        value={amount.value}
        onChange={amount.setAmount}
        className="p-3 outline-none rounded-lg"
      />

      <div className="flex gap-2" id="recently-selected">
        {recentlyUsedCurrencies.map((currency) => {
          return <div key={currency.currency}>{currency.currency}</div>;
        })}
      </div>
    </div>
  );
};

export default ConverterModule;
