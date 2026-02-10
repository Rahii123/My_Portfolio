import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceItem } from '../types';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

const experiences: ExperienceItem[] = [
  {
    id: 2,
    role: "AI Intern",
    company: "Metropolitan Solutions (Pvt) Limited",
    companyUrl: "https://www.gomwd.com",
    period: "Dec 2025 - Present",
    description: [
      "Designing and implementing end-to-end MLOps pipelines to automate the training, deployment, and monitoring of AI models, ensuring scalable and reliable production systems.",
      "Developing autonomous Agentic AI systems and Generative AI solutions to handle complex workflows and decision-making processes.",
      "Integrating deep learning models into the company’s existing infrastructure to enhance operational efficiency and software capabilities.",
      "Orchestrating the full lifecycle of AI applications, from data preparation to deployment, ensuring seamless integration of AI agents into business products."
    ]
  },
  {
    id: 1,
    role: "Remote AI/ML Intern",
    company: "Arch Technologies",
    companyUrl: "#",
    period: "Nov 2025 - Dec 2025",
    description: [
      "Developed supervised ML models including MNIST digit classifier and customer churn prediction, achieving 90% accuracy on test datasets, by implementing end-to-end pipelines.",
      "Engineered features, analyzed datasets, and visualized results to improve model interpretability and performance by 30%.",
      "Implemented Git/GitHub version control for remote team collaboration, improving workflow efficiency by 20%."
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-center text-slate-900">
          Professional <span className="text-accent">Journey</span>
        </h2>

        <div className="relative border-l border-slate-200 ml-4 md:ml-0 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[5px] top-2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(6,182,212,0.4)]"></div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-primary font-medium mt-1 text-sm sm:text-base">
                    <Briefcase className="w-4 h-4" />
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-accent transition-colors flex items-center gap-1 group"
                      >
                        {exp.company}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <span>{exp.company}</span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-xs sm:text-sm font-mono mt-2 sm:mt-0 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 w-fit">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-accent mt-1.5 min-w-[5px]">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;