
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDownCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadResume = () => {
    setIsDownloading(true);
    // Create a download link for the resume PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Make sure resume.pdf exists in public folder
    link.download = 'Ritesh_Waghmare_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // Reset animation after download
    setTimeout(() => setIsDownloading(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-white to-[#f0f9ff]">
      {/* Abstract Background Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#90e0ef]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#014f86]/5 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto px-6 text-center z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#f26a8d] font-bold tracking-widest uppercase mb-4"
        >
          Professional Software Developer
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black text-[#014f86] mb-6 leading-tight"
        >
          I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#014f86] to-[#90e0ef]">Ritesh Waghmare</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl md:text-4xl text-[#014f86] font-bold mb-8"
        >
          Software Developer & Full Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-2xl mx-auto text-lg text-[#1e293b] mb-10 leading-relaxed font-bold"
        >
          Building scalable enterprise applications with 
          <span className="text-[#014f86] font-black underline decoration-[#90e0ef] decoration-2 underline-offset-4 mx-1">ASP.NET</span>, 
          <span className="text-[#014f86] font-black underline decoration-[#90e0ef] decoration-2 underline-offset-4 mx-1">SQL Server</span>, 
          <span className="text-[#014f86] font-black underline decoration-[#90e0ef] decoration-2 underline-offset-4 mx-1">Laravel</span>, and 
          <span className="text-[#014f86] font-black underline decoration-[#90e0ef] decoration-2 underline-offset-4 mx-1">React</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="https://github.com/ritesh-github-02"
            className="w-full sm:w-auto px-10 py-5 bg-[#014f86] text-white rounded-2xl font-bold hover:bg-[#013a63] transition-all flex items-center justify-center shadow-xl shadow-[#014f86]/30 hover:scale-105 active:scale-95"
            target="_blank"
            rel="noopener noreferrer"
         >
            View Projects <ArrowRight className="ml-2" size={22} />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleDownloadResume();
            }}
            className="w-full sm:w-auto px-10 py-5 border-2 border-[#014f86] text-[#014f86] rounded-2xl font-bold hover:bg-[#014f86]/10 transition-all flex items-center justify-center hover:scale-105 active:scale-95 relative overflow-hidden group"
          >
            <span className="flex items-center justify-center relative z-10">
              Download My Resume 
              <motion.div
                animate={isDownloading ? {
                  rotate: 360,
                  y: [0, -8, 0]
                } : {
                  rotate: 0,
                  y: 0
                }}
                transition={{
                  rotate: { duration: 1, repeat: isDownloading ? Infinity : 0, ease: 'linear' },
                  y: { duration: 0.5, repeat: isDownloading ? Infinity : 0 }
                }}
                className="ml-2"
              >
                <ArrowDownCircle size={22} />
              </motion.div>
            </span>
            {isDownloading && (
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 bg-[#014f86]/20 origin-left z-0"
              />
            )}
          </a>
        </motion.div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-[#014f86]/30 rounded-full flex justify-center pt-2">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-[#014f86] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
