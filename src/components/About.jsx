import { motion } from 'framer-motion';
import profile from '../assets/ahmad.png'; // Replace with your image

export default function About() {
  return (
    <section id="about" className="bg-[#0F172A] text-white py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-gray-400 text-sm md:text-base">
          Get to know more about my background and journey.
        </p>
      </div>

      {/* Centered Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto flex flex-col items-center text-center gap-8"
      >
        {/* Image */}
        <img
          src={profile}
          alt="Syed Ahmad"
          className="w-52 h-52 rounded-2xl object-cover shadow-lg"
        />

        {/* Text */}
        <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
          <h3 className="text-2xl font-semibold text-white">I'm Syed Ahmad 👋</h3>
          <p>
            I'm a 6th semester Computer Science student with a CGPA of 3.7. I specialize in frontend development using React, GSAP, and Tailwind CSS.
          </p>
          <p>
            I also work with WordPress for client-based projects and enjoy building interactive, animated websites with modern tools like Framer Motion and Locomotive Scroll.
          </p>
          <p>
            My goal is to become a top-level frontend developer and eventually lead creative frontend teams in the industry.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
