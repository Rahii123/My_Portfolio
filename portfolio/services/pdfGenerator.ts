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

  // --- HEADER ---
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.text("Abdul Qahir Jalali", 105, y, { align: "center" });
  y += 8;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text("Islamabad, Pakistan | (+92) 340 8198770", 105, y, { align: "center" });
  y += 5;
  doc.text("abdulqahir421@gmail.com | linkedin.com/in/abdul-qahir-jalali", 105, y, { align: "center" });
  y += 5;
  doc.text("github.com/Abdul-Qahir-Jalali", 105, y, { align: "center" });
  y += 10;

  // --- ABOUT ME ---
  addHeading("About Me");
  addBody("Computer Science graduate with a strong foundation in Artificial Intelligence, Machine Learning, Deep Learning, NLP, MLOps and Generative AI. Skilled in building intelligent, data-driven systems and developing solutions for real-world challenges. Passionate about applying AI to understand and improve mental health, helping individuals strengthen their minds and emotional resilience through intelligent, human-centered technologies.");

  // --- RESEARCH INTERESTS ---
  addHeading("Research Interests");
  addBody("Applying Artificial Intelligence to understand, support, and strengthen the human mind. Interested in Affective Computing, AI for Mental Health, Digital Mental Health, Emotion Recognition, and Behavioral Modeling. Aiming to use ML, DL, NLP, and Agentic AI to create ethical, human-centered systems promoting emotional well-being.");

  // --- EDUCATION ---
  addHeading("Education & Training");
  addSubHeading("Bachelor of Science in Computer Science", "Dec 2021 - Nov 2025");
  addBody("University of Azad Jammu and Kashmir (UAJK) | Muzaffarabad, Pakistan");
  addBody("Final grade: 3.5 / 4.00");
  addBody("Thesis: Deep Fake Audio Detection for Urdu Language");
  
  // --- EXPERIENCE ---
  addHeading("Work Experience");
  
  addSubHeading("Intern – Artificial Intelligence and Machine Learning", "Jun 2025 - Aug 2025");
  addBody("ITSOLERA Pvt. Ltd. | Islamabad, Pakistan", 0, 10);
  y += 2;
  addBullet("Contributed to AI-Enhanced Detection of Fake and Bot Profiles on Social Media.");
  addBullet("Worked on Machine Learning for Construction Progress Monitoring.");
  addBullet("Developed Multi-Modal Risk Scoring for Disaster-Prone Agricultural Zones.");
  addBullet("Assisted in data preprocessing, model development, and performance evaluation.");

  // --- PROJECTS ---
  addHeading("Projects");

  addSubHeading("Mental Health Chatbot");
  addBody("Developed a web-based chatbot using Deepseek API to provide empathetic mental health support. Implemented responsible AI practices with crisis detection, helpline guidance, and disclaimers. Built with Flask, HTML/CSS, and JavaScript.");
  
  addSubHeading("DeepFake Audio Detection for Urdu Language (FYP)");
  addBody("Developed a deepfake audio detection system for the Urdu language. Collected and created a balanced dataset of real and cloned voices, then fine-tuned the 'wav2vec2-large-xlsr-53' model. Built a Flask web app for analysis.");

  addSubHeading("CallReview-Automation using AI");
  addBody("AI-based system to automate Humanatic call reviews. Records and processes calls, uses ElevenLabs for speech-to-text, and DeepSeek AI for decision making.");

  addSubHeading("Crop Recommendation System");
  addBody("Built a machine learning model using Random Forest to recommend the best crop based on soil properties. Developed a Flask web app for user interaction.");

  // --- SKILLS ---
  addHeading("Skills");
  
  addSubHeading("Artificial Intelligence & Data Science");
  addBody("Machine Learning, Deep Learning, NLP, Data Mining, Generative AI, SQL, MLOps, Data Science, Data Collection, Processing, Analysis, Visualization.");
  
  y += 2;
  addSubHeading("Programming & Development");
  addBody("Python, C++, HTML, CSS, JavaScript, XML, Java, Scikit-learn, Tensorflow, Pytorch, Keras, Numpy, Pandas, Matplotlib, Seaborn, Nltk, LlamaIndex, Langchain, Git/GitHub, Conda, Jupyter, VS Code.");

  // --- CERTIFICATIONS ---
  addHeading("Certifications");
  addBullet("Responsible AI for Mental Health | Northeastern University (Coursera)");
  addBullet("Master Problem Solving and Critical Thinking | LearnKartS");
  addBullet("Effective Problem-Solving and Decision-Making | UC Irvine");
  addBullet("Machine Learning Specialization | DeepLearning.AI");
  addBullet("AI For Everyone | DeepLearning.AI");
  addBullet("Introduction to Certified Professional Biller | AAPC");

  // --- LANGUAGES ---
  addHeading("Languages");
  addBody("English (C1 - Proficient), Urdu (Native), Pahari (Native)");

  doc.save("Abdul_Qahir_Jalali_CV.pdf");
};
