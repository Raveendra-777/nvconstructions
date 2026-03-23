import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const documents = [
  {
    title: "Company Profile",
    description: "Complete overview of Nikhil Varma Constructions, our capabilities, and project portfolio.",
    url: "https://drive.google.com/file/d/13bERvOeviFmrDvkR1ZSYh2jLxTrHpFc3/view?usp=drive_link",
  },
  {
    title: "MSME Certificate",
    description: "Our MSME registration certificate validating our status as a recognized enterprise.",
    url: "https://drive.google.com/file/d/1Dq8ft8OkQ1WINlyYJVxkdavla1o0PTyF/view",
  },
  {
    title: "GST Certificate",
    description: "GST registration certificate — GSTIN: 29AARFN8171E1ZQ.",
    url: "https://drive.google.com/file/d/1nkXLiYF4-q0eDSh01Ei7Ef5a82rrSuDv/view",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 5 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Profile = () => {
  return (
    <>
      <section className="py-24 bg-gradient-navy">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4"
          >
            Company <span className="text-gradient-gold">Profile</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our certifications and company documentation
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Documents" title="Our Credentials" />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {documents.map((doc) => (
              <motion.div
                key={doc.title}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/40 transition-all duration-500 flex flex-col items-center text-center hover:shadow-gold-lg"
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FileText className="w-12 h-12 text-primary mb-4" />
                </motion.div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{doc.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 flex-1">{doc.description}</p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <a href={doc.url} target="_blank" rel="noopener noreferrer">
                      View Document <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Profile;
