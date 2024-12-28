import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Job Board',
    description: 'A scalable job marketplace platform connecting job seekers with employers, built with Django and hosted on PythonAnywhere. Features include job posting, application management, and search functionality.',
    tags: ['Python', 'Django', 'PostgreSQL', 'HTML/CSS'],
    image: '/project1.jpg',
    live: 'https://pandajobs.pythonanywhere.com/',
  },
  {
    title: 'Attendify',
    description: 'A responsive web application for daycare attendance management. Streamlines the process of tracking attendance, managing schedules, and generating reports.',
    tags: ['Laravel', 'MySQL', 'Bootstrap', 'JavaScript'],
    image: '/project2.jpg',
    live: 'https://useattendify.com',
  },
  {
    title: 'PandaBlog',
    description: 'A blogging platform enabling users to publish and manage content seamlessly. Features include user authentication, content management, and responsive design.',
    tags: ['PHP', 'CodeIgniter', 'MySQL', 'jQuery'],
    image: '/project3.jpg',
    live: 'https://panda.pythonanywhere.com/',
  },
];

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

export default function Projects() {
  return (
    <section id="projects" className="relative bg-dark-400/50">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-dark-400/50 to-primary" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
            <motion.h2
              variants={item}
              className="gradient-text mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              variants={item}
              className="text-textSecondary"
            >
              Here are some of my recent projects that showcase my skills and experience
              in building modern web applications.
            </motion.p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group card backdrop-blur-sm"
              >
                <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-dark-400/50 group-hover:bg-dark-400/20 transition-colors duration-500" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-dark-400/90 rounded-full text-secondary hover:bg-dark-400 transition-colors"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-dark-400/90 rounded-full text-secondary hover:bg-dark-400 transition-colors"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-textPrimary mb-2 group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>

                <p className="text-textSecondary mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-mono text-secondary bg-secondary/10 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
