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
    <section id="mind-meld" className="py-24 bg-[#050505] border-t border-amber-900/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] text-amber-500 font-semibold mb-3">
            <span className="w-6 h-[1px] bg-amber-500/50"></span>
            <Gamepad2 className="w-3.5 h-3.5" />
            Featured Creative Project
            <span className="w-6 h-[1px] bg-amber-500/50"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
            Mind Meld 2.0
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed font-sans">
            An interactive web game exploring creative technology and AI-assisted software development by a hospitality student.
          </p>

          {/* Official Tags */}
          <div className="mt-5 flex flex-wrap justify-center items-center gap-2">
            <span className="px-3 py-1 rounded-sm bg-amber-500/10 border border-amber-500/30 text-[10px] uppercase tracking-wider font-semibold text-amber-500">
              Browser Game
            </span>
            <span className="px-3 py-1 rounded-sm bg-neutral-900/60 border border-amber-900/30 text-[10px] uppercase tracking-wider font-medium text-neutral-300">
              AI-Assisted
            </span>
            <span className="px-3 py-1 rounded-sm bg-neutral-900/60 border border-amber-900/30 text-[10px] uppercase tracking-wider font-medium text-neutral-300">
              Interactive
            </span>
            <span className="px-3 py-1 rounded-sm bg-neutral-900/60 border border-amber-900/30 text-[10px] uppercase tracking-wider font-medium text-neutral-300">
              Live on GitHub Pages
            </span>
          </div>
        </div>

        {/* Featured Project Showcase Card */}
        <div className="rounded-sm bg-neutral-900/40 border border-amber-900/40 shadow-2xl overflow-hidden">
          
          {/* Top Project Banner */}
          <div className="relative aspect-[16/7] sm:aspect-[21/9] w-full overflow-hidden bg-black">
            <img
              src={bannerImg}
              alt="Mind Meld 2.0 Web Game Banner"
              className="w-full h-full object-cover object-center opacity-85 hover:scale-105 transition-transform duration-700"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
            
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-neutral-950/80 backdrop-blur-md border border-amber-900/40 text-[11px] font-mono text-amber-500">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span>
                Online & Playable
              </span>
            </div>

            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-8 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h3 className="font-serif text-2xl sm:text-4xl font-light text-white drop-shadow-md">
                  Mind Meld 2.0
                </h3>
                <p className="text-xs sm:text-sm text-amber-500 font-mono mt-1">
                  https://weiwei-97.github.io/MIND-MELD-2.0/
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider text-black bg-amber-500 hover:bg-amber-400 shadow-md transition-all cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  Play Live Now
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => setPlayModalOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs uppercase tracking-wider font-semibold text-neutral-200 bg-neutral-900/90 backdrop-blur-md hover:bg-neutral-800 border border-amber-900/40 transition-colors cursor-pointer"
                  title="Play right inside this page"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-amber-500" />
                  Embed Player
                </button>
              </div>
            </div>
          </div>

          {/* Project Details and QR Code Section */}
          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-t border-amber-900/20">
            
            {/* Left 7 Columns: Story & Features */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-semibold text-amber-500 mb-2 flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" />
                  Creator Inspiration
                </h4>
                <p className="text-neutral-200 text-sm sm:text-base leading-relaxed font-sans">
                  "{project.description}"
                </p>
              </div>

              {/* Key Features List */}
              <div className="space-y-3">
                <h5 className="text-[10px] uppercase tracking-widest font-semibold text-neutral-400">
                  Game Features & Highlights
                </h5>
                <div className="space-y-2">
                  {project.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                      <div className="w-5 h-5 rounded-sm bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5 text-amber-500 text-[10px] font-mono font-bold">
                        {fIdx + 1}
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Toolbar */}
              <div className="pt-4 border-t border-amber-900/20 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-sm text-xs font-medium text-neutral-200 bg-neutral-950 hover:bg-neutral-900 border border-amber-900/30 hover:border-amber-500/50 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-amber-500" />
                      <span className="text-amber-500">Link Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-amber-500" />
                      <span>Copy Game URL</span>
                    </>
                  )}
                </button>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-500 hover:underline font-mono"
                >
                  Open in New Tab
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </div>

            {/* Right 5 Columns: Scannable QR Code Box */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-xs p-6 rounded-sm bg-neutral-950 border border-amber-900/40 shadow-xl flex flex-col items-center text-center relative group">
                
                {/* QR Code Title Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-neutral-900 border border-amber-900/30 text-[10px] uppercase tracking-wider font-semibold text-neutral-300 mb-4">
                  <Smartphone className="w-3.5 h-3.5 text-amber-500" />
                  Scan with Phone Camera
                </div>

                {/* QR Code Canvas / Image Display */}
                <div className="p-3 bg-white rounded-sm shadow-md border-2 border-white mb-4 relative">
                  {qrDataUrl ? (
                    <img
                      src={qrDataUrl}
                      alt="Scan to play Mind Meld on mobile"
                      className="w-48 h-48 sm:w-52 sm:h-52 object-contain"
                    />
                  ) : (
                    <div className="w-48 h-48 flex items-center justify-center text-neutral-400 text-xs">
                      Generating QR...
                    </div>
                  )}
                </div>

                {/* Instruction */}
                <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                  Point your phone's camera at the QR code to instantly launch <strong className="text-white">Mind Meld 2.0</strong> on your device.
                </p>

                {/* QR Action Buttons */}
                <div className="mt-4 flex items-center gap-2 w-full">
                  <button
                    type="button"
                    onClick={handleDownloadQr}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-amber-900/30 transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-amber-500" />
                    Save QR
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-amber-900/30 transition-colors cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5 text-amber-500" />
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
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div className="relative w-full max-w-5xl h-[85vh] bg-[#050505] rounded-sm border border-amber-900/40 shadow-2xl flex flex-col overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-4 bg-neutral-950 border-b border-amber-900/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-amber-500 flex items-center justify-center text-black font-bold">
                  <Gamepad2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif font-light text-white text-base">
                    Mind Meld 2.0 — Embedded Playroom
                  </h3>
                  <p className="text-[11px] text-neutral-400 font-mono">
                    Created by Jeric Abestano • https://weiwei-97.github.io/MIND-MELD-2.0/
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-sm text-xs font-medium text-neutral-300 hover:text-white bg-neutral-900 border border-amber-900/30 hover:bg-neutral-800 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-amber-500" />
                  Open in Tab
                </a>
                <button
                  type="button"
                  onClick={() => setPlayModalOpen(false)}
                  className="p-1.5 rounded-sm text-neutral-400 hover:text-white hover:bg-neutral-900 transition-colors cursor-pointer"
                  aria-label="Close game modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* iFrame Game Screen */}
            <div className="flex-1 bg-black relative">
              <iframe
                src={project.url}
                title="Mind Meld 2.0 Web Game"
                className="w-full h-full border-0"
                allow="fullscreen"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-neutral-950 border-t border-amber-900/20 text-center text-xs text-neutral-400">
              Note: If your browser restricts embedded frames, you can click <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-amber-500 underline font-medium">here to launch Mind Meld 2.0 directly in a new tab</a>.
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
