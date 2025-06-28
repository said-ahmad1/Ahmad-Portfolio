import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Name / Copyright */}
        <p className="text-sm text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Syed Ahmad. All rights reserved.
        </p>

        {/* Middle: Quick Navigation */}
        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Right Side: Social Links */}
        <div className="flex gap-4 text-xl text-gray-300">
          <a href="https://github.com/said-ahmad1" target="_blank" className="hover:text-white">
            <FaGithub />
          </a>
          {/* <a href="https://linkedin.com/in/your-profile" target="_blank" className="hover:text-white">
            <FaLinkedin />
          </a> */}
          <a href="mailto:imsaidahmad@gmail.com" className="hover:text-white">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
