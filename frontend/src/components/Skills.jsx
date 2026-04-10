import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const skills = [
  { name: "Mobile Testing", category: "QA" },
  { name: "Automation", category: "QA" },
  { name: "Selenium", category: "QA" },
  { name: "Appium", category: "QA" },
  { name: "API Testing", category: "QA" },
  { name: "React Native", category: "Development" },
  { name: "Android", category: "Development" },
  { name: "Kotlin", category: "Development" },
  { name: "JavaScript", category: "Development" },
  { name: "TypeScript", category: "Development" },
  { name: "Python", category: "Development" },
  { name: "Java", category: "Development" },
  { name: "CI/CD", category: "DevOps" },
  { name: "Git", category: "DevOps" }
];

const Skills = () => {
  const { t } = useLanguage();
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {});

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="skills" className="min-h-screen px-6 py-20 bg-gray-50 dark:bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black dark:bg-white opacity-[0.02] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">{t.skills.title}</h2>
          <p className="text-xl text-gray-600 dark:text-[#a3a3a3] max-w-2xl">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {Object.entries(groupedSkills).map(([category, skillList]) => (
            <motion.div
              key={category}
              variants={categoryVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-[#1f1f1f]/50 backdrop-blur-sm border border-gray-200 dark:border-[#2d2d2d] p-6 rounded-lg hover:border-gray-400 dark:hover:border-[#404040] transition-all duration-300 group"
            >
              <motion.h3
                className="text-xl font-bold text-black dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-400 transition-all duration-300"
              >
                {category}
              </motion.h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: 'rgb(64, 64, 64)',
                      color: '#ffffff',
                      borderColor: '#404040'
                    }}
                    className="px-3 py-2 bg-gray-100 dark:bg-[#0a0a0a] border border-gray-200 dark:border-[#2d2d2d] text-gray-700 dark:text-[#a3a3a3] rounded transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
