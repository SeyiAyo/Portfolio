import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: FaLinkedin,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: FaTwitter,
    },
  ];

  return (
    <footer className="relative bg-dark-400/50 py-8">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-secondary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </div>
          
          <p className="text-textSecondary text-sm text-center">
            © {currentYear} Seyi Ayoola. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
