import React from 'react';
import { CheckCircle2, Sparkles, Utensils, Users, Laptop, Star } from 'lucide-react';
import { SkillCategory } from '../types';

interface SkillsProps {
  categories: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ categories }) => {
  const getCategoryIcon = (index: number) => {
    if (index === 0) return <Utensils className="w-5 h-5 text-amber-500" />;
    if (index === 1) return <Users className="w-5 h-5 text-amber-500" />;
    return <Laptop className="w-5 h-5 text-amber-500" />;
  };

  const corePills = [
    'Active Listening',
    'Multitasking',
    'Adaptability',
    'Communication',
    'Food Service',
    'Creative Projects',
  ];

  return (
    <section id="skills" className="py-24 bg-[#050505] border-t border-amber-900/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] text-amber-500 font-semibold mb-3">
            <span className="w-6 h-[1px] bg-amber-500/50"></span>
            <Sparkles className="w-3.5 h-3.5" />
            Capabilities & Focus
            <span className="w-6 h-[1px] bg-amber-500/50"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
            Core Competencies & Skills
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed font-sans">
            A balanced skill set spanning hands-on food service craft, guest engagement empathy, and creative digital curiosity.
          </p>

          {/* Primary Core Skills Badges */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-2.5">
            {corePills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-neutral-900/60 border border-amber-900/30 text-xs uppercase tracking-wider font-semibold text-neutral-200 hover:border-amber-500/60 transition-colors"
              >
                <span className="w-1.5 h-1.5 bg-amber-500"></span>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Categorized Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <div
              key={category.title}
              className="p-6 sm:p-7 rounded-sm bg-neutral-900/40 border border-amber-900/20 hover:border-amber-900/40 shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-sm bg-neutral-950 border border-amber-900/50 flex items-center justify-center shrink-0">
                    {getCategoryIcon(idx)}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-light text-white leading-tight">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed mb-6 font-sans">
                  {category.description}
                </p>

                {/* Skills List with descriptions */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-sm bg-neutral-950/80 border border-amber-900/30 hover:border-amber-900/50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-wider font-semibold text-neutral-200 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          {skill.name}
                        </span>
                      </div>
                      {skill.description && (
                        <p className="text-xs text-neutral-400 mt-1 pl-5 leading-relaxed font-sans">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom accent indicator */}
              <div className="mt-6 pt-4 border-t border-amber-900/20 text-[11px] text-neutral-500 flex items-center justify-between">
                <span className="uppercase tracking-widest text-[10px]">Domain Focus</span>
                <span className="text-amber-500 font-medium">Verified in Practicum</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
