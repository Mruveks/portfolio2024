import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF(
    "/retro_pc.glb",
    (loader) => {
      loader.setCrossOrigin("anonymous");
    },
    undefined,
    (error) => {
      console.error("An error happened while loading the model:", error);
    }
  );

  const modelRef = useRef();

  // Rotate the model on every frame
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={0.2} position={[0, -5, -15]} />;
};

const Hero = () => {
  return (
    <div className="h-full w-full bg-light-beige p-16 relative grid grid-cols-1">
      <header className="col-span-2 py-10">
        <h1 className="text-9xl relative flex w-full justify-between">
          Kuba Mrowiec <p>'2024'</p>
        </h1>
        <h2 className="text-3xl px-2">Web Developer from Warsaw, Poland</h2>
      </header>
      <Canvas className="w-full h-full">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Model />
      </Canvas>
    </div>
  );
};

export default Hero;
