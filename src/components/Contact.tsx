import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { PersonalInfo } from '../types';

interface ContactProps {
  personalInfo: PersonalInfo;
}

export const Contact: React.FC<ContactProps> = ({ personalInfo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate sending message with realistic feedback
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 900);
  };

  const handleMailtoDirect = () => {
    const subject = encodeURIComponent(formData.subject || 'Inquiry regarding Hospitality Opportunity');
    const body = encodeURIComponent(
      `Hello Jeric,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] border-t border-amber-900/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] text-amber-500 font-semibold mb-3">
            <span className="w-6 h-[1px] bg-amber-500/50"></span>
            <Mail className="w-3.5 h-3.5" />
            Direct Communication
            <span className="w-6 h-[1px] bg-amber-500/50"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
            Connect with Jeric
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed font-sans">
            Interested in discussing hospitality opportunities, food service roles, or creative projects? Reach out directly.
          </p>
        </div>

        {/* Two-Column Grid: Contact Information & Functional Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 5 Columns: Direct Contact Methods */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Phone Card */}
            <div className="p-5 rounded-sm bg-neutral-900/40 border border-amber-900/20 hover:border-amber-900/40 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-sm bg-neutral-950 border border-amber-900/50 flex items-center justify-center text-amber-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold">Phone Number</span>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="block text-sm sm:text-base font-semibold text-white hover:text-amber-500 transition-colors mt-0.5 font-mono"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2 rounded-sm text-neutral-400 hover:text-white bg-neutral-950 border border-amber-900/30 hover:border-amber-500/50 transition-colors cursor-pointer"
                  title="Copy phone number"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-amber-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-sm bg-neutral-900/40 border border-amber-900/20 hover:border-amber-900/40 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-sm bg-neutral-950 border border-amber-900/50 flex items-center justify-center text-amber-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold">Primary Email</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="block text-sm sm:text-base font-semibold text-white hover:text-amber-500 transition-colors mt-0.5 truncate max-w-[220px] sm:max-w-xs font-mono"
                    >
                      {personalInfo.email}
                    </a>
                    <span className="text-[10px] text-neutral-400 block mt-0.5 font-mono">
                      Alt: {personalInfo.studentEmail}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2 rounded-sm text-neutral-400 hover:text-white bg-neutral-950 border border-amber-900/30 hover:border-amber-500/50 transition-colors shrink-0 cursor-pointer"
                  title="Copy email address"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-amber-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-sm bg-neutral-900/40 border border-amber-900/20 hover:border-amber-900/40 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-sm bg-neutral-950 border border-amber-900/50 flex items-center justify-center text-amber-500">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold">Residential Location</span>
                    <p className="text-sm font-semibold text-white mt-0.5 leading-snug">
                      {personalInfo.location}
                    </p>
                    <a
                      href="https://maps.google.com/?q=Dumaguete+City+Negros+Oriental"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-amber-500 hover:underline mt-1 font-medium font-mono"
                    >
                      View on Google Maps
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Badge */}
            <div className="p-4 rounded-sm bg-neutral-950/80 border border-amber-900/30 flex items-center gap-3 text-xs text-neutral-400 font-sans">
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Available for service shifts, interviews, and project collaborations in Dumaguete City and neighboring areas.</span>
            </div>

          </div>

          {/* Right 7 Columns: Functional Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-sm bg-neutral-900/40 border border-amber-900/40 shadow-xl">
              <h3 className="font-serif text-xl sm:text-2xl font-light text-white flex items-center gap-2 mb-2">
                <MessageSquare className="w-5 h-5 text-amber-500" />
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-6 font-sans">
                Leave a direct message or employment inquiry for Jeric below.
              </p>

              {submitted ? (
                <div className="p-6 rounded-sm bg-neutral-950 border border-amber-500/40 text-center space-y-3 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-sm bg-amber-500/10 text-amber-500 border border-amber-500/30 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-light text-white">
                    Thank You for Your Message!
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto font-sans leading-relaxed">
                    Your note has been recorded. Jeric will respond as soon as possible. You can also launch your local mail app directly.
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-amber-900/30 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                    <button
                      type="button"
                      onClick={handleMailtoDirect}
                      className="px-4 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-black cursor-pointer"
                    >
                      Open in Email App
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-1.5">
                        Your Name <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Santos"
                        className="w-full px-4 py-2.5 rounded-sm bg-neutral-950 border border-amber-900/30 text-neutral-100 placeholder-neutral-600 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-1.5">
                        Your Email <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. contact@company.com"
                        className="w-full px-4 py-2.5 rounded-sm bg-neutral-950 border border-amber-900/30 text-neutral-100 placeholder-neutral-600 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-subject" className="block text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-1.5">
                      Subject <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Hospitality Internship / Job Opportunity"
                      className="w-full px-4 py-2.5 rounded-sm bg-neutral-950 border border-amber-900/30 text-neutral-100 placeholder-neutral-600 text-sm focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-[10px] font-semibold uppercase tracking-widest text-neutral-400 mb-1.5">
                      Message <span className="text-amber-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message or inquiry here..."
                      className="w-full px-4 py-2.5 rounded-sm bg-neutral-950 border border-amber-900/30 text-neutral-100 placeholder-neutral-600 text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm text-xs font-semibold uppercase tracking-wider text-black bg-amber-500 hover:bg-amber-400 shadow-md transition-all disabled:opacity-50 cursor-pointer"
                    >
                      {submitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleMailtoDirect}
                      className="text-xs text-neutral-400 hover:text-amber-500 underline transition-colors cursor-pointer font-sans"
                    >
                      Or open draft in your Email client
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
