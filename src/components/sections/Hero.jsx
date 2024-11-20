import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import Button from '../ui/Button';
import { FaDownload } from 'react-icons/fa';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Seyi Ayoola RESUME 2024.pdf';
    link.download = 'Seyi_Ayoola_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-dark-400/50 to-primary" />
        <div className="absolute top-20 left-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-bold text-textPrimary mb-6"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Seyi Ayoola</span>
          </motion.h1>

          <motion.div
            variants={item}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-textSecondary mb-6"
          >
            <Typewriter
              options={{
                strings: [
                  'Full Stack Developer',
                  'UI/UX Enthusiast',
                  'Problem Solver'
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.div>

          <motion.p
            variants={item}
            className="text-textSecondary text-lg mb-12 max-w-2xl mx-auto"
          >
            I craft elegant solutions to complex problems, specializing in modern web development
            and user-centric design.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="projects"
              smooth={true}
              spy={true}
              duration={500}
              offset={-100}
              className="btn-primary w-full sm:w-auto cursor-pointer"
            >
              View Projects
            </Link>
            
            <Link
              to="contact"
              smooth={true}
              spy={true}
              duration={500}
              offset={-100}
              className="btn-secondary w-full sm:w-auto cursor-pointer"
            >
              Contact Me
            </Link>

            <button
              onClick={handleResumeDownload}
              className="btn-outline w-full sm:w-auto flex items-center justify-center gap-2"
            >
              <FaDownload />
              Download Resume
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-secondary rounded-full flex justify-center">
          <div className="w-1 h-2 bg-secondary rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
