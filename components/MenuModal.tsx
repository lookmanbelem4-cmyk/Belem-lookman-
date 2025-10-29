import React from 'react';
import { MenuCategory } from '../types';
import MenuItem from './MenuItem';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  menu: MenuCategory[];
}

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose, menu }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col transform transition-transform duration-300 scale-95"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
        style={isOpen ? { transform: 'scale(1)', opacity: 1 } : {}}
      >
        <div className="p-4 sm:p-6 border-b flex justify-between items-center flex-shrink-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif text-primary">Notre Menu Complet</h2>
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-dark transition-colors"
            aria-label="Fermer le menu"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto">
           <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {menu.map((category) => (
              <div key={category.title}>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-primary border-b-2 border-secondary pb-2 mb-4">
                  {category.title}
                </h3>
                <div className="divide-y divide-slate-200">
                  {category.items.map((item) => (
                    <MenuItem key={item.name} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;