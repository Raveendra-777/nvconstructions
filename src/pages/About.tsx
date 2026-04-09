import { motion } from "framer-motion";
import { Award, Target, Handshake, HardHat } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PageBanner from "@/components/PageBanner";
import aboutHero from "@/assets/about-hero.jpg";
import founder from "@/assets/Praveen.webp";


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
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
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
      <PageBanner image={aboutHero} title="About" highlight="Us" subtitle="Building dreams and creating landmarks since 2020" />

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
              <SectionHeading subtitle="Overview" title="Founder" />
              <SectionHeading subtitle="– Founder & CEO" title="Mr.Praveen Kumar T.C" style={{textAlign:"left"}} />
              {[
                "Founded under the leadership of Praveen Kumar, the company has grown steadily by emphasizing quality workmanship, transparency, and timely project completion. With a team of around 10–25 employees, the firm handles a wide range of civil engineering and construction projects.",
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
              <div className="flex flex-col md:flex-row gap-8 items-center">
  <img 
    src={founderImg} 
    alt="Mr. Praveen Kumar" 
    className="w-64 h-64 object-cover rounded-2xl"
  />

  <p className="text-muted-foreground">
    Founded under the leadership of Praveen Kumar...
  </p>
</div>
              
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 glass-subtle border-y border-border/30">
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
                className="text-center p-8 glass-card"
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
