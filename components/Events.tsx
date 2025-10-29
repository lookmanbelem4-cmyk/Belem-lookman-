import React from 'react';
import SectionTitle from './SectionTitle';

const Events: React.FC = () => {
  return (
    <section id="evenements" className="py-12 sm:py-16 md:py-20 bg-light">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle title="Espace Événements" subtitle="Célébrez vos moments spéciaux avec nous" />
        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div className="text-base sm:text-lg text-slate-600 space-y-4">
            <p>
              Le <span className="font-bold text-primary">Jardin du Saveur</span> offre un cadre élégant et modulable pour tous vos événements privés et professionnels. Anniversaires, mariages, repas d'affaires, ou cocktails, notre équipe est à votre écoute pour créer un moment inoubliable.
            </p>
            <p>
              Nous proposons des menus personnalisés, adaptés à vos envies et à votre budget. Profitez de notre salle climatisée ou de notre terrasse verdoyante pour accueillir vos invités dans une atmosphère unique.
            </p>
            <div className="pt-4">
              <a 
                href="#contact"
                className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary-dark transition-transform duration-300 transform hover:scale-105 shadow-lg"
              >
                Demander un Devis
              </a>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Table dressée pour un événement au restaurant" 
              className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
