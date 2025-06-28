import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0F172A] text-white py-20 px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
          Have a question, idea, or just want to connect? Feel free to reach out — I'm always open to collaboration or freelance work.
        </p>
      </div>

      {/* Form */}
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        action="mailto:your-email@gmail.com" // replace with your email or EmailJS later
        method="POST"
        encType="text/plain"
        className="max-w-xl mx-auto flex flex-col gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 bg-[#1E293B] text-white rounded-md outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 bg-[#1E293B] text-white rounded-md outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="w-full px-4 py-3 bg-[#1E293B] text-white rounded-md outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-300"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
