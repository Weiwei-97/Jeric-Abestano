import React, { useState } from 'react';
import { GraduationCap, Award, CheckCircle, Calendar, School, ShieldAlert, Sparkles } from 'lucide-react';
import { Certification, PersonalInfo } from '../types';

interface EducationCertificationsProps {
  certifications: Certification[];
  personalInfo: PersonalInfo;
}

export const EducationCertifications: React.FC<EducationCertificationsProps> = ({
  certifications,
  personalInfo,
}) => {
  const [filter, setFilter] = useState<'all' | 'tesda' | 'education'>('all');

  const filteredCerts = certifications.filter(() => filter === 'all' || filter === 'tesda');
  const showEducation = filter === 'all' || filter === 'education';

  return (
    <section id="education-certifications" className="py-20 bg-white/70 backdrop-blur-xs border-t border-stone-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-800 font-bold mb-2.5">
            <span className="w-5 h-[2px] bg-amber-600"></span>
            <GraduationCap className="w-3.5 h-3.5" />
            Qualifications & Credentials
            <span className="w-5 h-[2px] bg-amber-600"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Education & TESDA NC II Certifications
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto">
            Recognized national qualifications establishing verified practical skills in major areas of hotel, restaurant, and hospitality services.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-lg bg-stone-100 border border-stone-200 shadow-2xs">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-amber-700 text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              All Credentials ({certifications.length + 1})
            </button>
            <button
              type="button"
              onClick={() => setFilter('tesda')}
              className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'tesda'
                  ? 'bg-amber-700 text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              TESDA NC II ({certifications.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('education')}
              className={`px-4 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'education'
                  ? 'bg-amber-700 text-white shadow-xs'
                  : 'text-stone-700 hover:text-stone-950'
              }`}
            >
              Academic Degree (1)
            </button>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Education Card */}
          {showEducation && (
            <div className="md:col-span-2 lg:col-span-3 p-6 sm:p-8 rounded-xl bg-white border border-stone-200 shadow-sm relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0 shadow-2xs">
                    <School className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm bg-amber-50 text-amber-900 text-[10px] font-bold uppercase tracking-wider mb-2 border border-amber-200">
                      Undergraduate Degree
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                      {personalInfo.education.degree}
                    </h3>
                    <p className="text-sm text-amber-800 font-semibold font-sans mt-1">
                      {personalInfo.education.school} — {personalInfo.education.location}
                    </p>
                    <p className="text-sm text-stone-700 mt-2 max-w-2xl leading-relaxed">
                      Comprehensive 4-year curriculum covering Hotel Operations, Culinary Arts, Front Office Management, Bartending, Food & Beverage Control, and Customer Service Excellence.
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex flex-col sm:items-end gap-1 bg-stone-50 p-4 rounded-xl border border-stone-200">
                  <div className="text-[10px] uppercase tracking-wider text-stone-500 font-bold">Academic Status</div>
                  <div className="text-base font-bold font-serif text-stone-900 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
                    Currently 4th Year
                  </div>
                  <div className="text-xs text-stone-600 font-medium">Dumaguete City Campus</div>
                </div>
              </div>

              {/* Bottom solid amber accent bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-600"></div>
            </div>
          )}

          {/* Certifications Cards */}
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-xl bg-white border border-stone-200 hover:border-amber-400 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-stone-100">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-sm bg-amber-50 text-amber-900 text-[10px] font-bold tracking-wider uppercase border border-amber-200">
                    <Award className="w-3.5 h-3.5 text-amber-700" />
                    {cert.credentialLevel}
                  </span>
                  <span className="text-xs text-stone-600 font-medium flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-amber-700" />
                    {cert.formattedDate}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors leading-snug">
                  {cert.title}
                </h3>
                
                <p className="text-[11px] font-bold text-stone-500 uppercase tracking-wide mt-1">
                  {cert.category}
                </p>

                {/* Issuer */}
                <div className="mt-4 p-3 rounded-lg bg-stone-50 border border-stone-200">
                  <div className="text-[10px] uppercase tracking-wider text-stone-500 font-bold">Issuing Institution</div>
                  <div className="text-xs font-bold text-stone-800 mt-0.5">{cert.issuer}</div>
                </div>
              </div>

              {/* Verified Footer */}
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-amber-800 font-bold text-[11px]">
                  <CheckCircle className="w-4 h-4 text-amber-700" />
                  Competency Verified
                </span>
                <span className="text-stone-500 font-mono text-[10px] uppercase tracking-wider font-semibold">TESDA Standard</span>
              </div>
            </div>
          ))}

        </div>

        {/* Verification Note Banner */}
        <div className="mt-10 p-4 rounded-xl bg-amber-50/80 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-800 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white border border-amber-300 flex items-center justify-center text-amber-700 shrink-0 shadow-2xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-stone-900">TESDA NC II Credentials:</span> All 5 National Certificates certify industry-standard operational competencies recognized across hotels, restaurants, and resorts nationwide.
            </div>
          </div>
          <span className="shrink-0 text-amber-900 font-mono text-xs font-bold bg-white px-2.5 py-1 rounded-sm border border-amber-200">
            Issued 2024 – 2026
          </span>
        </div>

      </div>
    </section>
  );
};
