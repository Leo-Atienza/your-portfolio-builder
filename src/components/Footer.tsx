import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Eric Lee. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground inline-flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> for data & analytics
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
