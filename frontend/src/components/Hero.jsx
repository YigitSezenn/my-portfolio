import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import axios from 'axios';
import { motion } from 'framer-motion';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Hero = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${API}/github/profile`);
        setProfile(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching profile:', error);
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  // Animated counter
  const AnimatedCounter = ({ end, duration = 2 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (end === 0) return;
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }, [end, duration]);

    return <span>{count}</span>;
  };

  if (loading) {
    return (
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-[#a3a3a3] flex items-center gap-2"
        >
          <Sparkles className="animate-spin" size={20} />
          Loading...
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-black dark:bg-white rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.03, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-black dark:bg-white rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center gap-6"
        >
          {profile?.avatar_url && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-black dark:bg-white opacity-20 rounded-full blur-xl animate-pulse" />
              <img
                src={profile.avatar_url}
                alt={profile.name}
                className="w-24 h-24 rounded-full border-2 border-gray-300 dark:border-[#2d2d2d] relative z-10 hover:border-black dark:hover:border-white transition-colors duration-300"
              />
            </motion.div>
          )}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-4 py-2 bg-gray-100 dark:bg-[#1f1f1f]/80 backdrop-blur-sm border border-gray-200 dark:border-[#2d2d2d] rounded-full hover:border-gray-400 dark:hover:border-[#404040] transition-all duration-300"
          >
            <span className="text-gray-600 dark:text-[#a3a3a3] text-sm">QA Engineer & Jr Mobile Developer</span>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-6 leading-tight"
        >
          {profile?.name?.split(' ').map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              className="inline-block mr-4"
            >
              {word}
            </motion.span>
          )) || 'Süleyman Yiğit'}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-[#a3a3a3] mb-8 max-w-2xl leading-relaxed"
        >
          {profile?.bio || 'Building quality software through rigorous testing and elegant mobile solutions.'}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-[#e5e5e5] border-black dark:border-white transition-all duration-300 shadow-lg hover:shadow-black/20 dark:hover:shadow-white/20"
              onClick={() => window.open(profile?.html_url || 'https://github.com/YigitSezenn', '_blank')}
            >
              <Github className="mr-2" size={20} />
              View GitHub
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="bg-transparent text-black dark:text-white border-gray-300 dark:border-[#2d2d2d] hover:border-black dark:hover:border-white hover:bg-gray-100 dark:hover:bg-[#1f1f1f] transition-all duration-300"
              onClick={() => window.open('https://www.linkedin.com/in/suleymanyigit', '_blank')}
            >
              <Linkedin className="mr-2" size={20} />
              LinkedIn
            </Button>
          </motion.div>
          {profile?.email && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="bg-transparent text-black dark:text-white border-gray-300 dark:border-[#2d2d2d] hover:border-black dark:hover:border-white hover:bg-gray-100 dark:hover:bg-[#1f1f1f] transition-all duration-300"
                onClick={() => window.location.href = `mailto:${profile.email}`}
              >
                <Mail className="mr-2" size={20} />
                Email
              </Button>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap gap-8 text-gray-600 dark:text-[#a3a3a3]"
        >
          {[
            { value: profile?.public_repos || 0, label: 'Public Repositories' },
            { value: profile?.followers || 0, label: 'GitHub Followers' },
            { value: 5, label: 'Technologies', suffix: '+' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group cursor-default"
            >
              <div className="text-3xl font-bold text-black dark:text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-gray-600 dark:group-hover:from-white dark:group-hover:to-gray-500 transition-all duration-300">
                <AnimatedCounter end={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
