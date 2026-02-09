import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../types';
import { 
  Database, Layout, Brain, Cpu, Layers, Terminal, 
  Code2, FileCode, Coffee, Github, Laptop, FileJson, 
  BarChart, PieChart, TableProperties, Bot, Sparkles, 
  MessageSquareText, Link, Workflow, FileText, Search,
  Users, Server, Activity, MessageSquare, HardDrive, UserCheck
} from 'lucide-react';

const PythonIcon = () => <span className="font-mono font-bold text-yellow-500">PY</span>;
const TFIcon = () => <span className="font-mono font-bold text-orange-500">TF</span>;

const skills: Skill[] = [
  // Agentic AI
  { name: 'LangGraph', level: 95, category: 'Agentic AI', icon: <Workflow className="text-blue-600" /> },
  { name: 'CrewAI', level: 90, category: 'Agentic AI', icon: <Users className="text-green-600" /> },
  { name: 'LangChain', level: 95, category: 'Agentic AI', icon: <Link className="text-orange-600" /> },
  { name: 'MCP Servers', level: 88, category: 'Agentic AI', icon: <Server className="text-purple-600" /> },
  { name: 'RAG', level: 95, category: 'Agentic AI', icon: <Database className="text-cyan-600" /> },
  { name: 'Vector Databases', level: 92, category: 'Agentic AI', icon: <Layers className="text-indigo-600" /> },
  { name: 'LangSmith', level: 85, category: 'Agentic AI', icon: <Activity className="text-pink-600" /> },
  { name: 'ReAct Pattern', level: 90, category: 'Agentic AI', icon: <Brain className="text-yellow-600" /> },
  { name: 'Chain-of-Thought', level: 92, category: 'Agentic AI', icon: <MessageSquare className="text-teal-600" /> },
  { name: 'Function Calling', level: 94, category: 'Agentic AI', icon: <Terminal className="text-red-600" /> },
  { name: 'Memory', level: 88, category: 'Agentic AI', icon: <HardDrive className="text-slate-600" /> },
  { name: 'Human-in-the-Loop', level: 90, category: 'Agentic AI', icon: <UserCheck className="text-emerald-600" /> },

  // AI & GenAI
  { name: 'Generative AI', level: 95, category: 'AI/GenAI', icon: <Sparkles className="text-purple-500" /> },
  { name: 'Deep Learning', level: 92, category: 'AI/GenAI', icon: <Brain className="text-pink-500" /> },
  { name: 'NLP & LLMs', level: 94, category: 'AI/GenAI', icon: <MessageSquareText className="text-indigo-500" /> },
  { name: 'Machine Learning', level: 95, category: 'AI/GenAI', icon: <Cpu className="text-blue-500" /> },
  { name: 'MLOps', level: 88, category: 'AI/GenAI', icon: <Workflow className="text-green-500" /> },
  { name: 'LlamaIndex', level: 90, category: 'AI/GenAI', icon: <Link className="text-orange-500" /> },
  { name: 'TF & PyTorch', level: 92, category: 'AI/GenAI', icon: <TFIcon /> },

  // Data Science
  { name: 'Data Science', level: 96, category: 'Data Science', icon: <BarChart className="text-blue-600" /> },
  { name: 'Data Visualization', level: 92, category: 'Data Science', icon: <PieChart className="text-purple-600" /> },
  { name: 'Pandas & NumPy', level: 98, category: 'Data Science', icon: <TableProperties className="text-cyan-600" /> },
  { name: 'Data Mining', level: 88, category: 'Data Science', icon: <Search className="text-teal-600" /> },
  { name: 'SQL', level: 85, category: 'Data Science', icon: <Database className="text-slate-600" /> },
  
  // Development
  { name: 'Python', level: 99, category: 'Development', icon: <PythonIcon /> },
  { name: 'C++', level: 85, category: 'Development', icon: <Code2 className="text-blue-700" /> },
  { name: 'JavaScript', level: 88, category: 'Development', icon: <FileCode className="text-yellow-400" /> },
  { name: 'Java', level: 80, category: 'Development', icon: <Coffee className="text-red-600" /> },
  { name: 'HTML, CSS & XML', level: 90, category: 'Development', icon: <Layout className="text-orange-600" /> },

  // Tools
  { name: 'Git & GitHub', level: 92, category: 'Tools', icon: <Github className="text-slate-800" /> },
  { name: 'VS Code & Cursor', level: 95, category: 'Tools', icon: <Laptop className="text-blue-500" /> },
  { name: 'Hugging Face', level: 90, category: 'Tools', icon: <Bot className="text-yellow-500" /> },
  { name: 'Kaggle', level: 88, category: 'Tools', icon: <BarChart className="text-sky-500" /> },
  { name: 'Jupyter & Colab', level: 96, category: 'Tools', icon: <FileJson className="text-orange-500" /> },
  { name: 'Office Suite', level: 90, category: 'Tools', icon: <FileText className="text-blue-400" /> },
];

const Skills: React.FC = () => {
  const categories = ['Agentic AI', 'AI/GenAI', 'Data Science', 'Development', 'Tools'] as const;

  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-slate-900">Technical <span className="text-primary">Expertise</span></h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            A robust set of skills spanning advanced Agentic AI, Generative AI, Data Science, and Full Stack Development.
          </p>
        </div>

        {/* Mobile: Horizontal Scroll with Snap | Desktop: Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible md:pb-0 -mx-4 px-4 md:mx-auto md:px-0">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className={`flex-shrink-0 w-[85%] sm:w-[380px] md:w-auto snap-center bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-lg hover:border-primary/30 transition-all duration-300 hover:shadow-xl h-full ${
                category === 'Agentic AI' ? 'md:row-span-2' : ''
              }`}
            >
              <h3 className="text-lg md:text-xl font-bold mb-6 text-slate-800 border-b border-slate-100 pb-2 flex items-center gap-2">
                {category}
              </h3>
              <div className="space-y-4 md:space-y-5">
                {skills.filter(s => s.category === category).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <div className="flex items-center gap-2.5">
                         <div className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center">
                           {skill.icon}
                         </div>
                         <span className="font-medium text-slate-700 text-sm">{skill.name}</span>
                      </div>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full rounded-full ${
                          category === 'Agentic AI' ? 'bg-gradient-to-r from-violet-600 to-indigo-600' :
                          category === 'AI/GenAI' ? 'bg-gradient-to-r from-primary to-accent' :
                          category === 'Data Science' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                          category === 'Development' ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 
                          'bg-gradient-to-r from-slate-400 to-slate-600'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;