import { motion } from 'framer-motion';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
// Add more project images in /assets folder

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Website',
      image: project1,
      tech: ['React', 'GSAP', 'Tailwind'],
      link: 'https://your-live-link.com',
    },
    {
      title: 'Personal Portfolio',
      image: project2,
      tech: ['Framer Motion', 'Tailwind', 'React'],
      link: 'https://your-portfolio-link.com',
    },
  ];

  return (
    <section id="projects" className="bg-[#0F172A]  text-white py-20 px-6">
      {/* Heading and Description */}
      <div className="text-center mb-12 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-gray-400 text-sm md:text-base">
          Here are a few projects I’ve built using modern tools like React, GSAP, and Framer Motion. Each project focuses on performance, interactivity, and clean UI.
        </p>
      </div>

      {/* Project Cards */}
      <div className="flex justify-center  flex-wrap gap-10 sm:grid-cols-2  md:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.a
            href={project.link}
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            target="_blank"
            className="bg-[#1E293B] rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-[#334155] px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
