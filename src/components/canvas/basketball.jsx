/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";

export function Basketball(props) {
  const { nodes, materials } = useGLTF("/basketball.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_1.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere_2.geometry}
        material={materials["Material.002"]}
      />
    </group>
  );
}

useGLTF.preload("/basketball.glb");