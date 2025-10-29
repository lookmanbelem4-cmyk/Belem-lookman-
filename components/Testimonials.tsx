import React from 'react';
import SectionTitle from './SectionTitle';

const testimonials = [
  {
    quote: "Une explosion de saveurs ! Le Filet de Capitaine Grillé est le meilleur que j'ai jamais mangé. Service impeccable et ambiance chaleureuse.",
    author: 'Marie C.',
    stars: 5,
  },
  {
    quote: "Cadre magnifique et plats raffinés. Le Carpaccio de Zébu est une pure merveille. Parfait pour un dîner romantique.",
    author: 'Jean-Philippe D.',
    stars: 5,
  },
  {
    quote: "Enfin un restaurant qui sublime la cuisine locale avec une touche de modernité. Le Dèguè en dessert est une belle découverte. Je reviendrai !",
    author: 'Aïssatou B.',
    stars: 4,
  },
];

const StarIcon: React.FC<{ filled: boolean }> = ({ filled }) => (
  <svg className={`w-5 h-5 ${filled ? 'text-secondary' : 'text-slate-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Testimonials: React.FC = () => {
  return (
    <section id="temoignages" className="py-12 sm:py-16 md:py-20 bg-light">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle title="Avis de nos Clients" subtitle="Ce qu'ils pensent de nous" />
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
              <svg className="w-12 h-12 mx-auto mb-4 text-primary opacity-20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.333 22.583c0-2.021.781-3.844 2.083-5.146s3.125-2.083 5.146-2.083c1.25 0 2.417.302 3.5.917.917.625 1.656 1.448 2.219 2.479-1.313 1.969-3.26 3.448-5.833 4.438-2.583.989-5.281.917-8.125-.219zM21.333 22.583c0-2.021.781-3.844 2.083-5.146s3.125-2.083 5.146-2.083c1.25 0 2.417.302 3.5.917.917.625 1.656 1.448 2.219 2.479-1.313 1.969-3.26 3.448-5.833 4.438-2.583.989-5.281.917-8.125-.219z" transform="translate(-8 -4)"></path>
              </svg>
              <p className="text-slate-600 italic mb-6">"{testimonial.quote}"</p>
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} filled={i < testimonial.stars} />
                ))}
              </div>
              <p className="font-bold text-primary font-serif">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;