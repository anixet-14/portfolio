import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Float,
  Decal,
  useTexture,
  Preload,
  OrbitControls,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import { technologies } from "../../constants";


// === Ball Component ===
const Ball = ({ icon, position }) => {
  const [decal] = useTexture([icon]);

  return (
    <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
      <mesh position={position} scale={1.5} castShadow receiveShadow>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

// === Ball Cloud Layout ===
const BallCloud = () => {
  const spacing = 3.5;
  const perRow = 4;
  const positions = useMemo(() => {
    return technologies.map((_, index) => {
      const x = (index % perRow) * spacing - (spacing * (perRow - 1)) / 2;
      const y =
        -Math.floor(index / perRow) * spacing +
        (spacing * (Math.ceil(technologies.length / perRow) - 1)) / 2;
      const z = (index % 2 === 0 ? 0 : -1.5);
      return [x, y, z];
    });
  }, []);

  return technologies.map((tech, i) => (
    <Ball key={tech.name} icon={tech.icon} position={positions[i]} />
  ));
};

// === Tech Canvas ===
const TechCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 15], fov: 50 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={2} />
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <BallCloud />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default TechCanvas;
