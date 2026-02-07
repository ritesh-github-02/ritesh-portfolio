
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-white border-t border-[#014f86]/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-3xl font-black text-[#014f86]">
          RW<span className="text-[#90e0ef]">.</span>
        </div>
        
        <p className="text-[#014f86]/40 text-sm font-bold">
          © {new Date().getFullYear()} Ritesh Waghmare. All rights reserved.
        </p>
        
        <div className="flex gap-10 text-[#014f86] font-black text-sm">
          <a href="#home" className="hover:text-[#90e0ef] transition-colors uppercase tracking-widest">Home</a>
          <a href="#projects" className="hover:text-[#90e0ef] transition-colors uppercase tracking-widest">Projects</a>
          <a href="#contact" className="hover:text-[#90e0ef] transition-colors uppercase tracking-widest">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
