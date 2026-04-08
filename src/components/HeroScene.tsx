import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Torus, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const CinematicRing = () => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2 + 0.5;
    ref.current.rotation.y = state.clock.elapsedTime * 0.15;
    ref.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2) * 0.1;
  });

  return (
    <Torus ref={ref} args={[2.2, 0.08, 32, 100]}>
      <MeshDistortMaterial
        color="#00b4ff"
        emissive="#00b4ff"
        emissiveIntensity={0.6}
        roughness={0.2}
        metalness={0.9}
        distort={0.15}
        speed={2}
      />
    </Torus>
  );
};

const InnerRing = () => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.4) * 0.3 + 0.8;
    ref.current.rotation.y = -state.clock.elapsedTime * 0.2;
  });

  return (
    <Torus ref={ref} args={[1.4, 0.04, 24, 80]}>
      <meshStandardMaterial
        color="#00b4ff"
        emissive="#00b4ff"
        emissiveIntensity={0.3}
        transparent
        opacity={0.5}
      />
    </Torus>
  );
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.1} />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#00b4ff" />
        <pointLight position={[-5, -5, 3]} intensity={0.3} color="#0066ff" />
        <CinematicRing />
        <InnerRing />
      </Canvas>
    </div>
  );
};

export default HeroScene;
