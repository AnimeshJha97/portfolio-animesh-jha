import { SectionClose } from "@/components/ui/SectionClose";
import { SectionHead } from "@/components/ui/SectionHead";
import { thanksClosing } from "@/content/thanks";

export default function ThanksPage() {
  return (
    <>
      <SectionHead chapter="thanks" />
      <SectionClose
        chapter="thanks"
        extra={<span className="text-[var(--border-mid)]">{thanksClosing}</span>}
      />
    </>
  );
}
