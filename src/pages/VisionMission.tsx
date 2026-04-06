import { motion } from "framer-motion";
import { Eye, Rocket, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import PageBanner from "@/components/PageBanner";
import commercialImg from "@/assets/commercial.jpg";

const goalVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};

const VisionMission = () => {
  return (
    <>
      <PageBanner image={commercialImg} title="Vision &" highlight="Mission" />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -40, rotateY: 5 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="bg-card border border-border rounded-xl p-10 hover:border-primary/40 transition-all duration-500 hover:shadow-gold-lg"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Eye className="w-12 h-12 text-primary mb-6" />
              </motion.div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized as the most trusted and innovative construction company in India, 
                setting new benchmarks for quality, sustainability, and customer satisfaction in every 
                project we undertake.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 40, rotateY: -5 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-card border border-border rounded-xl p-10 hover:border-primary/40 transition-all duration-500 hover:shadow-gold-lg"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <Rocket className="w-12 h-12 text-primary mb-6" />
              </motion.div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional construction services with unwavering commitment to quality, 
                safety, and timely completion. We strive to exceed client expectations by leveraging 
                modern techniques and maintaining transparent business practices.
              </p>
            </motion.div>
          </div>

          {/* Goals */}
          <div className="mt-24 max-w-3xl mx-auto">
            <SectionHeading subtitle="Our Commitment" title="What We Stand For" />
            <div className="space-y-4">
              {[
                "Deliver projects on time with zero compromise on quality",
                "Maintain transparency in every client interaction",
                "Use eco-friendly and sustainable construction practices",
                "Continuously innovate and adopt modern building technologies",
                "Foster long-term relationships built on trust and integrity",
              ].map((goal, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={goalVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ x: 6, backgroundColor: "hsl(220 28% 14%)" }}
                  className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border transition-all duration-300 cursor-default"
                >
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.4 }}>
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  </motion.div>
                  <p className="text-foreground text-sm">{goal}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VisionMission;
