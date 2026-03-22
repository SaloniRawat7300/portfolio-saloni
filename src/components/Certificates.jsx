import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Cpu } from 'lucide-react';
import cert1Image from '../assets/cert1.jpeg';
import cert2Image from '../assets/cert2.jpeg';
import cert3Image from '../assets/cert3.jpeg';
import cert4Image from '../assets/cert4.jpeg';

const Certificates = () => {
  const certs = [
    { 
      title: "Cloud Computing", 
      issuer: "NPTEL", 
      image: cert1Image, 
      icon: <Award className="text-secondary" />,
      link: "https://drive.google.com/file/d/1xuRqsgNk7gExlnFgxefy7pCkRf8bXlK7/view?usp=sharing",
      gradient: "from-blue-500 via-blue-400 to-indigo-500"
    },
    { 
      title: "Advanced Search Engine Optimization", 
      issuer: "Simplearn", 
      image: cert2Image, 
      icon: <ShieldCheck className="text-primary" />,
      link: "https://drive.google.com/file/d/1QexCWctaD3I-h4xq4FYV-N4z4eNpA8qn/view?usp=sharing",
      gradient: "from-purple-500 via-pink-500 to-secondary"
    },
    { 
      title: "Packet Switching Networks and Algorithms", 
      issuer: "Coursera", 
      image: cert3Image, 
      icon: <Cpu className="text-accent" />,
      link: "https://drive.google.com/file/d/1zCyWLWmiKvzACf6Cdt7Pa2-Kq22iK4VY/view?usp=sharing",
      gradient: "from-pink-500 via-rose-500 to-accent"
    },
    { 
      title: "ChatGPT 4 Prompt Engineering", 
      issuer: "Infosys", 
      image: cert4Image, 
      icon: <Cpu className="text-primary" />,
      link: "https://drive.google.com/file/d/1gVEnMBZ6_qliMdC06qgtSBwHdme6E4Tx/view?usp=sharing",
      gradient: "from-sky-500 via-blue-500 to-indigo-600"
    }
  ];

  return (
    <section id="certificates" className="section-padding">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight pb-2">
          Certifications
        </h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {certs.map((cert, index) => (
          <div key={index} className="group relative p-[1px] rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 flex flex-col">
            {/* Gradient Border Glow */}
            <div className={`absolute inset-0 bg-gradient-to-b ${cert.gradient} opacity-20 group-hover:opacity-100 blur-sm group-hover:blur-md transition-all duration-500 rounded-2xl`} />
            
            <div className="relative bg-[#0b0f19] rounded-2xl overflow-hidden h-full flex flex-col border border-white/5">
              <div className="h-40 overflow-hidden relative">
                <img src={cert.image} alt={cert.title} className="w-full h-full object-cover transition-all duration-500" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-300" />
              </div>
              
              <div className="p-5 flex-grow flex flex-col">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-white/5 rounded-lg group-hover:scale-110 transition-transform duration-300 shrink-0">{cert.icon}</div>
                  <div>
                    <h3 className="font-bold text-base leading-tight mb-1 group-hover:text-primary transition-colors">{cert.title}</h3>
                    <p className="text-white/40 text-[10px] font-medium uppercase tracking-widest">{cert.issuer}</p>
                  </div>
                </div>
                
                <div className="mt-auto pt-4 border-t border-white/5">
                  <a 
                    href={`${cert.link}#toolbar=0`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 bg-white/5 hover:bg-primary text-white text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 border border-white/10 hover:border-primary shadow-lg"
                  >
                    <Award size={14} /> View Certificate
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Certificates;
