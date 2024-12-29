import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:oluwaseyiayoola97@gmail.com',
    icon: HiOutlineMail,
    color: 'text-red-500',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/oluwaseyi-ayo/',
    icon: FaLinkedin,
    color: 'text-blue-500',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/SeyiAyo',
    icon: FaGithub,
    color: 'text-gray-400',
  },
];

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Initialize EmailJS
      emailjs.init('N4HLV5fNI9VjvX8t7');
      
      // Add hidden form data for template variables
      const templateParams = {
        to_name: 'Seyi', // The recipient's name
        from_name: form.current.from_name.value,
        reply_to: form.current.reply_to.value,
        message: form.current.message.value,
      };

      console.log('Attempting to send email with form data:', templateParams);

      const result = await emailjs.send(
        'pandamail', // Replace with your EmailJS service ID
        'template_contact', // Replace with your EmailJS template ID
        templateParams,
        'N4HLV5fNI9VjvX8t7' // Replace with your EmailJS public key
      );

      console.log('Email sent successfully:', result);
      
      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you soon.',
      });
      form.current.reset();
    } catch (error) {
      console.error('Failed to send email:', {
        error: error.message,
        errorObject: error,
        serviceId: 'service_pandamail',
        templateId: 'template_f6y70s4'
      });

      setSubmitStatus({
        type: 'error',
        message: `Failed to send message: ${error.message}. Please try again later.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 bg-dark-400/50">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-dark-400/50 to-primary" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="gradient-text text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-textSecondary text-lg max-w-2xl mx-auto">
              Based in Lagos, Nigeria. I'm currently open to new opportunities and collaborations.
              Feel free to reach out via email at oluwaseyiayoola97@gmail.com or phone at +2349068132575.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-dark-400/30 backdrop-blur-sm rounded-xl p-6 border border-textSecondary/10"
            >
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-textSecondary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    className="input"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-textSecondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="reply_to"
                    className="input"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-textSecondary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="input resize-none"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus.message && (
                  <div
                    className={`mt-4 p-3 rounded ${
                      submitStatus.type === 'success'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-dark-400/30 backdrop-blur-sm rounded-xl p-6 border border-textSecondary/10">
                <h3 className="text-xl font-bold text-textPrimary mb-4">
                  Connect With Me
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-textSecondary hover:text-secondary transition-colors p-3 rounded-lg hover:bg-dark-400/50"
                    >
                      <span className={`text-2xl ${link.color}`}>
                        <link.icon />
                      </span>
                      <div>
                        <h4 className="font-medium text-textPrimary">{link.name}</h4>
                        <p className="text-sm">{link.href.replace('mailto:', '')}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-dark-400/30 backdrop-blur-sm rounded-xl p-6 border border-textSecondary/10">
                <h3 className="text-xl font-bold text-textPrimary mb-4">
                  Location
                </h3>
                <p className="text-textSecondary">
                  Based in Lagos, Nigeria<br />
                  Open to Remote Opportunities
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
