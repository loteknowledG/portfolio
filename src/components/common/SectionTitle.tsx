import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, light }) => {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className={`text-3xl font-bold mb-3 ${light ? 'text-white' : ''}`}>{title}</h2>
      <p className={light ? 'text-slate-400' : 'text-slate-500'}>{subtitle}</p>
      <div className={`w-16 h-1 mx-auto mt-6 ${light ? 'bg-white' : 'bg-slate-900'}`}></div>
    </div>
  );
};

export default SectionTitle;