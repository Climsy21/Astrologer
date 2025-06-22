import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NewsSection from './components/NewsSection';
import TrustedBySection from './components/TrustedBySection';
import ParallaxGallery from './components/ParallaxGallery';
import ScrollingText from './components/ScrollingText';
import AboutSection from './components/AboutSection';
import PricingSection from './components/PricingSection';
import StatsSection from './components/StatsSection';
import ConnectSection from './components/ConnectSection';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import CosmicBackground from './components/CosmicBackground';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <CosmicBackground />
      <Header />
      <main>
        <Hero />
        <NewsSection />
        <ParallaxGallery />
        <ScrollingText />
        <AboutSection />
        <TrustedBySection />
        <PricingSection />
        <StatsSection />
        <CTASection />
        <FAQSection />
        <ConnectSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;