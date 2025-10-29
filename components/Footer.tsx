
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Restaurant Jardin du Saveur. Tous droits réservés.</p>
        <p className="text-sm text-slate-400 mt-1">Conçu avec passion à Ouagadougou.</p>
      </div>
    </footer>
  );
};

export default Footer;
