import HeroSection from '@/components/landing/HeroSection';
import AboutSection from '@/components/landing/AboutSection';
import ProtocolSection from '@/components/landing/ProtocolSection';
import SparkSection from '@/components/landing/SparkSection';
import OrganizersSection from '@/components/landing/OrganizersSection';
import PartnersSection from '@/components/landing/PartnersSection';
import SupportSection from '@/components/landing/SupportSection';
import SignUpSection from '@/components/landing/SignUpSection';
import Footer from '@/components/landing/Footer';
import PortfolioSection from '@/components/landing/PortfolioSection';
import LocationSection from '@/components/landing/LocationSection';

const Index = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <PartnersSection />
      <AboutSection />
      <ProtocolSection />
      <SparkSection />
      <OrganizersSection />
      <PortfolioSection/>
      <LocationSection/>
      <SupportSection />
      <SignUpSection />
      <Footer />
    </main>
  );
};

export default Index;
 