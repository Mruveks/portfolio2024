import React, { useRef, useEffect, useMemo } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Model = () => {
  const { scene } = useGLTF("/male_body.glb", (loader) => {
    loader.setCrossOrigin("anonymous");
  });

  const modelRef = useRef();
  const groupRef = useRef();

  const pointsMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        size: { value: 2.0 },
        scale: { value: 2.0 },
        color: { value: new THREE.Color("#8A9A5B") },
      },
      vertexShader: `
        uniform float size;
        uniform float scale;
        void main() {
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (scale / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        void main() {
          if (length(gl_PointCoord - vec2(0.5, 0.5)) > 0.475) discard;
          gl_FragColor = vec4(color, 1.0);
        }
      `,
    });
  }, []);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.traverse((child) => {
        if (child.isMesh) {
          const geometry = child.geometry;
          const positions = geometry.attributes.position.array;

          const pointsGeometry = new THREE.BufferGeometry();
          pointsGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

          child.visible = false;

          const points = new THREE.Points(pointsGeometry, pointsMaterial);
          modelRef.current.add(points);
        }
      });

      modelRef.current.rotation.x = Math.PI / 2;
      modelRef.current.rotation.y = Math.PI;
    }
  }, [pointsMaterial]);

  // Automatic rotation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5; // Adjust rotation speed here
    }
  });

  return (
    <group ref={groupRef}>
      <primitive ref={modelRef} object={scene} />
    </group>
  );
};

const Scene = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 1, 2);
  }, [camera]);

  return (
    <group>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <Model />
    </group>
  );
};

const Hero = () => {
  return (
    <div className="h-full w-full bg-light-beige p-16 relative grid grid-cols-2">
      <header className="flex flex-col justify-center h-full">
        <h1 className="text-8xl relative flex w-full justify-between">Kuba Mrowiec</h1>
        <h2 className="text-3xl px-2">Web Developer from Warsaw, Poland</h2>
      </header>
      <div className="flex flex-col items-center z-50">
        <Canvas className="w-full h-full">
          <Scene />
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;
