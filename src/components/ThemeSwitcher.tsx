import React, { useState, useRef, useEffect } from 'react';
import { Dices, Palette, Check, Sparkles, X, ChevronUp, Image as ImageIcon, Eye, SlidersHorizontal, Shuffle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeSwitcher: React.FC = () => {
  const {
    theme,
    activeImage,
    activeImageTitle,
    activeImageCaption,
    imageOpacity,
    setImageOpacity,
    blurEnabled,
    setBlurEnabled,
    setThemeById,
    randomizeTheme,
    randomizeImage,
    setCustomImage,
    allThemes,
    lastNotification,
  } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [isShufflingImg, setIsShufflingImg] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleRandomizeAll = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsRotating(true);
    randomizeTheme();
    setTimeout(() => setIsRotating(false), 500);
  };

  const handleRandomizeImageOnly = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsShufflingImg(true);
    randomizeImage();
    setTimeout(() => setIsShufflingImg(false), 500);
  };

  return (
    <>
      {/* Floating Theme Control Pill */}
      <div
        ref={dropdownRef}
        className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2 font-sans select-none"
      >
        {/* Toast Notification Pill when theme or photo changes */}
        {lastNotification && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 px-4 py-2 rounded-full bg-white text-stone-900 border border-stone-300 shadow-xl text-xs font-semibold flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-spin" />
            <span>{lastNotification}</span>
          </div>
        )}

        {/* Expandable Theme & Photo Customizer Modal */}
        {isOpen && (
          <div className="animate-in fade-in slide-in-from-bottom-3 duration-200 w-92 max-w-[calc(100vw-32px)] p-4 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200 shadow-2xl space-y-4 text-stone-800">
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-stone-100">
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-amber-700" />
                <span className="text-xs font-bold uppercase tracking-wider text-stone-900">
                  Theme & Background Image
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
                title="Close panel"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Current Active Scene Card */}
            <div className="p-3 rounded-lg bg-stone-50 border border-stone-200 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-bold text-stone-700">
                <span className="flex items-center gap-1.5 uppercase tracking-wider text-amber-800">
                  <ImageIcon className="w-3.5 h-3.5" />
                  Active Background Scene
                </span>
                <span className="text-[10px] text-stone-500 font-mono">{theme.name}</span>
              </div>

              <div className="flex gap-3 items-center">
                <div className="w-16 h-12 rounded-md overflow-hidden shrink-0 border border-stone-300 shadow-xs relative">
                  <img
                    src={activeImage}
                    alt={activeImageTitle}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs font-bold text-stone-900 truncate">
                    {activeImageTitle}
                  </div>
                  <div className="text-[11px] text-stone-500 line-clamp-1">
                    {activeImageCaption}
                  </div>
                </div>
              </div>

              {/* Alternate photos for current theme */}
              <div className="pt-1.5">
                <div className="text-[10px] uppercase font-bold tracking-wider text-stone-500 mb-1.5">
                  Scenes for this theme:
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  {theme.themeImages.map((img, idx) => {
                    const isSelected = img.url === activeImage;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setCustomImage(img.url, img.title, img.caption)}
                        className={`group relative h-10 rounded-md overflow-hidden border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-amber-600 ring-2 ring-amber-500/40 shadow-xs'
                            : 'border-stone-300 opacity-75 hover:opacity-100'
                        }`}
                        title={img.title}
                      >
                        <img
                          src={img.url}
                          alt={img.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                        {isSelected && (
                          <div className="absolute inset-0 bg-amber-900/30 flex items-center justify-center">
                            <Check className="w-3 h-3 text-white drop-shadow-sm stroke-[3]" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Readability & Contrast Controls */}
            <div className="p-3 rounded-lg bg-amber-50/50 border border-amber-200/80 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-800 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-amber-700" />
                  Text Readability Shield
                </span>
                <span className="text-[10px] font-bold text-amber-800 font-mono">
                  {imageOpacity.toUpperCase()}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-1.5">
                {(['subtle', 'balanced', 'vivid'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setImageOpacity(lvl)}
                    className={`py-1.5 px-2 rounded-md text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      imageOpacity === lvl
                        ? 'bg-amber-700 text-white shadow-xs'
                        : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                    }`}
                  >
                    {lvl === 'subtle' ? 'Subtle' : lvl === 'balanced' ? 'Balanced' : 'Vivid'}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1">
                <label
                  htmlFor="blur-toggle"
                  className="text-[11px] font-medium text-stone-700 cursor-pointer select-none flex items-center gap-1.5"
                >
                  <SlidersHorizontal className="w-3 h-3 text-amber-700" />
                  Depth-of-field soft focus
                </label>
                <input
                  id="blur-toggle"
                  type="checkbox"
                  checked={blurEnabled}
                  onChange={(e) => setBlurEnabled(e.target.checked)}
                  className="w-4 h-4 accent-amber-700 rounded cursor-pointer"
                />
              </div>
            </div>

            {/* Quick Randomize Action Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleRandomizeAll}
                className="py-2 px-3 rounded-lg text-xs font-bold text-white bg-amber-700 hover:bg-amber-800 flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-sm"
                title="Randomly pick a new theme and image"
              >
                <Dices className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} />
                <span>Random Theme</span>
              </button>

              <button
                type="button"
                onClick={handleRandomizeImageOnly}
                className="py-2 px-3 rounded-lg text-xs font-bold text-stone-800 bg-stone-100 hover:bg-stone-200 border border-stone-300 flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-2xs"
                title="Shuffle to another high-res hospitality photo"
              >
                <Shuffle className={`w-3.5 h-3.5 text-amber-700 ${isShufflingImg ? 'animate-spin' : ''}`} />
                <span>Shuffle Photo</span>
              </button>
            </div>

            {/* All 8 Curated Themes List */}
            <div className="space-y-1 pt-1">
              <div className="text-[10px] uppercase font-bold tracking-wider text-stone-500 mb-1">
                Switch Theme Palette:
              </div>

              <div className="space-y-1.5 max-h-52 overflow-y-auto pr-1">
                {allThemes.map((t) => {
                  const isActive = t.id === theme.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => {
                        setThemeById(t.id);
                        setIsOpen(false);
                      }}
                      className={`w-full text-left p-2 rounded-lg border transition-all flex items-center justify-between group cursor-pointer ${
                        isActive
                          ? 'bg-amber-50/80 border-amber-500/80 shadow-xs'
                          : 'bg-stone-50/60 hover:bg-stone-100 border-stone-200'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        {/* Thumbnail image */}
                        <div className="w-9 h-9 rounded-md overflow-hidden shrink-0 border border-stone-300 relative">
                          <img
                            src={t.bgImage}
                            alt={t.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="overflow-hidden">
                          <div className="text-xs font-bold text-stone-900 flex items-center gap-1.5 truncate">
                            {t.name}
                            {isActive && (
                              <span className="text-[9px] uppercase px-1.5 py-0.2 rounded-full bg-amber-700 text-white font-bold">
                                Active
                              </span>
                            )}
                          </div>
                          <div className="text-[10px] text-stone-500 truncate">{t.subtitle}</div>
                        </div>
                      </div>

                      {isActive && <Check className="w-4 h-4 text-amber-700 shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Main Floating Trigger Pill */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-white/95 backdrop-blur-md border border-stone-300 shadow-xl hover:shadow-2xl transition-all">
          {/* Direct Randomize Button */}
          <button
            type="button"
            id="theme-shuffle-btn"
            onClick={handleRandomizeAll}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-stone-800 bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/30 transition-all cursor-pointer"
            title="Click to randomize theme & image"
          >
            <Dices className={`w-3.5 h-3.5 text-amber-700 ${isRotating ? 'animate-spin' : ''}`} />
            <span>Random Theme</span>
          </button>

          {/* Quick Photo Shuffle Button */}
          <button
            type="button"
            onClick={handleRandomizeImageOnly}
            className="p-1.5 rounded-full text-stone-600 hover:text-stone-950 hover:bg-stone-100 transition-colors cursor-pointer"
            title="Shuffle background image only"
          >
            <Shuffle className={`w-3.5 h-3.5 text-amber-700 ${isShufflingImg ? 'animate-spin' : ''}`} />
          </button>

          {/* Popover Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-all cursor-pointer"
            title="Open all theme and photo options"
          >
            <div className="w-4 h-4 rounded-full overflow-hidden border border-stone-300 shrink-0">
              <img src={activeImage} alt="" className="w-full h-full object-cover" />
            </div>
            <span className="hidden sm:inline text-[11px] font-bold text-stone-800">
              {theme.name}
            </span>
            <ChevronUp
              className={`w-3.5 h-3.5 text-stone-400 transition-transform ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>
      </div>
    </>
  );
};
