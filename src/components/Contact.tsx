import React from 'react';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-800">
      <div className="container mx-auto px-6">
        <SectionTitle title="Get In Touch" subtitle="Let's work together" light={true} />
        
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <p className="text-lg text-slate-300 mb-8">
            I'm currently open to new opportunities and collaborations. Whether you have a project in mind or just want to say hello, feel free to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href="mailto:jobs.quang.le@gmail.com" 
              className="inline-flex items-center justify-center py-3 px-8 bg-white text-slate-900 rounded-full hover:bg-slate-200 transition-colors"
            >
              <Mail size={18} className="mr-2" />
              jobs.quang.le@gmail.com
            </a>
            
            <a 
              href="./Quang Le cv.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center py-3 px-8 bg-slate-700 text-white rounded-full hover:bg-slate-600 transition-colors"
            >
              <FileText size={18} className="mr-2" />
              Download Resume
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-slate-700 rounded-lg bg-slate-900/50">
              <h3 className="font-semibold mb-2 text-white">Location</h3>
              <p className="text-slate-300">Roswell, GA</p>
            </div>
            <div className="p-6 border border-slate-700 rounded-lg bg-slate-900/50">
              <h3 className="font-semibold mb-2 text-white">Phone</h3>
              <p className="text-slate-300">(706) 461-8886</p>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center space-x-6">
            <a 
              href="https://github.com/loteknowledG" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-slate-700 rounded-full hover:bg-slate-600 transition-colors text-white"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/quang-le-4282522/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-slate-700 rounded-full hover:bg-slate-600 transition-colors text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;