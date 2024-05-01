'use client';

import { currency } from '@/types';
import ConverterModule from './components/converterModule';
import { FC, useCallback, useEffect, useState } from 'react';
import useConversion from '@/hooks/useConversion';
import convert from '@/hooks/convert.js';

type Props = {
  rate: currency;
  rates: currency[];
};

const CurrencyConverter: FC<Props> = (props) => {
  const [secondaryCurrency, setSecondaryCurrency] = useState<currency>(
    props.rates.filter((currency) => currency.currency.trim() === 'USD')[0]
  );

  const [primaryAmout, setPriamaryAmount] = useState<string>(
    secondaryCurrency.mid_zwl.toString()
  );

  const [secondaryAmount, setSecondaryAmount] = useState<string>(
    Number(props.rate.ask).toFixed(2).toString()
  );

  const handleConversion = useConversion(props.rate, secondaryCurrency);

  useEffect(() => {}, [secondaryCurrency.currency]);

  return (
    <div className="flex flex-col justify-between items-start w-3/4 gap-5">
      <span className="w-full focus-within:border-accent border rounded-lg py-3 px-2 flex">
        <span className="bg-border p-2 rounded-lg text-sm mr-3">ZiG</span>
        <input
          min={'0'}
          type="number"
          id="currency"
          value={primaryAmout}
          className="bg-background outline-none"
          onChange={(event) => {
            setPriamaryAmount(parseFloat(event.target.value).toString());
            setSecondaryAmount(
              convert('primary', event.target.value, {
                primary: props.rate,
                secondary: secondaryCurrency,
              })
            );
          }}
        />
      </span>

      <ConverterModule
        currency={{
          value: secondaryCurrency.currency,
          setCurrency: setSecondaryCurrency,
        }}
        amount={{
          value: secondaryAmount,
          setAmount: (event) => {
            setSecondaryAmount(event.target.value);
            setPriamaryAmount(
              convert('secondary', event.target.value, {
                primary: props.rate,
                secondary: secondaryCurrency,
              })
            );
          },
        }}
        setSecondaryAmount={setSecondaryAmount}
        rates={props.rates}
      />
    </div>
  );
};

export default CurrencyConverter;
