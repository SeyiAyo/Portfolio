import { motion } from 'framer-motion';
import { useState } from 'react';

const experiences = [
  {
    company: 'Ooreva Software & Technology Inc.',
    position: 'Full-Stack Developer',
    period: 'February 2024 - Present',
    location: 'Lagos, Nigeria',
    description: [
      'Refactored a legacy PHP CodeIgniter codebase, reducing technical debt by 40% and enhancing system scalability',
      'Transitioned a monolithic PHP application to a SaaS model, introducing multi-tenancy and subscription-based features that boosted user adoption by 25%',
      'Improved user experience by redesigning UI components and implementing responsive design, leading to a 15% increase in customer satisfaction scores',
    ],
    technologies: ['PHP', 'CodeIgniter', 'Laravel', 'JavaScript', 'HTML/CSS'],
  },
  {
    company: 'Techify',
    position: 'Back-End Developer',
    period: 'August 2023 - February 2024',
    location: 'Lagos, Nigeria',
    description: [
      'Designed and implemented a secure user authentication and role-based access control system using Django\'s auth module',
      'Integrated third-party APIs to enhance dashboard functionalities, improving data accessibility and reducing manual processes by 30%',
      'Optimized database queries with Django ORM, decreasing load times by 40% and improving application performance',
    ],
    technologies: ['Python', 'Django', 'PostgreSQL', 'RESTful APIs'],
  },
  {
    company: 'J.P. Morgan',
    position: 'Software Engineer Virtual Internship',
    period: 'August 2024',
    location: 'Virtual',
    description: [
      'Debugged and resolved critical issues in the repository, ensuring seamless web application functionality',
      'Utilized JPMorgan\'s open-source Perspective library to build a real-time data visualization tool',
      'Enhanced traders\' ability to monitor live data feeds effectively',
    ],
    technologies: ['Python', 'JavaScript', 'React', 'Data Visualization'],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="relative py-20 bg-dark-400/50">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-dark-400/50 to-primary" />
        <div className="absolute top-20 left-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="gradient-text text-3xl md:text-4xl font-bold text-center mb-12">
            Where I've Worked
          </h2>

          <div className="grid md:grid-cols-[240px_1fr] gap-8">
            {/* Company Tabs */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-x-visible scrollbar-none">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 text-left border-b-2 md:border-b-0 md:border-l-2 whitespace-nowrap
                    ${
                      activeTab === index
                        ? 'text-secondary border-secondary bg-dark-400/50'
                        : 'text-textSecondary border-textSecondary/20 hover:text-secondary hover:border-secondary/50'
                    }
                    transition-colors duration-300`}
                >
                  {exp.company}
                </button>
              ))}
            </div>

            {/* Experience Details */}
            <div className="min-h-[400px]">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-dark-400/30 backdrop-blur-sm rounded-xl p-6 border border-textSecondary/10"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-textPrimary">
                    {experiences[activeTab].position}{' '}
                    <span className="text-secondary">
                      @ {experiences[activeTab].company}
                    </span>
                  </h3>
                  <p className="text-textSecondary">
                    {experiences[activeTab].period} | {experiences[activeTab].location}
                  </p>
                </div>

                <ul className="space-y-4 mb-6">
                  {experiences[activeTab].description.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start text-textSecondary"
                    >
                      <span className="text-secondary mr-2">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {experiences[activeTab].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs font-mono text-secondary bg-secondary/10 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
