import Link from "next/link";
import Headline from "@/components/text/headline";
import Section from "@/components/text/section";
import Body from "@/components/text/body";

const Work = () => {
  return (
    <>
      <Link href="/">Back</Link>
      <div className="flex flex-col gap-4">
        <div className="text-2xl font-bold">Work</div>
        <div className="text-sm">For more details, check out my resume.</div>
        <div>
          <Section>
            <Headline title="Affinity" dateRange="July 2018 - Present" />
            <div className="text-base font-semibold">Senior Software Engineer II</div>
            <Body>
              I currently work at Affinity, a B2B platform for venture capital and other investment
              firms. I grew with Affinity from a scrappy team of 40 (~12 engineers) to a scaling,
              8-digit ARR business of 300 employees.
            </Body>
            <Body>
              My work at Affinity has mostly fallen under two buckets - as a product engineer
              working on core features and launching new products and as a backend engineer focused
              on scaling data pipelines and data models.
            </Body>
          </Section>
        </div>
        <Section>
          <Headline title="Amazon Lab126" dateRange="May - August 2017" />
          <div className="text-base font-semibold">Software Engineering Intern</div>
          <Body>
            I interned at Amazon Lab126, on a team responsible for device metrics. I built a service
            to detect regressions between Amazon device builds by performing hypothesis tests on
            millions of device metrics.
          </Body>
        </Section>
        <Section>
          <Headline title="UC Berkeley" dateRange="Fall 2014- Fall 2018" />
          <div>
            <Body>B.A. Computer Science</Body>
            <Body>B.A. Statistics</Body>
          </div>
        </Section>
      </div>
    </>
  );
};

export default Work;
