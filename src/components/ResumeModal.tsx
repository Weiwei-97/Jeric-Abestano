import React from 'react';
import { X, Printer, Download, Award, CheckCircle2 } from 'lucide-react';
import { PersonalInfo, WorkExperience, Certification } from '../types';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  personalInfo: PersonalInfo;
  experiences: WorkExperience[];
  certifications: Certification[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  personalInfo,
  experiences,
  certifications,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl bg-neutral-900 rounded-sm border border-amber-900/40 shadow-2xl overflow-hidden my-auto">
        
        {/* Modal Controls Header */}
        <div className="p-4 bg-neutral-950 border-b border-amber-900/30 flex items-center justify-between text-neutral-200">
          <div className="flex items-center gap-2">
            <span className="text-[11px] uppercase tracking-widest font-semibold text-amber-500 font-mono">
              Curriculum Vitae Preview
            </span>
            <span className="text-neutral-700">•</span>
            <span className="text-xs text-neutral-400 font-sans">Jeric Abestano Resume</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm text-xs font-semibold uppercase tracking-wider bg-amber-500 text-black hover:bg-amber-400 shadow-sm transition-all cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save as PDF
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-sm text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Area */}
        <div className="max-h-[80vh] overflow-y-auto p-4 sm:p-8 bg-black/60">
          
          {/* Paper Sheet (Styled like traditional academic/hospitality resume) */}
          <div
            id="printable-resume"
            className="max-w-3xl mx-auto bg-white text-zinc-900 p-8 sm:p-12 rounded-xl shadow-xl font-sans text-xs sm:text-sm leading-normal border border-zinc-200"
          >
            {/* Header */}
            <div className="border-b-2 border-zinc-900 pb-4 mb-6">
              <h1 className="font-serif text-3xl font-bold tracking-tight text-zinc-950">
                {personalInfo.fullName}
              </h1>
              <p className="text-base text-zinc-700 font-medium mt-0.5">
                Hospitality Management • BSHM Candidate
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-600 mt-2">
                <span>{personalInfo.phone}</span>
                <span>|</span>
                <span>{personalInfo.email}</span>
                <span>|</span>
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Career Objective */}
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2">
                Career Objective
              </h2>
              <p className="text-zinc-700 leading-relaxed text-xs sm:text-sm">
                {personalInfo.careerObjective}
              </p>
            </div>

            {/* Work Experience */}
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-3">
                Work Experience
              </h2>

              <div className="space-y-4">
                {experiences.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-zinc-900 text-sm">{exp.company}</span>
                      <span className="text-xs italic text-zinc-600">{exp.period}</span>
                    </div>
                    <div className="text-xs text-zinc-700 italic font-medium">{exp.role}</div>
                    <ul className="list-disc list-inside text-xs text-zinc-600 mt-1 space-y-0.5 pl-1">
                      <li>{exp.description}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2">
                Education
              </h2>
              <div>
                <div className="font-bold text-zinc-900">{personalInfo.education.school}</div>
                <div className="text-zinc-700 italic text-xs">
                  {personalInfo.education.degree} ({personalInfo.education.status})
                </div>
                <div className="text-zinc-500 text-xs">{personalInfo.education.location}</div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2">
                Certifications
              </h2>
              <ul className="list-disc list-inside text-xs text-zinc-700 space-y-1 pl-1">
                {certifications.map((cert) => (
                  <li key={cert.id}>
                    <strong className="text-zinc-900">{cert.title}</strong> — {cert.issuer} — {cert.formattedDate}
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Skills */}
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2">
                Core Skills
              </h2>
              <p className="text-xs text-zinc-700">
                Active Listening &nbsp;·&nbsp; Multitasking &nbsp;·&nbsp; Adaptability &nbsp;·&nbsp; Communication &nbsp;·&nbsp; Food Service &nbsp;·&nbsp; Creative Projects
              </p>
            </div>

            {/* Languages */}
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2">
                Languages
              </h2>
              <p className="text-xs text-zinc-700">
                Filipino &nbsp;·&nbsp; English
              </p>
            </div>

            {/* Personal Information */}
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2">
                Personal Information
              </h2>
              <div className="grid grid-cols-2 gap-y-1.5 text-xs text-zinc-700">
                <div><strong>Date of Birth:</strong> {personalInfo.dob}</div>
                <div><strong>Gender:</strong> {personalInfo.gender}</div>
                <div><strong>Civil Status:</strong> {personalInfo.civilStatus}</div>
                <div><strong>Citizenship:</strong> {personalInfo.citizenship}</div>
                <div className="col-span-2"><strong>Place of Birth:</strong> {personalInfo.pob}</div>
              </div>
            </div>

            {/* Certification statement and applicant signature */}
            <div className="pt-4 border-t border-zinc-300 text-xs text-zinc-600">
              <p className="italic">
                I hereby certify that the above information is true and correct to the best of my knowledge, belief, and ability.
              </p>

              <div className="mt-8">
                <div className="font-bold text-zinc-900 text-sm">Abestano, Jeric</div>
                <div className="text-[11px] text-zinc-500">Applicant's Signature over Printed Name</div>
              </div>
            </div>

          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
          <span>Official CV format based on submitted credentials</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
