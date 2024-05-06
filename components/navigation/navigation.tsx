'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

type Props = {};

const Navigation = (props: Props) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const handleToggle = () => setToggleMenu((prev) => !prev);

  return (
    <nav className="w-full">
      {toggleMenu && <Humburger />}

      <div className="flex justify-between p-5  w-full items-center">
        <Link href={'/#rate'} className="normal-case">
          Zimbabwe bank rates
        </Link>

        <ul className="flex gap-5  items-center max-lg:hidden">
          <li className="border-b-4 border-accent">
            <Link href={'/#exchange_rates'}>Home</Link>
          </li>
          <li>
            <Link href={'/#exchange_rates'}>Exchange rates</Link>
          </li>

          <li>
            <Link href={'/#faq'}>Frequently Asked Questions</Link>
          </li>
        </ul>

        <Menu className="hidden max-lg:block" onClick={handleToggle} />
      </div>
    </nav>
  );
};

const Humburger = () => {
  return (
    <div className="fixed w-screen h-screen bg-zinc-900 ">
      <ul className="flex flex-col gap-5  items-center z-10">
        <li className="text-white">
          <Link href={'/#exchange_rates'}>Home</Link>
        </li>
        <li>
          <Link href={'/#exchange_rates'} className="text-white">
            Exchange rates
          </Link>
        </li>

        <li>
          <Link href={'/#faq'} className="text-white">
            Frequently Asked Questions
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
