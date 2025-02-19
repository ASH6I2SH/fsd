import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

import React from 'react'
Accordion
const page = () => {
  return (
    <>
    <div>page</div>
    <Accordion className="m-5" type="single" collapsible>
      <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
      </AccordionItem>
    </Accordion>
    </>
  )
}

export default page