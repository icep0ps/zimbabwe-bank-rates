import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

type Props = {};

const Faq = (props: Props) => {
  return (
    <section className="flex flex-col gap-5" id="faq">
      <h1 className="capitalize text-3xl font-bold text-primary">
        frequently asked questions
      </h1>
      <p>
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
            All currencies listed in The Reserve Bank of Zimbabwe exchange rate PDF.
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
