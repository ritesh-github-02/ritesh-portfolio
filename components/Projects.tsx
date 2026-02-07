
import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import MotionWrapper from './MotionWrapper';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-[#014f86] mb-4">Featured Projects</h2>
          <div className="w-24 h-1.5 bg-[#90e0ef] rounded-full"></div>
          <p className="mt-8 text-xl text-[#014f86] font-bold max-w-2xl">
            A selection of my enterprise work and personal projects showcasing my technical breadth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROJECTS.map((project, idx) => (
            <MotionWrapper key={project.id} delay={idx * 0.1} className="h-full">
              <ProjectCard project={project} />
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
