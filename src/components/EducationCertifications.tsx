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
    <section id="education-certifications" className="py-24 bg-[#050505] border-t border-amber-900/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] text-amber-500 font-semibold mb-3">
            <span className="w-6 h-[1px] bg-amber-500/50"></span>
            <GraduationCap className="w-3.5 h-3.5" />
            Qualifications & Credentials
            <span className="w-6 h-[1px] bg-amber-500/50"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
            Education & TESDA NC II Certifications
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed font-sans">
            Recognized national qualifications establishing verified practical skills in major areas of hotel, restaurant, and hospitality services.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-sm bg-neutral-900/60 border border-amber-900/30">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-amber-500 text-black shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Credentials ({certifications.length + 1})
            </button>
            <button
              type="button"
              onClick={() => setFilter('tesda')}
              className={`px-4 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'tesda'
                  ? 'bg-amber-500 text-black shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              TESDA NC II ({certifications.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('education')}
              className={`px-4 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'education'
                  ? 'bg-amber-500 text-black shadow-sm'
                  : 'text-neutral-400 hover:text-white'
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
            <div className="md:col-span-2 lg:col-span-3 p-6 sm:p-8 rounded-sm bg-neutral-900/40 border border-amber-900/40 shadow-xl relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-neutral-950 border border-amber-900/50 flex items-center justify-center text-amber-500 shrink-0 shadow-lg">
                    <School className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-sm bg-amber-500/10 text-amber-500 text-[10px] font-bold uppercase tracking-widest mb-2 border border-amber-500/30">
                      Undergraduate Degree
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-white">
                      {personalInfo.education.degree}
                    </h3>
                    <p className="text-sm text-amber-500 font-medium font-sans mt-1">
                      {personalInfo.education.school} — {personalInfo.education.location}
                    </p>
                    <p className="text-sm text-neutral-300 mt-2 max-w-2xl leading-relaxed">
                      Comprehensive 4-year curriculum covering Hotel Operations, Culinary Arts, Front Office Management, Bartending, Food & Beverage Control, and Customer Service Excellence.
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex flex-col sm:items-end gap-1.5 bg-neutral-950/80 p-4 rounded-sm border border-amber-900/30">
                  <div className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold">Academic Status</div>
                  <div className="text-base font-medium font-serif text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                    Currently 4th Year
                  </div>
                  <div className="text-xs text-neutral-400">Dumaguete City Campus</div>
                </div>
              </div>

              {/* Bottom solid amber accent bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-500"></div>
            </div>
          )}

          {/* Certifications Cards */}
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-sm bg-neutral-900/40 border border-amber-900/20 hover:border-amber-900/40 shadow-lg transition-all duration-300 flex flex-col justify-between group hover:bg-neutral-900/60"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-amber-900/20">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-sm bg-amber-500/10 text-amber-500 text-[10px] font-bold tracking-widest uppercase border border-amber-500/30">
                    <Award className="w-3 h-3 text-amber-500" />
                    {cert.credentialLevel}
                  </span>
                  <span className="text-xs text-neutral-400 flex items-center gap-1 font-mono">
                    <Calendar className="w-3 h-3 text-amber-500" />
                    {cert.formattedDate}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-light text-white group-hover:text-amber-500 transition-colors leading-snug">
                  {cert.title}
                </h3>
                
                <p className="text-[11px] font-medium text-neutral-400 uppercase tracking-wide mt-1">
                  {cert.category}
                </p>

                {/* Issuer */}
                <div className="mt-4 p-3 rounded-sm bg-neutral-950/80 border border-amber-900/30">
                  <div className="text-[10px] uppercase tracking-widest text-neutral-500 font-medium">Issuing Institution</div>
                  <div className="text-xs font-semibold text-neutral-200 mt-0.5">{cert.issuer}</div>
                </div>
              </div>

              {/* Verified Footer */}
              <div className="mt-6 pt-4 border-t border-amber-900/20 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-amber-500 font-medium text-[11px]">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Competency Verified
                </span>
                <span className="text-neutral-500 font-mono text-[10px] uppercase tracking-wider">TESDA Standard</span>
              </div>
            </div>
          ))}

        </div>

        {/* Verification Note Banner */}
        <div className="mt-12 p-4 rounded-sm bg-neutral-900/40 border border-amber-900/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-300">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-sm bg-neutral-950 border border-amber-900/50 flex items-center justify-center text-amber-500 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-white">TESDA NC II Credentials:</span> All 5 National Certificates certify industry-standard operational competencies recognized across hotels, restaurants, and resorts nationwide.
            </div>
          </div>
          <span className="shrink-0 text-amber-500 font-mono text-xs">
            Issued 2024 – 2026
          </span>
        </div>

      </div>
    </section>
  );
};
