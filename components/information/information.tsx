import { FC } from 'react';
import Question from './question';
import { CircleDollarSign, Hourglass, MessageCircleQuestion } from 'lucide-react';

type Props = {};
const Information: FC<Props> = (props) => {
  return (
    <div className="w-full flex flex-col gap-10" id="how_it_works">
      <h1 className="w-full text-center text-3xl capitalize">
        frequently asked questions
      </h1>
      <div className="flex flex-wrap justify-between w-full">
        <Question
          question="Where do we get our data?"
          answer="Accusantium ipsa quo ratione corrupti, incidunt voluptates voluptatibus ipsam suscipit voluptate quae, id nemo vero. Sequi."
          icon={<MessageCircleQuestion size={50} />}
        />

        <Question
          question="What currencies do we support?"
          answer="Cumque at fuga sed explicabo accusantium ipsa quo ratione corrupti, incidunt voluptates voluptatibus ipsam suscipit voluptate quae, id nemo vero. Sequi."
          icon={<CircleDollarSign size={50} />}
        />

        <Question
          question="How often does the data update?"
          answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cumque at fuga sed explicabo accusantium ips."
          icon={<Hourglass size={50} />}
        />
      </div>
    </div>
  );
};

export default Information;
