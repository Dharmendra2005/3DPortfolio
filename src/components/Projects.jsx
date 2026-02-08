import { useRef, useState } from "react";
import { motion } from "framer-motion";

function TiltCard({ children, index }) {
  const ref = useRef();
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setRotateX((y - rect.height / 2) / 10);
    setRotateY((x - rect.width / 2) / -10);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.1s ease-out",
      }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

const projects = [
  {
    title: "AI Chat Assistant",
    description:
      "An intelligent chatbot powered by OpenAI API with real-time responses and context awareness.",
    tech: ["React", "OpenAI", "Node.js", "PostgreSQL"],
    link: "",
    github: "https://github.com/Dharmendra2005/AIChatAssistant",
    gradient: "from-purple-600 to-blue-600",
  },
  {
    title: "E-Commerce Shopping Platform",
    description:
      "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    tech: ["Express", "EJS", "Stripe", "MongoDB", "Tailwind"],
    link: "",
    github: "https://github.com/Dharmendra2005/SCATCH.git",
    gradient: "from-pink-600 to-purple-600",
  },
  {
    title: "3D Portfolio Website",
    description:
      "Interactive 3D portfolio showcasing projects with smooth animations and modern design.",
    tech: ["Three.js", "React", "Framer Motion", "Vite"],
    link: "https://dgportfolio-wheat.vercel.app/",
    github: "https://github.com/Dharmendra2005/3DPortfolio.git",
    gradient: "from-cyan-600 to-pink-600",
  },
  {
    title: "Real-Time Collaboration App",
    description:
      "Web app enabling real-time document collaboration with WebSocket integration and live cursors.",
    tech: ["React", "Socket.io", "Express", "Firebase"],
    link: "#",
    github: "#",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    title: "Machine Learning Dashboard",
    description:
      "Data visualization dashboard for ML models with interactive charts and model performance metrics.",
    tech: ["Python", "TensorFlow", "Flask", "D3.js"],
    link: "#",
    github: "#",
    gradient: "from-orange-600 to-red-600",
  },
  {
    title: "Mobile App - Fitness Tracker",
    description:
      "Cross-platform fitness tracking app with workout logging, progress analytics, and social sharing.",
    tech: ["React Native", "Firebase", "Redux", "Expo"],
    link: "#",
    github: "#",
    gradient: "from-green-600 to-emerald-600",
  },
];

export function Projects() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1e] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-poppins mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <TiltCard key={index} index={index}>
              <div
                className={`h-full bg-gradient-to-br ${project.gradient} p-0.5 rounded-2xl`}
              >
                <div className="h-full bg-gradient-to-b from-[#1a1a2e]/80 to-[#0f0f1e]/80 p-8 rounded-2xl backdrop-blur-sm flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.link}
                        className="flex-1 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg text-center font-semibold transition-all"
                      >
                        Live Link
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        className="flex-1 px-4 py-2 border border-white/30 text-white rounded-lg text-center font-semibold hover:bg-white/10 transition-all"
                      >
                        GitHub
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
