import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import MissionSection from '../components/MissionSection';
import StoriesSection from '../components/StoriesSection';
import ImpactBanner from '../components/ImpactBanner';
import ActionCards from '../components/ActionCards';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <MissionSection />
      <StoriesSection />
      <ImpactBanner />
      <ActionCards />
      <Footer />
    </div>
  );
};

export default HomePage;