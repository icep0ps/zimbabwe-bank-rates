import { currency } from '@/types';
import React from 'react';

const convert = (type, amount) => {
  if (!['priamary', 'secondary'].includes(type)) {
    throw TypeError(`Invalid type ${type}`);
  }

  if (typeof amount !== 'string') {
    throw TypeError(`amount is not a string.`);
  }

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

module.exports = convert;
