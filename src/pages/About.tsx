import { motion } from "framer-motion";
import { Award, Target, Handshake, HardHat } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { icon: Award, title: "Quality", description: "We use only the finest materials and techniques to ensure lasting results." },
  { icon: Target, title: "Precision", description: "Every project is executed with meticulous attention to detail." },
  { icon: Handshake, title: "Trust", description: "Transparent communication and honest pricing are our hallmarks." },
  { icon: HardHat, title: "Safety", description: "We maintain the highest safety standards across all our sites." },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const textRevealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-gradient-navy relative overflow-hidden">
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 border border-primary/10 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4"
          >
            About <span className="text-gradient-gold">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Building dreams and creating landmarks since 2020
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-4 mx-auto h-1 w-16 bg-primary rounded-full origin-center"
          />
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeading subtitle="Our Story" title="Who We Are" />
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              {[
                "Nikhil Varma Constructions was founded in 2020 with a vision to raise the standards of construction in India. Based in Bangalore, Karnataka, we have quickly established ourselves as a trusted name in the construction industry.",
                "Our team of experienced professionals brings dedication, expertise, and innovative thinking to every project. From residential homes to commercial complexes and renovations, we deliver quality construction that stands the test of time.",
                "We believe in building not just structures, but relationships. Our commitment to transparency, quality materials, and on-time delivery has earned us the trust of over 100 satisfied clients across multiple cities in Karnataka and beyond.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  custom={i}
                  variants={textRevealVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="What Drives Us" title="Our Core Values" />
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={cardVariants}
                whileHover={{ y: -8, borderColor: "hsl(42 55% 55% / 0.4)" }}
                className="text-center p-8 rounded-xl bg-background border border-border transition-all duration-500"
              >
                <motion.div
                  whileHover={{ rotate: -15, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <v.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                </motion.div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
