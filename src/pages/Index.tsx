import HeroSection from '@/components/landing/HeroSection';
import AboutSection from '@/components/landing/AboutSection';
import NoBusinessCardsSection from '@/components/landing/NoBusinessCardsSection';
import SparkSection from '@/components/landing/SparkSection';
import OrganizersSection from '@/components/landing/OrganizersSection';
import PartnersSection from '@/components/landing/PartnersSection';
import SupportSection from '@/components/landing/SupportSection';
import SignUpSection from '@/components/landing/SignUpSection';
import Footer from '@/components/landing/Footer';
import RuleSection from '@/components/landing/RuleSection';

const Index = () => {
  return (
    <main className="bg-background">
      <HeroSection />
      <AboutSection />
      <NoBusinessCardsSection />
      <RuleSection />
      <SparkSection />
      <OrganizersSection />
      <PartnersSection />
      <SupportSection />
      <SignUpSection />
      <Footer />
    </main>
  );
};

export default Index;
