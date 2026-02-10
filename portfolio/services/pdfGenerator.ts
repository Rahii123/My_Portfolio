import { jsPDF } from "jspdf";

export const generatePDF = () => {
  const doc = new jsPDF();
  const pageHeight = doc.internal.pageSize.height;
  const contentWidth = 170;
  const leftMargin = 20;
  let y = 20;

  const checkPageBreak = (heightNeeded: number) => {
    if (y + heightNeeded > pageHeight - 20) {
      doc.addPage();
      y = 20;
    }
  };

  const addHeading = (text: string) => {
    checkPageBreak(15);
    y += 5;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(6, 182, 212); // Primary color
    doc.text(text.toUpperCase(), leftMargin, y);
    y += 2;
    doc.setDrawColor(200, 200, 200);
    doc.setLineWidth(0.5);
    doc.line(leftMargin, y, leftMargin + contentWidth, y);
    doc.setTextColor(0, 0, 0); // Reset color
    y += 6;
  };

  const addSubHeading = (text: string, rightText?: string) => {
    checkPageBreak(8);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(text, leftMargin, y);
    if (rightText) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(rightText, leftMargin + contentWidth, y, { align: "right" });
      doc.setTextColor(0, 0, 0);
    }
    y += 5;
  };

  const addBody = (text: string, indent = 0, fontSize = 10) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(fontSize);
    const lines = doc.splitTextToSize(text, contentWidth - indent);
    const height = lines.length * (fontSize * 0.45);
    checkPageBreak(height);
    doc.text(lines, leftMargin + indent, y);
    y += height + 2;
  };

  const addBullet = (text: string) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    const lines = doc.splitTextToSize(text, contentWidth - 5);
    const height = lines.length * 4.5;
    checkPageBreak(height);
    doc.text("•", leftMargin, y);
    doc.text(lines, leftMargin + 5, y);
    y += height + 2;
  };

  const addLink = (text: string, url: string, indent = 0, fontSize = 10) => {
    doc.setTextColor(6, 182, 212);
    doc.setFontSize(fontSize);
    doc.textWithLink(text, leftMargin + indent, y, { url: url });
    doc.setTextColor(0, 0, 0);
  };


  // --- HEADER ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.text("Raheel Nadeem", 105, y, { align: "center" });
  y += 8;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text("AI / Machine Learning Engineer", 105, y, { align: "center" });
  y += 5;
  doc.text("+92-343-4377512 | rahiiiraja123@gmail.com", 105, y, { align: "center" });
  y += 5;

  // Links row
  const linkY = y;
  doc.setTextColor(6, 182, 212);
  doc.textWithLink("linkedin.com/in/raheel-nadeem", 70, linkY, { url: "https://www.linkedin.com/in/raheel-nadeem" });
  doc.text("|", 105, linkY, { align: "center" });
  doc.textWithLink("github.com/Rahii123", 110, linkY, { url: "https://github.com/Rahii123" });
  doc.setTextColor(0, 0, 0);
  y += 10;

  // --- SUMMARY ---
  addHeading("Summary");
  addBody("AI/ML Engineer specializing in Agentic AI, RAG systems, and production-ready ML pipelines. Proven ability to design, deploy, and optimize deep learning and NLP-based systems with FastAPI, Docker, and MLOps workflows. Experienced in building real-world AI solutions for healthcare, autonomous assistants, and intelligent agents.");

  // --- SKILLS ---
  addHeading("Technical Skills");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Programming:", leftMargin, y);
  doc.setFont("helvetica", "normal");
  doc.text(" Python, C++, JavaScript, SQL", leftMargin + 25, y);
  y += 5;

  doc.setFont("helvetica", "bold");
  doc.text("ML & AI:", leftMargin, y);
  doc.setFont("helvetica", "normal");
  doc.text(" Scikit-learn, TensorFlow, PyTorch, Deep Learning, NLP, Computer Vision", leftMargin + 18, y);
  y += 5;

  doc.setFont("helvetica", "bold");
  doc.text("LLMs & Agentic AI:", leftMargin, y);
  doc.setFont("helvetica", "normal");
  doc.text(" LangChain, LangGraph, Hugging Face, RAG, Agentic AI", leftMargin + 35, y);
  y += 5;

  doc.setFont("helvetica", "bold");
  doc.text("MLOps & Deployment:", leftMargin, y);
  doc.setFont("helvetica", "normal");
  doc.text(" MLflow, DagsHub, Docker, Git, GitHub, Conda", leftMargin + 38, y);
  y += 5;

  doc.setFont("helvetica", "bold");
  doc.text("Frameworks & APIs:", leftMargin, y);
  doc.setFont("helvetica", "normal");
  doc.text(" Flask, FastAPI", leftMargin + 35, y);
  y += 8;

  // --- EXPERIENCE ---
  addHeading("Experience");

  addSubHeading("AI Intern", "Dec 2025 – Present");
  doc.setFont("helvetica", "bold"); doc.setFontSize(10);
  doc.text("Metropolitan Solutions | Islamabad, Pakistan", leftMargin, y); y += 6;
  addBullet("Spearheaded the design and deployment of deep learning models for object detection and classification, achieving 92% accuracy improvement, by optimizing VGG16 architecture and training pipeline");
  addBullet("Automated Agentic AI workflows for autonomous decision-making, enabling 35% more tasks processed per day by integrating MLOps pipelines");
  addBullet("Integrated models into production ML pipelines with FastAPI and Docker, improving system scalability by 40%");
  addBullet("Optimized preprocessing, feature engineering, and hyperparameter tuning, reducing model training time by 25%");

  y += 4;
  addSubHeading("Remote AI/ML Intern", "Nov 2025 – Dec 2025");
  doc.setFont("helvetica", "bold"); doc.setFontSize(10);
  doc.text("Arch Technologies | Remote", leftMargin, y); y += 6;
  addBullet("Developed supervised ML models including MNIST digit classifier and customer churn prediction, achieving 90% accuracy on test datasets, by implementing end-to-end pipelines");
  addBullet("Engineered features, analyzed datasets, and visualized results to improve model interpretability and performance by 30%");
  addBullet("Implemented Git/GitHub version control for remote team collaboration, improving workflow efficiency by 20%");

  // --- PROJECTS ---
  addHeading("Projects");

  addSubHeading("Kidney Guard AI: Deep Learning CT Scan Classifier", "GitHub Link");
  // Assuming user wants link on the title or right text. For PDF text clickability is tricky with complex layout wrappers, so simple approach:
  doc.link(leftMargin + contentWidth - 20, y - 5, 20, 5, { url: "https://github.com/Rahii123/Kidney_disease_classification" });

  addBody("Python, TensorFlow, Keras (VGG16), FastAPI, Docker, MLflow, DagsHub", 0, 9);
  addBullet("Accomplished high-accuracy kidney CT scan classification, achieving 95% accuracy, by optimizing VGG16 CNN architecture and training pipeline for production-ready deployment");
  addBullet("Integrated MLflow and DagsHub for experiment tracking and version control, reducing model iteration errors by 30%");
  addBullet("Deployed Dockerized FastAPI application to Hugging Face Spaces, enabling instant diagnostic feedback for clinicians");

  y += 2;
  addSubHeading("Agentic AI Trip Planner", "GitHub Link");
  doc.link(leftMargin + contentWidth - 20, y - 5, 20, 5, { url: "https://github.com/Rahii123/End-to-End-AGENTIC_AI_PROJECT" });
  addBody("Python, FastAPI, Streamlit, LangChain, LangGraph, Docker", 0, 9);
  addBullet("Spearheaded autonomous trip planning agent using LangGraph, improving itinerary generation speed by 40% through state management optimization");
  addBullet("Integrated live APIs for weather, currency conversion, and attractions, achieving 90% planning accuracy for personalized itineraries");
  addBullet("Developed backend in FastAPI and frontend in Streamlit with Docker, ensuring production-ready deployment and scalability");

  y += 2;
  addSubHeading("AI Career Counseling Chatbot", "GitHub Link");
  doc.link(leftMargin + contentWidth - 20, y - 5, 20, 5, { url: "https://github.com/Rahii123/AI-Chatbot-carrer-councelling-system" });
  addBody("Python, Flask, LangChain, Groq LLMs, Google AI Embeddings, FAISS", 0, 9);
  addBullet("Developed AI-powered career guidance chatbot using RAG, improving recommendation relevance by 85% for students");
  addBullet("Integrated multiple LLM providers and secure session management, achieving 95% reliability in multi-user scenarios");
  addBullet("Implemented persistent chat sessions and PDF-based knowledge base, enabling scalable career guidance services");

  y += 2;
  addSubHeading("Advanced MCP Server", "GitHub Link");
  doc.link(leftMargin + contentWidth - 20, y - 5, 20, 5, { url: "https://github.com/Rahii123/agentic_support_system" });
  addBody("Python, FastMCP, APIs, uv, Railway Deployment", 0, 9);
  addBullet("Built MCP server providing real-time AI agent access to system data, increasing autonomous agent efficiency by 30% through structured API workflows");
  addBullet("Implemented weather alerts, news search, and directory exploration with secure .env key management, improving operational reliability by 25%");
  addBullet("Deployed server on Railway with SSE transport and tested local/online clients to ensure production readiness");

  // --- EDUCATION ---
  addHeading("Education");
  addSubHeading("Bachelor of Computer Science", "Dec 2021 – Dec 2025");
  addBody("University of Azad Jammu & Kashmir, Pakistan");
  addBody("Graduated among top 10% of batch, CGPA: 3.2/4.0");

  // --- CERTIFICATIONS ---
  addHeading("Certifications");
  checkPageBreak(30);

  addSubHeading("Supervised Machine Learning: Regression and Classification", "Apr 2025");
  addBody("Coursera", 0, 9);
  addBullet("Applied modern ML techniques including supervised/unsupervised learning, recommender systems, and reinforcement learning to real-world datasets");

  y += 2;
  addSubHeading("Advanced Learning Algorithms", "Apr 2025");
  addBody("Coursera", 0, 9);
  addBullet("Built and trained neural networks using TensorFlow with emphasis on layer operations, feature learning, and vectorized computations");

  y += 2;
  addSubHeading("Unsupervised Learning, Recommenders, Reinforcement Learning", "Apr 2025");
  addBody("Coursera", 0, 9);
  addBullet("Developed deep Q-learning and recommender system solutions, applying advanced RL and unsupervised algorithms to practical problems");

  doc.save("Raheel_Nadeem_CV.pdf");
};
