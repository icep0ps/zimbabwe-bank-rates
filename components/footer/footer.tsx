import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="flex justify-between w-full">
      <div className="flex flex-col justify-between">
        <h1>Zimbabwe bank rates</h1>
        <p className="text-xs">© 2024 Zimbabwe Bank Rates. All rights reserved.</p>
      </div>

      <div className="flex gap-5">
        <ul>
          <li>Rate</li>
          <li>Exchange Rates</li>
        </ul>

        <ul>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
