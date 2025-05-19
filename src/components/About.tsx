import React from 'react';
import SectionTitle from './common/SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="About Me" 
          subtitle="My background and journey" 
          light={true}
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative h-[450px] w-full rounded-lg overflow-hidden">
              <img 
                src="./profile.png" 
                alt="Quang Le Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
            
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Software Developer & React Specialist</h3>
            <div className="space-y-6 text-slate-300">
              <p>
                Hello! I'm Quang, a software developer with over 20 years of experience in full-stack development, specializing in building scalable and high-performance React.js applications.
              </p>
              <p>
                My journey in tech has led me through various roles where I've had the opportunity to lead frontend teams, architect modern UI solutions, and optimize application performance. I have a strong foundation in both frontend and backend technologies.
              </p>
              <p>
                I believe in writing clean, maintainable code and creating intuitive user experiences. My expertise spans across React.js, TypeScript, Node.js, and various modern web technologies.
              </p>
              <p>
                Currently, I'm working as a Frontend Tech Lead, focusing on creating robust and scalable React applications for enterprise clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;