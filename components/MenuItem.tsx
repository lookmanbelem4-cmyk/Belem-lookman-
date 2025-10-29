import React from 'react';
import { MenuItem as MenuItemType } from '../types';

const MenuItem: React.FC<{ item: MenuItemType }> = ({ item }) => (
  <div className="py-4">
    <div className="flex justify-between items-baseline gap-2 sm:gap-4">
      <h4 className="text-base sm:text-lg font-semibold text-dark">{item.name}</h4>
      <p className="text-base sm:text-lg font-bold text-primary flex-shrink-0">{item.price}</p>
    </div>
    {item.description && <p className="text-sm text-slate-500 mt-1">{item.description}</p>}
  </div>
);

export default MenuItem;