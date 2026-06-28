"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useMemo, useState, useEffect, useCallback } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 10000;
const SCATTER_RADIUS = 6;
const REFORM_SPEED = 0.035;
const SCATTER_SPEED = 0.025;

function Particles({ imageData }: { imageData: ImageData }) {
  const meshRef = useRef<THREE.Points>(null);
  const [isScattered, setIsScattered] = useState(true);
  const [hasReformed, setHasReformed] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsScattered(false);
      setHasReformed(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleClick = useCallback(() => {
    if (!hasReformed) return;
    setIsScattered(true);
    setTimeout(() => setIsScattered(false), 2500);
  }, [hasReformed]);

  useEffect(() => {
    const handler = () => handleClick();
    window.addEventListener("particle-click", handler);
    return () => window.removeEventListener("particle-click", handler);
  }, [handleClick]);

  const { positions, targetPositions, colors, scatteredPositions, sizes } =
    useMemo(() => {
      const positions = new Float32Array(PARTICLE_COUNT * 3);
      const targetPositions = new Float32Array(PARTICLE_COUNT * 3);
      const scatteredPositions = new Float32Array(PARTICLE_COUNT * 3);
      const colors = new Float32Array(PARTICLE_COUNT * 3);
      const sizes = new Float32Array(PARTICLE_COUNT);

      const { width, height, data } = imageData;
      const aspectRatio = width / height;
      const scale = 3.0;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3;

        const px = Math.floor(Math.random() * width);
        const py = Math.floor(Math.random() * height);
        const idx = (py * width + px) * 4;

        targetPositions[i3] = (px / width - 0.5) * scale * aspectRatio;
        targetPositions[i3 + 1] = -(py / height - 0.5) * scale;
        targetPositions[i3 + 2] = (Math.random() - 0.5) * 0.2;

        colors[i3] = data[idx] / 255;
        colors[i3 + 1] = data[idx + 1] / 255;
        colors[i3 + 2] = data[idx + 2] / 255;

        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        const r = SCATTER_RADIUS * (0.4 + Math.random() * 0.6);
        scatteredPositions[i3] = r * Math.sin(phi) * Math.cos(theta);
        scatteredPositions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        scatteredPositions[i3 + 2] = r * Math.cos(phi) * 0.4;

        positions[i3] = scatteredPositions[i3];
        positions[i3 + 1] = scatteredPositions[i3 + 1];
        positions[i3 + 2] = scatteredPositions[i3 + 2];

        sizes[i] = Math.random() * 2.0 + 1.0;
      }

      return { positions, targetPositions, colors, scatteredPositions, sizes };
    }, [imageData]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const posAttr = meshRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const posArray = posAttr.array as Float32Array;

    const speed = isScattered ? SCATTER_SPEED : REFORM_SPEED;
    const target = isScattered ? scatteredPositions : targetPositions;

    for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
      posArray[i] += (target[i] - posArray[i]) * speed;
    }

    if (!isScattered && hasReformed) {
      const mx = mouseRef.current.x * viewport.width * 0.5;
      const my = mouseRef.current.y * viewport.height * 0.5;
      const repelRadius = 0.6;
      const repelStrength = 0.12;

      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const i3 = i * 3;
        const dx = posArray[i3] - mx;
        const dy = posArray[i3 + 1] - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < repelRadius && dist > 0) {
          const force = (1 - dist / repelRadius) * repelStrength;
          posArray[i3] += (dx / dist) * force;
          posArray[i3 + 1] += (dy / dist) * force;
        }
      }
    }

    const time = state.clock.elapsedTime;
    meshRef.current.rotation.y = Math.sin(time * 0.1) * 0.02;

    posAttr.needsUpdate = true;
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    return geo;
  }, [positions, colors, sizes]);

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexColors: true,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexShader: `
          attribute float size;
          varying vec3 vColor;
          void main() {
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * (180.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          void main() {
            float dist = length(gl_PointCoord - vec2(0.5));
            if (dist > 0.5) discard;
            float alpha = 1.0 - smoothstep(0.1, 0.5, dist);
            gl_FragColor = vec4(vColor, alpha * 0.9);
          }
        `,
      }),
    []
  );

  return <points ref={meshRef} geometry={geometry} material={material} />;
}

export default function ParticlePhoto() {
  const [imageData, setImageData] = useState<ImageData | null>(null);

  useEffect(() => {
    const img = document.createElement("img");
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const size = 180;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0, size, size);
      setImageData(ctx.getImageData(0, 0, size, size));
    };
    img.src = "/images/i6.jpeg";
  }, []);

  if (!imageData) {
    return (
      <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-white/5 animate-pulse" />
    );
  }

  return (
    <div
      className="w-56 h-56 md:w-72 md:h-72 cursor-pointer"
      onClick={() => window.dispatchEvent(new Event("particle-click"))}
    >
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Particles imageData={imageData} />
      </Canvas>
    </div>
  );
}
