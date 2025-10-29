import React from 'react';

interface HeroProps {
  onSeeMenuClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSeeMenuClick }) => {
  return (
    <section id="accueil" className="hero-bg h-screen flex items-center justify-center text-light relative">
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="text-center z-10 p-4 sm:p-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif mb-3 sm:mb-4 drop-shadow-lg">
          Bienvenue au <span className="text-secondary">Jardin du Saveur</span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 drop-shadow-md">
          Une expérience culinaire inoubliable au cœur de Ouaga 2000.
        </p>
        <button 
          onClick={onSeeMenuClick}
          className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary-dark transition-transform duration-300 transform hover:scale-105 shadow-lg"
        >
          Voir le Menu
        </button>
      </div>
    </section>
  );
};

export default Hero;