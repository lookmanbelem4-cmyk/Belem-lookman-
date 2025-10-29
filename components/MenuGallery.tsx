import React from 'react';
import SectionTitle from './SectionTitle';

const dishes = [
  {
    src: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Filet de Capitaine Grillé',
    name: 'Filet de Capitaine',
  },
  {
    src: 'https://images.pexels.com/photos/1556698/pexels-photo-1556698.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Burger Classique du Jardin',
    name: 'Burger du Jardin',
  },
  {
    src: 'https://images.pexels.com/photos/14705146/pexels-photo-14705146.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Mousse au Chocolat Noir',
    name: 'Mousse au Chocolat',
  },
  {
    src: 'https://images.pexels.com/photos/1352270/pexels-photo-1352270.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Salade de Fruits Exotiques',
    name: 'Salade de Fruits',
  },
];

const MenuGallery: React.FC = () => {
  return (
    <section id="menu-photos" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle title="Nos Plats en Images" subtitle="Un avant-goût de votre expérience" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
          {dishes.map((dish, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={dish.src}
                alt={dish.alt}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4 transition-opacity opacity-0 group-hover:opacity-100">
                <h3 className="text-white text-xl font-bold font-serif">{dish.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuGallery;