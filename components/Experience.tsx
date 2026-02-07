
import React from 'react';
import MotionWrapper from './MotionWrapper';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-[#014f86] mb-4">Professional Experience</h2>
          <div className="w-24 h-1.5 bg-[#90e0ef] rounded-full"></div>
        </div>

        <div className="space-y-16">
          {EXPERIENCES.map((exp, idx) => (
            <MotionWrapper key={exp.company} delay={idx * 0.2}>
              <div className="relative pl-10 md:pl-16 border-l-4 border-[#014f86]/20 group">
                <div className="absolute top-0 -left-[14px] w-6 h-6 bg-[#014f86] rounded-full border-4 border-white shadow-md group-hover:scale-125 transition-transform duration-300"></div>
                
                <div className="bg-[#f8fafc] border border-[#014f86]/10 p-10 rounded-[2.5rem] hover:shadow-xl hover:bg-white transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                    <div>
                      <h3 className="text-3xl font-black text-[#014f86] mb-2">{exp.role}</h3>
                      <div className="flex items-center text-[#f26a8d] font-black text-lg">
                        <Briefcase size={22} className="mr-3" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex items-center text-[#014f86] bg-[#014f86]/10 px-6 py-3 rounded-2xl text-sm font-black border border-[#014f86]/10">
                      <Calendar size={18} className="mr-3" />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-5">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start text-[#014f86] leading-relaxed font-bold text-lg">
                        <ChevronRight size={24} className="text-[#02c39a] mr-3 mt-1 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
