import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import MissionSection from '../components/MissionSection';
import ActionCards from '../components/ActionCards';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <MissionSection />
      <ActionCards />
      <Footer />
    </div>
  );
};

export default HomePage;