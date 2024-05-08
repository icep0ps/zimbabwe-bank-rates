import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { currency } from '@/types';

type Props = {
  rates: currency[];
};

const Faq = (props: Props) => {
  return (
    <section className="flex flex-col gap-5" id="faq">
      <h1 className="capitalize text-3xl font-bold text-primary max-sm:text-center">
        frequently asked questions
      </h1>
      <p className="max-sm:text-center">
        Quick answers to questions you might have. Can't find what you are looking for?
        Contact us
      </p>

      <Accordion type="single" collapsible className="w-full mt-10">
        <AccordionItem value="item-1">
          <AccordionTrigger>Where do we get our data?</AccordionTrigger>
          <AccordionContent>
            These values represent the daily average of the Bid and Ask rates published by
            <span className="underline"> The Reserve Bank of Zimbabwe.</span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What currencies do we support?</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc flex flex-wrap w-full gap-4 justify-between text-nowrap ml-5">
              {props.rates.map((rate) => (
                <li className="w-48" key={rate.currency}>
                  {rate.name} ({rate.currency})
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How often does the data update?</AccordionTrigger>
          <AccordionContent>Daily around 9-10 am</AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Faq;
