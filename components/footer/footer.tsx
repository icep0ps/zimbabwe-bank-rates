import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex justify-between w-full mt-10 py-10">
      <div className="flex flex-col justify-between w-2/4 gap-3">
        <h1 className="text-xl">Zimbabwe bank rates</h1>
        <p className="text-sm">
          An open source platform to stay updated with real-time ZWL bank rates and
          explore seamless currency conversions.
        </p>
        <div className="flex gap-2">
          <div className="w-10 h-10 bg-secondary rounded-full"></div>
          <div className="w-10 h-10 bg-secondary rounded-full"></div>
          <div className="w-10 h-10 bg-secondary rounded-full"></div>
        </div>

        <p className="text-xs text-zinc-400">
          © 2024 Zimbabwe Bank Rates. All rights reserved.
        </p>
      </div>

      <div className="flex gap-5">
        <ul className="flex flex-col gap-3">
          <h6 className="font-semibold">Home</h6>
          <li className="capitalize text-zinc-300 text-sm">Today's rate</li>
          <li className="capitalize text-zinc-300 text-sm">Exchange Rates</li>
        </ul>

        <ul className="flex flex-col gap-3">
          <h6 className="font-semibold">Support</h6>
          <li className="capitalize text-zinc-300 text-sm">Contact</li>
          <li className="capitalize text-zinc-300 text-sm">Contribute</li>
          <li className="capitalize text-zinc-300 text-sm">frequently asked questions</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
