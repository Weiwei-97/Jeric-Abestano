import React from 'react';
import { MapPin, Mail, Phone, Award, GraduationCap, ChevronDown, Gamepad2, FileText, ArrowUpRight, Hotel, Coffee, Sparkles, ShieldCheck } from 'lucide-react';
import { PersonalInfo } from '../types';

interface HeroProps {
  personalInfo: PersonalInfo;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ personalInfo, onOpenResume }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          
          {/* Left Column: Text & Information */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-amber-300/80 text-[11px] uppercase tracking-wider text-amber-900 font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
              <span>Available for Hospitality & Guest Services</span>
            </div>

            {/* Name and Title */}
            <div className="space-y-1.5">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-stone-900 leading-tight">
                JERIC <span className="text-amber-700 font-normal">ABESTANO</span>
              </h1>
              <p className="text-amber-800 uppercase tracking-[0.25em] text-xs font-bold pt-1">
                Hospitality Management & Digital Creator
              </p>
            </div>

            {/* Career Objective */}
            <div className="p-5 rounded-lg bg-white/95 border border-stone-200 border-l-4 border-l-amber-600 shadow-xs max-w-2xl text-stone-800">
              <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-amber-800 mb-1.5 flex items-center gap-2">
                <span className="w-4 h-[2px] bg-amber-600"></span>
                Career Objective
              </div>
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-sans italic">
                "{personalInfo.careerObjective}"
              </p>
            </div>

            {/* Location & Quick Contact Badges */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-stone-700">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-stone-200 shadow-2xs font-medium">
                <MapPin className="w-3.5 h-3.5 text-amber-700" />
                Dumaguete City, Negros Oriental
              </span>
              <a
                href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-stone-200 hover:border-amber-500 hover:text-stone-950 transition-colors shadow-2xs font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-amber-700" />
                {personalInfo.phone}
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-stone-200 hover:border-amber-500 hover:text-stone-950 transition-colors shadow-2xs font-medium"
              >
                <Mail className="w-3.5 h-3.5 text-amber-700" />
                {personalInfo.email}
              </a>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#mind-meld"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs uppercase tracking-wider font-bold text-white bg-amber-700 hover:bg-amber-800 shadow-sm transition-all group cursor-pointer"
              >
                <Gamepad2 className="w-4 h-4" />
                Explore Mind Meld Game
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs uppercase tracking-wider font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 hover:border-stone-400 transition-all cursor-pointer shadow-2xs"
              >
                <FileText className="w-3.5 h-3.5 text-amber-700" />
                View Full Resume
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs uppercase tracking-wider font-semibold text-stone-700 hover:text-stone-950 bg-stone-100 hover:bg-stone-200 border border-stone-200 transition-colors"
              >
                Contact Me
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-3 border-t border-stone-200">
              <div className="p-3 rounded-lg bg-white/90 border border-stone-200 shadow-2xs">
                <div className="text-xl font-serif font-bold text-amber-700">4th Year</div>
                <div className="text-[10px] uppercase tracking-wider text-stone-600 font-sans mt-0.5 font-semibold">BSHM Student</div>
              </div>
              <div className="p-3 rounded-lg bg-white/90 border border-stone-200 shadow-2xs">
                <div className="text-xl font-serif font-bold text-amber-700">5x NC II</div>
                <div className="text-[10px] uppercase tracking-wider text-stone-600 font-sans mt-0.5 font-semibold">TESDA Certified</div>
              </div>
              <div className="p-3 rounded-lg bg-white/90 border border-stone-200 shadow-2xs">
                <div className="text-xl font-serif font-bold text-amber-700">3 Internships</div>
                <div className="text-[10px] uppercase tracking-wider text-stone-600 font-sans mt-0.5 font-semibold">Food Service SIL</div>
              </div>
              <div className="p-3 rounded-lg bg-white/90 border border-stone-200 shadow-2xs">
                <div className="text-xl font-serif font-bold text-amber-700">1 Web Game</div>
                <div className="text-[10px] uppercase tracking-wider text-stone-600 font-sans mt-0.5 font-semibold">Mind Meld 2.0</div>
              </div>
            </div>

          </div>

          {/* Right Column: Architectural Executive Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Executive Identity Card */}
              <div className="relative rounded-xl overflow-hidden bg-white border border-stone-200 shadow-xl p-6 sm:p-7">
                
                {/* Top Card Header: Crest & Monogram */}
                <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-lg bg-stone-900 border border-amber-600 flex items-center justify-center text-amber-400 shadow-inner">
                      <span className="font-serif text-xl font-bold tracking-wider text-amber-400">JA</span>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-amber-800">
                        Hospitality Profile
                      </div>
                      <h3 className="font-serif text-xl font-bold text-stone-900 leading-tight">
                        Jeric Abestano
                      </h3>
                      <p className="text-xs text-stone-600 font-sans font-medium">
                        Asian College • Class of 2026
                      </p>
                    </div>
                  </div>

                  <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                </div>

                {/* Core Credentials & Focus Areas */}
                <div className="py-4 space-y-4 text-xs">
                  <div className="space-y-1">
                    <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500">
                      Academic Degree
                    </div>
                    <div className="text-stone-900 font-semibold text-sm flex items-center gap-2">
                      <Hotel className="w-4 h-4 text-amber-700 shrink-0" />
                      <span>Bachelor of Science in Hospitality Management</span>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500">
                      TESDA National Certifications (NC II)
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-stone-800 font-medium">
                      <span className="p-2 rounded-md bg-stone-50 border border-stone-200 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                        Food & Beverage
                      </span>
                      <span className="p-2 rounded-md bg-stone-50 border border-stone-200 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                        Cookery
                      </span>
                      <span className="p-2 rounded-md bg-stone-50 border border-stone-200 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                        Housekeeping
                      </span>
                      <span className="p-2 rounded-md bg-stone-50 border border-stone-200 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                        Front Office
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500">
                      Industry Internships (SIL)
                    </div>
                    <div className="p-2.5 rounded-md bg-stone-50 border border-stone-200 text-[11px] text-stone-800 font-medium flex items-center gap-2">
                      <Coffee className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                      <span>Tootie's Kitchen • Overdose Coffee • Gabby's Bistro</span>
                    </div>
                  </div>
                </div>

                {/* Card footer details */}
                <div className="pt-3.5 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600 font-medium">
                  <span className="flex items-center gap-1.5 text-amber-800 font-semibold">
                    <Award className="w-3.5 h-3.5 text-amber-700" />
                    5 TESDA NC II Holder
                  </span>
                  <span className="text-stone-400">•</span>
                  <span className="text-stone-600">Dumaguete City, PH</span>
                </div>

                {/* Bottom solid amber accent bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-600"></div>
              </div>

              {/* Floating Pill: Creator Badge */}
              <div className="absolute -bottom-3 -left-3 sm:-left-4 p-2 sm:p-2.5 rounded-lg bg-white border border-stone-200 shadow-md flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-amber-600 flex items-center justify-center text-white font-bold">
                  <Gamepad2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[9px] font-bold text-stone-500 uppercase tracking-wider">Creator of</div>
                  <div className="text-xs text-stone-900 font-bold">Mind Meld 2.0 Game</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center text-[10px] uppercase tracking-widest text-stone-500 hover:text-amber-700 transition-colors font-semibold"
            aria-label="Scroll to About section"
          >
            <span>Explore Overview</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce mt-1 text-amber-700" />
          </a>
        </div>
      </div>
    </section>
  );
};
