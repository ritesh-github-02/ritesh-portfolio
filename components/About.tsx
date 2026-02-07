
import React from 'react';
import MotionWrapper from './MotionWrapper';
import { User, ShieldCheck, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#014f86] mb-4">About Me</h2>
          <div className="w-24 h-1.5 bg-[#90e0ef] rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <MotionWrapper>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#90e0ef]/20 rounded-full blur-3xl"></div>
              <div className="bg-gradient-to-br from-[#014f86]/5 to-[#b6ccfe]/10 border border-[#014f86]/10 p-10 rounded-[2.5rem] relative z-10 shadow-sm">
                <p className="text-xl text-[#014f86] leading-relaxed mb-8 font-bold">
                  I am a passionate <span className="text-[#f26a8d] font-black">Software Developer</span> with a strong focus on building robust enterprise-level solutions. 
                  My journey in technology is fueled by a curiosity for solving complex problems and a drive to create systems that make a real difference in business operations.
                </p>
                <p className="text-xl text-[#014f86] leading-relaxed font-bold">
                  With experience in <span className="text-[#02c39a] font-black">HR Attendance & Payroll systems</span>, 
                  I understand the intricacies of handling sensitive enterprise data and the importance of scalability and security in software architecture.
                </p>
              </div>
            </div>
          </MotionWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <MotionWrapper delay={0.2} className="p-8 bg-white border-2 border-[#014f86]/5 rounded-3xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#014f86]/10 rounded-2xl flex items-center justify-center text-[#014f86] mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-black text-[#014f86] mb-3">Enterprise Ready</h3>
              <p className="text-sm text-[#014f86] font-bold">Expertise in mission-critical HR and payroll systems.</p>
            </MotionWrapper>

            <MotionWrapper delay={0.3} className="p-8 bg-white border-2 border-[#014f86]/5 rounded-3xl flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#f26a8d]/10 rounded-2xl flex items-center justify-center text-[#f26a8d] mb-6">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-black text-[#014f86] mb-3">Modern Stack</h3>
              <p className="text-sm text-[#014f86] font-bold">Fluent in both traditional ASP.NET and modern React.</p>
            </MotionWrapper>

            <MotionWrapper delay={0.4} className="p-8 bg-white border-2 border-[#014f86]/5 rounded-3xl flex flex-col items-center text-center sm:col-span-2 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-[#02c39a]/10 rounded-2xl flex items-center justify-center text-[#02c39a] mb-6">
                <User size={32} />
              </div>
              <h3 className="text-xl font-black text-[#014f86] mb-3">Problem Solver</h3>
              <p className="text-sm text-[#014f86] font-bold">BCA graduate with an ongoing MCA, dedicated to continuous academic and practical growth.</p>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
