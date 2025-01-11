"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Section from "@/components/text/section";

const Basketball = dynamic(
  () => import("@/components/canvas/Examples").then((mod) => mod.Basketball),
  { ssr: false },
);

const View = dynamic(() => import("@/components/canvas/View").then((mod) => mod.View), {
  ssr: false,
  loading: () => (
    <div className="flex h-96 w-full flex-col items-center justify-center">
      <svg className="-ml-1 mr-3 h-5 w-5 animate-spin text-black" fill="none" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  ),
});
const Common = dynamic(() => import("@/components/canvas/View").then((mod) => mod.Common), {
  ssr: false,
});

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Section>
          <div className="text-3xl font-bold pb-4">Qitao (Tom) Li</div>
          <div>
            I&apos;m Tom, a software engineer based in the San Francisco Bay Area. I currently work
            at Affinity.
          </div>
          <div>
            I&apos;m a generalist at heart, but my skillset leans backend. I like to put my product
            hat on and collaborate closely with product and design.
          </div>
          <div>
            In my spare time, I like to watch basketball (go Warriors & Valkyries!), play video
            games, and work on various side projects.
          </div>
        </Section>
        <div className="flex flex-col gap-2">
          <Link href="/work">
            <div className="text-lg font-medium">Work</div>
          </Link>
          <Link href="/projects">
            <div className="text-lg font-medium">Projects</div>
          </Link>
          <Link href="/volunteering">
            <div className="text-lg font-medium">Volunteering</div>
          </Link>
        </div>
        {/*
        <View orbit className='h-96'>
          <Suspense fallback={null}>
            <Basketball scale={1} position={[0, 0, 0]} rotation={[0.0, -0.3, 0]} />
            <Common />
          </Suspense>
        </View>
        */}
      </div>
    </>
  );
};

export default Home;
