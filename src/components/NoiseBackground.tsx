import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Plane } from '@react-three/drei';
import * as THREE from 'three';

const NoiseShader = {
  uniforms: {
    time: { value: 1.0 },
    resolution: { value: new THREE.Vector2(1920, 1080) }
  },
  vertexShader: `
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float time;
    uniform vec2 resolution;
    
    float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }
    
    float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      
      vec2 u = f * f * (3.0 - 2.0 * f);
      
      return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }
    
    void main() {
      vec2 st = gl_FragCoord.xy / resolution.xy;
      st.x *= resolution.x / resolution.y;
      
      vec3 color = vec3(1.0);
      vec2 pos = vec2(st * 8.0);
      
      float n = noise(pos + time * 0.05);
      n += 0.5 * noise(pos * 2.0 + time * 0.08);
      n += 0.25 * noise(pos * 4.0 + time * 0.1);
      
      // Very subtle noise texture on white background
      color = vec3(0.995 + n * 0.008);
      
      gl_FragColor = vec4(color, 1.0);
    }
  `
};

function AnimatedNoise() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { size } = useThree();

  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.uniforms.resolution.value.set(size.width, size.height);
    }
  }, [size]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Plane ref={meshRef} args={[4, 4]} position={[0, 0, -1]}>
      <shaderMaterial
        ref={materialRef}
        uniforms={NoiseShader.uniforms}
        vertexShader={NoiseShader.vertexShader}
        fragmentShader={NoiseShader.fragmentShader}
        transparent={false}
      />
    </Plane>
  );
}

export default function NoiseBackground() {
  return (
    <div className="absolute inset-0 w-full h-full -z-10">
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        style={{ background: '#ffffff' }}
        onCreated={({ gl, size }) => {
          gl.setClearColor(0xffffff, 1);
          gl.setSize(size.width, size.height);
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        }}
      >
        <AnimatedNoise />
      </Canvas>
    </div>
  );
}
