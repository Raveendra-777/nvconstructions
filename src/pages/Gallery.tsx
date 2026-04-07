import { motion } from "framer-motion";
import PageBanner from "@/components/PageBanner";
import heroBg from "@/assets/hero-bg.jpg";
import residentialImg from "@/assets/residential.jpg";
import commercialImg from "@/assets/commercial.jpg";
import renovationImg from "@/assets/renovation.jpg";
import slider1 from "@/assets/slider-1.jpg";
import slider2 from "@/assets/slider-2.jpg";
import slider3 from "@/assets/slider-3.jpg";

const images = [
  { src: heroBg, title: "Skyline Project", category: "Commercial" },
  { src: residentialImg, title: "Luxury Residences", category: "Residential" },
  { src: commercialImg, title: "Corporate Tower", category: "Commercial" },
  { src: renovationImg, title: "Interior Renovation", category: "Renovation" },
  { src: slider1, title: "Modern Infrastructure", category: "Commercial" },
  { src: slider2, title: "Villa Project", category: "Residential" },
  { src: slider3, title: "Office Complex", category: "Commercial" },
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
      <PageBanner image={heroBg} title="Project" highlight="Gallery" subtitle="A showcase of our finest work" />

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
                className="group relative glass-card overflow-hidden aspect-[4/3] cursor-pointer p-0"
              >
                <motion.img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover rounded-xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.7 }}
                />
                <motion.div
                  className="absolute inset-0 glass rounded-xl flex flex-col items-center justify-center"
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
