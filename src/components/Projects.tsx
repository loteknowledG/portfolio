import React from 'react';
import SectionTitle from './common/SectionTitle';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-800">
      <div className="container mx-auto px-6">
        <SectionTitle title="Selected Work" subtitle="Projects I've worked on" light={true} />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-slate-900/50 border border-slate-700 rounded-lg p-8 hover:bg-slate-900 transition-colors duration-300"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-slate-300 mb-6 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-slate-800 text-slate-200 text-xs rounded-full border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;