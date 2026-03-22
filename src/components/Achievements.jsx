import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ExternalLink, Code2, Award, ChevronRight, BarChart3, Target, X, FileText } from 'lucide-react';
import achievement1Img from '../assets/achievement-1.jpeg';
import achievement2Img from '../assets/achievement-2.jpeg';

const Achievements = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight pb-2 drop-shadow-[0_0_15px_rgba(168,85,247,0.2)]">Achievements</h2>
        <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-secondary mx-auto mt-4 rounded-full" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative p-[1px] rounded-3xl transition-all duration-300"
        >
          {/* Glowing Gradient Border */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-30 blur-md transition-all duration-500 rounded-3xl" />
          
          <div className="relative bg-white/[0.03] backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/5 h-full overflow-hidden">
            {/* Background Icon Watermark */}
            <div className="absolute -bottom-10 -right-10 p-8 text-white/[0.02] group-hover:text-primary/[0.05] transition-colors duration-700">
              <Trophy size={200} />
            </div>

            <div className="relative z-10">
              <div className="space-y-8">
                {/* Achievement 1 */}
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-shrink-0 flex items-start justify-center lg:justify-start">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-500">
                      <Trophy className="text-primary" size={32} />
                    </div>
                  </div>

                  <div className="flex-grow space-y-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                        Social Impact Initiatives
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/50 text-sm">
                        <span className="flex items-center gap-1.5"><Award size={16} className="text-primary" /> Golden Hands NGO</span>
                        <span className="flex items-center gap-1.5"><Target size={16} className="text-secondary" /> Community Service</span>
                      </div>
                    </div>

                    <p className="text-white/70 text-base leading-relaxed border-l-2 border-primary/30 pl-4 py-1 bg-white/[0.01]">
                      Actively participated with the <span className="text-primary font-medium">Golden Hands government NGO</span> in social awareness initiatives, including <span className="text-secondary font-medium">cleanliness drives</span> and <span className="text-accent font-medium">community engagement activities</span>. Contributed towards promoting hygiene, environmental responsibility, and social well-being, demonstrating a commitment to social impact.
                    </p>

                    <div className="space-y-3">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-2">
                        <Award size={14} className="text-primary" /> Key Contributions
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {['Social Awareness', 'Cleanliness Drives', 'Community Engagement', 'Environmental Responsibility'].map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-80 flex-shrink-0 space-y-6 lg:border-l lg:border-white/5 lg:pl-8">
                    <div className="space-y-3">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-2">
                        <FileText size={14} className="text-accent" /> Certificate Preview
                      </h4>
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative rounded-xl overflow-hidden cursor-pointer group/img"
                      >
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                          <span className="text-white text-xs font-bold bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">Click to View</span>
                        </div>
                        <img 
                          src={achievement1Img} 
                          alt="Achievement Certificate" 
                          className="w-full h-auto object-cover rounded-xl border border-white/10 group-hover/img:border-primary/30 transition-all duration-300"
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Achievement 2 */}
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-shrink-0 flex items-start justify-center lg:justify-start">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-500">
                      <Code2 className="text-secondary" size={32} />
                    </div>
                  </div>

                  <div className="flex-grow space-y-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                        Collaborative Hackathon
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/50 text-sm">
                        <span className="flex items-center gap-1.5"><Code2 size={16} className="text-secondary" /> Team Development</span>
                        <span className="flex items-center gap-1.5"><Target size={16} className="text-accent" /> Innovation Challenge</span>
                      </div>
                    </div>

                    <p className="text-white/70 text-base leading-relaxed border-l-2 border-secondary/30 pl-4 py-1 bg-white/[0.01]">
                      Participated in a <span className="text-secondary font-medium">collaborative hackathon</span> where I worked in a team to design and develop an innovative solution within a limited timeframe. Contributed to <span className="text-accent font-medium">ideation, problem-solving, and implementation</span> of the project by applying technical and analytical skills. Gained hands-on experience in teamwork, time management, and rapid prototyping while presenting the final solution to judges.
                    </p>

                    <div className="space-y-3">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-2">
                        <Award size={14} className="text-secondary" /> Skills Gained
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {['Teamwork', 'Time Management', 'Rapid Prototyping', 'Creative Problem Solving'].map((tag, i) => (
                          <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium hover:bg-secondary/10 hover:border-secondary/30 hover:text-secondary transition-all duration-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-80 flex-shrink-0 space-y-6 lg:border-l lg:border-white/5 lg:pl-8">
                    <div className="space-y-3">
                      <h4 className="text-[10px] font-bold uppercase tracking-widest text-white/40 flex items-center gap-2">
                        <FileText size={14} className="text-accent" /> Certificate Preview
                      </h4>
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative rounded-xl overflow-hidden cursor-pointer group/img"
                      >
                        <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                          <span className="text-white text-xs font-bold bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">Click to View</span>
                        </div>
                        <img 
                          src={achievement2Img} 
                          alt="Achievement Certificate" 
                          className="w-full h-auto object-cover rounded-xl border border-white/10 group-hover/img:border-secondary/30 transition-all duration-300"
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom buttons */}
              <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-white/5">
                <a 
                  href="https://drive.google.com/file/d/1K98y0H27HYhT2SRIvXQuLKZqLIbI3SmA/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-xl flex items-center gap-2 hover:bg-primary/80 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/10"
                >
                  <Trophy size={18} /> View NGO Certificate
                </a>
                <a 
                  href="https://drive.google.com/file/d/13QKOgMkt0495Xil2s3ERatjZ51mBdkQD/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-secondary text-white text-sm font-bold rounded-xl flex items-center gap-2 hover:bg-secondary/80 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-secondary/10"
                >
                  <Code2 size={18} /> View Hackathon Certificate
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Achievements;
