import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaDownload } from 'react-icons/fa';

const links = [
  { name: 'Home', to: 'home' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Seyi Ayoola RESUME 2024.pdf';
    link.download = 'Seyi_Ayoola_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container h-20 flex items-center justify-between">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-2xl font-bold text-textPrimary cursor-pointer"
        >
          SA
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-100}
              className="text-textSecondary hover:text-secondary transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={handleResumeDownload}
            className="btn-outline flex items-center gap-2"
          >
            <FaDownload />
            Resume
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="text-textSecondary hover:text-secondary md:hidden"
        >
          <HiMenuAlt3 size={24} />
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mobile-menu"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-textSecondary hover:text-secondary"
              >
                <HiX size={24} />
              </button>

              <div className="flex flex-col items-center space-y-6">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="text-xl text-textSecondary hover:text-secondary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    handleResumeDownload();
                    setIsOpen(false);
                  }}
                  className="btn-outline flex items-center gap-2"
                >
                  <FaDownload />
                  Resume
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
