import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-center text-slate-900">
          Academic <span className="text-primary">Background</span>
        </h2>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-lg hover:border-primary/30 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
              <GraduationCap className="w-24 h-24 md:w-32 md:h-32 text-primary transform rotate-12" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                <GraduationCap className="w-7 h-7 md:w-8 md:h-8" />
              </div>

              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800">BS Computer Science</h3>
                </div>

                <h4 className="text-base md:text-lg text-secondary font-medium mb-4">
                  <a
                    href="https://uajk.edu.pk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-primary transition-colors"
                  >
                    University of Azad Jammu and Kashmir (UAJK), Muzaffarabad
                  </a>
                </h4>

                <div className="flex flex-wrap gap-3 md:gap-4 mb-6">
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs sm:text-sm font-medium text-slate-700">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-slate-500" />
                    <span>Nov 2021 - Nov 2025</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent/5 border border-accent/20 text-xs sm:text-sm font-medium text-slate-700">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                    <span>CGPA: 3.28 / 4.00</span>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Graduated among the top 10% of the batch with a strong foundation in Artificial Intelligence, Machine Learning, Deep Learning, and Software Engineering. Specialized in building production-ready AI systems, MLOps pipelines, and autonomous agents through hands-on projects and research.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;