import React, { createContext, useContext, useState, useEffect } from 'react';
import { Theme, themes, allHospitalityImages } from '../data/themes';

export type ImageOpacityLevel = 'subtle' | 'balanced' | 'vivid';

interface ThemeContextType {
  theme: Theme;
  activeImage: string;
  activeImageTitle: string;
  activeImageCaption: string;
  imageOpacity: ImageOpacityLevel;
  setImageOpacity: (level: ImageOpacityLevel) => void;
  blurEnabled: boolean;
  setBlurEnabled: (enabled: boolean) => void;
  setThemeById: (id: string) => void;
  randomizeTheme: () => void;
  randomizeImage: () => void;
  setCustomImage: (url: string, title?: string, caption?: string) => void;
  allThemes: Theme[];
  lastNotification: string | null;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const savedId = localStorage.getItem('jeric_portfolio_theme');
      if (savedId) {
        const found = themes.find((t) => t.id === savedId);
        if (found) return found;
      }
    } catch {
      // Ignore localStorage errors
    }
    return themes[0];
  });

  const [activeImage, setActiveImage] = useState<string>(() => {
    try {
      const savedImg = localStorage.getItem('jeric_portfolio_bg_image');
      if (savedImg) return savedImg;
    } catch {
      // Ignore
    }
    return themes[0].bgImage;
  });

  const [activeImageTitle, setActiveImageTitle] = useState<string>(themes[0].themeImages[0]?.title || 'Grand Hotel');
  const [activeImageCaption, setActiveImageCaption] = useState<string>(themes[0].imageCaption);

  const [imageOpacity, setImageOpacityState] = useState<ImageOpacityLevel>(() => {
    try {
      const saved = localStorage.getItem('jeric_portfolio_bg_opacity') as ImageOpacityLevel;
      if (saved && ['subtle', 'balanced', 'vivid'].includes(saved)) return saved;
    } catch {
      // Ignore
    }
    return 'balanced'; // Optimal balance: clear background photograph + 100% readable text
  });

  const [blurEnabled, setBlurEnabledState] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('jeric_portfolio_bg_blur');
      if (saved !== null) return saved === 'true';
    } catch {
      // Ignore
    }
    return false;
  });

  const [lastNotification, setLastNotification] = useState<string | null>(null);

  // Apply CSS variables to root whenever theme changes
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--bg-page', theme.bgPage);
    root.style.setProperty('--bg-surface', theme.bgSurface);
    root.style.setProperty('--bg-surface-subtle', theme.bgSurfaceSubtle);
    root.style.setProperty('--bg-card', theme.bgCard);
    root.style.setProperty('--border-subtle', theme.borderSubtle);
    root.style.setProperty('--border-strong', theme.borderStrong);
    root.style.setProperty('--text-heading', theme.textHeading);
    root.style.setProperty('--text-body', theme.textBody);
    root.style.setProperty('--text-muted', theme.textMuted);
    root.style.setProperty('--accent-primary', theme.accentPrimary);
    root.style.setProperty('--accent-secondary', theme.accentSecondary);
    root.style.setProperty('--accent-hover', theme.accentHover);
    root.style.setProperty('--accent-glow', theme.accentGlow);

    try {
      localStorage.setItem('jeric_portfolio_theme', theme.id);
    } catch {
      // Ignore
    }
  }, [theme]);

  const setImageOpacity = (level: ImageOpacityLevel) => {
    setImageOpacityState(level);
    try {
      localStorage.setItem('jeric_portfolio_bg_opacity', level);
    } catch {
      // Ignore
    }
    showNotification(`Photo visibility: ${level.toUpperCase()}`);
  };

  const setBlurEnabled = (enabled: boolean) => {
    setBlurEnabledState(enabled);
    try {
      localStorage.setItem('jeric_portfolio_bg_blur', String(enabled));
    } catch {
      // Ignore
    }
    showNotification(`Photo depth blur: ${enabled ? 'ON' : 'OFF'}`);
  };

  const setThemeById = (id: string) => {
    const selected = themes.find((t) => t.id === id);
    if (selected) {
      setTheme(selected);
      // Pick the primary or first image from this theme
      const img = selected.themeImages[0] || { url: selected.bgImage, title: selected.name, caption: selected.imageCaption };
      setActiveImage(img.url);
      setActiveImageTitle(img.title);
      setActiveImageCaption(img.caption);
      try {
        localStorage.setItem('jeric_portfolio_bg_image', img.url);
      } catch {
        // Ignore
      }
      showNotification(`Theme: ${selected.name}`);
    }
  };

  const randomizeTheme = () => {
    // Filter out current theme to ensure change
    const available = themes.filter((t) => t.id !== theme.id);
    const randomIndex = Math.floor(Math.random() * available.length);
    const chosen = available[randomIndex];
    setTheme(chosen);

    // Pick a random photo from the chosen theme's curated gallery
    const imgIndex = Math.floor(Math.random() * chosen.themeImages.length);
    const chosenImg = chosen.themeImages[imgIndex] || {
      url: chosen.bgImage,
      title: chosen.name,
      caption: chosen.imageCaption,
    };

    setActiveImage(chosenImg.url);
    setActiveImageTitle(chosenImg.title);
    setActiveImageCaption(chosenImg.caption);

    try {
      localStorage.setItem('jeric_portfolio_bg_image', chosenImg.url);
    } catch {
      // Ignore
    }

    showNotification(`🎲 Random Theme: ${chosen.name} (${chosenImg.title})`);
  };

  const randomizeImage = () => {
    // Pick another image from all available hospitality imagery
    const availableImages = allHospitalityImages.filter((img) => img.url !== activeImage);
    const randomIndex = Math.floor(Math.random() * availableImages.length);
    const chosenImg = availableImages[randomIndex];

    if (chosenImg) {
      setActiveImage(chosenImg.url);
      setActiveImageTitle(chosenImg.title);
      setActiveImageCaption(chosenImg.caption);

      try {
        localStorage.setItem('jeric_portfolio_bg_image', chosenImg.url);
      } catch {
        // Ignore
      }

      showNotification(`🖼️ Random Photo: ${chosenImg.title}`);
    }
  };

  const setCustomImage = (url: string, title?: string, caption?: string) => {
    setActiveImage(url);
    if (title) setActiveImageTitle(title);
    if (caption) setActiveImageCaption(caption);
    try {
      localStorage.setItem('jeric_portfolio_bg_image', url);
    } catch {
      // Ignore
    }
    showNotification(`Photo updated: ${title || 'Custom Photo'}`);
  };

  const showNotification = (msg: string) => {
    setLastNotification(msg);
    setTimeout(() => {
      setLastNotification((current) => (current === msg ? null : current));
    }, 2800);
  };

  return (
    <ThemeContext.Provider
      value={{
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
        allThemes: themes,
        lastNotification,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
