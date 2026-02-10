import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const projects: Project[] = [
  // --- AGENTIC AI & LLMs ---
  {
    id: 1,
    title: "Agentic AI Trip Planner",
    description: "An autonomous travel agent powered by LangGraph that orchestrates specialized tools for multi-source research, live weather updates, and dynamic currency conversion to create comprehensive itineraries.",
    tags: ["Python", "LangGraph", "FastAPI", "Tavily AI", "Groq", "Llama 3.3"],
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/Rahii123/End-to-End-AGENTIC_AI_PROJECT",
    demoUrl: "https://huggingface.co/spaces/Rahii123/AI_Trip_Planner"
  },
  {
    id: 2,
    title: "Kidney Guard AI",
    description: "A production-grade Deep Learning CT scan classifier with modular architecture. Features automated classification, MLflow tracking, DVC versioning, and Docker deployment on Hugging Face.",
    tags: ["Python", "TensorFlow", "VGG16", "MLflow", "DVC", "Docker", "FastAPI"],
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/Rahii123/Kidney_disease_classification",
    demoUrl: "https://huggingface.co/spaces/Rahii123/Kidney_Disease_Classification"
  },
  {
    id: 3,
    title: "Agentic Support System",
    description: "Industry-grade support system utilizing autonomous agents to handle complex customer queries and data extraction.",
    tags: ["Python", "LangGraph", "LLMs", "MCP Servers"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/Rahii123/agentic_support_system",
    demoUrl: ""
  },
  {
    id: 4,
    title: "AI Career CounsellingBot",
    description: "An AI-powered career counseling system designed to guide students toward the best career paths based on their skills and interests.",
    tags: ["Python", "NLP", "Machine Learning", "Streamlit"],
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/Rahii123/AI-Chatbot-carrer-councelling-system",
    demoUrl: ""
  },
  {
    id: 5,
    title: "Advanced MCP Server",
    description: "Built MCP server providing real-time AI agent access to system data, increasing autonomous agent efficiency by 30% through structured API workflows. Implemented weather alerts, news search, and directory exploration with secure .env key management.",
    tags: ["Python", "FastMCP", "APIs", "uv", "Railway"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/Rahii123/mcp",
    demoUrl: ""
  },
  {
    id: 6,
    title: "House Price Prediction",
    description: "Machine learning model for predicting house prices based on various features using regression algorithms. Implements data preprocessing, feature engineering, and model evaluation techniques.",
    tags: ["Python", "Scikit-learn", "Pandas", "Regression"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    githubUrl: "https://github.com/Rahii123/House-price-Pridiction",
    demoUrl: ""
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-12">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">Featured <span className="text-secondary">Projects</span></h2>
            <p className="text-slate-600 max-w-xl text-sm sm:text-base">
              A showcase of my work in Agentic AI, MLOps, Computer Vision, and Data Science.
            </p>
          </div>
          <a href="https://github.com/Rahii123" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium">
            View Github <Github className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-lg hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-44 sm:h-48 overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-5 md:p-6 flex flex-col flex-grow">
                <div className="flex gap-2 mb-4 flex-wrap">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] sm:text-xs font-mono px-2 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-4 mt-auto pt-4 border-t border-slate-50 flex-wrap">
                  {project.demoUrl && project.demoUrl !== "#" && project.demoUrl !== "" && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-800 hover:text-primary transition-colors">
                      {project.demoUrl.includes("linkedin.com") ? (
                        <>
                          <PlayCircle className="w-4 h-4" /> Watch Demo
                        </>
                      ) : (
                        <>
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </>
                      )}
                    </a>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" && project.githubUrl !== "" && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-slate-800 hover:text-primary transition-colors">
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                  {(!project.githubUrl || project.githubUrl === "" || project.githubUrl === "#") && (!project.demoUrl || project.demoUrl === "" || project.demoUrl === "#") && (
                    <span className="text-sm text-slate-400 italic">Links coming soon</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center md:hidden">
          <a href="https://github.com/Rahii123" className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium">
            View Github <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;