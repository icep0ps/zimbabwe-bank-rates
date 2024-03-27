import Link from 'next/link';

type Props = {};

const Navigation = (props: Props) => {
  return (
    <nav className="flex items-start w-full">
      <ul className="flex gap-5 capitalize w-full ">
        <li>
          <Link href={'/#rate'} className="normal-case">
            Zimbabwe bank rates
          </Link>
        </li>
        <li>
          <Link href={'/#exchange_rates'}>Exchange rates</Link>
        </li>
        <li>
          <Link href={'/faq'}>Frequently asked questions</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
