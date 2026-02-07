
import React from 'react';
import { EDUCATIONS } from '../constants';
import MotionWrapper from './MotionWrapper';
import { GraduationCap, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-[#014f86] mb-4">Education</h2>
          <div className="w-24 h-1.5 bg-[#90e0ef] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {EDUCATIONS.map((edu, idx) => (
            <MotionWrapper key={edu.degree} delay={idx * 0.2}>
              <div className="p-10 bg-[#f8fafc] border-2 border-[#014f86]/10 rounded-[2.5rem] relative group hover:border-[#014f86]/40 transition-all duration-300 hover:shadow-xl">
                <div className="absolute -right-8 -top-8 text-[#014f86]/5 group-hover:text-[#014f86]/10 transition-colors duration-500">
                  <GraduationCap size={150} />
                </div>
                
                <div className="flex items-center mb-6 relative z-10">
                  <div className="w-16 h-16 bg-[#014f86]/10 rounded-2xl flex items-center justify-center text-[#014f86] mr-6">
                    <Award size={32} />
                  </div>
                  <div>
                    <span className="inline-block px-5 py-1.5 bg-[#014f86]/10 text-[#014f86] text-xs font-black rounded-full mb-3 uppercase tracking-widest">
                      {edu.year}
                    </span>
                    <h3 className="text-2xl font-black text-[#014f86]">{edu.degree}</h3>
                  </div>
                </div>
                
                <p className="text-xl text-[#014f86] font-bold mb-3 relative z-10">{edu.institution}</p>
                {edu.status && (
                  <div className="flex items-center mt-6 relative z-10">
                    <div className="w-3 h-3 bg-[#52b788] rounded-full mr-3 animate-pulse"></div>
                    <span className="text-base text-[#52b788] font-black">{edu.status}</span>
                  </div>
                )}
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
