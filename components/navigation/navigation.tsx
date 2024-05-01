import Link from 'next/link';

type Props = {};

const Navigation = (props: Props) => {
  return (
    <nav className="flex justify-between  p-5  w-full items-center  ">
      <Link href={'/#rate'} className="normal-case">
        Zimbabwe bank rates
      </Link>

      <ul className="flex gap-5  items-center">
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
    </nav>
  );
};

export default Navigation;
