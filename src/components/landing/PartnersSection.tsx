import { useScrollReveal } from '@/hooks/useScrollReveal';

const partners = [
  { name: "Apex Capital", initials: "AC" },
  { name: "Meridian Group", initials: "MG" },
  { name: "Vertex Industries", initials: "VI" },
  { name: "Sterling & Co", initials: "S&C" },
  { name: "Nova Partners", initials: "NP" },
  { name: "Pinnacle Holdings", initials: "PH" },
];

const PartnersSection = () => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section className="relative py-32 md:py-40 bg-background">
      <div className="section-container">
        <div ref={ref} className="text-center">
          {/* Section Label */}
          <p className={`text-xs tracking-ultra uppercase text-gold mb-6 reveal ${isVisible ? 'visible' : ''}`}>
            The Collective
          </p>

          {/* Headline */}
          <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-medium text-cream mb-6 reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}>
            The Ecosystem
          </h2>

          {/* Supporting copy */}
          <p className={`font-display text-xl md:text-2xl text-cream-muted max-w-3xl mx-auto mb-16 reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
            Growth is internal. Growth is external.
            <br />
            <span className="text-cream">Alone you arrive — together you build a journey.</span>
          </p>

          {/* Partner logos grid */}
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 reveal reveal-delay-3 ${isVisible ? 'visible' : ''}`}>
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-8 border border-border bg-card hover:border-gold/30 transition-all duration-500 group"
              >
                <div className="text-center">
                  <span className="font-display text-2xl text-muted-foreground group-hover:text-gold transition-colors duration-500">
                    {partner.initials}
                  </span>
                  <p className="text-xs text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {partner.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
