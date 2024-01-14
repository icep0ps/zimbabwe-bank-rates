import { FC } from 'react';

type Props = {
  question: string;
  answer: string;
  icon: React.ReactNode;
};
const Question: FC<Props> = (props) => {
  const { answer, question, icon } = props;
  return (
    <div className="flex justify-center items-center flex-col w-64 ">
      <div className="bg-border p-5 rounded-full flex justify-center items-center">
        {icon}
      </div>
      <span>
        <h1 className="py-3 text-center font-bold">{question}</h1>
        <p className="text-center text-sm">{answer}</p>
      </span>
    </div>
  );
};

export default Question;
