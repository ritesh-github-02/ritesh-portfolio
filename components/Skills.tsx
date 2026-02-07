
import React from 'react';
import MotionWrapper from './MotionWrapper';
import { SKILLS } from '../constants';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal, Palette } from 'lucide-react';

const Skills: React.FC = () => {
  const categories = [
    { id: 'frontend', label: 'Frontend', icon: <Layout size={24} /> },
    { id: 'backend', label: 'Backend', icon: <Terminal size={24} /> },
    { id: 'database', label: 'Database', icon: <Database size={24} /> },
    { id: 'tools', label: 'Tools & Versioning', icon: <Code2 size={24} /> },
    { id: 'designing', label: 'Designing', icon: <Palette size={24} /> }
  ] as const;

  return (
    <section id="skills" className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#014f86] mb-4"> Technical Expertise</h2>
          <div className="w-24 h-1.5 bg-[#90e0ef] rounded-full"></div>
          <p className="mt-6 text-lg text-[#014f86] font-bold opacity-80 max-w-2xl">
            A comprehensive overview of my technical stack across different domains of software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, catIdx) => {
            const catSkills = SKILLS.filter(s => s.category === cat.id);
            if (catSkills.length === 0) return null;

            return (
              <MotionWrapper 
                key={cat.id} 
                delay={catIdx * 0.1}
                className="h-full"
              >
                <div className="bg-white h-full rounded-[2rem] border border-[#014f86]/10 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
                  {/* Category Header */}
                  <div className="bg-[#014f86]/5 px-8 py-2 flex items-center gap-4 border-b border-[#014f86]/10">
                    <div className="p-2.5 bg-white text-[#014f86] rounded-xl shadow-sm border border-[#014f86]/10">
                      {cat.icon}
                    </div>
                    <h3 className="text-xl font-black text-[#014f86] tracking-tight">
                      {cat.label}
                    </h3>
                  </div>

                  {/* Skills Grid inside Card */}
                  <div className="p-8 flex flex-wrap gap-4">
                    {catSkills.map((skill, skillIdx) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex flex-col items-center gap-2 group"
                      >
                        <div className="w-14 h-14 md:w-20 md:h-20 bg-white border border-[#014f86]/5 rounded-2xl flex items-center justify-center p-3 shadow-sm group-hover:border-[#014f86]/30 transition-colors">
                          {skill.iconUrl ? (
                            <img 
                              src={skill.iconUrl} 
                              alt={skill.name} 
                              className="w-full h-full object-contain filter group-hover:grayscale-0 transition-all duration-300"
                            />
                          ) : (
                            <div className="w-full h-full bg-[#014f86]/10 rounded-xl flex items-center justify-center font-black text-[#014f86] text-lg">
                              {skill.name[0]}
                            </div>
                          )}
                        </div>
                        <span className="text-[10px] md:text-xs font-black text-[#014f86] uppercase tracking-wider text-center group-hover:text-[#90e0ef] transition-colors">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </MotionWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
