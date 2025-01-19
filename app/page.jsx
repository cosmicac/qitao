"use client";

import { Suspense, useState } from "react";
import dynamic from "next/dynamic";
import Section from "@/components/text/section";
import Spinner from "@/components/spinner";
import { Text3D, Center } from "@react-three/drei";

const Basketball = dynamic(
  () => import("@/components/canvas/basketball").then((mod) => mod.Basketball),
  { ssr: false },
);

const View = dynamic(() => import("@/components/canvas/View").then((mod) => mod.View), {
  ssr: false,
  loading: Spinner,
});

const Common = dynamic(() => import("@/components/canvas/View").then((mod) => mod.Common), {
  ssr: false,
});

const Home = () => {
  const [showText, setShowText] = useState(true);

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
        <View orbit className="h-96">
          <Suspense fallback={null}>
            {showText && (
              <Center position={[0, 1.1, 0]} rotation={[-0.25, -0.2, 0]}>
                <Text3D
                  font={"/inter_3d.json"}
                  curveSegments={32}
                  bevelEnabled
                  bevelSize={0.01}
                  bevelThickness={0.05}
                  height={0.02}
                  lineHeight={0.5}
                  letterSpacing={-0.01}
                  size={0.2}
                >
                  go warriors!
                  <meshNormalMaterial />
                </Text3D>
              </Center>
            )}
            <Basketball
              scale={0.8}
              position={[0, 0, 0]}
              rotation={[1.0, 0.0, -0.3]}
              onClick={() => setShowText(true)}
            />
            <Common />
          </Suspense>
        </View>
      </div>
    </>
  );
};

export default Home;
