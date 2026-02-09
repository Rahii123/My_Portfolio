import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford University",
    date: "Nov 23, 2024",
    link: "https://coursera.org/verify/specialization/Z4T9846HY3CB"
  },
  {
    id: 2,
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI & Stanford University",
    date: "Oct 31, 2024",
    link: "https://coursera.org/verify/SJRY6DVO3O79"
  },
  {
    id: 3,
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI & Stanford University",
    date: "Nov 23, 2024",
    link: "https://coursera.org/verify/U4R1H93WV6AR"
  },
  {
    id: 4,
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    issuer: "DeepLearning.AI & Stanford University",
    date: "Nov 10, 2024",
    link: "https://coursera.org/verify/5HGZJYZISSU1"
  },
  {
    id: 5,
    title: "Responsible AI for Mental Health",
    issuer: "Northeastern University",
    date: "Oct 28, 2025",
    link: "https://coursera.org/verify/WMI7P85ICOYN"
  },
  {
    id: 6,
    title: "AI For Everyone",
    issuer: "DeepLearning.AI",
    date: "Jul 8, 2025",
    link: "https://coursera.org/verify/YTE2CP152N76"
  },
  {
    id: 7,
    title: "Master Problem Solving and Critical Thinking",
    issuer: "LearnKartS",
    date: "Sep 13, 2025",
    link: "https://coursera.org/verify/8PBPNY45GEZA"
  },
  {
    id: 8,
    title: "Effective Problem-Solving and Decision-Making",
    issuer: "University of California, Irvine",
    date: "Sep 12, 2025",
    link: "https://coursera.org/verify/56VKYS1270B9"
  },
  {
    id: 9,
    title: "Introduction to Certified Professional Biller",
    issuer: "AAPC",
    date: "Jul 20, 2025",
    link: "https://coursera.org/verify/4DWGGYLQ6EVC"
  },
  {
    id: 10,
    title: "Active Listening: Enhancing Communication Skills",
    issuer: "Coursera",
    date: "Nov 15, 2025",
    link: "https://coursera.org/verify/L0OO3ZW22YPC"
  },
  {
    id: 11,
    title: "Tools and Techniques for Managing Stress",
    issuer: "Starweaver",
    date: "Nov 8, 2025",
    link: "https://coursera.org/verify/DZBE2W09EPOT"
  },
  {
    id: 12,
    title: "Stress Management Techniques",
    issuer: "LearnKartS",
    date: "Nov 9, 2025",
    link: "https://coursera.org/verify/UCUMQDLV1EFY"
  }
];

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-slate-900">
            Professional <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Continuous learning and validation of skills through industry-recognized certifications.
          </p>
        </div>

        {/* Mobile: Horizontal Scroll with Snap | Desktop: Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0 -mx-4 px-4 md:mx-auto md:px-0">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-[85%] sm:w-[380px] md:w-auto snap-center flex flex-col p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group h-full"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-accent flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <div className="p-1 rounded-full bg-green-50 border border-green-100 opacity-0 group-hover:opacity-100 transition-opacity">
                   <ShieldCheck className="w-4 h-4 text-green-600" />
                </div>
              </div>
              
              <div className="flex-grow">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">{cert.issuer}</p>
              </div>
              
              <div className="mt-4 pt-4 border-t border-slate-200/50 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-500 bg-white px-2 py-1 rounded border border-slate-200">
                  {cert.date}
                </span>
                
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1 text-xs font-bold text-primary hover:text-secondary transition-colors uppercase tracking-wide bg-primary/5 hover:bg-primary/10 px-3 py-1.5 rounded-full"
                >
                  Verify <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;