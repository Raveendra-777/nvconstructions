import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Home as HomeIcon, Paintbrush, Shield, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import HeroSlider from "@/components/HeroSlider";
import residentialImg from "@/assets/residential.jpg";
import commercialImg from "@/assets/commercial.jpg";
import renovationImg from "@/assets/renovation.jpg";
import { useRef, useEffect, useState } from "react";

const services = [
  { icon: HomeIcon, title: "Residential Projects", description: "Modern, durable, and beautifully designed homes tailored to your needs.", image: residentialImg },
  { icon: Building2, title: "Commercial Buildings", description: "Strong infrastructure for offices, complexes, and retail spaces.", image: commercialImg },
  { icon: Paintbrush, title: "Renovations", description: "Transforming old spaces into modern and functional designs.", image: renovationImg },
];

const stats = [
  { icon: Shield, value: 26, suffix: "+", label: "Years Experience" },
  { icon: Building2, value: 50, suffix: "+", label: "Projects Completed" },
  { icon: Users, value: 100, suffix: "+", label: "Happy Clients" },
  { icon: Clock, value: 100, suffix: "%", label: "On-Time Delivery" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1500;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <p ref={ref} className="text-3xl font-heading font-bold text-foreground">
      {count}{suffix}
    </p>
  );
};

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const itemVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } } };

const Index = () => {
  return (
    <>
      <HeroSlider />

      {/* Stats */}
      <section className="py-16 glass-subtle border-y border-border/30">
        <div className="container mx-auto px-4">
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={itemVariants} className="text-center group" whileHover={{ scale: 1.05 }}>
                <motion.div whileHover={{ rotate: 10, scale: 1.2 }} transition={{ type: "spring", stiffness: 300 }}>
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                </motion.div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="What We Do" title="Our Services" description="We deliver excellence across residential, commercial, and renovation projects." />
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {services.map((service) => (
              <motion.div key={service.title} variants={itemVariants} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }} className="group glass-card overflow-hidden">
                <div className="h-52 overflow-hidden">
                  <motion.img src={service.image} alt={service.title} className="w-full h-full object-cover" whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }} />
                </div>
                <div className="p-6">
                  <motion.div whileHover={{ rotate: -10 }} transition={{ type: "spring" }}>
                    <service.icon className="w-10 h-10 text-primary mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 glass-subtle border-y border-border/30 relative overflow-hidden">
        <motion.div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 5, repeat: Infinity }} />
        <motion.div className="absolute -bottom-10 -right-10 w-52 h-52 bg-primary/10 rounded-full blur-3xl" animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.2, 0.4] }} transition={{ duration: 6, repeat: Infinity }} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Ready to Build Your <span className="text-gradient-gold">Dream?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">Let's discuss your project. Get a free consultation from our expert team.</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-gold-dark font-semibold px-10">
                <Link to="/contact">Contact Us Today</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
