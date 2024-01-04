import { Input } from '@/components/ui/input';
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
  const [recentlyUsedCurrencies, setrecentlyUsedCurrencies] = useState<currency[]>([
    rates[1],
    rates[2],
    rates[3],
  ]);

  const findCurrency = (name: string) =>
    rates.filter((currency) => currency.currency === name)[0];

  const handleCurrencyChange = (
    event: ChangeEvent<HTMLSelectElement> | React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const currencyIsFound = findCurrency(event.currentTarget.value);

    if (currencyIsFound) {
      currency.setCurrency(currencyIsFound);
      setrecentlyUsedCurrencies((prev) => [currencyIsFound, prev[0], prev[1]]);
    }
  };

  return (
    <div className="flex flex-col gap-3 pt-6">
      <select
        id="selected-currenct"
        onChange={handleCurrencyChange}
        className="px-3 py-2 outline-none rounded-lg bg-background border-input border"
      >
        {rates.map((rate) => (
          <option value={rate.currency} className="bg-background" key={rate.currency}>
            {rate.currency}
          </option>
        ))}
      </select>

      <Input id="amount" type="number" value={amount.value} onChange={amount.setAmount} />

      <div className="flex gap-2" id="recently-selected">
        {recentlyUsedCurrencies.map((currency) => {
          return (
            <Input
              id="amount"
              type="button"
              key={currency.currency}
              value={currency.currency}
              onClick={handleCurrencyChange}
              className="bg-white text-black"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ConverterModule;
