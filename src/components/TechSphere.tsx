import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function TechOrb({ position, text, color, delay = 0 }: { 
  position: [number, number, number], 
  text: string, 
  color: string,
  delay?: number 
}) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5 + delay;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + delay) * 0.3;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
        <mesh>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial 
            color={color} 
            transparent 
            opacity={0.8}
            emissive={color}
            emissiveIntensity={0.2}
          />
        </mesh>
        <Text
          position={[0, -0.3, 0]}
          fontSize={0.08}
          color={color}
          anchorX="center"
          anchorY="middle"
          maxWidth={1}
        >
          {text}
        </Text>
      </Float>
    </group>
  );
}

function CentralCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <Sphere args={[0.8, 64, 64]}>
        <MeshDistortMaterial
          color="#ff6b35"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.6}
        />
      </Sphere>
    </mesh>
  );
}

function ConnectingLines() {
  const linesRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const techPositions = [
    [2, 1, 0], [-2, -1, 0], [0, 2, 1], [0, -2, -1],
    [1.5, 0, 1.5], [-1.5, 0, -1.5], [1, 1.5, -1], [-1, -1.5, 1]
  ];

  return (
    <group ref={linesRef}>
      {techPositions.map((pos, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([0, 0, 0, pos[0], pos[1], pos[2]])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#00d4ff" transparent opacity={0.3} />
        </line>
      ))}
    </group>
  );
}

function TechConstellation() {
  const technologies = useMemo(() => [
    { name: 'React', color: '#61dafb', position: [2, 1, 0] as [number, number, number] },
    { name: 'Spring Boot', color: '#6db33f', position: [-2, -1, 0] as [number, number, number] },
    { name: 'Docker', color: '#2496ed', position: [0, 2, 1] as [number, number, number] },
    { name: 'PostgreSQL', color: '#336791', position: [0, -2, -1] as [number, number, number] },
    { name: 'TypeScript', color: '#3178c6', position: [1.5, 0, 1.5] as [number, number, number] },
    { name: 'Django', color: '#092e20', position: [-1.5, 0, -1.5] as [number, number, number] },
    { name: 'Next.js', color: '#000000', position: [1, 1.5, -1] as [number, number, number] },
    { name: 'AWS', color: '#ff9900', position: [-1, -1.5, 1] as [number, number, number] }
  ], []);

  return (
    <>
      <CentralCore />
      <ConnectingLines />
      {technologies.map((tech, i) => (
        <TechOrb
          key={tech.name}
          position={tech.position}
          text={tech.name}
          color={tech.color}
          delay={i * 0.2}
        />
      ))}
    </>
  );
}

export default function TechSphere() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.6} color="#00d4ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#ff6b35" />
        
        <TechConstellation />
        
        <fog attach="fog" args={['#000000', 4, 15]} />
      </Canvas>
    </div>
  );
}
