import { motion } from "framer-motion";

import heroBg from "@/assets/hero-bg.jpg";
import residentialImg from "@/assets/residential.jpg";
import commercialImg from "@/assets/commercial.jpg";
import renovationImg from "@/assets/renovation.jpg";

const images = [
  { src: heroBg, title: "Skyline Project", category: "Commercial" },
  { src: residentialImg, title: "Luxury Residences", category: "Residential" },
  { src: commercialImg, title: "Corporate Tower", category: "Commercial" },
  { src: renovationImg, title: "Interior Renovation", category: "Renovation" },
];

const Gallery = () => {
  return (
    <>
      <section className="py-24 bg-gradient-navy">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4"
          >
            Project <span className="text-gradient-gold">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground"
          >
            A showcase of our finest work
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-xl overflow-hidden border border-border aspect-[4/3]"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                  <span className="text-xs text-primary tracking-widest uppercase mb-1">{img.category}</span>
                  <h3 className="text-xl font-heading font-bold text-foreground">{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
