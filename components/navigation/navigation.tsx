'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const handleToggle = () => setToggleMenu((prev) => !prev);

  return (
    <nav className="w-full">
      {toggleMenu && <Humburger handleToggle={handleToggle} />}

      <div className="flex justify-between p-5  w-full items-center">
        <Link href={'/#rate'} className="normal-case">
          Zimbabwe bank rates
        </Link>

        <ul className="flex gap-5  items-center max-lg:hidden ">
          <li className="hover:border-b-2 border-accent">
            <Link href={'/#exchange_rates'}>Exchange rates</Link>
          </li>

          <li className="hover:border-b-2 border-accent">
            <Link href={'/#faq'}>Frequently Asked Questions</Link>
          </li>
        </ul>

        <Menu className="hidden max-lg:block" onClick={handleToggle} />
      </div>
    </nav>
  );
};

type Props = {
  handleToggle: () => void;
};

const Humburger = (props: Props) => {
  useEffect(() => {
    window.addEventListener('resize', props.handleToggle);
    return () => window.removeEventListener('resize', props.handleToggle);
  }, []);

  return (
    <div className="fixed w-screen h-screen bg-zinc-900 z-10 left-0 overflow-y-hidden">
      <X
        className="absolute right-20 top-10 cursor-pointer"
        onClick={props.handleToggle}
      />
      <ul className="flex flex-col gap-5  items-center h-full justify-center">
        <li className="hover:border-b-2 border-accent" onClick={props.handleToggle}>
          <Link href={'/#exchange_rates'}>Exchange rates</Link>
        </li>

        <li className="hover:border-b-2 border-accent" onClick={props.handleToggle}>
          <Link href={'/#faq'}>Frequently Asked Questions</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
