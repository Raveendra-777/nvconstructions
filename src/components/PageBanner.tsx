import { motion } from "framer-motion";

interface PageBannerProps {
  image: string;
  title: string;
  highlight: string;
  subtitle?: string;
}

const PageBanner = ({ image, title, highlight, subtitle }: PageBannerProps) => (
  <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
    </div>
    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="inline-block glass px-10 py-6 rounded-2xl"
      >
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2 text-foreground">
          {title} <span className="text-gradient-gold">{highlight}</span>
        </h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-4 mx-auto h-1 w-16 bg-primary rounded-full origin-center"
      />
    </div>
  </section>
);

export default PageBanner;
