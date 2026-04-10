import React, { useState, useEffect } from 'react';
import { ExternalLink, Star, GitFork, Code, Sparkles } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import axios from 'axios';
import { motion } from 'framer-motion';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API}/github/repos`);
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#f7df1e',
      TypeScript: '#3178c6',
      Python: '#3776ab',
      Java: '#007396',
      Dart: '#0175c2',
      Kotlin: '#7F52FF',
      'C#': '#239120',
      default: '#a3a3a3'
    };
    return colors[language] || colors.default;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  if (loading) {
    return (
      <section id="projects" className="min-h-screen px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
            <p className="text-xl text-[#a3a3a3] max-w-2xl flex items-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={20} />
              </motion.div>
              Loading projects from GitHub...
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="min-h-screen px-6 py-20 relative overflow-hidden bg-white dark:bg-[#0a0a0a]">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-black dark:bg-white opacity-[0.02] rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">Projects</h2>
          <p className="text-xl text-gray-600 dark:text-[#a3a3a3] max-w-2xl">
            A collection of my open-source projects and contributions from GitHub.
          </p>
        </motion.div>

        {projects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-[#a3a3a3] py-12"
          >
            <p>No public repositories found.</p>
          </motion.div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-white/5 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
                
                <Card
                  className="bg-white dark:bg-[#1f1f1f]/80 backdrop-blur-sm border-gray-200 dark:border-[#2d2d2d] hover:border-gray-400 dark:hover:border-[#404040] transition-all duration-300 cursor-pointer h-full relative overflow-hidden"
                  onClick={() => window.open(project.html_url, '_blank')}
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between mb-2">
                      <motion.div
                        whileHover={{ rotate: 180, scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 200 }}
                      >
                        <Code className="text-gray-400 dark:text-[#a3a3a3] group-hover:text-black dark:group-hover:text-white transition-colors duration-300" size={24} />
                      </motion.div>
                      <motion.div
                        whileHover={{ x: 5, y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ExternalLink className="text-gray-400 dark:text-[#a3a3a3] group-hover:text-black dark:group-hover:text-white transition-colors duration-300" size={18} />
                      </motion.div>
                    </div>
                    <CardTitle className="text-black dark:text-white text-xl mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-400 transition-all duration-300">
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-[#a3a3a3] leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-[#a3a3a3]">
                        {project.language && (
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="flex items-center gap-1"
                          >
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: getLanguageColor(project.language) }}
                            />
                            <span className="group-hover:text-black dark:group-hover:text-white transition-colors">
                              {project.language}
                            </span>
                          </motion.div>
                        )}
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="flex items-center gap-1 group-hover:text-black dark:group-hover:text-white transition-colors"
                        >
                          <Star size={14} />
                          <span>{project.stargazers_count}</span>
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="flex items-center gap-1 group-hover:text-black dark:group-hover:text-white transition-colors"
                        >
                          <GitFork size={14} />
                          <span>{project.forks_count}</span>
                        </motion.div>
                      </div>
                    </div>
                    {project.topics && project.topics.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.topics.slice(0, 3).map((topic, idx) => (
                          <motion.span
                            key={idx}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * idx }}
                            whileHover={{ scale: 1.1, backgroundColor: 'rgb(64, 64, 64)' }}
                            className="text-xs px-2 py-1 bg-gray-100 dark:bg-[#2d2d2d] text-gray-600 dark:text-[#a3a3a3] rounded transition-all duration-200"
                          >
                            {topic}
                          </motion.span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
