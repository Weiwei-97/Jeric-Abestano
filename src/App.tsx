/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ThemeBackground } from './components/ThemeBackground';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { EducationCertifications } from './components/EducationCertifications';
import { Skills } from './components/Skills';
import { MindMeldProject } from './components/MindMeldProject';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import {
  personalInfo,
  workExperiences,
  certifications,
  skillCategories,
  mindMeldProject,
} from './data/portfolioData';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen text-stone-900 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-950 relative transition-colors duration-700">
        
        {/* Dynamic randomized canvas/pattern background */}
        <ThemeBackground />

        {/* Floating Theme Customizer & Quick Randomizer */}
        <ThemeSwitcher />

        {/* Sticky Header Navigation */}
        <Navbar
          onOpenResume={() => setResumeModalOpen(true)}
        />

        {/* Main Content Sections */}
        <main className="flex-grow relative z-10">
          {/* Hero Section */}
          <Hero
            personalInfo={personalInfo}
            onOpenResume={() => setResumeModalOpen(true)}
          />

          {/* About Section */}
          <About personalInfo={personalInfo} />

          {/* Work Experience Section */}
          <Experience experiences={workExperiences} />

          {/* Education & TESDA Certifications */}
          <EducationCertifications
            certifications={certifications}
            personalInfo={personalInfo}
          />

          {/* Skills Section */}
          <Skills categories={skillCategories} />

          {/* Featured Project: Mind Meld 2.0 */}
          <MindMeldProject project={mindMeldProject} />

          {/* Contact Section */}
          <Contact personalInfo={personalInfo} />
        </main>

        {/* Footer */}
        <Footer
          personalInfo={personalInfo}
          onOpenResume={() => setResumeModalOpen(true)}
        />

        {/* Printable Resume Modal */}
        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
          personalInfo={personalInfo}
          experiences={workExperiences}
          certifications={certifications}
        />
      </div>
    </ThemeProvider>
  );
}


