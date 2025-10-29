import React from 'react';
import SectionTitle from './SectionTitle';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-light">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle title="Contactez-nous" subtitle="Réservez votre table" />
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-primary">Nos Coordonnées</h3>
            <div className="space-y-4 text-sm sm:text-base text-slate-600">
              <p className="flex items-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>Ouaga 2000, Ouagadougou, Burkina Faso</span>
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <a href="tel:+22668141414" className="hover:text-primary break-all">+226 68 14 14 14</a>
              </p>
              <p className="flex items-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-secondary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:reservation@jardindusaveur.bf" className="hover:text-primary break-all">reservation@jardindusaveur.bf</a>
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
             <h3 className="text-2xl font-bold mb-6 text-primary">Heures d'Ouverture</h3>
             <div className="space-y-2 text-sm sm:text-base text-slate-600">
               <div className="flex justify-between gap-2 sm:gap-4">
                 <span>Lundi - Vendredi</span>
                 <span className="font-semibold text-right">12h00 - 15h00, 19h00 - 23h00</span>
               </div>
               <div className="flex justify-between gap-2 sm:gap-4">
                 <span>Samedi</span>
                 <span className="font-semibold text-right">12h00 - 23h30</span>
               </div>
                <div className="flex justify-between gap-2 sm:gap-4">
                 <span>Dimanche</span>
                 <span className="font-semibold text-right">Fermé</span>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;