import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ThemeAcc() {
  return (
    <Accordion type="single" collapsible className="w-full pt-5 pb-5 ">
      <AccordionItem value="item-1">
        <AccordionTrigger>Track1</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          sapiente pariatur molestias rerum non odit nesciunt eum, beatae
          mollitia blanditiis possimus sed ea recusandae neque dolorum in
          cupiditate eos commodi.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Track2</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur error
          sit necessitatibus nisi nihil commodi eaque, illo eum vitae! Quae,
          minima? Error molestiae saepe blanditiis porro eaque. Ratione, neque
          provident.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Track3</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
          temporibus obcaecati assumenda ratione amet eos cupiditate,
          perferendis aspernatur illo eaque ut, voluptatibus quasi aliquam non
          reiciendis facilis sed. Facilis, veniam!
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>Track4</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
          temporibus obcaecati assumenda ratione amet eos cupiditate,
          perferendis aspernatur illo eaque ut, voluptatibus quasi aliquam non
          reiciendis facilis sed. Facilis, veniam!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Track5</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
          temporibus obcaecati assumenda ratione amet eos cupiditate,
          perferendis aspernatur illo eaque ut, voluptatibus quasi aliquam non
          reiciendis facilis sed. Facilis, veniam!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Track6</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
          temporibus obcaecati assumenda ratione amet eos cupiditate,
          perferendis aspernatur illo eaque ut, voluptatibus quasi aliquam non
          reiciendis facilis sed. Facilis, veniam!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>Track7</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
          temporibus obcaecati assumenda ratione amet eos cupiditate,
          perferendis aspernatur illo eaque ut, voluptatibus quasi aliquam non
          reiciendis facilis sed. Facilis, veniam!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger>Track8</AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
          temporibus obcaecati assumenda ratione amet eos cupiditate,
          perferendis aspernatur illo eaque ut, voluptatibus quasi aliquam non
          reiciendis facilis sed. Facilis, veniam!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
