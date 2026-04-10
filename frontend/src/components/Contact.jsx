import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const contacts = [
    {
      icon: Github,
      title: 'GitHub',
      subtitle: '@YigitSezenn',
      link: 'https://github.com/YigitSezenn'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      subtitle: '/suleymanyigit',
      link: 'https://www.linkedin.com/in/suleymanyigit'
    },
    {
      icon: Mail,
      title: 'Email',
      subtitle: 'ysezenn@outlook.com',
      link: 'mailto:ysezenn@outlook.com'
    }
  ];

  return (
    <section id="contact" className="min-h-[60vh] px-6 py-20 flex items-center relative overflow-hidden bg-white dark:bg-[#0a0a0a]">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-black dark:bg-white opacity-[0.02] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 dark:text-[#a3a3a3] max-w-2xl">
            Feel free to reach out for collaborations, opportunities, or just to say hello.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-6">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.title}
                href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : undefined}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-6 py-4 bg-white dark:bg-[#1f1f1f]/80 backdrop-blur-sm border border-gray-200 dark:border-[#2d2d2d] rounded-lg hover:border-black dark:hover:border-white transition-all duration-300 group relative overflow-hidden"
              >
                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                >
                  <Icon className="text-gray-400 dark:text-[#a3a3a3] group-hover:text-black dark:group-hover:text-white transition-colors duration-300" size={24} />
                </motion.div>
                <div className="relative z-10">
                  <div className="text-black dark:text-white font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-400 transition-all duration-300">
                    {contact.title}
                  </div>
                  <div className="text-gray-600 dark:text-[#a3a3a3] text-sm group-hover:text-gray-800 dark:group-hover:text-white/80 transition-colors duration-300">
                    {contact.subtitle}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
