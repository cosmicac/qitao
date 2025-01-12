import Link from "next/link";
import Headline from "@/components/text/headline";
import Section from "@/components/text/section";
import Body from "@/components/text/body";

const Projects = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="text-2xl font-bold">Projects</div>
        <Section>
          <Headline title="Statline" titleUrl="https://www.statline.app/" />
          <Body>Easily lookup and share the statlines of your favorite basketball players.</Body>
        </Section>
        <Section>
          <Headline title="FantasyDex" titleUrl="https://fantasydex.app/" />
          <Body>
            Manage all of your fantasy teams in one place. Syncs with major fantasy platforms and
            gives users a unified view with all the tools they need for fantasy football. Launching
            sometime in 2025.
          </Body>
        </Section>
        <Section>
          <Headline
            title="Bionic"
            titleUrl="https://chromewebstore.google.com/detail/bionic/hjpjljchacdncdgdbehnbinbaopnijlp"
          />
          <Body>
            A Chrome extension to automatically set your lineups for ESPN Fantasy Basketball.
          </Body>
        </Section>
      </div>
    </>
  );
};

export default Projects;
