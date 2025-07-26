import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// === 3D Model Component ===
const Computers = ({ isMobile }) => {
  const computer = useGLTF("./office_worker_2_animated_gltf/scene.gltf");

  return (
    <mesh>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 5]} intensity={2} castShadow />
      <hemisphereLight intensity={0.4} groundColor='#444' />
      <spotLight
        position={[15, 50, 10]}
        angle={0.2}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1.2} />

      {/* 3D Model */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 1 : 1.5}
        position={isMobile ? [0, -1.8, 0] : [0, -2.2, 0]}
        rotation={[0, 0.4, 0]}
      />
    </mesh>
  );
};

// === Main Canvas Component ===
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{
        position: isMobile ? [2, 1, 5] : [5, 2, 10],
        fov: isMobile ? 40 : 35,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
