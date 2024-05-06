import React from 'react';
import Link from 'next/link';
import { Github, MailIcon, TwitterIcon } from 'lucide-react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex justify-between w-full mt-10 py-10 gap-5 flex-wrap">
      <div className="flex flex-col justify-between lg:w-2/4 w-full gap-3 min-w-60 max-sm:items-center">
        <h1 className="text-xl">Zimbabwe bank rates</h1>
        <p className="text-sm ">
          An open source platform to stay updated with real-time ZWL bank rates and
          explore seamless currency conversions.
        </p>
        <div className="flex gap-2 ">
          <Link href={'https://twitter.com/icepopsfr'}>
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <TwitterIcon />
            </div>
          </Link>

          <Link href={'https://github.com/icep0ps/zimbabwe-bank-rates'}>
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <Github />
            </div>
          </Link>

          <Link href={'mailto:tapsmuko@gmail.com'}>
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <MailIcon />
            </div>
          </Link>
        </div>

        <p className="text-xs text-zinc-400">
          © 2024 Zimbabwe Bank Rates. All rights reserved.
        </p>
      </div>

      <div className="flex gap-5 max-lg:justify-between max-lg:w-full ">
        <ul className="flex flex-col gap-3 w-1/2">
          <h6 className="font-semibold">Home</h6>
          <Link href={'/'}>
            <li className="capitalize text-zinc-300 text-sm">Today's rate</li>
          </Link>
          <Link href={'/#exchange_rate'}>
            <li className="capitalize text-zinc-300 text-sm">Exchange Rates</li>
          </Link>
        </ul>

        <ul className="flex flex-col gap-3 max-sm:w-1/2 text-right">
          <h6 className="font-semibold">Support</h6>
          <Link href={'mailto:tapsmuko@gmail.com'} target="_blank">
            <li className="capitalize text-zinc-300 text-sm">Contact</li>
          </Link>
          <Link href={'https://github.com/icep0ps/zimbabwe-bank-rates'} target="_blank">
            <li className="capitalize text-zinc-300 text-sm">Contribute</li>
          </Link>
          <Link href={'#faq'}>
            <li className="capitalize text-zinc-300 text-sm">
              frequently asked questions
            </li>
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
