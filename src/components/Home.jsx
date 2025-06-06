import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { FiZap, FiSearch, FiMessageCircle, FiUsers } from "react-icons/fi"; // Feather Icons
import { FiCpu, FiSmile, FiLayers } from "react-icons/fi";
import { FiBookmark, FiClock, FiCalendar, FiLink } from "react-icons/fi";

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay },
});

const Home = () => {
  return (
    <div className="bg-black text-white  relative scroll-smooth">
      <Navbar />
      <Sidebar />
      <div className="max-w-4xl mx-auto px-6 space-y-12 ">
        {/* Hero */}
        <motion.section
          id="Hero"
          className="h-screen flex flex-col justify-center items-center text-center space-y-6 px-4 sm:px-8"
          {...fadeIn()}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
            Your Mind, Supercharged
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-xl">
            Knest is your AI-powered second brain — designed to remember,
            remind, and organize what actually matters.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() =>
                document
                  .getElementById("waitlist-form")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="backdrop-blur-md bg-white/10 border border-white/20 px-6 py-3 rounded-full text-base sm:text-lg font-medium hover:bg-white/20 transition"
            >
              Join the Waitlist
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="backdrop-blur-md bg-transparent border border-white/20 px-6 py-3 rounded-full text-base sm:text-lg font-medium hover:bg-white/20 transition"
            >
              Learn More
            </button>
          </div>
        </motion.section>

        <motion.section
          id="Features"
          className="h-auto sm:h-screen flex flex-col justify-center text-center space-y-12 px-4 sm:px-8"
          {...fadeIn(0.2)}
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            Tired of juggling ten apps and forgetting everything anyway?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 text-left text-gray-400">
            {[
              [
                "Notes in One App",
                "Keep all your notes in one place for easy access and organization.",
              ],
              [
                "Habits in Another",
                "Track and manage your habits in a separate, dedicated space.",
              ],
              [
                "Daily Plans Forgotten",
                "Easily schedule and manage your day without forgetting important tasks.",
              ],
              [
                "Mind Like a Maze",
                "Navigate through your thoughts and tasks with clear structure and simplicity.",
              ],
            ].map(([title, desc], i) => (
              <motion.div
                key={i}
                className="bg-white/5 p-6 rounded-lg hover:scale-105 transition"
                {...fadeIn(i * 0.1)}
              >
                <h3 className="text-lg sm:text-xl text-white font-semibold">
                  {title}
                </h3>
                <p className="text-sm mt-2">{desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Use Cases */}
        <motion.section
          id="Use Cases"
          className="h-screen flex flex-col justify-center text-center space-y-12"
          {...fadeIn(0.3)}
        >
          <h2 className="text-4xl font-bold">Designed For You</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-10 text-left text-gray-300">
            {[
              [
                "Creatives & Founders",
                "Capture inspiration and turn ideas into organized action plans.",
              ],
              [
                "Neurodivergent Thinkers",
                "A system that adapts to your non-linear thinking, not the other way around.",
              ],
              [
                "Students & Researchers",
                "Connect notes across subjects and turn knowledge into structured insights.",
              ],
              [
                "Anyone Feeling Overwhelmed",
                "Let Knest simplify your mental load and bring clarity to chaos.",
              ],
            ].map(([role, desc], i) => (
              <div
                key={i}
                className="bg-white/5 p-5 rounded-md hover:ring-1 hover:ring-white/20 transition"
              >
                <h4 className="text-white text-lg font-semibold mb-1">
                  {role}
                </h4>
                <p className="text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* How It Works */}
        <motion.section
          id="how-it-works"
          className="min-h-screen flex flex-col justify-center items-center px-6 py-20 sm:py-32"
          {...fadeIn(0.4)}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white">
            How It Works
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-16 w-full max-w-6xl">
            {/* Left - Feature Steps */}
            <div className="flex-1 space-y-10">
              {[
                {
                  title: "Supermemory",
                  description:
                    "Capture anything — ideas, tasks, links. Knest remembers the why, not just the what.",
                  icon: <FiBookmark className="text-3xl text-white" />,
                },
                {
                  title: "Smart Habit Tracker",
                  description:
                    "Stay consistent with nudges, alarms, and adaptive reminders that evolve with you.",
                  icon: <FiClock className="text-3xl text-white" />,
                },
                {
                  title: "AI Daily Planner",
                  description:
                    "Generate your daily plan automatically — optimized for energy, context, and urgency.",
                  icon: <FiCalendar className="text-3xl text-white" />,
                },
                {
                  title: "Connected Thinking",
                  description:
                    "Link notes, ideas, and tasks like a neural network. Your thoughts, mapped clearly.",
                  icon: <FiLink className="text-3xl text-white" />,
                },
              ].map(({ icon, title, description }, i) => (
                <motion.div
                  key={i}
                  className="flex items-start space-x-5"
                  {...fadeIn(i * 0.1)}
                >
                  <div className="shrink-0 mt-1">{icon}</div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right - Image */}
            <motion.div className="flex-1 w-full max-w-md" {...fadeIn(0.5)}>
              <div className="relative w-full h-auto rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/sys.png"
                  alt="System Diagram"
                  className="w-full h-auto object-contain rounded-md"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="Testimonials"
          className="min-h-screen flex flex-col justify-center items-center text-center px-6"
          {...fadeIn(0.5)}
        >
          <h2 className="text-4xl font-bold mb-12">What People Say</h2>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
            {[
              {
                quote:
                  "This AI feels like magic. It's part of my daily workflow now.",
                name: "Jordan M.",
                title: "Startup Founder",
              },
              {
                quote:
                  "I’ve never shipped so fast — Knest changed how I work entirely.",
                name: "Sasha K.",
                title: "Product Designer",
              },
              {
                quote: "Elegant UI + smart brain = perfect productivity tool.",
                name: "Lee A.",
                title: "Academic Researcher",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition text-left space-y-4"
                {...fadeIn(i * 0.2)}
              >
                <p className="text-gray-300 italic text-sm">
                  “{testimonial.quote}”
                </p>
                <div className="text-sm text-white font-semibold">
                  {testimonial.name}
                </div>
                <div className="text-xs text-gray-500">{testimonial.title}</div>
              </motion.div>
            ))}
          </div>

          {/* Why Knest is Different Section */}
          <div className="w-full max-w-6xl mt-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-10">
              Why Knest is Different
            </h2>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                {
                  icon: <FiCpu className="text-white text-3xl" />,
                  title: "Human-First Intelligence",
                  desc: "AI that learns from you — your patterns, rhythms, and priorities — instead of forcing a new system.",
                },
                {
                  icon: <FiSmile className="text-white text-3xl" />,
                  title: "Zero Learning Curve",
                  desc: "Designed for real people. Knest works how your brain already does — no setup, no jargon.",
                },
                {
                  icon: <FiLayers className="text-white text-3xl" />,
                  title: "All-in-One Mental Stack",
                  desc: "Notes, planner, habits, reminders, and journaling — all in one intuitive system.",
                },
              ].map(({ icon, title, desc }, i) => (
                <motion.div
                  key={i}
                  className="bg-white/5 p-6 rounded-xl hover:ring-1 hover:ring-white/10 transition shadow-sm hover:shadow-md"
                  {...fadeIn(i * 0.1)}
                >
                  <div className="mb-4">{icon}</div>
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="CTA"
          className="min-h-screen flex flex-col justify-center items-center text-center space-y-16 px-6"
          {...fadeIn(0.6)}
        >
          {/* FORM */}
          <div
            id="waitlist-form"
            className="w-full max-w-4xl bg-white/5 p-8 rounded-lg backdrop-blur-md shadow-md space-y-8 text-left"
          >
            <h3 className="text-2xl font-bold text-white text-center">
              Join Our Early Community
            </h3>
            <p className="text-gray-400 text-center max-w-xl mx-auto">
              Sign up for early access and help shape the future of Knest.
            </p>

            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  className="w-full px-4 py-2 rounded-md bg-black border border-white/20 text-white placeholder-gray-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full px-4 py-2 rounded-md bg-black border border-white/20 text-white placeholder-gray-500"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-gray-300 mb-1">
                  Profession
                </label>
                <input
                  type="text"
                  placeholder="Designer, Student, Developer, etc."
                  className="w-full px-4 py-2 rounded-md bg-black border border-white/20 text-white placeholder-gray-500"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-gray-300 mb-1">
                  Why do you want to use Knest?
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us how Knest could help you..."
                  className="w-full px-4 py-2 rounded-md bg-black border border-white/20 text-white placeholder-gray-500"
                />
              </div>
              <div className="sm:col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                >
                  Join Waitlist
                </button>
              </div>
            </form>
          </div>

          {/* COMMUNITY BENEFITS - IMPROVED UI */}
          <motion.section
            id="community-benefits"
            className="w-full max-w-5xl mt-20 mx-auto"
            {...fadeIn(0.65)}
          >
            <h3 className="text-white text-2xl font-bold text-center mb-8">
              Community Benefits
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
              {[
                {
                  icon: <FiZap className="text-white text-2xl" />,
                  text: "Early access to Knest features",
                },
                {
                  icon: <FiSearch className="text-white text-2xl" />,
                  text: "Sneak peeks at upcoming tools",
                },
                {
                  icon: <FiMessageCircle className="text-white text-2xl" />,
                  text: "Help shape the product with feedback",
                },
                {
                  icon: <FiUsers className="text-white text-2xl" />,
                  text: "Join our private Discord community",
                },
              ].map(({ icon, text }, i) => (
                <motion.div
                  key={i}
                  className="bg-white/5 p-5 rounded-md flex items-start space-x-4 hover:ring-1 hover:ring-white/10 transition"
                  {...fadeIn(i * 0.1)}
                >
                  <div className="shrink-0">{icon}</div>
                  <p className="text-sm text-gray-300">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.section>

        {/* Footer padding spacer */}
        <div className="h-32" />

        {/* Footer */}
        <motion.footer
          className="text-center text-gray-600 text-xs pb-10"
          {...fadeIn(0.7)}
        >
          © {new Date().getFullYear()} Knest — All rights reserved.
        </motion.footer>
      </div>
    </div>
  );
};

export default Home;
