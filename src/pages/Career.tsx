import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import PageBanner from "@/components/PageBanner";
import heroBg from "@/assets/hero-bg.jpg";

const openings = [
  { title: "Site Engineer", location: "Bangalore", type: "Full-time" },
  { title: "Project Manager", location: "Bangalore", type: "Full-time" },
  { title: "Civil Supervisor", location: "Multiple Locations", type: "Full-time" },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const cardVariants = { hidden: { opacity: 0, y: 30, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } } };

const Career = () => {
  return (
    <>
      <PageBanner image={heroBg} title="Join Our" highlight="Team" subtitle="Build your career while building landmarks" />

      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeading subtitle="Opportunities" title="Current Openings" />
          <motion.div
            className="space-y-6"
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
                className="glass-card p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-primary" />{job.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-primary" />{job.type}</span>
                  </div>
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground shrink-0">
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
            className="mt-16 text-center glass-card p-10"
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
