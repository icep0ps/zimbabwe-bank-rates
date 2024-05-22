'use client';

import { currency } from '@/types';
import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<currency>[] = [
  {
    accessorKey: 'currency',
    enableHiding: false,
    header: () => <div className="text-right">Currency</div>,
    cell: ({ row }) => (
      <div className="capitalize text-right font-medium">{row.getValue('currency')}</div>
    ),
  },
  {
    accessorKey: 'bid',
    header: () => <div className="text-right">Bid</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('bid'));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'ask',
    header: () => <div className="text-right">Ask</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('ask'));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'mid_rate',
    header: () => <div className="text-right">Mid Rate</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('mid_rate'));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'bid_zwl',
    header: () => <div className="text-right">Bid (ZiG)</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('bid_zwl'));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'ZiG',
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'ask_zwl',
    header: () => <div className="text-right">Ask (ZiG)</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('ask_zwl'));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'ZiG',
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: 'mid_zwl',
    header: ({ column }) => (
      <div
        className="text-right"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Mid (ZiG)
      </div>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('mid_zwl'));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'ZiG',
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];
