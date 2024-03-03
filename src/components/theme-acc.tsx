import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {trackData} from '../../content/tracks'




export function ThemeAcc() {
  return (
    <Accordion type="single" collapsible className="w-full pt-5 pb-5">
    {trackData.map((track, index) => (
      <AccordionItem key={`item-${index + 1}`} value={`item-${index + 1}`}>
        <AccordionTrigger>{track.title}</AccordionTrigger>
        <AccordionContent>{track.content}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
  );
}
