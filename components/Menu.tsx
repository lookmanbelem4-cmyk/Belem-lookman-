import React from 'react';
import { menuData } from '../constants';
import SectionTitle from './SectionTitle';
import MenuItem from './MenuItem';

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-12 sm:py-16 md:py-20 bg-light">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle title="Notre Menu" subtitle="Un voyage de saveurs" />
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mt-12">
          {menuData.map((category) => (
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
    </section>
  );
};

export default Menu;