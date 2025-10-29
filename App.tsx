import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import MenuGallery from './components/MenuGallery';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MenuModal from './components/MenuModal';
import VideoGenerator from './components/VideoGenerator';
import { menuData } from './constants';

const App: React.FC = () => {
  const [isMenuModalOpen, setMenuModalOpen] = useState(false);

  const handleOpenMenuModal = () => setMenuModalOpen(true);
  const handleCloseMenuModal = () => setMenuModalOpen(false);

  return (
    <div className="bg-light text-dark font-sans">
      <Header />
      <main>
        <Hero onSeeMenuClick={handleOpenMenuModal} />
        <About />
        <Menu />
        <MenuGallery />
        <Testimonials />
        <Gallery />
        <Events />
        <VideoGenerator />
        <Contact />
      </main>
      <Footer />
      <MenuModal 
        isOpen={isMenuModalOpen} 
        onClose={handleCloseMenuModal} 
        menu={menuData} 
      />
    </div>
  );
};

export default App;
