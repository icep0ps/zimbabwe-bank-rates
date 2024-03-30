'use client';

import { currency } from '@/types';
import { ArrowRightLeft, MoveRight } from 'lucide-react';
import ConverterModule from './components/converterModule';
import { FC, useCallback, useEffect, useState } from 'react';

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
  const [secondaryAmount, setSecondaryAmount] = useState<string>('1.00');

  const handleConversion = useCallback(
    () => (parseFloat(primaryAmout) / secondaryCurrency.mid_zwl).toFixed(2),
    [primaryAmout, secondaryCurrency.mid_zwl]
  );

  useEffect(() => {
    //Doing this inorder to use the updated primary amount state.
    setSecondaryAmount(handleConversion());
  }, [primaryAmout, secondaryCurrency.currency]);

  return (
    <div className="flex flex-col justify-between items-start w-3/4 gap-5">
      <span className="w-full border-input border rounded-lg py-3 px-2 flex">
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
      <div className="flex flex-col gap-3 self-start h-full w-full">
        {/* <span className="self-start">
          <p className="text-zinc-300 text-xs">Exchange rate</p>
          <p className="font-bold flex gap-2">
            1 {secondaryCurrency.currency}
            <MoveRight /> {secondaryCurrency.mid_zwl} Zimbabwean dollars
          </p>
        </span> */}
      </div>
    </div>
  );
};

export default CurrencyConverter;
