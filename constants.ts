import { MenuCategory } from './types';

export const menuData: MenuCategory[] = [
  {
    title: 'Entrées',
    items: [
      { name: 'Salade du Chef', description: 'Mélange de légumes frais de saison, vinaigrette maison', price: '4500 XOF' },
      { name: 'Carpaccio de Zébu', description: 'Fines tranches de zébu mariné, copeaux de parmesan', price: '6000 XOF' },
      { name: 'Nems au Poulet', description: 'Rouleaux frits croustillants, sauce aigre-douce', price: '4000 XOF' },
      { name: 'Soupe à l\'Oignon Gratinée', description: 'Classique soupe à l\'oignon avec croûtons et fromage', price: '5000 XOF' },
    ],
  },
  {
    title: 'Plats Principaux',
    items: [
      { name: 'Filet de Capitaine Grillé', description: 'Servi avec riz local et sauce vierge', price: '9500 XOF' },
      { name: 'Gigot d\'Agneau Braisé', description: 'Cuit lentement, servi avec purée de patates douces', price: '12000 XOF' },
      { name: 'Tô Végétarien', description: 'Pâte de maïs traditionnelle avec une sauce gombo riche en légumes', price: '7000 XOF' },
    ],
  },
    {
    title: 'Burgers & Frites',
    items: [
      { name: 'Burger Classique du Jardin', description: 'Steak de bœuf, cheddar, salade, tomate, oignons, sauce maison', price: '7500 XOF' },
      { name: 'Burger au Poulet Croustillant', description: 'Filet de poulet pané, salade, mayonnaise épicée', price: '7000 XOF' },
      { name: 'Portion de Frites Maison', description: 'Servies avec une sauce au choix', price: '2500 XOF' },
    ],
  },
  {
    title: 'Desserts',
    items: [
      { name: 'Mousse au Chocolat Noir', description: 'Intense et onctueuse, faite maison', price: '4000 XOF' },
      { name: 'Salade de Fruits Exotiques', description: 'Mangue, papaye, ananas et fruit de la passion', price: '3500 XOF' },
      { name: 'Crème Brûlée à la Vanille de Madagascar', description: 'Dessert classique avec une touche locale', price: '4500 XOF' },
      { name: 'Dèguè', description: 'Yaourt au mil, une douceur locale rafraîchissante', price: '3000 XOF' },
    ],
  },
    {
    title: 'Boissons',
    items: [
      { name: 'Jus de Gingembre (Gnamakoudji)', description: 'Jus de gingembre frais et épicé', price: '1500 XOF' },
      { name: 'Brakina (bière locale)', description: '', price: '2000 XOF' },
      { name: 'Eau Minérale', description: '', price: '1000 XOF' },
    ],
  },
];