import React, { useState } from 'react';
import { ExternalLink, Star, GitFork, Code } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card';
import { mockProjects } from '../mock';

const Projects = () => {
  const [projects] = useState(mockProjects);

  const getLanguageColor = (language) => {
    const colors = {
      JavaScript: '#f7df1e',
      TypeScript: '#3178c6',
      Python: '#3776ab',
      Java: '#007396',
      Dart: '#0175c2',
      default: '#a3a3a3'
    };
    return colors[language] || colors.default;
  };

  return (
    <section id="projects" className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h2>
          <p className="text-xl text-[#a3a3a3] max-w-2xl">
            A collection of my open-source projects and contributions from GitHub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-[#1f1f1f] border-[#2d2d2d] hover:border-[#404040] transition-all duration-200 cursor-pointer group"
              onClick={() => window.open(project.html_url, '_blank')}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Code className="text-[#a3a3a3] group-hover:text-white transition-colors" size={24} />
                  <ExternalLink className="text-[#a3a3a3] group-hover:text-white transition-colors" size={18} />
                </div>
                <CardTitle className="text-white text-xl mb-2">{project.name}</CardTitle>
                <CardDescription className="text-[#a3a3a3] leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-[#a3a3a3]">
                    {project.language && (
                      <div className="flex items-center gap-1">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: getLanguageColor(project.language) }}
                        ></div>
                        <span>{project.language}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Star size={14} />
                      <span>{project.stargazers_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork size={14} />
                      <span>{project.forks_count}</span>
                    </div>
                  </div>
                </div>
                {project.topics && project.topics.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.topics.slice(0, 3).map((topic, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-[#2d2d2d] text-[#a3a3a3] rounded"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
