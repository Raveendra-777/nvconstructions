import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeading = ({ subtitle, title, description, centered = true }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      {subtitle && (
        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">{subtitle}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">{title}</h2>
      {description && (
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{description}</p>
      )}
      <div className="mt-4 mx-auto h-1 w-16 bg-primary rounded-full" />
    </motion.div>
  );
};

export default SectionHeading;
