import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import MissionSection from '../components/MissionSection';
import ImpactSection from '../components/ImpactSection';
import GlobalReach from '../components/GlobalReach';
import MinistryHighlights from '../components/MinistryHighlights';
import FeaturedMinistries from '../components/FeaturedMinistries';
import TestimonialSection from '../components/TestimonialSection';
import LatestUpdates from '../components/LatestUpdates';
import ActionCards from '../components/ActionCards';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <MissionSection />
      <ImpactSection />
      <GlobalReach />
      <MinistryHighlights />
      <FeaturedMinistries />
      <TestimonialSection />
      <LatestUpdates />
      <ActionCards />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default HomePage;