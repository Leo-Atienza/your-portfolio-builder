import { motion } from "framer-motion";
import { Database, BarChart3, Wrench, Users, FileText } from "lucide-react";

const smooth = [0.22, 1, 0.36, 1] as const;

const skillCategories = [
  {
    icon: Database,
    title: "Data Analysis",
    skills: ["Data Cleaning", "Data Validation", "SQL Querying", "KPI Tracking", "Trend Analysis", "ETL Process", "Data Profiling"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Business Analysis",
    skills: ["Process Mapping", "User Stories", "Gap Analysis", "Requirements Gathering", "Workflow Optimization", "Agile"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    skills: ["SQL", "Python", "Power BI", "Tableau", "Excel", "VBA", "Power Query", "Jira", "Confluence"],
    gradient: "from-orange-500 to-amber-500",
  },
  {
    icon: FileText,
    title: "Reporting",
    skills: ["Data Visualization", "Interactive Dashboards", "KPI Tracking", "Executive Summaries", "Storytelling"],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Analytical Thinking", "Problem Solving", "Communication", "Stakeholder Management", "Collaboration"],
    gradient: "from-rose-500 to-red-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
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
      duration: 0.5,
      ease: smooth,
    },
  },
};

const skillBadgeVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.03,
      duration: 0.3,
      ease: smooth,
    },
  }),
};

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-32 bg-gradient-to-b from-secondary/30 to-transparent">
      {/* Background effect */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(217 91% 60% / 0.05), transparent 70%)'
        }}
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: smooth }}
          className="text-center mb-16"
        >
          <h2 className="section-label mb-4">Skills</h2>
          <h3 className="section-title">Technical & Professional Expertise</h3>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="glass-card rounded-3xl p-7 group"
              whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 250, damping: 25 }
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className={`p-3 rounded-2xl bg-gradient-to-br ${category.gradient} text-white shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <category.icon className="w-6 h-6" />
                </motion.div>
                <h4 className="text-xl font-bold">{category.title}</h4>
              </div>

              <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    custom={index}
                    variants={skillBadgeVariants}
                    className="skill-badge text-sm"
                    whileHover={{
                      scale: 1.08,
                      y: -2,
                      transition: { type: "spring", stiffness: 300, damping: 22 }
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
