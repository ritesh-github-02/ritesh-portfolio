
import React from 'react';
import { motion } from 'framer-motion';
import { ALL_PROJECTS } from '../constants';
import MotionWrapper from './MotionWrapper';
import { ArrowUpRight } from 'lucide-react';

const ProjectList: React.FC = () => {
  const getBadgeStyles = (category?: string) => {
    const cat = category?.toLowerCase() || '';
    if (cat.includes('software') || cat.includes('enterprise')) {
      return 'bg-[#b6ccfe] text-[#014f86]';
    }
    if (cat.includes('design')) {
      return 'bg-[#f26a8d]/20 text-[#f26a8d]';
    }
    return 'bg-[#90e0ef]/30 text-[#014f86]';
  };

  return (
    <section className="py-24 bg-[#f8fafc] text-[#014f86] overflow-hidden border-t border-[#014f86]/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <MotionWrapper>
          <div className="flex flex-col mb-16">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase">
              watch my <span className="text-[#f26a8d]">more</span> artwork.
            </h2>
            <div className="w-24 h-1.5 bg-[#90e0ef] rounded-full mt-4"></div>
          </div>
        </MotionWrapper>

        <div className="flex flex-col border-t border-[#014f86]/10">
          {ALL_PROJECTS.map((project, idx) => (
            <motion.a
              key={project.id}
              href={project.link || '#'}
              target={project.link?.startsWith('http') ? "_blank" : "_self"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative flex items-center justify-between py-6 px-4 md:px-8 border-b border-[#014f86]/10 overflow-hidden hover:bg-[#90e0ef]/10 transition-colors duration-300"
            >
              {/* Hover Background Overlay - Right to Left Slide */}
              <div className="absolute inset-0 bg-[#90e0ef] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left z-0" />

              <div className="relative z-10 flex w-full items-center gap-4 md:gap-8">
                {/* Year Column */}
                <div className="w-16 md:w-24 shrink-0">
                  <span className="text-sm md:text-lg font-bold text-[#014f86]/50 group-hover:text-[#014f86] transition-colors duration-300">
                    {project.year || '2025'}
                  </span>
                </div>

                {/* Project Name Column */}
                <div className="flex-grow min-w-0">
                  <span className="text-base md:text-2xl font-black text-[#014f86] group-hover:text-[#014f86] transition-colors duration-300 block truncate md:truncate-none">
                    {project.name}
                  </span>
                </div>

                {/* Category Badge - Hidden on Mobile */}
                <div className={`hidden md:inline-flex items-center px-4 md:px-6 py-1.5 md:py-2 rounded-full text-[9px] md:text-xs font-black uppercase tracking-widest whitespace-nowrap ${getBadgeStyles(project.category)}`}>
                  {project.category || 'General'}
                </div>

                {/* Right Category Text - Desktop Only */}
                <div className="hidden lg:block w-40 text-right shrink-0">
                  <span className="text-sm md:text-base font-bold text-[#014f86]/40 group-hover:text-[#014f86] transition-colors duration-300 block truncate">
                    {project.category || 'Software Development'}
                  </span>
                </div>

                {/* Arrow Icon */}
                <div className="relative z-10 shrink-0 ml-2 md:ml-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1, x: 4 }}
                    transition={{ duration: 300 }}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <ArrowUpRight size={20} className="text-[#014f86]" />
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        
        <MotionWrapper delay={0.4}>
          <div className="mt-16 flex flex-col items-center gap-4">
            <p className="text-[#014f86]/20 font-black tracking-widest uppercase text-xs">
              Scroll to explore more work
            </p>
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-8 bg-gradient-to-b from-[#90e0ef] to-transparent rounded-full"
            />
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
};

export default ProjectList;
