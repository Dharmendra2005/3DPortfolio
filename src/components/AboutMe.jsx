import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

function AnimatedText({ text, delay = 0 }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay * i },
    }),
  };

  const childVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 200 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-wrap gap-2"
    >
      {text.split(" ").map((word, i) => (
        <motion.span key={i} variants={childVariants} className="text-xl">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

export function AboutMe() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#16213e] to-[#0f0f1e] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-poppins mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Floating 3D Icons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 flex items-center justify-center"
          >
            {/* React Icon */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-0 left-0 glass-effect p-6 rounded-lg"
            >
              <svg
                className="w-12 h-12 text-cyan-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                <path d="M12 3C6.48 3 2 6.48 2 12s4.48 9 10 9 10-4.48 10-10S17.52 3 12 3zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
              </svg>
            </motion.div>

            {/* JavaScript Icon */}
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-10 right-0 glass-effect p-6 rounded-lg"
            >
              <svg
                className="w-12 h-12 text-yellow-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect width="24" height="24" fill="currentColor" rx="3" />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className="text-white font-bold"
                >
                  JS
                </text>
              </svg>
            </motion.div>

            {/* Node Icon */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute top-32 right-10 glass-effect p-6 rounded-lg"
            >
              <svg
                className="w-12 h-12 text-green-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
              </svg>
            </motion.div>

            {/* Bootstrap Icon */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1.5 }}
              className="absolute bottom-20 left-6 glass-effect p-6 rounded-lg"
            >
              <svg
                className="w-12 h-12 text-purple-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect width="24" height="24" fill="currentColor" rx="3" />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className="text-white font-bold"
                >
                  BS
                </text>
              </svg>
            </motion.div>

            {/* Tailwind Icon */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              className="absolute top-10 right-20 glass-effect p-6 rounded-lg"
            >
              <svg
                className="w-12 h-12 text-cyan-300"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect width="24" height="24" fill="currentColor" rx="3" />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className="text-white font-bold"
                >
                  TW
                </text>
              </svg>
            </motion.div>

            {/* TypeScript Icon */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2.5 }}
              className="absolute bottom-6 right-28 glass-effect p-6 rounded-lg"
            >
              <svg
                className="w-12 h-12 text-blue-600"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <rect width="24" height="24" fill="currentColor" rx="3" />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className="text-white font-bold"
                >
                  TS
                </text>
              </svg>
            </motion.div>

            {/* Center Glow */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-40 h-40 rounded-full bg-gradient-to-r from-purple-600/30 to-pink-600/30 blur-3xl"
            ></motion.div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <AnimatedText
                text="I'm a passionate college student pursuing Computer Science with a love for building beautiful, functional digital experiences."
                delay={0.1}
              />

              <p className="text-lg text-gray-300 leading-relaxed">
                I am a Computer Science and Engineering student undergraduate at
                the Indian Institute of Information Technology, Dharwad. I have
                hands-on experience in building web applications using modern
                technologies such as React.js, JavaScript, Node.js, Express.js and using database like Mongodg in NOSQL & Postgres in SQL, along
                with exposure to AI and AutoML frameworks like H2O.ai.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I enjoy developing scalable, user-focused applications and have
                worked on projects ranging from AI-powered recommendation
                systems to task management applications and interactive games.
                Through hackathons and personal projects, I have developed
                problem-solving skills, teamwork abilities, and the capacity to
                deliver effective solutions under time constraints. I am a
                self-motivated learner, continuously exploring new technologies
                to grow as a software engineer.
              </p>

              <div className="space-y-4 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  <p className="text-gray-400">Developing Experience</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                  <p className="text-gray-400">10+ Projects Completed</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  <p className="text-gray-400">
                    Full-Stack Developer & Software Engineer
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
