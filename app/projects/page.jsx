import Link from "next/link";
import Headline from "@/components/text/headline";
import Section from "@/components/text/section";
import Body from "@/components/text/body";

const Projects = () => {
  return (
    <>
      <Link href="/">Back</Link>
      <div className="flex flex-col gap-4">
        <div className="text-2xl font-bold">Projects</div>
        <Section>
          <Headline title="Statline" />
          <Body>Easily lookup and share the statlines of your favorite basketball players.</Body>
        </Section>
        <Section>
          <Headline title="FantasyDex" />
          <Body>
            Manage all of your fantasy teams in one place. Syncs with major fantasy platforms and
            gives users a unified view with all the tools they need for fantasy football. Launching
            sometime in 2025.
          </Body>
        </Section>
        <Section>
          <Headline title="Bionic" />
          <Body>
            A Chrome extension to automatically set your lineups for ESPN Fantasy Basketball.
          </Body>
        </Section>
      </div>
    </>
  );
};

export default Projects;
