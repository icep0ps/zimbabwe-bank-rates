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
  const [secondaryAmount, setSecondaryAmount] = useState<string>(
    Number(props.rate.ask).toFixed(2).toString()
  );

  const handleConversion = useCallback(
    (type: 'priamary' | 'secondary', amount: string) => {
      if (type == 'priamary')
        return (parseFloat(amount) / secondaryCurrency.mid_zwl).toFixed(2);

      if (type == 'secondary')
        return (props.rate.mid_zwl * parseFloat(amount)).toFixed(2);

      return '0';
    },
    [primaryAmout, secondaryCurrency.mid_zwl]
  );

  useEffect(() => {
    //Doing this inorder to use the updated primary amount state.
    setSecondaryAmount(handleConversion('priamary', primaryAmout));
  }, [secondaryCurrency.currency]);

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
            setSecondaryAmount(handleConversion('priamary', event.target.value));
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
            setPriamaryAmount(handleConversion('secondary', event.target.value));
          },
        }}
        rates={props.rates}
      />
    </div>
  );
};

export default CurrencyConverter;
