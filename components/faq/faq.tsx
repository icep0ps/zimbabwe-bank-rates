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
    <section className="flex flex-col gap-5">
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
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What currencies do we support?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos;
            aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>How often does the data update?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default Faq;
