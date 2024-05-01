import { currency } from '@/types';
import React from 'react';

const useConversion = (officalRate: currency, secondaryCurrency: currency) => {
  const convert = (type: 'priamary' | 'secondary', amount: string) => {
    let factor = officalRate.mid_zwl;

    if (secondaryCurrency.currency.trim() === 'USD') {
      if (type === 'priamary') {
        return (parseFloat(amount) / factor).toFixed(2);
      }

      if (type == 'secondary') return (factor * parseFloat(amount)).toFixed(2);
    }

    if (type == 'secondary') return (parseFloat(amount) * factor).toFixed(2);

    // if (type == 'priamary') return (parseFloat(amount) / factor).toFixed(2);

    // if (secondaryCurrency.currency.trim() === 'USD') {
    //   return parseInt(secondaryCurrency.bid.toString()).toFixed(2);
    // }

    return '0.00';
  };

  return convert
};

export default useConversion;
