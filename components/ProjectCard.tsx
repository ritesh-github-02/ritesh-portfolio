
import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      whileHover={{ y: -15 }}
      className="bg-white rounded-[2.5rem] overflow-hidden border border-[#014f86]/10 shadow-sm hover:shadow-2xl transition-all duration-500 group flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden">
        {/* Added fallback for image src */}
        <img 
          src={project.image || ''} 
          alt={project.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#014f86]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
          {project.github && (
            <a href={project.github} className="p-4 bg-white text-[#014f86] rounded-2xl hover:bg-[#90e0ef] hover:text-[#014f86] transition-all shadow-xl font-bold">
              <Github size={24} />
            </a>
          )}
          {project.link && (
            <a href={project.link} className="p-4 bg-white text-[#014f86] rounded-2xl hover:bg-[#90e0ef] hover:text-[#014f86] transition-all shadow-xl font-bold">
              <ExternalLink size={24} />
            </a>
          )}
        </div>
      </div>

      <div className="p-10 flex-grow flex flex-col">
        <div className="flex flex-wrap gap-3 mb-6">
          {/* Use optional chaining for techStack as it is now an optional property */}
          {project.techStack?.map(tech => (
            <span key={tech} className="px-4 py-1.5 bg-[#014f86]/10 text-[#014f86] text-xs font-black rounded-xl border border-[#014f86]/20">
              {tech}
            </span>
          ))}
        </div>
        
        <h3 className="text-2xl font-black text-[#014f86] mb-4 group-hover:text-[#90e0ef] transition-colors">
          {project.name}
        </h3>
        
        <p className="text-[#014f86] leading-relaxed text-base font-bold flex-grow">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;