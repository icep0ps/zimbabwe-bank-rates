import Link from 'next/link';

type Props = {};

const Navigation = (props: Props) => {
  return (
    <nav className="flex justify-between w-full items-center  ">
      <Link href={'/#rate'} className="normal-case">
        Zimbabwe bank rates
      </Link>
    </nav>
  );
};

export default Navigation;
