import React from 'react';
import SectionTitle from './common/SectionTitle';
import { skills } from '../data/skills';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <SectionTitle title="Skills & Expertise" subtitle="What I bring to the table" light={true} />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category) => (
            <div key={category.title} className="bg-slate-800 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-6 text-white">{category.title}</h3>
              <ul className="space-y-4">
                {category.items.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-white mr-3"></div>
                    <span className="text-slate-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;