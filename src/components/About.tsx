import React from 'react';
import { User, Calendar, MapPin, Globe, Sparkles, HeartHandshake, ShieldCheck, Coffee } from 'lucide-react';
import { PersonalInfo } from '../types';

interface AboutProps {
  personalInfo: PersonalInfo;
}

export const About: React.FC<AboutProps> = ({ personalInfo }) => {
  return (
    <section id="about" className="py-20 bg-white/70 backdrop-blur-xs border-t border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-800 font-bold mb-2.5">
            <span className="w-5 h-[2px] bg-amber-600"></span>
            <User className="w-3.5 h-3.5" />
            Background & Profile
            <span className="w-5 h-[2px] bg-amber-600"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Hospitality Professional & Curious Creator
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto">
            Combining disciplined hospitality training with a creative drive for technology, customer connection, and service excellence.
          </p>
        </div>

        {/* Grid: Story & Personal Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Detailed Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-xl bg-white border border-stone-200 shadow-sm space-y-5">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2.5">
                <HeartHandshake className="w-5 h-5 text-amber-700" />
                Dedication to Guest Service & Hospitality
              </h3>
              
              <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a fourth-year <strong className="text-stone-900 font-semibold">Bachelor of Science in Hospitality Management</strong> student at <strong className="text-amber-800 font-bold">Asian College</strong> in Dumaguete City, Negros Oriental. Over the past four years, I have committed myself to mastering the art of guest service, operational readiness, and food and beverage service.
                </p>
                <p>
                  Through multiple Supervised Industry Learning (SIL) internships at established local venues including <strong className="text-stone-900 font-semibold">Tootie's Kitchen</strong>, <strong className="text-stone-900 font-semibold">Overdose Coffee</strong>, and <strong className="text-stone-900 font-semibold">Gabby's Bistro</strong>, I have gained real-world exposure to culinary preparation, specialty drink dispensing, dining ambiance maintenance, and active customer engagement.
                </p>
                <p>
                  Beyond traditional hospitality roles, I have a deep curiosity for creative technology. I leveraged modern AI tools to conceptualize, design, and deploy <strong className="text-amber-800 font-bold">Mind Meld 2.0</strong>, an interactive browser puzzle game. This fusion of hospitality empathy and digital problem-solving shapes my unique approach to modern guest experiences.
                </p>
              </div>

              {/* 3 Value Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-5 border-t border-stone-200">
                <div className="p-4 rounded-lg bg-stone-50 border border-stone-200">
                  <Coffee className="w-4 h-4 text-amber-700 mb-2" />
                  <h4 className="text-xs uppercase tracking-wider font-bold text-stone-900">Attentive Care</h4>
                  <p className="text-xs text-stone-600 mt-1 leading-normal">Listening proactively to guest nuances and dietary choices.</p>
                </div>
                <div className="p-4 rounded-lg bg-stone-50 border border-stone-200">
                  <ShieldCheck className="w-4 h-4 text-amber-700 mb-2" />
                  <h4 className="text-xs uppercase tracking-wider font-bold text-stone-900">Certified Standards</h4>
                  <p className="text-xs text-stone-600 mt-1 leading-normal">5 National NC II credentials verifying practical competency.</p>
                </div>
                <div className="p-4 rounded-lg bg-stone-50 border border-stone-200">
                  <Sparkles className="w-4 h-4 text-amber-700 mb-2" />
                  <h4 className="text-xs uppercase tracking-wider font-bold text-stone-900">Tech Adaptability</h4>
                  <p className="text-xs text-stone-600 mt-1 leading-normal">Comfortable navigating digital POS, AI tools, and workflows.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Personal Information Table & Credentials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Personal Details Card */}
            <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
                  <User className="w-4 h-4 text-amber-700" />
                  Personal Information
                </h3>
                <span className="text-[10px] uppercase tracking-wider text-amber-800 font-sans font-bold bg-amber-50 px-2 py-0.5 rounded-sm border border-amber-200">Official</span>
              </div>

              <dl className="divide-y divide-stone-100 text-xs sm:text-sm">
                
                <div className="py-2.5 flex justify-between items-center">
                  <dt className="text-stone-600 flex items-center gap-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    Date of Birth
                  </dt>
                  <dd className="font-semibold text-stone-900">{personalInfo.dob}</dd>
                </div>

                <div className="py-2.5 flex justify-between items-center">
                  <dt className="text-stone-600 font-medium">Gender</dt>
                  <dd className="font-semibold text-stone-900">{personalInfo.gender}</dd>
                </div>

                <div className="py-2.5 flex justify-between items-center">
                  <dt className="text-stone-600 font-medium">Civil Status</dt>
                  <dd className="font-semibold text-stone-900">{personalInfo.civilStatus}</dd>
                </div>

                <div className="py-2.5 flex justify-between items-center">
                  <dt className="text-stone-600 flex items-center gap-1.5 font-medium">
                    <Globe className="w-3.5 h-3.5 text-stone-400" />
                    Citizenship
                  </dt>
                  <dd className="font-semibold text-stone-900">{personalInfo.citizenship}</dd>
                </div>

                <div className="py-2.5 flex justify-between items-center">
                  <dt className="text-stone-600 font-medium">Place of Birth</dt>
                  <dd className="font-semibold text-stone-900">{personalInfo.pob}</dd>
                </div>

                <div className="py-2.5 flex justify-between items-start gap-4">
                  <dt className="text-stone-600 flex items-center gap-1.5 shrink-0 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    Current Address
                  </dt>
                  <dd className="font-semibold text-stone-900 text-right">{personalInfo.location}</dd>
                </div>

              </dl>
            </div>

            {/* Languages Card */}
            <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2 mb-4">
                <Globe className="w-4 h-4 text-amber-700" />
                Languages
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {personalInfo.languages.map((lang) => (
                  <div key={lang.name} className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                    <div className="text-xs uppercase tracking-wider font-bold text-stone-900">{lang.name}</div>
                    <div className="text-[11px] text-amber-800 font-semibold mt-0.5">{lang.proficiency}</div>
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
