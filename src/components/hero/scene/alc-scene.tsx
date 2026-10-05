"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Lightformer, RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef, useState } from "react";

const NAVY = "#0A2545";
const GOLD = "#F4B942";
const PAPER = "#FDFBF4";

function useCardTexture(word: string, bg: string, fg: string) {
  return useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 320;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0A2545";
    ctx.fillRect(0, 0, canvas.width, 18);
    ctx.fillStyle = GOLD;
    ctx.fillRect(0, 0, 120, 18);
    ctx.fillStyle = fg;
    ctx.font = "bold 84px 'Instrument Sans', 'Inter', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.direction = word === "مرحبا" ? "rtl" : "ltr";
    ctx.fillText(word, canvas.width / 2, canvas.height / 2 + 12);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    return tex;
  }, [word, bg, fg]);
}

function VocabCard({
  word,
  position,
  phase,
  hovered,
  onHover,
}: {
  word: string;
  position: [number, number, number];
  phase: number;
  hovered: boolean;
  onHover: (w: string | null) => void;
}) {
  const ref = useRef<THREE.Group>(null);
  const tex = useCardTexture(word, "#FFFFFF", NAVY);
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (!ref.current) return;
    ref.current.position.y = position[1] + Math.sin(t * 0.9 + phase) * 0.12;
    ref.current.rotation.z = Math.sin(t * 0.6 + phase) * 0.06;
    const s = hovered ? 1.04 : 1;
    ref.current.scale.lerp(new THREE.Vector3(s, s, s), 0.12);
  });
  return (
    <group ref={ref} position={position} onPointerOver={(e) => { e.stopPropagation(); onHover(word); }} onPointerOut={() => onHover(null)}>
      <RoundedBox args={[1.5, 0.95, 0.06]} radius={0.05} smoothness={3}>
        {tex ? (
          <meshStandardMaterial map={tex} roughness={0.7} metalness={0.05} />
        ) : (
          <meshStandardMaterial color="#FFFFFF" roughness={0.7} />
        )}
      </RoundedBox>
    </group>
  );
}

function Book({ position, phase }: { position: [number, number, number]; phase: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (!ref.current) return;
    ref.current.position.y = position[1] + Math.sin(t * 0.8 + phase) * 0.1;
    ref.current.rotation.y = -0.4 + Math.sin(t * 0.4 + phase) * 0.08;
  });
  return (
    <group ref={ref} position={position} rotation={[0, -0.4, 0.08]}>
      {/* cover */}
      <RoundedBox args={[1.9, 0.12, 1.4]} radius={0.04} smoothness={2}>
        <meshStandardMaterial color={NAVY} roughness={0.55} metalness={0.15} />
      </RoundedBox>
      {/* pages */}
      <RoundedBox args={[1.75, 0.22, 1.25]} radius={0.03} smoothness={2} position={[0, 0.16, 0]}>
        <meshStandardMaterial color={PAPER} roughness={0.9} />
      </RoundedBox>
      {/* gold bookmark */}
      <mesh position={[0.6, 0.2, 0]} rotation={[0, 0, 0.1]}>
        <boxGeometry args={[0.12, 0.02, 1.1]} />
        <meshStandardMaterial color={GOLD} roughness={0.4} metalness={0.3} />
      </mesh>
    </group>
  );
}

function Laptop({ position, phase }: { position: [number, number, number]; phase: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (!ref.current) return;
    ref.current.position.y = position[1] + Math.sin(t * 1.0 + phase) * 0.09;
    ref.current.rotation.y = 0.5 + Math.sin(t * 0.35 + phase) * 0.07;
  });
  return (
    <group ref={ref} position={position} rotation={[0, 0.5, 0]}>
      <RoundedBox args={[1.6, 0.08, 1.1]} radius={0.03} smoothness={2}>
        <meshStandardMaterial color="#CBD5E1" roughness={0.35} metalness={0.6} />
      </RoundedBox>
      <group position={[0, 0.5, -0.5]} rotation={[-0.35, 0, 0]}>
        <RoundedBox args={[1.6, 1.0, 0.07]} radius={0.03} smoothness={2}>
          <meshStandardMaterial color={NAVY} roughness={0.4} metalness={0.4} />
        </RoundedBox>
        <mesh position={[0, 0, 0.045]}>
          <planeGeometry args={[1.42, 0.84]} />
          <meshStandardMaterial color="#DBEAFE" emissive="#93C5FD" emissiveIntensity={0.55} roughness={0.3} />
        </mesh>
      </group>
    </group>
  );
}

