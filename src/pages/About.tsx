import { motion } from "framer-motion";
import { Award, Target, Handshake, HardHat } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const values = [
  { icon: Award, title: "Quality", description: "We use only the finest materials and techniques to ensure lasting results." },
  { icon: Target, title: "Precision", description: "Every project is executed with meticulous attention to detail." },
  { icon: Handshake, title: "Trust", description: "Transparent communication and honest pricing are our hallmarks." },
  { icon: HardHat, title: "Safety", description: "We maintain the highest safety standards across all our sites." },
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="py-24 bg-gradient-navy">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4"
          >
            About <span className="text-gradient-gold">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Building dreams and creating landmarks since 2020
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeading subtitle="Our Story" title="Who We Are" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-muted-foreground leading-relaxed"
            >
              <p>
                Nikhil Varma Constructions was founded in 2020 with a vision to raise the standards of construction in India. 
                Based in Bangalore, Karnataka, we have quickly established ourselves as a trusted name in the construction industry.
              </p>
              <p>
                Our team of experienced professionals brings dedication, expertise, and innovative thinking to every project. 
                From residential homes to commercial complexes and renovations, we deliver quality construction that stands the test of time.
              </p>
              <p>
                We believe in building not just structures, but relationships. Our commitment to transparency, quality materials, 
                and on-time delivery has earned us the trust of over 100 satisfied clients across multiple cities in Karnataka and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="What Drives Us" title="Our Core Values" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-xl bg-background border border-border hover:border-primary/40 transition-all duration-500"
              >
                <v.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
