import React from 'react';
import { Briefcase, Calendar, CheckCircle2, UtensilsCrossed, Coffee, ChefHat } from 'lucide-react';
import { WorkExperience } from '../types';

interface ExperienceProps {
  experiences: WorkExperience[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const getExperienceIcon = (id: string) => {
    if (id.includes('coffee')) return <Coffee className="w-5 h-5 text-amber-500" />;
    if (id.includes('tootie')) return <ChefHat className="w-5 h-5 text-amber-500" />;
    return <UtensilsCrossed className="w-5 h-5 text-amber-500" />;
  };

  return (
    <section id="experience" className="py-24 bg-[#050505] border-t border-amber-900/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] text-amber-500 font-semibold mb-3">
            <span className="w-6 h-[1px] bg-amber-500/50"></span>
            <Briefcase className="w-3.5 h-3.5" />
            Hands-On Experience
            <span className="w-6 h-[1px] bg-amber-500/50"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
            Food Service Internships (SIL)
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed font-sans">
            Supervised Industry Learning placements demonstrating consistent performance in order preparation, customer interaction, and food safety standards.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Timeline Guide Line */}
          <div className="hidden sm:block absolute left-7 top-6 bottom-6 w-[1px] bg-amber-900/30" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative flex flex-col sm:flex-row items-start gap-6 group"
              >
                {/* Timeline Icon Node */}
                <div className="hidden sm:flex shrink-0 w-14 h-14 rounded-sm bg-neutral-950 border border-amber-900/50 group-hover:border-amber-500 items-center justify-center shadow-lg transition-all duration-300 z-10">
                  {getExperienceIcon(exp.id)}
                </div>

                {/* Main Card Content */}
                <div className="w-full p-6 sm:p-7 rounded-sm bg-neutral-900/40 border border-amber-900/20 hover:border-amber-900/40 shadow-xl transition-all duration-300 group-hover:bg-neutral-900/60">
                  
                  {/* Top metadata line */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-amber-900/20">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm bg-amber-500/10 text-amber-500 border border-amber-500/30">
                        {exp.type}
                      </span>
                      <span className="text-xs text-neutral-500 font-mono hidden sm:inline">SIL #{experiences.length - index}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-neutral-400 bg-neutral-950 px-3 py-1 rounded-sm border border-amber-900/30">
                      <Calendar className="w-3.5 h-3.5 text-amber-500" />
                      <span className="font-mono text-neutral-300 text-xs">{exp.period}</span>
                    </div>
                  </div>

                  {/* Role and Establishment */}
                  <div className="mt-4">
                    <h3 className="font-serif text-2xl font-light text-white group-hover:text-amber-500 transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mt-0.5 font-sans">
                      {exp.role}
                    </p>
                  </div>

                  {/* Summary Description */}
                  <p className="mt-3 text-sm text-neutral-300 leading-relaxed font-sans">
                    {exp.description}
                  </p>

                  {/* Specific Highlights Checklist */}
                  <div className="mt-5 space-y-2 pt-4 border-t border-amber-900/20">
                    {exp.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tag Pills */}
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-wider font-medium px-2.5 py-1 rounded-sm bg-neutral-950 text-neutral-400 border border-amber-900/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
