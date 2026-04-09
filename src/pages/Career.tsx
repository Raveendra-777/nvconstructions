import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, HardHat, Users, Shield, TrendingUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import PageBanner from "@/components/PageBanner";
import heroBg from "@/assets/hero-bg.jpg";

const openings = [
  { title: "Site Engineer", location: "Bangalore", type: "Full-time", description: "Oversee on-site construction activities, ensure quality standards, and coordinate with the project team." },
  { title: "Project Manager", location: "Bangalore", type: "Full-time", description: "Lead and manage construction projects from planning to completion, ensuring timely delivery within budget." },
  { title: "Civil Supervisor", location: "Multiple Locations", type: "Full-time", description: "Supervise daily construction work, manage labor, and ensure adherence to safety and quality guidelines." },
  { title: "Structural Engineer", location: "Bangalore", type: "Full-time", description: "Design and analyze structural systems for residential and commercial projects ensuring safety and compliance." },
  { title: "Quantity Surveyor", location: "Bangalore", type: "Full-time", description: "Prepare cost estimates, manage budgets, and handle procurement of materials for ongoing projects." },
  { title: "Safety Officer", location: "Multiple Locations", type: "Full-time", description: "Implement and monitor safety protocols on construction sites to ensure a hazard-free work environment." },
  { title: "AutoCAD / Revit Draftsman", location: "Bangalore", type: "Full-time", description: "Create detailed construction drawings and 3D models using AutoCAD and Revit for project execution." },
  { title: "Mason / Skilled Labor", location: "Multiple Locations", type: "Contract", description: "Execute masonry, plastering, and finishing works with precision and craftsmanship on various project sites." },
];

const benefits = [
  { icon: TrendingUp, title: "Career Growth", description: "Clear advancement paths with on-the-job training and mentorship programs." },
  { icon: Shield, title: "Job Security", description: "Stable employment with a growing company and consistent project pipeline." },
  { icon: Heart, title: "Health & Safety", description: "Comprehensive safety training, insurance, and well-being support for all team members." },
  { icon: Users, title: "Team Culture", description: "Collaborative and respectful work environment where every contribution is valued." },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = { hidden: { opacity: 0, y: 30, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } } };

const Career = () => {
  return (
    <>
      <PageBanner image={heroBg} title="Join Our" highlight="Team" subtitle="Build your career while building landmarks" />

      {/* Life at NVC */}
      <section className="py-20 glass-subtle border-b border-border/30">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Life at NVC" title="Why Work With Us" />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((b) => (
              <motion.div
                key={b.title}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.03 }}
                className="glass-card p-6 text-center"
              >
                <b.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="text-base font-heading font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Work Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Our Workplace" title="Life on the Field" />
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { src: "https://raveendra-777.github.io/nikhil-Varma-construction/SR.webp", alt: "Structure Repair Work" },
              { src: "https://raveendra-777.github.io/nikhil-Varma-construction/WP.jpg", alt: "Waterproofing Work" },
              { src: "https://raveendra-777.github.io/nikhil-Varma-construction/msw.jpg", alt: "MS Structural Works" },
              { src: "https://raveendra-777.github.io/nikhil-Varma-construction/stp.jpg", alt: "STP Works" },
              { src: "https://raveendra-777.github.io/nikhil-Varma-construction/ff.jpg", alt: "Concrete Flooring" },
              { src: "https://raveendra-777.github.io/nikhil-Varma-construction/Rcc.jpg", alt: "RCC Compound Walls" },
              { src: "https://raveendra-777.github.io/nikhil-Varma-construction/11.jpg", alt: "Construction Site" },
              { src: "https://raveendra-777.github.io/nikhil-Varma-construction/f.jpg", alt: "Company Growth" },
            ].map((img, i) => (
              <motion.div
                key={img.alt}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                className="glass-card overflow-hidden aspect-square"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Openings */}
      <section className="py-20 glass-subtle border-y border-border/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading subtitle="Opportunities" title="Current Openings" />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {openings.map((job) => (
              <motion.div
                key={job.title}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                className="glass-card p-6 flex flex-col justify-between gap-4"
              >
                <div>
                  <div className="flex items-start gap-3 mb-3">
                    <HardHat className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <h3 className="text-lg font-heading font-semibold text-foreground">{job.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{job.description}</p>
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1 glass px-2 py-1 rounded-full"><MapPin className="w-3 h-3 text-primary" />{job.location}</span>
                    <span className="flex items-center gap-1 glass px-2 py-1 rounded-full"><Clock className="w-3 h-3 text-primary" />{job.type}</span>
                  </div>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full">
                    <a href={`mailto:nikhilvarmaconstructions09@gmail.com?subject=Application for ${job.title}`}>
                      Apply Now
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center glass-card p-10"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Briefcase className="w-10 h-10 text-primary mx-auto mb-4" />
            </motion.div>
            <h3 className="text-xl font-heading font-semibold text-foreground mb-2">Don't see your role?</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Send us your resume and we'll keep you in mind for future openings.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-gold-dark">
                <a href="mailto:nikhilvarmaconstructions09@gmail.com?subject=General Application">
                  Send Your Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Career;
