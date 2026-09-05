import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import {
  Gamepad2,
  ExternalLink,
  QrCode,
  Sparkles,
  Play,
  Copy,
  Check,
  Download,
  Maximize2,
  X,
  Smartphone,
  Layers,
  Code2,
  Info,
} from 'lucide-react';
import { ProjectInfo } from '../types';
import bannerImg from '../assets/images/mind_meld_game_banner_1788635120615.jpg';

interface MindMeldProjectProps {
  project: ProjectInfo;
}

export const MindMeldProject: React.FC<MindMeldProjectProps> = ({ project }) => {
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [playModalOpen, setPlayModalOpen] = useState(false);

  useEffect(() => {
    // Generate high-resolution scannable QR code
    QRCode.toDataURL(project.url, {
      width: 400,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#ffffff',
      },
      errorCorrectionLevel: 'H',
    })
      .then((url) => {
        setQrDataUrl(url);
      })
      .catch((err) => {
        console.error('Error generating QR code', err);
      });
  }, [project.url]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(project.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadQr = () => {
    if (!qrDataUrl) return;
    const link = document.createElement('a');
    link.href = qrDataUrl;
    link.download = 'mind-meld-qr-code.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="mind-meld" className="py-20 bg-white/70 backdrop-blur-xs border-t border-stone-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-amber-800 font-bold mb-2.5">
            <span className="w-5 h-[2px] bg-amber-600"></span>
            <Gamepad2 className="w-3.5 h-3.5" />
            Featured Creative Project
            <span className="w-5 h-[2px] bg-amber-600"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Mind Meld 2.0
          </h2>
          <p className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed font-sans max-w-2xl mx-auto">
            An interactive web game exploring creative technology and AI-assisted software development by a hospitality student.
          </p>

          {/* Official Tags */}
          <div className="mt-5 flex flex-wrap justify-center items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-[11px] uppercase tracking-wider font-bold text-amber-900 shadow-2xs">
              Browser Game
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-stone-200 text-[11px] uppercase tracking-wider font-semibold text-stone-700 shadow-2xs">
              AI-Assisted
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-stone-200 text-[11px] uppercase tracking-wider font-semibold text-stone-700 shadow-2xs">
              Interactive
            </span>
            <span className="px-3 py-1 rounded-full bg-white border border-stone-200 text-[11px] uppercase tracking-wider font-semibold text-stone-700 shadow-2xs">
              Live on GitHub Pages
            </span>
          </div>
        </div>

        {/* Featured Project Showcase Card */}
        <div className="rounded-xl bg-white border border-stone-200 shadow-lg overflow-hidden">
          
          {/* Top Project Banner */}
          <div className="relative aspect-[16/7] sm:aspect-[21/9] w-full overflow-hidden bg-stone-900">
            <img
              src={bannerImg}
              alt="Mind Meld 2.0 Web Game Banner"
              className="w-full h-full object-cover object-center opacity-90 hover:scale-105 transition-transform duration-700"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent" />
            
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-stone-900/90 backdrop-blur-md border border-amber-500/40 text-[11px] font-mono text-amber-400 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                Online & Playable
              </span>
            </div>

            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-8 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h3 className="font-serif text-2xl sm:text-4xl font-bold text-white drop-shadow-md">
                  Mind Meld 2.0
                </h3>
                <p className="text-xs sm:text-sm text-amber-400 font-mono mt-1 font-semibold">
                  https://weiwei-97.github.io/MIND-MELD-2.0/
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-bold uppercase tracking-wider text-white bg-amber-700 hover:bg-amber-800 shadow-sm transition-all cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Play Live Now
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => setPlayModalOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-xs uppercase tracking-wider font-bold text-stone-900 bg-white/95 backdrop-blur-md hover:bg-white border border-stone-200 transition-colors cursor-pointer shadow-sm"
                  title="Play right inside this page"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-amber-700" />
                  Embed Player
                </button>
              </div>
            </div>
          </div>

          {/* Project Details and QR Code Section */}
          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-stone-100">
            
            {/* Left 7 Columns: Story & Features */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-amber-800 mb-2 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" />
                  Creator Inspiration
                </h4>
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-sans font-medium">
                  "{project.description}"
                </p>
              </div>

              {/* Key Features List */}
              <div className="space-y-3">
                <h5 className="text-[11px] uppercase tracking-wider font-bold text-stone-500">
                  Game Features & Highlights
                </h5>
                <div className="space-y-2">
                  {project.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-800">
                      <div className="w-5 h-5 rounded-md bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 mt-0.5 text-amber-900 text-[10px] font-mono font-bold">
                        {fIdx + 1}
                      </div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-xs font-semibold text-stone-800 bg-stone-50 hover:bg-stone-100 border border-stone-200 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Link Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-amber-700" />
                      <span>Copy Game URL</span>
                    </>
                  )}
                </button>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-800 hover:text-amber-950 font-mono font-bold underline"
                >
                  Open in New Tab
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>

            {/* Right 5 Columns: Scannable QR Code Box */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-xs p-6 rounded-xl bg-stone-50 border border-stone-200 shadow-sm flex flex-col items-center text-center relative group">
                
                {/* QR Code Title Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-stone-200 text-[10px] uppercase tracking-wider font-bold text-stone-800 mb-4 shadow-2xs">
                  <Smartphone className="w-3.5 h-3.5 text-amber-700" />
                  Scan with Phone Camera
                </div>

                {/* QR Code Canvas / Image Display */}
                <div className="p-3 bg-white rounded-lg shadow-sm border border-stone-200 mb-4 relative">
                  {qrDataUrl ? (
                    <img
                      src={qrDataUrl}
                      alt="Scan to play Mind Meld on mobile"
                      className="w-48 h-48 sm:w-52 sm:h-52 object-contain"
                    />
                  ) : (
                    <div className="w-48 h-48 flex items-center justify-center text-stone-400 text-xs">
                      Generating QR...
                    </div>
                  )}
                </div>

                {/* Instruction */}
                <p className="text-xs text-stone-600 font-sans leading-relaxed">
                  Point your phone's camera at the QR code to instantly launch <strong className="text-stone-900">Mind Meld 2.0</strong> on your device.
                </p>

                {/* QR Action Buttons */}
                <div className="mt-4 flex items-center gap-2 w-full">
                  <button
                    type="button"
                    onClick={handleDownloadQr}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold uppercase tracking-wider text-stone-800 bg-white hover:bg-stone-100 border border-stone-200 transition-colors cursor-pointer shadow-2xs"
                  >
                    <Download className="w-3.5 h-3.5 text-amber-700" />
                    Save QR
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md text-xs font-bold uppercase tracking-wider text-stone-800 bg-white hover:bg-stone-100 border border-stone-200 transition-colors cursor-pointer shadow-2xs"
                  >
                    <Copy className="w-3.5 h-3.5 text-amber-700" />
                    Copy
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Embedded Gameplay Modal */}
      {playModalOpen && (
        <div
          id="gameplay-modal-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-900/80 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-5xl h-[85vh] bg-white rounded-xl border border-stone-200 shadow-2xl flex flex-col overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-600 flex items-center justify-center text-white font-bold">
                  <Gamepad2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-stone-900 text-base">
                    Mind Meld 2.0 — Embedded Playroom
                  </h3>
                  <p className="text-[11px] text-stone-600 font-mono">
                    Created by Jeric Abestano • https://weiwei-97.github.io/MIND-MELD-2.0/
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-bold text-stone-800 hover:text-stone-950 bg-white border border-stone-300 hover:bg-stone-100 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-amber-700" />
                  Open in Tab
                </a>
                <button
                  type="button"
                  onClick={() => setPlayModalOpen(false)}
                  className="p-1.5 rounded-md text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors cursor-pointer"
                  aria-label="Close game modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* iFrame Game Screen */}
            <div className="flex-1 bg-stone-100 relative">
              <iframe
                src={project.url}
                title="Mind Meld 2.0 Web Game"
                className="w-full h-full border-0"
                allow="fullscreen"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-stone-50 border-t border-stone-200 text-center text-xs text-stone-600">
              Note: If your browser restricts embedded frames, you can click <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-amber-800 underline font-bold">here to launch Mind Meld 2.0 directly in a new tab</a>.
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
