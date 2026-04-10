import React from 'react';

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
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {});

  return (
    <section id="skills" className="min-h-screen px-6 py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
          <p className="text-xl text-[#a3a3a3] max-w-2xl">
            Technologies and tools I work with to deliver quality software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([category, skillList]) => (
            <div key={category} className="bg-[#1f1f1f] border border-[#2d2d2d] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-[#0a0a0a] border border-[#2d2d2d] text-[#a3a3a3] rounded hover:border-white hover:text-white transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
