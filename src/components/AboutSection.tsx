import { motion } from "framer-motion";
import { GraduationCap, Calendar, BookOpen, Sparkles } from "lucide-react";

const smooth = [0.22, 1, 0.36, 1] as const;

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: smooth,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.35,
      ease: smooth,
    },
  }),
};

const AboutSection = () => {
  const coursework = [
    "Business Systems Analysis",
    "Statistics",
    "Project Management",
    "Database Management",
    "Advanced Data Analytics",
    "Quantitative Analysis",
    "Risk Management",
    "Operations Management",
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-30"
        style={{
          background: 'radial-gradient(ellipse, hsl(217 91% 60% / 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: smooth }}
          className="mb-16"
        >
          <h2 className="section-label mb-4">Summary</h2>
          <h3 className="section-title">Education & Background</h3>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            variants={cardVariants}
            className="glass-card rounded-3xl p-8 md:p-10 group"
            whileHover={{ y: -6, transition: { type: "spring", stiffness: 250, damping: 25 } }}
          >
            <div className="flex items-start gap-5 mb-8">
              <motion.div
                className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary"
                whileHover={{ scale: 1.08, rotate: 3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <GraduationCap className="w-7 h-7" />
              </motion.div>
              <div>
                <h4 className="text-2xl font-bold mb-2">Bachelor of Commerce</h4>
                <p className="text-primary font-semibold text-lg">Business Technology Management (Honours)</p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary/60" />
                <span className="font-medium">Seneca Polytechnic</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary/60" />
                <span>2022 – 2026</span>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed text-lg">
              Graduating April 2026 with strengths in SQL, Python, Excel, Power BI, and Tableau.
              Experienced in analyzing trends and building dashboards to surface key insights that
              support business decisions. Seeking full-time roles in analytics or consulting focused
              on KPI reporting, data quality, and insight-driven recommendations.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="glass-card rounded-3xl p-8 md:p-10 group"
            whileHover={{ y: -6, transition: { type: "spring", stiffness: 250, damping: 25 } }}
          >
            <div className="flex items-center gap-3 mb-8">
              <motion.div
                whileHover={{ scale: 1.15, rotate: 90 }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
              >
                <Sparkles className="w-5 h-5 text-primary" />
              </motion.div>
              <h4 className="text-2xl font-bold">Relevant Coursework</h4>
            </div>
            <motion.div
              className="flex flex-wrap gap-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {coursework.map((course, index) => (
                <motion.span
                  key={course}
                  custom={index}
                  variants={badgeVariants}
                  className="skill-badge text-base"
                  whileHover={{
                    scale: 1.06,
                    y: -3,
                    transition: { type: "spring", stiffness: 300, damping: 22 }
                  }}
                >
                  {course}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
