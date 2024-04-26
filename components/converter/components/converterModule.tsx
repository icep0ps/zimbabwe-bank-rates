import { currency } from '../../../types';
import { Input } from '@/components/ui/input';
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

  const [selectValue, setSelectValue] = useState<string>(currency.value);
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
    const currencyFound = findCurrency(event.currentTarget.value);

    if (currencyFound) {
      if (
        recentlyUsedCurrencies.some(
          (currency) => currency.currency === currencyFound.currency
        )
      ) {
        const array = recentlyUsedCurrencies.filter(
          (currency) => currency.currency != currencyFound.currency
        );

        array.unshift(currencyFound);
        currency.setCurrency(currencyFound);
        setrecentlyUsedCurrencies((prev) => array);
      } else {
        currency.setCurrency(currencyFound);
        setrecentlyUsedCurrencies((prev) => [currencyFound, prev[0], prev[1]]);
      }
    }
    setSelectValue(event.currentTarget.value);
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <span className="w-full border-input border rounded-lg py-3 px-2 flex focus-within:border-accent">
        <span className="bg-border p-2 rounded-lg text-sm mr-3">{currency.value}</span>
        <input
          min={0}
          id="amount"
          type="number"
          value={amount.value}
          className="  bg-background outline-none"
          onChange={amount.setAmount}
        />
      </span>

      <select
        id="selected-currenct"
        onChange={handleCurrencyChange}
        defaultValue={currency.value}
        value={selectValue}
        className="px-3 py-2 outline-none rounded-lg bg-background border-input border"
      >
        {rates.map((rate) => (
          <option
            value={rate.currency}
            className="bg-background"
            key={rate.currency + rate.ask_zwl}
          >
            {rate.currency}
          </option>
        ))}
      </select>

      <div className="flex gap-2" id="recently-selected">
        {recentlyUsedCurrencies.map((currency) => {
          return (
            <Input
              id="amount"
              type="button"
              key={currency.currency}
              value={currency.currency}
              onClick={handleCurrencyChange}
              className="bg-white text-black cursor-pointer"
            />
          );
        })}
      </div>
    </div>
  );
};

export default ConverterModule;
