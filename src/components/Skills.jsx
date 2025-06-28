import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
} from 'react-icons/fa';
import {
  SiGreensock,
  SiFramer,
  SiRedux,
  SiTailwindcss,
  SiReactrouter,
} from 'react-icons/si';

export default function Skills() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 size={50} color="#E44D26" /> },
    { name: 'CSS', icon: <FaCss3Alt size={50} color="#1572B6" /> },
    { name: 'JavaScript', icon: <FaJs size={50} color="#F7DF1E" /> },
    { name: 'React', icon: <FaReact size={50} color="#61DAFB" /> },
    { name: 'GSAP', icon: <SiGreensock size={50} color="#88CE02" /> },
    { name: 'Framer Motion', icon: <SiFramer size={50} color="#E10098" /> },
    { name: 'Redux', icon: <SiRedux size={50} color="#764ABC" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={50} color="#38BDF8" /> },
    { name: 'React Router', icon: <SiReactrouter size={50} color="#CA4245" /> },
    { name: 'WordPress', icon: <FaWordpress size={50} color="#21759B" /> },
  ];

  return (
    <section id="skills" className="bg-[#0F172A] text-white py-20 px-6">
      {/* Main Heading */}
      <h2 className="text-4xl font-bold text-center mb-4">Skills</h2>

      {/* Short Description */}
      <p className="text-gray-400 text-center max-w-xl mx-auto mb-12 text-sm md:text-base">
        These are the tools and technologies I use to build fast, beautiful, and interactive web experiences.
      </p>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center transition-transform hover:scale-110 duration-300"
          >
            {skill.icon}
            <p className="text-sm md:text-base mt-2">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
