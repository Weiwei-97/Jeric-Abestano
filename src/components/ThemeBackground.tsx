import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export const ThemeBackground: React.FC = () => {
  const { theme, activeImage, activeImageCaption, imageOpacity, blurEnabled } = useTheme();
  const [loadedImage, setLoadedImage] = useState<string>(activeImage);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  // Smooth image swap transition
  useEffect(() => {
    if (activeImage !== loadedImage) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setLoadedImage(activeImage);
        setIsTransitioning(false);
      }, 180);
      return () => clearTimeout(timer);
    }
  }, [activeImage, loadedImage]);

  // Opacity mapping based on user preference
  const opacityClass =
    imageOpacity === 'subtle'
      ? 'opacity-25'
      : imageOpacity === 'vivid'
      ? 'opacity-55'
      : 'opacity-40'; // 'balanced' (default, perfect for readability)

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 transition-colors duration-700">
      {/* 1. Dynamic Solid Base Background Color */}
      <div
        className="absolute inset-0 transition-colors duration-700"
        style={{ backgroundColor: theme.bgPage }}
      />

      {/* 2. Full-Bleed Theme Background Photograph */}
      <div
        className={`absolute inset-0 transition-all duration-700 ${opacityClass} ${
          isTransitioning ? 'opacity-0 scale-102' : 'scale-100'
        }`}
      >
        <img
          src={loadedImage}
          alt={activeImageCaption}
          className={`w-full h-full object-cover object-center transition-all duration-700 ${
            blurEnabled ? 'blur-[3px] scale-105' : 'blur-[0.5px]'
          }`}
          loading="eager"
        />
      </div>

      {/* 3. Readability Scrim: Theme-Tinted Soft Frosted Wash */}
      <div
        className="absolute inset-0 transition-all duration-700"
        style={{
          backgroundColor: theme.scrimTint || 'rgba(250, 247, 242, 0.86)',
        }}
      />

      {/* 4. Reading Channel Radial Scrim: Ensures center text is 100% readable & high contrast */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          background:
            'radial-gradient(ellipse 90% 80% at 50% 30%, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.35) 65%, transparent 100%)',
        }}
      />

      {/* 5. Radiant Floating Ambient Light Orbs */}
      <div
        className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full blur-[140px] transition-all duration-1000 opacity-70"
        style={{ backgroundColor: theme.orbColor1 }}
      />
      <div
        className="absolute top-1/3 -right-32 w-[550px] h-[550px] rounded-full blur-[130px] transition-all duration-1000 opacity-60"
        style={{ backgroundColor: theme.orbColor2 }}
      />
      <div
        className="absolute top-2/3 left-10 w-[500px] h-[500px] rounded-full blur-[140px] transition-all duration-1000 opacity-50"
        style={{ backgroundColor: theme.orbColor1 }}
      />
      <div
        className="absolute -bottom-20 right-1/4 w-[600px] h-[600px] rounded-full blur-[150px] transition-all duration-1000 opacity-50"
        style={{ backgroundColor: theme.orbColor2 }}
      />

      {/* 6. SVG Decorative Architectural Patterns */}
      <div className="absolute inset-0 opacity-[0.03] transition-opacity duration-700">
        {theme.patternType === 'art-deco' && (
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="art-deco-pat" width="60" height="60" patternUnits="userSpaceOnUse">
                <path
                  d="M30 0 L60 30 L30 60 L0 30 Z M30 10 L50 30 L30 50 L10 30 Z M30 20 L40 30 L30 40 L20 30 Z"
                  fill="none"
                  stroke="#1C1917"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#art-deco-pat)" />
          </svg>
        )}

        {theme.patternType === 'sand-dunes' && (
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="sand-pat" width="80" height="80" patternUnits="userSpaceOnUse">
                <path
                  d="M0 40 Q 20 20, 40 40 T 80 40 M0 60 Q 20 40, 40 60 T 80 60 M0 20 Q 20 0, 40 20 T 80 20"
                  fill="none"
                  stroke="#1C1917"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sand-pat)" />
          </svg>
        )}

        {theme.patternType === 'botanical' && (
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="botanical-pat" width="70" height="70" patternUnits="userSpaceOnUse">
                <circle cx="35" cy="35" r="2" fill="#132219" />
                <path
                  d="M35 15 C45 25, 45 45, 35 55 C25 45, 25 25, 35 15 Z M15 35 C25 45, 45 45, 55 35 C45 25, 25 25, 15 35 Z"
                  fill="none"
                  stroke="#132219"
                  strokeWidth="0.8"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#botanical-pat)" />
          </svg>
        )}

        {theme.patternType === 'coastal-waves' && (
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="waves-pat" width="64" height="64" patternUnits="userSpaceOnUse">
                <path
                  d="M0 32 C 16 16, 16 48, 32 32 C 48 16, 48 48, 64 32"
                  fill="none"
                  stroke="#0F172A"
                  strokeWidth="1"
                />
                <circle cx="32" cy="16" r="1.5" fill="#0F172A" />
                <circle cx="32" cy="48" r="1.5" fill="#0F172A" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#waves-pat)" />
          </svg>
        )}

        {theme.patternType === 'terrace-rays' && (
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="rays-pat" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="20" fill="none" stroke="#271813" strokeWidth="0.75" />
                <path d="M25 0 L25 50 M0 25 L50 25" stroke="#271813" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#rays-pat)" />
          </svg>
        )}

        {theme.patternType === 'modern-grid' && (
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pat" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect width="40" height="40" fill="none" stroke="#09090B" strokeWidth="0.5" />
                <circle cx="20" cy="20" r="1" fill="#09090B" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pat)" />
          </svg>
        )}
      </div>

      {/* 7. Subtle top & bottom edge gradients */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-stone-100/60 to-transparent" />
    </div>
  );
};
