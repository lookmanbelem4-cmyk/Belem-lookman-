import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-dark font-serif">{title}</h2>
      <p className="text-secondary text-base md:text-lg mt-2">{subtitle}</p>
    </div>
  );
};

export default SectionTitle;