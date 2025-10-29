import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#accueil', text: 'Accueil' },
    { href: '#a-propos', text: 'À Propos' },
    { href: '#menu', text: 'Menu' },
    { href: '#menu-photos', text: 'Nos Plats' },
    { href: '#temoignages', text: 'Avis' },
    { href: '#galerie', text: 'Ambiance' },
    { href: '#evenements', text: 'Événements' },
    { href: '#video', text: 'Créer Vidéo' },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <header className="bg-dark/80 backdrop-blur-md text-light p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#accueil" className="text-xl md:text-2xl font-bold text-secondary font-serif tracking-wider">
          Jardin du Saveur
        </a>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-secondary transition-colors duration-300">
              {link.text}
            </a>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="px-4 py-2 hover:bg-primary-dark rounded transition-colors duration-300">
                {link.text}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
