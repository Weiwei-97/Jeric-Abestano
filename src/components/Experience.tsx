import React from 'react';
import { Briefcase, Calendar, CheckCircle2, UtensilsCrossed, Coffee, ChefHat } from 'lucide-react';
import { WorkExperience } from '../types';

interface ExperienceProps {
  experiences: WorkExperience[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  const getExperienceIcon = (id: string) => {
    if (id.includes('coffee')) return <Coffee className="w-5 h-5 text-amber-700" />;
    if (id.includes('tootie')) return <ChefHat className="w-5 h-5 text-amber-700" />;
    return <UtensilsCrossed className="w-5 h-5 text-amber-700" />;
  };

  return (
    <section id="experience" className="py-20 bg-stone-50/70 backdrop-blur-xs border-t border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-800 font-bold mb-2.5">
            <span className="w-5 h-[2px] bg-amber-600"></span>
            <Briefcase className="w-3.5 h-3.5" />
            Hands-On Experience
            <span className="w-5 h-[2px] bg-amber-600"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Food Service Internships (SIL)
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto">
            Supervised Industry Learning placements demonstrating consistent performance in order preparation, customer interaction, and food safety standards.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Timeline Guide Line */}
          <div className="hidden sm:block absolute left-7 top-6 bottom-6 w-[2px] bg-stone-200" />

          <div className="space-y-7">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="relative flex flex-col sm:flex-row items-start gap-6 group"
              >
                {/* Timeline Icon Node */}
                <div className="hidden sm:flex shrink-0 w-14 h-14 rounded-xl bg-white border border-stone-200 group-hover:border-amber-500 items-center justify-center shadow-sm transition-all duration-300 z-10">
                  {getExperienceIcon(exp.id)}
                </div>

                {/* Main Card Content */}
                <div className="w-full p-6 sm:p-7 rounded-xl bg-white border border-stone-200 hover:border-stone-300 shadow-sm transition-all duration-300">
                  
                  {/* Top metadata line */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-stone-100">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm bg-amber-50 text-amber-900 border border-amber-200">
                        {exp.type}
                      </span>
                      <span className="text-xs text-stone-500 font-mono font-semibold hidden sm:inline">SIL #{experiences.length - index}</span>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-stone-700 bg-stone-50 px-3 py-1 rounded-sm border border-stone-200">
                      <Calendar className="w-3.5 h-3.5 text-amber-700" />
                      <span className="font-mono text-stone-800 text-xs font-semibold">{exp.period}</span>
                    </div>
                  </div>

                  {/* Role and Establishment */}
                  <div className="mt-4">
                    <h3 className="font-serif text-2xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-xs uppercase tracking-wider font-bold text-stone-600 mt-0.5 font-sans">
                      {exp.role}
                    </p>
                  </div>

                  {/* Summary Description */}
                  <p className="mt-3 text-sm text-stone-700 leading-relaxed font-sans">
                    {exp.description}
                  </p>

                  {/* Specific Highlights Checklist */}
                  <div className="mt-4 space-y-2 pt-3.5 border-t border-stone-100">
                    {exp.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800">
                        <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                        <span className="leading-snug">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tag Pills */}
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 border border-stone-200"
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
