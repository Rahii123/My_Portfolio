import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Send, Phone, Facebook, Instagram, Github, Linkedin, ArrowUpRight, Copy, Check } from 'lucide-react';

// Custom X (formerly Twitter) Logo component
const XIcon = ({ className }: { className?: string }) => (
  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>X</title>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <title>WhatsApp</title>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
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

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("raheel@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const myEmail = "raheel@example.com";
    const emailBody = `Hi Raheel,
    
My name is ${name} (${email}).

${message}

Best regards,
${name}`;

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    if (isMobile) {
      window.location.href = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
    } else {
      window.open(gmailLink, '_blank');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden bg-slate-50">
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Header Section */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">Let's <span className="text-primary">Collaborate</span></h2>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss the latest in AI? I'm always open to new opportunities and interesting conversations.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Professional Email Card */}
          <div className="group relative bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-50 flex items-center justify-center text-secondary group-hover:scale-110 transition-transform flex-shrink-0">
                <Mail className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Email</h3>
                    <p className="text-slate-500 text-sm mb-3">Send a message directly via Gmail</p>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
                    title="Copy email address"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <a
                  href={isMobile ? "mailto:raheel@example.com" : "https://mail.google.com/mail/?view=cm&fs=1&to=raheel@example.com"}
                  target={isMobile ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 text-white font-medium hover:bg-primary transition-colors w-full sm:w-auto justify-center text-sm sm:text-base"
                >
                  Compose Message <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Professional WhatsApp Card */}
          <div className="group relative bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-green-500/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-50 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform flex-shrink-0">
                <WhatsAppIcon className="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900">WhatsApp</h3>
                <p className="text-slate-500 text-sm mb-3">Instant messaging & calls</p>

                <a
                  href={isMobile ? "whatsapp://send?phone=920000000000" : "https://wa.me/920000000000"}
                  target={isMobile ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] text-white font-medium hover:bg-[#128C7E] transition-colors w-full sm:w-auto justify-center text-sm sm:text-base"
                >
                  Start Chat <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Functional Contact Form */}
        <div className="max-w-3xl mx-auto mb-12 md:mb-16">
          <form className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-xl" onSubmit={handleSubmit}>
            <div className="text-center mb-6 md:mb-8">
              <h3 className="text-xl font-bold text-slate-900">Send me a message</h3>
              <p className="text-slate-500 text-sm">I'll get back to you via email.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-400"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-400"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2 mb-4 md:mb-6">
              <label htmlFor="subject" className="text-sm font-medium text-slate-700">Subject</label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-slate-400"
                placeholder="Project Inquiry"
                required
              />
            </div>

            <div className="space-y-2 mb-6 md:mb-8">
              <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none placeholder:text-slate-400"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>

            <button className="w-full py-3 md:py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-bold text-base md:text-lg hover:shadow-lg hover:shadow-primary/25 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
              Send Message <Send className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </form>
        </div>

        {/* Footer Info: Location & Socials */}
        <div className="flex flex-col items-center gap-6 md:gap-8 border-t border-slate-200 pt-8 md:pt-12">
          <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm text-sm sm:text-base">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="text-slate-700 font-medium">Azad Jammu and Kashmir, Pakistan</span>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Connect on Social</h3>
            <div className="flex gap-3 flex-wrap justify-center">
              <SocialIcon href="https://www.linkedin.com/in/raheel-nadeem" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" isMobile={isMobile} />
              <SocialIcon href="https://github.com/Rahii123" icon={<Github className="w-5 h-5" />} label="GitHub" isMobile={isMobile} />
              <SocialIcon
                href={isMobile ? "twitter://user?screen_name=raheel" : "https://x.com/raheel"}
                icon={<XIcon className="w-4 h-4" />}
                label="X"
                isMobile={isMobile}
              />
              <SocialIcon
                href={isMobile ? "instagram://user?username=raheel" : "https://www.instagram.com/raheel"}
                icon={<Instagram className="w-5 h-5" />}
                label="Instagram"
                isMobile={isMobile}
              />
              <SocialIcon href="https://www.facebook.com/raheel" icon={<Facebook className="w-5 h-5" />} label="Facebook" isMobile={isMobile} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const SocialIcon: React.FC<{ href: string; icon: React.ReactNode; label: string; isMobile?: boolean }> = ({ href, icon, label, isMobile }) => (
  <a
    href={href}
    target={isMobile ? "_self" : "_blank"}
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300 shadow-sm"
    title={label}
    aria-label={label}
  >
    {icon}
  </a>
);

export default Contact;