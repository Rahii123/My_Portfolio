import React, { useState, useEffect } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { generatePDF } from "../services/pdfGenerator";

import profileImage from "../assets/pfp.png";

// REPLACEME: Upload your photo to a site like Imgur or GitHub and paste the direct link here.
const PROFILE_IMAGE_URL = profileImage;

// Custom X (formerly Twitter) Logo component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>X</title>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>WhatsApp</title>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent)) {
        setIsMobile(true);
      }
    };
    checkMobile();
  }, []);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-28 pb-16 md:pt-32 md:pb-24"
    >
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-12 lg:gap-16 items-center px-4 md:px-6">
        {/* Text Content */}
        <div className="order-2 md:order-1 flex flex-col items-start space-y-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs sm:text-sm font-medium text-slate-600">
              Available for projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-sans tracking-tight leading-tight text-slate-900"
          >
            I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Raheel Nadeem
            </span>
            <br />
            <span className="relative inline-block mt-2">
              AI Engineer
              <svg
                className="absolute w-full h-2 sm:h-3 -bottom-1 left-0 text-primary opacity-50"
                viewBox="0 0 200 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.00025 6.99997C25.7501 9.75001 59.6988 2.00018 78.2501 2.00011C96.8014 1.99995 163.5 2.00011 198 8.00003"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-lg lg:text-xl text-slate-600 max-w-lg leading-relaxed"
          >
            I am a dedicated AI Engineer specializing in building robust Agentic AI systems, Generative AI solutions, and Production-grade MLOps pipelines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-3 sm:gap-4 pt-4"
          >
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="group relative px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/25 cursor-pointer text-sm sm:text-base"
            >
              <span className="flex items-center gap-2">
                View Projects{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a
              href="/cv.pdf"
              download="Raheel_Nadeem_CV.pdf"
              className="px-6 py-3 rounded-full border border-slate-200 bg-white text-slate-700 font-medium hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-sm hover:shadow text-sm sm:text-base cursor-pointer"
            >
              <Download className="w-4 h-4" /> Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-3 sm:gap-6 pt-6 sm:pt-8 flex-wrap"
          >
            <SocialLink
              href={isMobile ? "mailto:rahiiiraja123@gmail.com" : "https://mail.google.com/mail/?view=cm&fs=1&to=raheel@example.com"}
              icon={<Mail className="w-5 h-5" />}
              isMobile={isMobile}
            />
            <SocialLink
              href={isMobile ? "whatsapp://send?phone=920000000000" : "https://wa.me/920000000000"}
              icon={<WhatsAppIcon className="w-5 h-5" />}
              isMobile={isMobile}
            />
            <div className="w-px h-8 bg-slate-300 mx-2 hidden sm:block"></div>
            <SocialLink
              href="https://github.com/Rahii123"
              icon={<Github className="w-5 h-5" />}
              isMobile={isMobile}
            />
            <SocialLink
              href="https://www.linkedin.com/in/raheel-nadeem"
              icon={<Linkedin className="w-5 h-5" />}
              isMobile={isMobile}
            />
            <SocialLink
              href={isMobile ? "twitter://user?screen_name=raheel" : "https://x.com/raheel"}
              icon={<XIcon className="w-4 h-4" />}
              isMobile={isMobile}
            />
            <SocialLink
              href={isMobile ? "instagram://user?username=raheel" : "https://www.instagram.com/raheel"}
              icon={<Instagram className="w-5 h-5" />}
              isMobile={isMobile}
            />
          </motion.div>
        </div>

        {/* Image Content */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end relative pb-8 md:pb-0">
          <div className="relative w-[260px] h-[320px] sm:w-[300px] sm:h-[380px] md:w-[320px] md:h-[400px] lg:w-[360px] lg:h-[450px]">
            <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl transform rotate-6 translate-x-4 translate-y-4"></div>
            <div className="absolute inset-0 border-2 border-accent/20 rounded-2xl transform -rotate-3 -translate-x-4 -translate-y-4"></div>

            <div className="absolute inset-0 bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10 mix-blend-multiply"></div>

              <img
                src={PROFILE_IMAGE_URL}
                alt="Raheel Nadeem"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
                }}
              />

              <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center p-2">
                <TypewriterTag />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const WORDS = [
  "Agentic AI",
  "Generative AI",
  "MLOps",
  "Computer Vision",
  "Natural Language Processing",
  "Deep Learning",
  "Machine Learning",
];

const TypewriterTag: React.FC = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const timeout2 = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(timeout2);
  }, []);

  useEffect(() => {
    // Start directly with index bounding check
    if (
      subIndex === WORDS[index].length + 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % WORDS.length); // Safe loop
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : subIndex === WORDS[index].length ? 2000 : 50);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    if (WORDS[index]) {
      setText(WORDS[index].substring(0, subIndex));
    }
  }, [subIndex, index]);


  return (
    <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/95 backdrop-blur-md border border-primary/20 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.3)] ring-1 ring-primary/10 flex items-center gap-2 max-w-[90%] mx-auto transform transition-all duration-300 hover:scale-105 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
      <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0 shadow-[0_0_8px_rgba(37,99,235,0.6)]"></span>
      <span className="text-xs sm:text-sm font-mono text-slate-700 font-bold truncate">
        {text}
        <span className={`${blink ? "opacity-100" : "opacity-0"} text-primary ml-0.5`}>|</span>
      </span>
    </div>
  );
};

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; isMobile?: boolean }> = ({
  href,
  icon,
  isMobile,
}) => (
  <a
    href={href}
    target={isMobile ? "_self" : "_blank"}
    rel="noopener noreferrer"
    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-500 hover:text-white hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300"
  >
    {icon}
  </a>
);

export default Hero;
