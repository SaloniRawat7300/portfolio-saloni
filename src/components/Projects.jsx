import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Layout, Database, Smartphone } from 'lucide-react';

// Import project images
import project1Img from '../assets/project1.jpeg';
import project2Img from '../assets/project2.jpeg';
import project3Img from '../assets/project3.jpeg';
import project4Img from '../assets/project4.jpeg';

const Projects = () => {
  const projects = [
    { 
      title: "Power BI Adidas Sales Dashboard", 
      desc: "Comprehensive sales analysis dashboard using Power BI to visualize Adidas sales performance, identify trends, and derive actionable business insights through interactive data visualization.", 
      image: project1Img, 
      tech: ["Power BI", "Data Analysis", "Sales Analytics", "Business Intelligence"], 
      live: "https://www.linkedin.com/posts/saloni12_adidas-salesanalysis-salesinsights-activity-7404491701572034560-FRBU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgaEcEBI2CVYLgZz19hyBIoja4SNQ6wzhU", 
      github: "https://github.com/SaloniRawat7300/powerbi",
      gradient: "from-blue-500 via-indigo-500 to-purple-500"
    },
    { 
      title: "Python EDA on COVID-19 Data Analysis", 
      desc: "Exploratory Data Analysis of COVID-19 dataset using Python to uncover pandemic patterns, analyze infection trends, and visualize public health metrics for data-driven insights.", 
      image: project2Img, 
      tech: ["Python", "Pandas", "Data Science", "Public Health", "EDA"], 
      live: "https://www.linkedin.com/posts/saloni12_datascience-python-publichealth-activity-7317211981663424512-Y-bO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgaEcEBI2CVYLgZz19hyBIoja4SNQ6wzhU", 
      github: "https://github.com/SaloniRawat7300/COVID-19data-Analysis",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500"
    },
    { 
      title: "Library Management System using Java Swing", 
      desc: "Desktop application for library management built with Java Swing, featuring book cataloging, member management, and transaction tracking with intuitive GUI interface.", 
      image: project3Img, 
      tech: ["Java", "Java Swing", "GUI Development", "Desktop Application"], 
      live: "https://www.linkedin.com/posts/saloni12_java-swing-studentproject-activity-7348885975474851840-dSW1?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgaEcEBI2CVYLgZz19hyBIoja4SNQ6wzhU", 
      github: "https://github.com/SaloniRawat7300/LMS",
      gradient: "from-purple-500 via-pink-500 to-rose-500"
    },
    { 
      title: "Machine Learning on Heart Dataset", 
      desc: "Machine learning project analyzing heart disease dataset to predict cardiovascular risks using classification algorithms and feature engineering techniques.", 
      image: project4Img, 
      tech: ["Machine Learning", "Python", "Data Science", "Classification", "Healthcare Analytics"], 
      live: "https://www.linkedin.com/posts/saloni12_machinelearning-datascience-python-activity-7403130672711688192-qNGH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEgaEcEBI2CVYLgZz19hyBIoja4SNQ6wzhU", 
      github: "https://github.com/SaloniRawat7300/Machine-learning",
      gradient: "from-orange-500 via-amber-500 to-yellow-500"
    }
  ];

  return (
    <section id="projects" className="py-8 md:py-12 px-4 max-w-[1400px] mx-auto relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight pb-2 drop-shadow-[0_0_15px_rgba(139,92,246,0.2)]">Featured Projects</h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6 mx-auto px-4">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative p-[1px] rounded-2xl transition-all duration-300 hover:scale-[1.01]"
          >
            {/* Glowing Gradient Border */}
            <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-10 group-hover:opacity-100 blur-sm group-hover:blur-md transition-all duration-500 rounded-2xl`} />
            
            <div className="relative bg-[#0b0f19] rounded-2xl overflow-hidden h-full flex flex-col md:flex-row border border-white/5">
              {/* Project Image - Final polished width */}
              <div className="h-48 md:h-auto md:w-60 lg:w-64 overflow-hidden relative flex-shrink-0">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0b0f19]/60 md:to-transparent" />
              </div>

              {/* Project Content - Polished padding */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 py-0.5 bg-white/10 rounded-md text-[9px] uppercase tracking-widest font-bold text-white/70 border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.desc}
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-xs font-bold tracking-wide flex items-center gap-2"
                  >
                    <Github size={14} /> Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`px-4 py-2 rounded-xl bg-gradient-to-r ${project.gradient} text-white transition-all text-xs font-bold tracking-wide hover:shadow-lg flex items-center gap-2`}
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
