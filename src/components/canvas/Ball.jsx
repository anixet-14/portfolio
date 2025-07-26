import React, { Suspense, useMemo, useEffect, useState } from "react";
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
const Ball = ({ icon, position, isMobile }) => {
  const [decal] = useTexture([icon]);

  return (
    <Float
      speed={isMobile ? 1 : 1.5}
      rotationIntensity={isMobile ? 0.7 : 1.5}
      floatIntensity={isMobile ? 1 : 2}
    >
      <mesh position={position} scale={isMobile ? 1.2 : 1.5} castShadow receiveShadow>
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
const BallCloud = ({ isMobile }) => {
  const spacing = isMobile ? 2.5 : 3.5;
  const perRow = isMobile ? 3 : 4;

  const positions = useMemo(() => {
    return technologies.map((_, index) => {
      const x = (index % perRow) * spacing - (spacing * (perRow - 1)) / 2;
      const y =
        -Math.floor(index / perRow) * spacing +
        (spacing * (Math.ceil(technologies.length / perRow) - 1)) / 2;
      const z = index % 2 === 0 ? 0 : -1.5;
      return [x, y, z];
    });
  }, [isMobile]);

  return technologies.map((tech, i) => (
    <Ball key={tech.name} icon={tech.icon} position={positions[i]} isMobile={isMobile} />
  ));
};

// === Tech Canvas ===
const TechCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={isMobile ? 1 : [1, 2]} // ✅ lower DPR on mobile
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 12], fov: 50 }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <BallCloud isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default TechCanvas;
