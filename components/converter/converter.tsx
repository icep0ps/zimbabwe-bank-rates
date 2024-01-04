'use client';

import { currency } from '@/types';
import ConverterModule from './components/converterModule';
import { FC, useCallback, useEffect, useState } from 'react';

type Props = {
  rates: currency[];
};

const CurrencyConverter: FC<Props> = (props) => {
  const [priamaryCurrency, setPriamaryCurrency] = useState<currency>(props.rates[1]);

  const [secondaryCurrency, setSecondaryCurrency] = useState<currency>(props.rates[1]);

  const [primaryAmout, setPriamaryAmount] = useState<string>('1');
  const [secondaryAmount, setSecondaryAmount] = useState<string>(
    secondaryCurrency.mid_zwl.toString()
  );

  const handleConversion = useCallback(
    () => (parseFloat(primaryAmout) * secondaryCurrency.mid_zwl).toFixed(2).toString(),
    [primaryAmout, secondaryCurrency.mid_zwl]
  );

  useEffect(() => {
    //Doing this inorder to use the updated primary amount state.
    setSecondaryAmount(handleConversion());
  }, [primaryAmout, secondaryCurrency.currency]);

  return (
    <section className="flex flex-col gap-5 w-6/12 p-4">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <label htmlFor="currency">Enter amout ZWL:</label>
          <input
            min={0}
            type="number"
            id="currency"
            value={parseInt(primaryAmout).toFixed(2)}
            className="p-3 rounded-lg bg-background border-input border"
            onChange={(event) => {
              setPriamaryAmount(parseInt(event.target.value).toFixed(2));
            }}
          />
        </div>

        <ConverterModule
          currency={{
            value: priamaryCurrency.currency,
            setCurrency: setSecondaryCurrency,
          }}
          amount={{
            value: secondaryAmount,
            setAmount: (event) => {
              setSecondaryAmount(event.target.value);
            },
          }}
          rates={props.rates}
        />
      </div>
    </section>
  );
};

export default CurrencyConverter;
