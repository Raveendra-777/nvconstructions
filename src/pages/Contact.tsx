import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import PageBanner from "@/components/PageBanner";
import contactHero from "@/assets/contact-hero.jpg";

const locations = ["Bangalore", "Mysore", "Hubli", "Davangere", "Shimogga", "Udupi", "Mangalore", "Bagalkote", "Chennai", "Other Cities"];

const contactItems = [
  { icon: Phone, label: "Phone", value: "+91 9844052227", href: "tel:+919844052227" },
  { icon: Mail, label: "Email", value: "nikhilvarmaconstructions09@gmail.com", href: "mailto:nikhilvarmaconstructions09@gmail.com" },
  { icon: MapPin, label: "Location", value: "Bangalore, Karnataka, India" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://api.whatsapp.com/send/?phone=9844052227&text&type=phone_number&app_absent=0", external: true },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.4 } } };

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", location: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const mailtoLink = `mailto:nikhilvarmaconstructions09@gmail.com?subject=${encodeURIComponent(formData.subject || "Website Inquiry")}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nLocation: ${formData.location}\n\n${formData.message}`)}`;
      const tempLink = document.createElement("a");
      tempLink.href = mailtoLink;
      tempLink.target = "_blank";
      tempLink.rel = "noopener noreferrer";
      tempLink.style.display = "none";
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
      toast({ title: "Email draft opened", description: "Please press Send in your mail app." });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({ title: "Error", description: "Could not open your mail app. Please try again." });
    }
  };

  return (
    <>
      <PageBanner image={contactHero} title="Contact" highlight="Us" subtitle="Have a project in mind? Let's talk" />

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have a project in mind? We'd love to hear from you. Reach out and let's start building together.
              </p>

              <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {contactItems.map((item) => {
                  const Wrapper = item.href ? "a" : "div";
                  const wrapperProps = item.href
                    ? {
                        href: item.href,
                        ...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {}),
                      }
                    : {};
                  return (
                    <motion.div key={item.label} variants={itemVariants}>
                      <Wrapper {...(wrapperProps as any)} className="flex items-center gap-4 group">
                        <motion.div
                          className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <item.icon className="w-5 h-5 text-primary" />
                        </motion.div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="text-foreground font-medium text-sm">{item.value}</p>
                        </div>
                      </Wrapper>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <motion.form
                onSubmit={handleSubmit}
                className="bg-card border border-border rounded-xl p-8 space-y-5"
                whileHover={{ borderColor: "hsl(42 55% 55% / 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <Input placeholder="Your Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-secondary border-border focus:border-primary" />
                <Input type="email" placeholder="Email Address" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-secondary border-border focus:border-primary" />
                <Input type="tel" placeholder="Phone Number" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="bg-secondary border-border focus:border-primary" />
                <Select onValueChange={(val) => setFormData({ ...formData, location: val })}>
                  <SelectTrigger className="bg-secondary border-border"><SelectValue placeholder="Select Location" /></SelectTrigger>
                  <SelectContent>{locations.map((loc) => (<SelectItem key={loc} value={loc}>{loc}</SelectItem>))}</SelectContent>
                </Select>
                <Input placeholder="Subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="bg-secondary border-border focus:border-primary" />
                <Textarea placeholder="Your Message" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="bg-secondary border-border focus:border-primary" />
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-gold-dark font-semibold">
                    Send Message
                  </Button>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
