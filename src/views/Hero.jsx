import React, { useState, useRef, useEffect, useMemo } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import "../animations.css";

const Model = () => {
  const { scene } = useGLTF("/male_body.glb", (loader) => {
    loader.setCrossOrigin("anonymous");
  });

  const modelRef = useRef();
  const groupRef = useRef();

  const [startTime] = useState(Date.now());

  const pointsMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        size: { value: 2.0 },
        scale: { value: 2.0 },
        color: { value: new THREE.Color("#8A9A5B") },
        time: { value: 0 }, // New uniform for animation
      },
      vertexShader: `
        uniform float size;
        uniform float scale;
        uniform float time;
        attribute vec3 originalPosition;
        varying float vOpacity;

        void main() {
          vec3 animated = mix(
            originalPosition + vec3(
              sin(position.x * 10.0 + time) * 2.0,
              cos(position.y * 10.0 + time) * 2.0,
              sin(position.z * 10.0 + time) * 2.0
            ),
            originalPosition,
            min(1.0, time * 0.5)
          );
          
          vec4 mvPosition = modelViewMatrix * vec4(animated, 1.0);
          gl_PointSize = size * (scale / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
          
          vOpacity = min(1.0, time * 2.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        varying float vOpacity;

        void main() {
          if (length(gl_PointCoord - vec2(0.5, 0.5)) > 0.475) discard;
          gl_FragColor = vec4(color, vOpacity);
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
          pointsGeometry.setAttribute("originalPosition", new THREE.BufferAttribute(positions.slice(), 3));

          child.visible = false;

          const points = new THREE.Points(pointsGeometry, pointsMaterial);
          modelRef.current.add(points);
        }
      });

      modelRef.current.rotation.x = Math.PI / 2;
      modelRef.current.rotation.y = Math.PI;
      modelRef.current.rotation.z = Math.PI / 2;

    }
  }, [pointsMaterial]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5; // Rotation speed
    }

    if (modelRef.current) {
      modelRef.current.traverse((child) => {
        if (child instanceof THREE.Points) {
          const elapsedTime = (Date.now() - startTime) / 1000;
          child.material.uniforms.time.value = Math.min(elapsedTime, 2.0);
        }
      });
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
    <div className="h-screen w-full bg-beige relative overflow-hidden border-b border-black">
      <Canvas className="absolute top-0 left-0 w-full h-full z-0">
        <Scene />
      </Canvas>

      <div className="absolute top-0 left-0 z-10 flex flex-col w-full h-full p-16">
        <h1 className="text-7xl flex justify-between pt-10">
          <span>
            {"Kuba Mrowiec".split("").map((letter, index) => (
              <span key={index} className="letter-fade-in">
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </span>
          <span>
            {"'2024'".split("").map((letter, index) => (
              <span key={index} className="letter-fade-in">
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </span>
        </h1>
        <h2 className="text-2xl px-1">
          {"Web Developer from Warsaw, Poland".split("").map((letter, index) => (
            <span key={index} className="letter-fade-in">
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h2>
      </div>
    </div>
  );
};

export default Hero;
