import { motion } from "framer-motion";
import { FileText, ExternalLink, Handshake, Globe, Users, Building2, Droplets, Wrench, Factory, HardHat, Layers, Home, Eye, Target, Heart, Shield, Clock, Lightbulb, MessageSquare, ClipboardList, Settings, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import PageBanner from "@/components/PageBanner";

const documents = [
  {
    title: "Company Profile",
    description: "Complete overview of Nikhil Varma Constructions, our capabilities, and project portfolio.",
    url: "https://drive.google.com/file/d/1E5rs-hVSpgkK1B9q0iczhYkfPW5_MGbm/view?usp=sharing",
  },
  {
    title: "MSME Certificate",
    description: "Our MSME registration certificate validating our status as a recognized enterprise.",
    url: "https://drive.google.com/file/d/1RZlpiRYGp72c6wkhGuiawlaOh5m3BqwY/view?usp=drive_link",
  },
  {
    title: "GST Certificate",
    description: "GST registration certificate — GSTIN: 29AARFN8171E1ZQ.",
    url: "https://drive.google.com/file/d/1NAchpYdAT1qDuiq-QfL38cuvjFDJF4Su/view?usp=drive_link",
  },
];

const services = [
  {
    icon: Building2,
    title: "Civil Construction & Development",
    description: "From site preparation to structural execution, we handle every aspect with precision, quality, and safety in mind. Our team ensures that each structure is built to last.",
    image: "https://raveendra-777.github.io/nikhil-Varma-construction/Rcc.jpg",
  },
  {
    icon: Layers,
    title: "RCC Precast Compound Walls",
    description: "Durable and cost-effective walls with quick installation & long-lasting performance. Designed for strength, security & stability for residential, commercial, and industrial properties.",
    image: "https://raveendra-777.github.io/nikhil-Varma-construction/Rcc.jpg",
  },
  {
    icon: Wrench,
    title: "Structure Repairs",
    description: "Reliable solutions to restore the integrity and safety of damaged or aging buildings. We address cracks, deterioration, and structural weaknesses to extend building life.",
    image: "https://raveendra-777.github.io/nikhil-Varma-construction/SR.webp",
  },
  {
    icon: Droplets,
    title: "Waterproofing",
    description: "High-quality waterproofing solutions for roofs, basements, walls, and terraces—enhancing the durability and safety of every building against water damage and leakage.",
    image: "https://raveendra-777.github.io/nikhil-Varma-construction/WP.jpg",
  },
  {
    icon: Factory,
    title: "MS Structural Works",
    description: "Precise and robust Mild Steel structural works including frames, trusses, platforms, and support structures with strength, stability, and seamless integration.",
    image: "https://raveendra-777.github.io/nikhil-Varma-construction/msw.jpg",
  },
  {
    icon: Settings,
    title: "STP Works",
    description: "Complete Sewage Treatment Plant works including earthwork, structural construction, and installation support meeting environmental standards.",
    image: "https://raveendra-777.github.io/nikhil-Varma-construction/stp.jpg",
  },
  {
    icon: HardHat,
    title: "Concrete Flooring & Finishing",
    description: "High-quality concrete flooring with smooth and durable finishing, including precise leveling, IPS and floater finishes for industrial and residential applications.",
    image: "https://raveendra-777.github.io/nikhil-Varma-construction/ff.jpg",
  },
  {
    icon: Home,
    title: "Villa & Commercial Construction",
    description: "Premium villas and commercial spaces with a focus on quality, functionality, and aesthetic appeal. Structurally sound, well-designed buildings from concept to completion.",
  },
];

const stats = [
  { icon: Handshake, value: "25+", label: "Years Experience" },
  { icon: Globe, value: "40+", label: "Locations Across City" },
  { icon: Building2, value: "30+", label: "Projects Delivered" },
  { icon: Users, value: "50+", label: "Happy Clients" },
];

const values = [
  { icon: Shield, label: "Quality First" },
  { icon: Heart, label: "Integrity" },
  { icon: Clock, label: "Timely Delivery" },
  { icon: Users, label: "Customer Focus" },
  { icon: Lightbulb, label: "Innovation" },
  { icon: HardHat, label: "Safety" },
];

const process_steps = [
  { icon: MessageSquare, title: "Client Consultation", description: "Detailed client consultation and site inspection to assess requirements, expectations, and project feasibility." },
  { icon: ClipboardList, title: "Planning & Estimation", description: "Clear quotation, timeline, and project plan tailored to your budget and goals based on the site study." },
  { icon: Settings, title: "Execution & Monitoring", description: "Skilled team carries out construction with precision, while supervision ensures quality and safety at every stage." },
  { icon: CheckCircle, title: "Handover & Support", description: "Thorough quality checks before timely handover, along with post-completion maintenance guidance." },
];

const financials = [
  { year: "2021-2022", turnover: "₹43,26,679" },
  { year: "2022-2023", turnover: "₹84,50,440" },
  { year: "2023-2024", turnover: "₹1,59,38,663" },
  { year: "2024-2025", turnover: "₹1,50,00,000" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Profile = () => {
  return (
    <>
      <PageBanner
        title="Company Profile"
        subtitle="Defining Construction Excellence Since 2020"
        backgroundImage="https://raveendra-777.github.io/nikhil-Varma-construction/11.jpg"
      />

      {/* About Section */}
      <section className="py-20 glass-subtle border-b border-border/30">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Who We Are" title="Defining Construction Excellence" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto glass-card p-8 md:p-12"
          >
            <p className="text-muted-foreground leading-relaxed text-lg">
              Established in 2020, <strong className="text-foreground">Nikhil Varma Constructions</strong> is a Bangalore-based firm driven by a passion for building strong, lasting structures with integrity and precision. We are committed to delivering <strong className="text-foreground">Quality construction</strong> solutions that reflect our core values of <strong className="text-primary">Trust, Transparency & Time Bound.</strong> With a focus on technical accuracy, timely execution, and customer satisfaction, we approach every project as an opportunity to create something meaningful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="What We Do" title="Our Services" />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass-card overflow-hidden group"
              >
                {service.image && (
                  <div className="h-40 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <service.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="text-base font-heading font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 glass-subtle border-y border-border/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 text-center"
              >
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <motion.h3
                  className="text-3xl font-heading font-bold text-foreground"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8"
            >
              <Eye className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be recognized as a trusted and innovative construction company known for delivering quality projects that stand the test of time.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8"
            >
              <Target className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To consistently deliver reliable, safe, and high-standard construction solutions while building long-term relationships through integrity and excellence.
              </p>
            </motion.div>
          </div>

          <SectionHeading subtitle="What Drives Us" title="Our Values" />
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((v) => (
              <motion.div
                key={v.label}
                variants={cardVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                className="glass-card p-4 text-center"
              >
                <v.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">{v.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 glass-subtle border-y border-border/30">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="How We Work" title="Our Process" />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {process_steps.map((step, i) => (
              <motion.div
                key={step.title}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="glass-card p-6 text-center relative"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <step.icon className="w-10 h-10 text-primary mx-auto mb-3 mt-4" />
                <h3 className="text-base font-heading font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Financials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading subtitle="Growth" title="Business Turnover" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto glass-card overflow-hidden"
          >
            <table className="w-full">
              <thead>
                <tr className="bg-primary/10">
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Sl No.</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Financial Year</th>
                  <th className="text-right p-4 text-sm font-semibold text-foreground">Turnover</th>
                </tr>
              </thead>
              <tbody>
                {financials.map((row, i) => (
                  <motion.tr
                    key={row.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="border-t border-border/30 hover:bg-primary/5 transition-colors"
                  >
                    <td className="p-4 text-sm text-muted-foreground">{i + 1}</td>
                    <td className="p-4 text-sm text-foreground font-medium">{row.year}</td>
                    <td className="p-4 text-sm text-primary font-semibold text-right">{row.turnover}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20 glass-subtle border-t border-border/30">
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
                className="glass-card p-8 flex flex-col items-center text-center"
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

      {/* Customer Quote */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto glass-gold p-10 text-center"
          >
            <p className="text-xl md:text-2xl font-heading font-semibold text-foreground italic">
              "Customer satisfaction is our main concern — we work hard every day to preserve the trust of our customers."
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Profile;
