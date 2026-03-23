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

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.85, rotate: -2 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

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
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {images.map((img, i) => (
              <motion.div
                key={i}
                variants={imageVariants}
                whileHover={{ scale: 1.03, rotate: 0.5 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="group relative rounded-xl overflow-hidden border border-border aspect-[4/3] cursor-pointer"
              >
                <motion.img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                <motion.div
                  className="absolute inset-0 bg-background/70 flex flex-col items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span
                    className="text-xs text-primary tracking-widest uppercase mb-1"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    {img.category}
                  </motion.span>
                  <motion.h3
                    className="text-xl font-heading font-bold text-foreground"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    {img.title}
                  </motion.h3>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
