import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  "Sequoia Capital",
  "Andreessen Horowitz",
  "Accel Partners",
  "Benchmark",
  "Index Ventures",
  "Lightspeed",
  "General Catalyst",
  "Founders Fund",
  "Greylock",
  "NEA",
  "Bessemer",
  "Tiger Global",
];

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="network" className="py-24 bg-background overflow-hidden" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-8"
      >
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
          Our Network
        </p>
        <h2 className="headline-md text-foreground">
          Trusted by industry leaders
        </h2>
      </motion.div>

      {/* Infinite Slider */}
      <div className="pause-on-hover">
        <div className="slider-track flex gap-16 w-max">
          {/* First set of partners */}
          {partners.map((partner, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center justify-center px-8 py-4"
            >
              <span className="font-display text-xl md:text-2xl font-semibold text-muted-foreground/50 hover:text-foreground transition-colors duration-300 whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
          {/* Duplicate for infinite loop */}
          {partners.map((partner, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center justify-center px-8 py-4"
            >
              <span className="font-display text-xl md:text-2xl font-semibold text-muted-foreground/50 hover:text-foreground transition-colors duration-300 whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Border */}
      <div className="mt-16 mx-8 md:mx-16 border-b border-border" />
    </section>
  );
};

export default PartnersSection;
