"use client";

import { forwardRef, Suspense, useImperativeHandle, useRef } from "react";
import { OrbitControls, PerspectiveCamera, View as ViewImpl } from "@react-three/drei";
import { Three } from "@/helpers/components/Three";

export const Common = ({ color }) => (
  <Suspense fallback={null}>
    {color && <color attach="background" args={[color]} />}
    <ambientLight intensity={1} />
    <pointLight position={[30, 30, 10]} color="gold" intensity={6} decay={0.1} />
    <pointLight position={[-10, -10, -10]} color="blue" intensity={6} decay={0.1} />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 4]} />
  </Suspense>
);

const View = forwardRef(({ children, orbit, ...props }, ref) => {
  const localRef = useRef(null);
  useImperativeHandle(ref, () => localRef.current);

  return (
    <>
      <div ref={localRef} {...props} />
      <Three>
        <ViewImpl track={localRef}>
          {children}
          {orbit && <OrbitControls />}
        </ViewImpl>
      </Three>
    </>
  );
});
View.displayName = "View";

export { View };