function Globe({ position, phase }: { position: [number, number, number]; phase: number }) {
  const ref = useRef<THREE.Group>(null);
  const spin = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(t * 0.7 + phase) * 0.11;
    }
    if (spin.current) spin.current.rotation.y = t * 0.25;
  });
  return (
    <group ref={ref} position={position}>
      <mesh ref={spin}>
        <sphereGeometry args={[0.62, 24, 18]} />
        <meshStandardMaterial color="#1E4E8C" roughness={0.5} metalness={0.2} flatShading />
      </mesh>
      <mesh rotation={[Math.PI / 2.4, 0, 0]}>
        <torusGeometry args={[0.85, 0.035, 10, 48]} />
        <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.5} />
      </mesh>
    </group>
  );
}

function GradCap({ position, phase }: { position: [number, number, number]; phase: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (!ref.current) return;
    ref.current.position.y = position[1] + Math.sin(t * 1.1 + phase) * 0.1;
    ref.current.rotation.z = Math.sin(t * 0.5 + phase) * 0.08;
  });
  return (
    <group ref={ref} position={position} rotation={[0.1, 0.4, 0.12]}>
      <mesh rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[1.0, 0.08, 1.0]} />
        <meshStandardMaterial color={NAVY} roughness={0.5} metalness={0.2} />
      </mesh>
      <mesh position={[0, -0.18, 0]}>
        <cylinderGeometry args={[0.32, 0.36, 0.28, 16]} />
        <meshStandardMaterial color="#16365D" roughness={0.6} />
      </mesh>
      <mesh position={[0.5, -0.1, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 0.5, 8]} />
        <meshStandardMaterial color={GOLD} roughness={0.4} />
      </mesh>
      <mesh position={[0.5, -0.36, 0]}>
        <sphereGeometry args={[0.05, 10, 8]} />
        <meshStandardMaterial color={GOLD} roughness={0.4} />
      </mesh>
    </group>
  );
}

function Rig({ children, compact }: { children: React.ReactNode; compact: boolean }) {
  const group = useRef<THREE.Group>(null);
  useFrame(({ clock, pointer }) => {
    const t = clock.elapsedTime;
    const y = typeof window !== "undefined" ? window.scrollY : 0;
    if (!group.current) return;
    const strength = compact ? 0.04 : 0.1;
    group.current.rotation.y += ((pointer.x * strength - group.current.rotation.y) * 0.04);
    group.current.rotation.x += ((-pointer.y * strength * 0.6 - group.current.rotation.x) * 0.04);
    group.current.position.y = Math.sin(t * 0.3) * 0.05 - Math.min(y / 2000, 0.6);
    group.current.position.z = -Math.min(y / 2500, 0.5);
  });
  return <group ref={group}>{children}</group>;
}

export function AlcScene({ compact = false, onReady }: { compact?: boolean; onReady?: () => void }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const words = compact ? ["HELLO", "مرحبا"] : ["HELLO", "BONJOUR", "مرحبا", "WELCOME"];
  const cardPositions: [number, number, number][] = compact
    ? [[-1.4, 1.3, 0.4], [1.5, -1.2, 0.6]]
    : [[-1.9, 1.5, 0.2], [-2.3, 0.1, 0.8], [2.2, 1.1, 0.4], [1.8, -1.4, 0.7]];

  return (
    <Canvas
      dpr={compact ? 1 : [1, 1.75]}
      camera={{ position: [4.5, 2.6, 6.5], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      frameloop="always"
      onCreated={({ gl }) => {
        gl.setClearColor("#000000", 0);
        onReady?.();
      }}
    >
      <ambientLight intensity={0.75} />
      <directionalLight position={[5, 7, 4]} intensity={1.6} color="#FFFFFF" />
      <directionalLight position={[-4, 3, -3]} intensity={0.4} color="#BFDBFE" />
      <Rig compact={compact}>
        <Book position={[-0.7, -0.9, 0]} phase={0} />
        {!compact && <Laptop position={[1.3, -0.5, -0.8]} phase={1.7} />}
        <Globe position={[0.9, 1.3, -0.6]} phase={3.1} />
        {!compact && <GradCap position={[-1.6, 0.6, -1.2]} phase={4.4} />}
        {words.map((w, i) => (
          <VocabCard
            key={w}
            word={w}
            position={cardPositions[i]}
            phase={0.45 + i * 0.9}
            hovered={hovered === w}
            onHover={setHovered}
          />
        ))}
      </Rig>
      <ContactShadows position={[0, -2.1, 0]} opacity={0.35} scale={12} blur={2.4} far={4} resolution={256} color={NAVY} />
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 0]}>
          <Lightformer form="circle" intensity={3} position={[0, 5, -9]} scale={2} color="#FFFFFF" />
          <Lightformer form="rect" intensity={1.2} position={[-5, 1, -1]} scale={[6, 1.5, 1]} color="#F4B942" />
          <Lightformer form="rect" intensity={1} position={[5, -1, -1]} scale={[6, 1.5, 1]} color="#BFDBFE" />
        </group>
      </Environment>
    </Canvas>
  );
}
