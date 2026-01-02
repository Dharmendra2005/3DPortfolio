import { motion } from "framer-motion";

const timelineEvents = [
  {
    type: "education",
    title: "Bachelor of Technology",
    subtitle: "Computer Science & engineering",
    institution: "Indian Institute of Information Technology, Dharwad",
    duration: "2023 - 2027",
    details: "3rd Year | Student | ",
    icon: "🎓",
  },
  {
    type: "experience",
    title: "Full Stack Developer Intern",
    subtitle: "Tech Company Inc.",
    institution: "San Francisco, CA",
    duration: "Jun 2023 - Aug 2023",
    details:
      "Built responsive web apps, improved performance by 40%, mentored 2 junior developers",
    icon: "💼",
  },
  {
    type: "education",
    title: "10th & 12th Standard",
    subtitle: "Science & Maths Stream",
    institution: "Gsss. Kherwa, Degana, Nagaur, Raj(341503)",
    duration: "2020 - 2022",
    details: "strong school level foundation (PCM)",
    icon: "📚",
  },
  {
    type: "experience",
    title: "AI/ML Engineer",
    subtitle: "Startup XYZ",
    institution: "Remote",
    duration: "Jan 2024 - Present",
    details:
      "Developed ML models, built data pipelines, deployed models on AWS",
    icon: "🤖",
  },
  {
    type: "achievement",
    title: "Hackathon Participated",
    subtitle: "AI Innovation Challenge",
    institution: "TechFest 2024",
    duration: "Feb 2024",
    details:
      "Won 40st place with AI-powered productivity tool beating 500+ teams",
    icon: "🏆",
  },
];

function TimelineItem({ event, index, isLeft }) {
  const variants = {
    hidden: { opacity: 0, x: isLeft ? -40 : 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: index * 0.2 },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className={`flex items-center gap-8 ${
        isLeft ? "flex-row" : "flex-row-reverse"
      }`}
    >
      {/* Card */}
      <div className="flex-1">
        <motion.div
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 40px rgba(139, 92, 246, 0.4)",
          }}
          className="glass-effect p-6 rounded-xl hover:border-purple-400/50 transition-all group"
        >
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">{event.icon}</span>
            <span className="text-xs font-semibold text-purple-400 uppercase">
              {event.type}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-1">{event.title}</h3>
          <p className="text-purple-300 font-semibold text-sm">
            {event.subtitle}
          </p>
          <p className="text-gray-400 text-sm mb-3">{event.institution}</p>
          <p className="text-gray-400 text-xs mb-3">{event.duration}</p>
          <p className="text-gray-300 text-sm leading-relaxed">
            {event.details}
          </p>
        </motion.div>
      </div>

      {/* Timeline Center */}
      <div className="flex flex-col items-center">
        <motion.div
          whileInView={{ scale: 1.2 }}
          transition={{ duration: 0.4 }}
          className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-[#0f0f1e] z-10"
        ></motion.div>
        {index !== timelineEvents.length - 1 && (
          <div className="w-1 h-20 bg-gradient-to-b from-purple-500/50 to-purple-500/0 my-4"></div>
        )}
      </div>

      {/* Spacer */}
      <div className="flex-1"></div>
    </motion.div>
  );
}

export function Timeline() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0f0f1e] to-[#1a1a2e] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-poppins mb-4">
            <span className="gradient-text">Experience & Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <TimelineItem
              key={index}
              event={event}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
