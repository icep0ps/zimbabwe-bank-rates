'use client';

import { currency } from '@/types';
import ConverterModule from './components/converterModule';
import { FC, useCallback, useEffect, useState } from 'react';

type Props = {
  rates: currency[];
};

const CurrencyConverter: FC<Props> = (props) => {
  const [secondaryCurrency, setSecondaryCurrency] = useState<currency>(
    props.rates.filter((currency) => currency.currency === 'USD')[0]
  );

  const [primaryAmout, setPriamaryAmount] = useState<string>('1');
  const [secondaryAmount, setSecondaryAmount] = useState<string>(
    secondaryCurrency.mid_zwl.toString()
  );

  const handleConversion = useCallback(
    () => (parseFloat(primaryAmout) * secondaryCurrency.mid_zwl).toFixed(2),
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
          <span className="w-full border-input border rounded-lg py-3 px-2">
            <span className="bg-border p-2 rounded-lg text-sm mr-3">ZWL</span>
            <input
              min={'0'}
              type="number"
              id="currency"
              value={primaryAmout}
              className="bg-background outline-none"
              onChange={(event) => {
                setPriamaryAmount(parseFloat(event.target.value).toString());
              }}
            />
          </span>
        </div>

        <ConverterModule
          currency={{
            value: secondaryCurrency.currency,
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
