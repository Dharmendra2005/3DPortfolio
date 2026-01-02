import { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";

// Simple icon map for skills (SVG or emoji fallbacks)
const ICONS = {
  React: (
    <svg className="w-10 h-10 text-cyan-400" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <g
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="12" rx="6" ry="2.2" transform="rotate(30 12 12)" />
        <ellipse
          cx="12"
          cy="12"
          rx="6"
          ry="2.2"
          transform="rotate(-30 12 12)"
        />
        <ellipse cx="12" cy="12" rx="6" ry="2.2" transform="rotate(90 12 12)" />
      </g>
    </svg>
  ),
  "Next.js": <span className="text-white font-bold">Next</span>,
  Tailwind: (
    <svg className="w-10 h-10 text-sky-400" viewBox="0 0 24 24" fill="none">
      <path d="M3 12c5 0 7-3 12-3v9c-5 0-7 3-12 3V12z" fill="currentColor" />
    </svg>
  ),
  TypeScript: (
    <svg
      className="w-10 h-10 text-blue-500"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M4 4h16v16H4z" opacity="0.12" />
      <path d="M7 7h10v2H9v4h6v2H9v4H7V7z" />
    </svg>
  ),
  "Node.js": (
    <svg
      className="w-10 h-10 text-green-500"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2l8 4v8l-8 4-8-4V6l8-4z" opacity="0.12" />
      <path d="M12 6l6 3v6l-6 3-6-3V9l6-3z" />
    </svg>
  ),
  Python: <span className="text-yellow-300">Py</span>,
  Express: <span className="text-gray-200">Ex</span>,
  MongoDB: (
    <svg
      className="w-10 h-10 text-emerald-400"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 2l6 4-6 4-6-4 6-4z" />
      <path d="M12 10l6 4-6 8-6-8 6-4z" opacity="0.9" />
    </svg>
  ),
  Git: (
    <svg
      className="w-8 h-8 text-orange-500"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M10 3l11 11-3 3L7 6 10 3zM5 14a2 2 0 11.001-3.999A2 2 0 015 14zm14.5-1.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM14 20a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
    </svg>
  ),
  Docker: <span className="text-sky-400">Docker</span>,
  AWS: <span className="text-orange-400">AWS</span>,
  "AI/ML": <span className="text-indigo-400">AI</span>,
};
import * as THREE from "three";

function SkillSphere({ name, color, position }) {
  const meshRef = useRef();

  useEffect(() => {
    if (!meshRef.current) return;

    const rotateSpeed = Math.random() * 0.01 + 0.005;
    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.x += rotateSpeed;
        meshRef.current.rotation.y += rotateSpeed;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <group position={position}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.2, 5]} />
        <meshPhongMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.4}
          shininess={100}
          wireframe={false}
        />
      </mesh>
      <mesh position={[0, 0, 0]} scale={1.3}>
        <icosahedronGeometry args={[1.2, 5]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

function SkillsScene({ skills }) {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#fff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />

      {skills.map((skill, i) => (
        <SkillSphere
          key={i}
          name={skill.name}
          color={skill.color}
          position={[
            Math.cos((i / skills.length) * Math.PI * 2) * 3,
            Math.sin((i / skills.length) * Math.PI * 2) * 3,
            0,
          ]}
        />
      ))}

      <OrbitControls
        autoRotate
        autoRotateSpeed={2}
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
}

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", color: "#06b6d4" },
      { name: "Next.js", color: "#ffffff" },
      { name: "Tailwind", color: "#0891b2" },
      { name: "TypeScript", color: "#3178c6" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", color: "#68a063" },
      { name: "Python", color: "#3776ab" },
      { name: "Express", color: "#000000" },
      { name: "MongoDB", color: "#13aa52" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", color: "#f1502f" },
      { name: "Docker", color: "#2496ed" },
      { name: "AWS", color: "#ff9900" },
      { name: "AI/ML", color: "#8b5cf6" },
    ],
  },
];

export function Skills() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0f0f1e] to-[#1a1a2e] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-poppins mb-4">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </motion.div>

        <div className="space-y-20">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                {category.title}
              </h3>

              <div className="rounded-2xl glass-effect p-6">
                <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-8 gap-6 items-center justify-center">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.06 }}
                      className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white/3 hover:bg-white/8 transition-all"
                    >
                      <div className="icon w-12 h-12 flex items-center justify-center">
                        {ICONS[skill.name] || (
                          <span className="text-gray-200">{skill.name}</span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-gray-200">
                        {skill.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
