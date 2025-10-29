import React from 'react';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  return (
    <section id="a-propos" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle title="Notre Histoire" subtitle="La passion de la saveur" />
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img src="https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Intérieur du restaurant Jardin du Saveur" className="w-full h-full object-cover" />
          </div>
          <div className="text-base sm:text-lg text-slate-600 space-y-4">
            <p>
              Niché dans le quartier dynamique de Ouaga 2000, le <span className="font-bold text-primary">Restaurant Jardin du Saveur</span> est né d'une passion pour la gastronomie authentique et les produits frais. Notre mission est de vous offrir une évasion culinaire, où les saveurs locales rencontrent des touches internationales.
            </p>
            <p>
              Chaque plat est une célébration des ingrédients de saison, soigneusement sélectionnés auprès des producteurs locaux. Notre chef et son équipe transforment ces trésors en créations mémorables qui éveilleront vos papilles.
            </p>
            <p>
              Nous vous invitons à partager un moment de convivialité et de gourmandise dans notre cadre élégant et chaleureux.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;