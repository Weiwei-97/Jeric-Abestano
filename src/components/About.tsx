import React from 'react';
import { User, Calendar, MapPin, Globe, Sparkles, HeartHandshake, ShieldCheck, Coffee } from 'lucide-react';
import { PersonalInfo } from '../types';

interface AboutProps {
  personalInfo: PersonalInfo;
}

export const About: React.FC<AboutProps> = ({ personalInfo }) => {
  return (
    <section id="about" className="py-24 bg-[#050505] border-t border-amber-900/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] text-amber-500 font-semibold mb-3">
            <span className="w-6 h-[1px] bg-amber-500/50"></span>
            <User className="w-3.5 h-3.5" />
            Background & Profile
            <span className="w-6 h-[1px] bg-amber-500/50"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
            Hospitality Professional & Curious Creator
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed font-sans">
            Combining disciplined hospitality training with a creative drive for technology, customer connection, and service excellence.
          </p>
        </div>

        {/* Grid: Story & Personal Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Detailed Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-sm bg-neutral-900/40 border border-amber-900/20 space-y-5">
              <h3 className="font-serif text-xl sm:text-2xl font-light text-white flex items-center gap-2.5">
                <HeartHandshake className="w-5 h-5 text-amber-500" />
                Dedication to Guest Service & Hospitality
              </h3>
              
              <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a fourth-year <strong className="text-white font-medium">Bachelor of Science in Hospitality Management</strong> student at <strong className="text-amber-500 font-medium">Asian College</strong> in Dumaguete City, Negros Oriental. Over the past four years, I have committed myself to mastering the art of guest service, operational readiness, and food and beverage service.
                </p>
                <p>
                  Through multiple Supervised Industry Learning (SIL) internships at established local venues including <strong className="text-white font-medium">Tootie's Kitchen</strong>, <strong className="text-white font-medium">Overdose Coffee</strong>, and <strong className="text-white font-medium">Gabby's Bistro</strong>, I have gained real-world exposure to culinary preparation, specialty drink dispensing, dining ambiance maintenance, and active customer engagement.
                </p>
                <p>
                  Beyond traditional hospitality roles, I have a deep curiosity for creative technology. I leveraged modern AI tools to conceptualize, design, and deploy <strong className="text-amber-500 font-medium">Mind Meld 2.0</strong>, an interactive browser puzzle game. This fusion of hospitality empathy and digital problem-solving shapes my unique approach to modern guest experiences.
                </p>
              </div>

              {/* 3 Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-5 border-t border-amber-900/20">
                <div className="p-4 rounded-sm bg-neutral-950/80 border border-amber-900/30">
                  <Coffee className="w-4 h-4 text-amber-500 mb-2" />
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-white">Attentive Care</h4>
                  <p className="text-xs text-neutral-400 mt-1">Listening proactively to guest nuances and dietary choices.</p>
                </div>
                <div className="p-4 rounded-sm bg-neutral-950/80 border border-amber-900/30">
                  <ShieldCheck className="w-4 h-4 text-amber-500 mb-2" />
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-white">Certified Standards</h4>
                  <p className="text-xs text-neutral-400 mt-1">5 National NC II credentials verifying practical competency.</p>
                </div>
                <div className="p-4 rounded-sm bg-neutral-950/80 border border-amber-900/30">
                  <Sparkles className="w-4 h-4 text-amber-500 mb-2" />
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-white">Tech Adaptability</h4>
                  <p className="text-xs text-neutral-400 mt-1">Comfortable navigating digital POS, AI tools, and workflows.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Personal Information Table & Credentials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Personal Details Card */}
            <div className="p-6 rounded-sm bg-neutral-900/40 border border-amber-900/20 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-amber-900/20">
                <h3 className="font-serif text-lg font-light text-white flex items-center gap-2">
                  <User className="w-4 h-4 text-amber-500" />
                  Personal Information
                </h3>
                <span className="text-[10px] uppercase tracking-widest text-amber-500 font-sans font-semibold">Official Details</span>
              </div>

              <dl className="divide-y divide-neutral-800/60 text-xs sm:text-sm">
                
                <div className="py-2.5 flex justify-between items-center">
                  <dt className="text-neutral-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                    Date of Birth
                  </dt>
                  <dd className="font-medium text-neutral-200">{personalInfo.dob}</dd>
                </div>

                <div className="py-2.5 flex justify-between items-center">
                  <dt className="text-neutral-400">Gender</dt>
                  <dd className="font-medium text-neutral-200">{personalInfo.gender}</dd>
                </div>

                <div className="py-2.5 flex justify-between items-center">
                  <dt className="text-neutral-400">Civil Status</dt>
                  <dd className="font-medium text-neutral-200">{personalInfo.civilStatus}</dd>
                </div>

                <div className="py-2.5 flex justify-between items-center">
                  <dt className="text-neutral-400 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-neutral-500" />
                    Citizenship
                  </dt>
                  <dd className="font-medium text-neutral-200">{personalInfo.citizenship}</dd>
                </div>

                <div className="py-2.5 flex justify-between items-center">
                  <dt className="text-neutral-400">Place of Birth</dt>
                  <dd className="font-medium text-neutral-200">{personalInfo.pob}</dd>
                </div>

                <div className="py-2.5 flex justify-between items-start gap-4">
                  <dt className="text-neutral-400 flex items-center gap-1.5 shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                    Current Address
                  </dt>
                  <dd className="font-medium text-neutral-200 text-right">{personalInfo.location}</dd>
                </div>

              </dl>
            </div>

            {/* Languages Card */}
            <div className="p-6 rounded-sm bg-neutral-900/40 border border-amber-900/20">
              <h3 className="font-serif text-lg font-light text-white flex items-center gap-2 mb-4">
                <Globe className="w-4 h-4 text-amber-500" />
                Languages
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {personalInfo.languages.map((lang) => (
                  <div key={lang.name} className="p-3 rounded-sm bg-neutral-950/80 border border-amber-900/30">
                    <div className="text-xs uppercase tracking-wider font-semibold text-white">{lang.name}</div>
                    <div className="text-[11px] text-amber-500 font-medium mt-0.5">{lang.proficiency}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
