import Link from "next/link";
import Headline from "@/components/text/headline";
import Section from "@/components/text/section";
import Body from "@/components/text/body";

const Volunteering = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="text-2xl font-bold">Volunteering</div>
        <Section>
          <Headline
            title="Girls Who Code"
            titleUrl="https://girlswhocode.com/"
            dateRange="Spring 2021"
          />
          <Body>
            Taught Python and basic programming concepts to a local Girls Who Code high school
            chapter.
          </Body>
        </Section>
        <Section>
          <Headline
            title="Black Girls Code"
            titleUrl="https://www.wearebgc.org/"
            dateRange="Fall 2020"
          />
          <Body>
            Participated as an instructor in the Black Girls CODE Hackathon in October 2020.
          </Body>
        </Section>
      </div>
    </>
  );
};

export default Volunteering;
