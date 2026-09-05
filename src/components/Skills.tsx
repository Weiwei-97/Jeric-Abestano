import React from 'react';
import { CheckCircle2, Sparkles, Utensils, Users, Laptop, Star } from 'lucide-react';
import { SkillCategory } from '../types';

interface SkillsProps {
  categories: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ categories }) => {
  const getCategoryIcon = (index: number) => {
    if (index === 0) return <Utensils className="w-5 h-5 text-amber-700" />;
    if (index === 1) return <Users className="w-5 h-5 text-amber-700" />;
    return <Laptop className="w-5 h-5 text-amber-700" />;
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
    <section id="skills" className="py-20 bg-stone-50/70 backdrop-blur-xs border-t border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-800 font-bold mb-2.5">
            <span className="w-5 h-[2px] bg-amber-600"></span>
            <Sparkles className="w-3.5 h-3.5" />
            Capabilities & Focus
            <span className="w-5 h-[2px] bg-amber-600"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Core Competencies & Skills
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto">
            A balanced skill set spanning hands-on food service craft, guest engagement empathy, and creative digital curiosity.
          </p>

          {/* Primary Core Skills Badges */}
          <div className="mt-7 flex flex-wrap justify-center items-center gap-2">
            {corePills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-stone-200 text-xs uppercase tracking-wider font-bold text-stone-800 shadow-2xs hover:border-amber-400 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600"></span>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Categorized Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, idx) => (
            <div
              key={category.title}
              className="p-6 sm:p-7 rounded-xl bg-white border border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                    {getCategoryIcon(idx)}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-stone-900 leading-tight">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed mb-5 font-sans">
                  {category.description}
                </p>

                {/* Skills List with descriptions */}
                <div className="space-y-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-lg bg-stone-50 border border-stone-200 hover:border-stone-300 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-wider font-bold text-stone-900 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                          {skill.name}
                        </span>
                      </div>
                      {skill.description && (
                        <p className="text-xs text-stone-600 mt-1 pl-6 leading-relaxed font-sans font-medium">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom accent indicator */}
              <div className="mt-6 pt-3.5 border-t border-stone-100 text-[11px] text-stone-500 flex items-center justify-between font-medium">
                <span className="uppercase tracking-wider text-[10px] font-bold">Domain Focus</span>
                <span className="text-amber-800 font-bold">Verified in Practicum</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
