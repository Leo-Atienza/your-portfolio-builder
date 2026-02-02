import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, ArrowRight, Phone } from "lucide-react";

const silk = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: silk,
    },
  },
};

const ContactSection = () => {
  const contactLinks = [
    {
      href: "mailto:ericyeefalee@gmail.com",
      icon: Mail,
      label: "Email",
      value: "ericyeefalee@gmail.com",
      isLink: true,
    },
    {
      href: "tel:6472178158",
      icon: Phone,
      label: "Phone",
      value: "(647) 217-8158",
      isLink: true,
    },
    {
      href: "https://www.linkedin.com/in/eric-yf-lee/",
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/eric-yf-lee",
      isLink: true,
      external: true,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Markham, ON, Canada",
      isLink: false,
    },
  ];

  return (
    <section id="contact" className="relative py-20 sm:py-32 bg-gradient-to-b from-secondary/30 to-background">
      {/* Background effects */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at bottom, hsl(217 91% 60% / 0.08), transparent 60%)'
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-30"
        style={{
          background: 'radial-gradient(ellipse, hsl(260 80% 60% / 0.1) 0%, transparent 70%)',
          filter: 'blur(45px)',
        }}
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: silk }}
          className="text-center mb-16"
        >
          <h2 className="section-label mb-4">Contact</h2>
          <h3 className="section-title mb-6">Let's Connect</h3>
          <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
            I'm currently seeking full-time roles in analytics or consulting.
            Feel free to reach out for opportunities or collaborations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, ease: silk }}
          className="max-w-lg mx-auto"
        >
          <motion.div
            className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 space-y-3 sm:space-y-4"
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {contactLinks.map((item) => {
                const content = (
                  <motion.div
                    variants={cardVariants}
                    className="contact-card group"
                    whileHover={{
                      x: 4,
                      transition: { duration: 0.35, ease: silk }
                    }}
                  >
                    <motion.div
                      className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 text-primary group-hover:from-primary group-hover:to-primary group-hover:text-primary-foreground transition-all duration-500"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <item.icon className="w-5 h-5" />
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground font-medium">{item.label}</p>
                      <p className="font-semibold text-sm sm:text-base break-all sm:break-normal">{item.value}</p>
                    </div>
                    {item.isLink && (
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    )}
                  </motion.div>
                );

                if (item.isLink) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                    >
                      {content}
                    </a>
                  );
                }

                return <div key={item.label}>{content}</div>;
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
