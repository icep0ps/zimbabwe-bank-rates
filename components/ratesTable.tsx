import React, { FC } from 'react';
import { currency } from '@/types';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

type Props = {
  rates: currency[];
};

const RatesTable: FC<Props> = (props) => {
  return (
    <div className="w-full flex flex-col gap-8">
      <h1 className="text-3xl font-bold text-primary" id="exchange_rates">
        All exchange rates
      </h1>
      <p className={'text-sx'}>
        Our tables are meticulously updated with the latest information posted by the
        Reserve Bank of Zimbabwe, ensuring you have access to reliable and
        up-to-the-minute data.{' '}
      </p>
      <div className="rounded-md border-border border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold uppercase text-white">Currency</TableHead>
              <TableHead className="font-bold uppercase text-white">Bid</TableHead>
              <TableHead className="font-bold uppercase text-white">Ask</TableHead>
              <TableHead className="font-bold uppercase text-white">Mid Rate</TableHead>
              <TableHead className="font-bold uppercase text-white">Bid (ZWL)</TableHead>
              <TableHead className="font-bold uppercase text-white">Ask (ZWL)</TableHead>
              <TableHead className="font-bold uppercase text-white">
                Mid Rate (ZWL)
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {props.rates.map((rate) => (
              <TableRow key={rate.currency}>
                <TableCell>{rate.currency}</TableCell>
                <TableCell>{rate.bid}</TableCell>
                <TableCell>{rate.ask}</TableCell>
                <TableCell>{rate.mid_rate}</TableCell>
                <TableCell>{rate.bid_zwl}</TableCell>
                <TableCell>{rate.ask_zwl}</TableCell>
                <TableCell>{rate.mid_zwl}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default RatesTable;
