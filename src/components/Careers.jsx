import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom

// Animation fadeIn
const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
});

// Job listings array
const jobOpenings = [
  {
    title: 'Frontend Developer',
    description: (
      <>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>Develop and maintain responsive web interfaces using React and Tailwind CSS.</li>
          <li>Collaborate with designers and backend engineers to deliver seamless user experiences.</li>
          <li>Ensure cross-browser compatibility and mobile responsiveness.</li>
          <li>Write clean, maintainable code and participate in code reviews.</li>
        </ul>
      </>
    ),
    location: 'Remote · Full-Time',
  },
  {
    title: 'Product Designer',
    description: (
      <>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>Create intuitive, human-centered designs from wireframes to high-fidelity prototypes.</li>
          <li>Work closely with product managers and engineers to shape the product vision.</li>
          <li>Conduct user research and usability testing to validate design decisions.</li>
          <li>Maintain and evolve the design system for consistency across products.</li>
        </ul>
      </>
    ),
    location: 'Remote · Full-Time',
  },
  {
    title: 'Backend Engineer',
    description: (
      <>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>Design and implement robust, scalable APIs and backend services.</li>
          <li>Work with PostgreSQL, Redis, and message queues to build reliable infrastructure.</li>
          <li>Collaborate with frontend teams to define data models and service contracts.</li>
          <li>Implement unit tests and contribute to CI/CD pipeline improvements.</li>
        </ul>
      </>
    ),
    location: 'Remote · Full-Time',
  },
];

const Careers = () => {
  const navigate = useNavigate();  // Set up navigation

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar showMenu={false} setShowMenu={() => {}} />



      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
              {/* Home Button (top-left) */}
      <div className="max-w-6xl mx-auto cursor-pointer py-6">
        <button
          onClick={() => navigate('/')}  // Navigates to home
          className="text-sm text-gray-400 hover:text-white transition flex items-center space-x-1"
        >
          <span>←</span>
          <span>Home</span>
        </button>
      </div>
        {/* Hero Section */}
        <motion.section {...fadeIn(0)}>
          <h1 className="text-5xl font-bold mb-4">We're Hiring</h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-12">
            Join a team that's redefining innovation. We're on the lookout for forward-thinkers ready to shape the future.
          </p>
        </motion.section>

        {/* Open Positions */}
        <section className="space-y-8">
          {jobOpenings.map((job, index) => (
            <motion.div
              key={job.title}
              {...fadeIn(0.2 + index * 0.2)}
              className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition duration-300 cursor-pointer"
            >
              <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
              <p className="text-gray-300 mb-2">{job.description}</p>
              <span className="text-sm text-gray-400">{job.location}</span>
            </motion.div>
          ))}
        </section>

        {/* Didn't find your role? */}
        <motion.section {...fadeIn(0.8)} className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4">Didn't find the right role?</h3>
          <p className="text-gray-400 mb-6">
            We’re always looking for talented individuals. Send us your resume and we’ll get in touch.
          </p>
          <a
            href="mailto:careers@knest.com"
            className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
          >
            Send Your Resume
          </a>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        className="text-center text-gray-600 text-xs pb-10"
        {...fadeIn(1.2)}
      >
        © {new Date().getFullYear()} Knest — All rights reserved.
      </motion.footer>
    </div>
  );
};

export default Careers;
