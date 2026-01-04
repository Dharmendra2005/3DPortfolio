import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PresentationControls } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

function RotatingCube() {
  const meshRef = useRef();

  return (
    <group>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhongMaterial
          color="#8b5cf6"
          emissive="#6366f1"
          emissiveIntensity={0.3}
          shininess={100}
        />
      </mesh>
      <mesh position={[0, 0, 0]} scale={2.1}>
        <boxGeometry args={[2, 2, 2]} />
        <meshBasicMaterial
          color="#ec4899"
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  );
}

function FloatingOrb() {
  const meshRef = useRef();

  return (
    <mesh ref={meshRef} position={[3, 2, -3]} scale={0.8}>
      <icosahedronGeometry args={[1, 4]} />
      <meshPhongMaterial
        color="#06b6d4"
        emissive="#0891b2"
        emissiveIntensity={0.5}
        wireframe={false}
        shininess={100}
      />
    </mesh>
  );
}

export function Hero3DScene() {
  return (
    <div className="w-full h-screen relative bg-gradient-to-b from-[#0f0f1e] via-[#1a1a2e] to-[#16213e]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        className="absolute inset-0"
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.5}
          color="#ec4899"
        />
        <pointLight position={[0, 0, 5]} intensity={0.8} color="#06b6d4" />

        <RotatingCube />
        <FloatingOrb />

        <OrbitControls
          autoRotate
          autoRotateSpeed={5}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-7xl md:text-8xl font-bold font-poppins mb-4">
            <span className="gradient-text">Dharmendra Gora</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
            Full Stack Developer | Software Engineer | Web designer | Cyber Security
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-4 pointer-events-auto"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(139, 92, 246, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg font-semibold text-white hover:shadow-lg transition-all"
          >
            View Resume
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(236, 72, 153, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-pink-500 text-pink-400 rounded-lg font-semibold hover:bg-pink-500/10 transition-all"
          >
            Contact Me
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-purple-500 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero3DScene;
