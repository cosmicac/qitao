"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

import { Text3D, Center } from "@react-three/drei";

import About from "@/components/about";
import Spinner from "@/components/spinner";

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
  return (
    <>
      <div className="flex flex-col gap-4">
        <About />
        <View orbit className="h-96">
          <Suspense fallback={null}>
            <Center position={[0, 0.3, 0]}>
              <Basketball scale={0.8} position={[0, 0, 0]} rotation={[1.0, 0.0, -0.3]} />
            </Center>
            <Center position={[0, -0.8, 0]} rotation={[-0.5, -0.25, 0.0]}>
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
            <Common />
          </Suspense>
        </View>
      </div>
    </>
  );
};

export default Home;
