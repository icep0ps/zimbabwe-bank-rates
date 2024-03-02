import Link from 'next/link';

type Props = {};

const Navigation = (props: Props) => {
  return (
    <nav className="flex w-full py-10">
      <ul className="flex gap-5 uppercase w-full justify-evenly">
        <li>
          <Link href={'/#rate'}>Rate</Link>
        </li>
        <li>
          <Link href={'/#exchange_rates'}>Exchange rates</Link>
        </li>
        <li className="font-bold m-0 p-0">
          <Link href={'/'}>Zimbabwe bank rates</Link>
        </li>
        <li>
          <Link href={'/faq'}>How it works</Link>
        </li>
        <li>
          <Link href={'https://github.com/icep0ps/zimbabwe-bank-rates'}>Github</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
