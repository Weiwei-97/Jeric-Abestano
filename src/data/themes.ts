export interface ThemeImage {
  url: string;
  title: string;
  caption: string;
}

export interface Theme {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  // Background imagery
  bgImage: string;
  imageCaption: string;
  imageLocation: string;
  themeImages: ThemeImage[];
  scrimTint: string;
  // Color palette
  bgPage: string;
  bgSurface: string;
  bgSurfaceSubtle: string;
  bgCard: string;
  borderSubtle: string;
  borderStrong: string;
  textHeading: string;
  textBody: string;
  textMuted: string;
  accentPrimary: string;
  accentSecondary: string;
  accentHover: string;
  accentGlow: string;
  patternType: 'art-deco' | 'sand-dunes' | 'botanical' | 'coastal-waves' | 'terrace-rays' | 'modern-grid';
  orbColor1: string;
  orbColor2: string;
  accentBadgeBg: string;
  accentBadgeText: string;
  accentBadgeBorder: string;
  gradientText: string;
}

export const themes: Theme[] = [
  {
    id: 'grand-ivory',
    name: 'Grand Ivory & Gold',
    subtitle: 'Classic Luxury Hotel',
    badge: 'Royal Classic',
    bgImage: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=80',
    imageCaption: 'Grand 5-Star Hotel Lobby & Atrium Chandeliers',
    imageLocation: 'Metropolitan Luxury Hotel',
    themeImages: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=80',
        title: 'Grand Hotel Atrium',
        caption: 'Luxury chandelier & marble architecture',
      },
      {
        url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80',
        title: 'Fine Dining Hall',
        caption: 'Warm amber lighting and candlelit service',
      },
      {
        url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80',
        title: 'Boutique Hotel Veranda',
        caption: 'Refined marble foyer & hospitality reception',
      },
    ],
    scrimTint: 'rgba(250, 247, 242, 0.86)',
    bgPage: '#FAF7F2',
    bgSurface: '#FFFFFF',
    bgSurfaceSubtle: '#F4EFE6',
    bgCard: '#FFFFFF',
    borderSubtle: '#E8E0D4',
    borderStrong: '#D4A373',
    textHeading: '#1C1917',
    textBody: '#292524',
    textMuted: '#57534E',
    accentPrimary: '#B45309', // Warm golden amber
    accentSecondary: '#D97706',
    accentHover: '#92400E',
    accentGlow: 'rgba(217, 119, 6, 0.16)',
    patternType: 'art-deco',
    orbColor1: 'rgba(217, 119, 6, 0.14)',
    orbColor2: 'rgba(245, 158, 11, 0.10)',
    accentBadgeBg: 'rgba(217, 119, 6, 0.08)',
    accentBadgeText: '#B45309',
    accentBadgeBorder: 'rgba(217, 119, 6, 0.25)',
    gradientText: 'from-amber-700 via-amber-600 to-amber-800',
  },
  {
    id: 'champagne-sand',
    name: 'Champagne & Sand',
    subtitle: 'Boutique Island Resort',
    badge: 'Sunlit Warmth',
    bgImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=80',
    imageCaption: 'Tropical Island Resort Infinity Pool & Cabanas',
    imageLocation: 'Dumaguete Coastal Haven',
    themeImages: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2000&q=80',
        title: 'Resort Horizon Pool',
        caption: 'Tropical waters & sunlit loungers',
      },
      {
        url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2000&q=80',
        title: 'Open-Air Veranda',
        caption: 'Breezy island dining deck & palms',
      },
      {
        url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=2000&q=80',
        title: 'Beachside Villa',
        caption: 'Golden morning light over tropical villas',
      },
    ],
    scrimTint: 'rgba(247, 244, 238, 0.86)',
    bgPage: '#F7F4EE',
    bgSurface: '#FFFFFF',
    bgSurfaceSubtle: '#EFEBE2',
    bgCard: '#FFFFFF',
    borderSubtle: '#E5DDD0',
    borderStrong: '#CBBFA9',
    textHeading: '#1A1816',
    textBody: '#36322D',
    textMuted: '#665F56',
    accentPrimary: '#C2410C', // Terracotta bronze
    accentSecondary: '#D97706',
    accentHover: '#9A3412',
    accentGlow: 'rgba(194, 65, 12, 0.14)',
    patternType: 'sand-dunes',
    orbColor1: 'rgba(194, 65, 12, 0.12)',
    orbColor2: 'rgba(217, 119, 6, 0.10)',
    accentBadgeBg: 'rgba(194, 65, 12, 0.08)',
    accentBadgeText: '#C2410C',
    accentBadgeBorder: 'rgba(194, 65, 12, 0.25)',
    gradientText: 'from-orange-700 via-amber-600 to-amber-800',
  },
  {
    id: 'morning-sage',
    name: 'Morning Sage & Garden',
    subtitle: 'Courtyard Bistro & Eco-Lodge',
    badge: 'Fresh Botanical',
    bgImage: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2000&q=80',
    imageCaption: 'Sunlit Botanical Courtyard Bistro & Cafe Terrace',
    imageLocation: 'Artisanal Garden Bistro',
    themeImages: [
      {
        url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=2000&q=80',
        title: 'Garden Cafe Terrace',
        caption: 'Lush greenery and sun-dappled tables',
      },
      {
        url: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=2000&q=80',
        title: 'Glasshouse Dining Room',
        caption: 'Natural conservatory brunch atmosphere',
      },
      {
        url: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=2000&q=80',
        title: 'Alfresco Courtyard',
        caption: 'Stone courtyard with flowering botanical pots',
      },
    ],
    scrimTint: 'rgba(243, 247, 244, 0.87)',
    bgPage: '#F3F7F4',
    bgSurface: '#FFFFFF',
    bgSurfaceSubtle: '#E7EFEA',
    bgCard: '#FFFFFF',
    borderSubtle: '#DBE7DF',
    borderStrong: '#B6CDC0',
    textHeading: '#132219',
    textBody: '#26392F',
    textMuted: '#546E60',
    accentPrimary: '#047857', // Forest emerald
    accentSecondary: '#B45309',
    accentHover: '#065F46',
    accentGlow: 'rgba(4, 120, 87, 0.14)',
    patternType: 'botanical',
    orbColor1: 'rgba(4, 120, 87, 0.12)',
    orbColor2: 'rgba(180, 83, 9, 0.08)',
    accentBadgeBg: 'rgba(4, 120, 87, 0.08)',
    accentBadgeText: '#047857',
    accentBadgeBorder: 'rgba(4, 120, 87, 0.25)',
    gradientText: 'from-emerald-700 via-teal-600 to-amber-700',
  },
  {
    id: 'ocean-pearl',
    name: 'Ocean Pearl & Azure',
    subtitle: 'Waterfront Grand Resort',
    badge: 'Harbor Breeze',
    bgImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80',
    imageCaption: 'Azure Coastline Beach & Crystalline Island Waters',
    imageLocation: 'Tropical Seaside Destination',
    themeImages: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80',
        title: 'Crystalline Shoreline',
        caption: 'Pristine white sand and turquoise water',
      },
      {
        url: 'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&w=2000&q=80',
        title: 'Seaside Deck Restaurant',
        caption: 'Overwater wooden pavilion with sea breeze',
      },
      {
        url: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=2000&q=80',
        title: 'Island Palm Boardwalk',
        caption: 'Tropical coastline path and sunny marina',
      },
    ],
    scrimTint: 'rgba(244, 248, 250, 0.86)',
    bgPage: '#F4F8FA',
    bgSurface: '#FFFFFF',
    bgSurfaceSubtle: '#E8F1F5',
    bgCard: '#FFFFFF',
    borderSubtle: '#D7E5ED',
    borderStrong: '#A5C4D4',
    textHeading: '#0F172A',
    textBody: '#1E293B',
    textMuted: '#475569',
    accentPrimary: '#0284C7', // Coastal sapphire
    accentSecondary: '#D97706',
    accentHover: '#0369A1',
    accentGlow: 'rgba(2, 132, 199, 0.14)',
    patternType: 'coastal-waves',
    orbColor1: 'rgba(2, 132, 199, 0.12)',
    orbColor2: 'rgba(245, 158, 11, 0.08)',
    accentBadgeBg: 'rgba(2, 132, 199, 0.08)',
    accentBadgeText: '#0284C7',
    accentBadgeBorder: 'rgba(2, 132, 199, 0.25)',
    gradientText: 'from-sky-700 via-blue-600 to-amber-600',
  },
  {
    id: 'sunset-terracotta',
    name: 'Sunset Terracotta',
    subtitle: 'Rooftop Lounge & Veranda',
    badge: 'Golden Hour',
    bgImage: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2000&q=80',
    imageCaption: 'Golden Hour Sunset Terrace with Warm Mediterranean Glow',
    imageLocation: 'Skyline Rooftop Dining',
    themeImages: [
      {
        url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2000&q=80',
        title: 'Sunset Veranda',
        caption: 'Warm terracotta tiles and ambient sunset rays',
      },
      {
        url: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=2000&q=80',
        title: 'Bistro Evening Lights',
        caption: 'Warm festoon lighting and outdoor tables',
      },
      {
        url: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=2000&q=80',
        title: 'Rooftop Lounge View',
        caption: 'Golden horizon cocktail service atmosphere',
      },
    ],
    scrimTint: 'rgba(250, 244, 239, 0.86)',
    bgPage: '#FAF4EF',
    bgSurface: '#FFFFFF',
    bgSurfaceSubtle: '#F5EBE1',
    bgCard: '#FFFFFF',
    borderSubtle: '#EEDCD0',
    borderStrong: '#DBBFA9',
    textHeading: '#271813',
    textBody: '#442E26',
    textMuted: '#75594F',
    accentPrimary: '#EA580C', // Sunset coral
    accentSecondary: '#CA8A04',
    accentHover: '#C2410C',
    accentGlow: 'rgba(234, 88, 12, 0.15)',
    patternType: 'terrace-rays',
    orbColor1: 'rgba(234, 88, 12, 0.13)',
    orbColor2: 'rgba(202, 138, 4, 0.10)',
    accentBadgeBg: 'rgba(234, 88, 12, 0.08)',
    accentBadgeText: '#EA580C',
    accentBadgeBorder: 'rgba(234, 88, 12, 0.25)',
    gradientText: 'from-orange-700 via-rose-600 to-amber-600',
  },
  {
    id: 'modern-alabaster',
    name: 'Modern Alabaster & Brass',
    subtitle: 'Executive Metropolitan Suite',
    badge: 'Architectural',
    bgImage: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=2000&q=80',
    imageCaption: 'Contemporary High-End Executive Hotel Suite',
    imageLocation: 'Metropolitan Boutique Suite',
    themeImages: [
      {
        url: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=2000&q=80',
        title: 'Executive Room Design',
        caption: 'Crisp architectural lines and warm lighting',
      },
      {
        url: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=2000&q=80',
        title: 'Cocktail Bar & Lounge',
        caption: 'Polished brass and boutique bar counter',
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80',
        title: 'Modern Architecture',
        caption: 'Airy minimalist open-concept space',
      },
    ],
    scrimTint: 'rgba(248, 249, 250, 0.87)',
    bgPage: '#F8F9FA',
    bgSurface: '#FFFFFF',
    bgSurfaceSubtle: '#EDF0F3',
    bgCard: '#FFFFFF',
    borderSubtle: '#E2E5E9',
    borderStrong: '#C5CBD2',
    textHeading: '#09090B',
    textBody: '#18181B',
    textMuted: '#52525B',
    accentPrimary: '#D97706', // Polished brass
    accentSecondary: '#4F46E5',
    accentHover: '#B45309',
    accentGlow: 'rgba(217, 119, 6, 0.14)',
    patternType: 'modern-grid',
    orbColor1: 'rgba(217, 119, 6, 0.12)',
    orbColor2: 'rgba(79, 70, 229, 0.08)',
    accentBadgeBg: 'rgba(217, 119, 6, 0.08)',
    accentBadgeText: '#B45309',
    accentBadgeBorder: 'rgba(217, 119, 6, 0.25)',
    gradientText: 'from-amber-700 via-zinc-800 to-amber-600',
  },
  {
    id: 'espresso-craft',
    name: 'Artisanal Coffee & Roastery',
    subtitle: 'Specialty Espresso Barista Studio',
    badge: 'Coffee Craft',
    bgImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2000&q=80',
    imageCaption: 'Specialty Espresso Machine & Artisanal Barista Counter',
    imageLocation: 'Specialty Coffee Bar',
    themeImages: [
      {
        url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2000&q=80',
        title: 'Barista Espresso Station',
        caption: 'Polished chrome portafilter and steamed milk craft',
      },
      {
        url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=2000&q=80',
        title: 'Warm Coffee Atmosphere',
        caption: 'Aromatic roasted beans and pour-over kettle',
      },
      {
        url: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=2000&q=80',
        title: 'Cafe Counter Seating',
        caption: 'Cozy wooden stools and barista prep station',
      },
    ],
    scrimTint: 'rgba(249, 246, 240, 0.86)',
    bgPage: '#F9F6F0',
    bgSurface: '#FFFFFF',
    bgSurfaceSubtle: '#F2ECE1',
    bgCard: '#FFFFFF',
    borderSubtle: '#E7DDD0',
    borderStrong: '#CDBCA6',
    textHeading: '#231812',
    textBody: '#38281F',
    textMuted: '#685043',
    accentPrimary: '#92400E', // Rich roast umber
    accentSecondary: '#D97706',
    accentHover: '#78350F',
    accentGlow: 'rgba(146, 64, 14, 0.16)',
    patternType: 'art-deco',
    orbColor1: 'rgba(146, 64, 14, 0.13)',
    orbColor2: 'rgba(217, 119, 6, 0.10)',
    accentBadgeBg: 'rgba(146, 64, 14, 0.08)',
    accentBadgeText: '#92400E',
    accentBadgeBorder: 'rgba(146, 64, 14, 0.25)',
    gradientText: 'from-amber-900 via-amber-700 to-amber-800',
  },
  {
    id: 'culinary-atelier',
    name: 'Haute Cuisine & Chef Studio',
    subtitle: 'Contemporary Food Service & Plating',
    badge: 'Culinary Arts',
    bgImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2000&q=80',
    imageCaption: 'Professional Fine Dining Chef Plating & Food Service',
    imageLocation: 'Commercial Culinary Kitchen',
    themeImages: [
      {
        url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=2000&q=80',
        title: 'Chef Plating Station',
        caption: 'Gourmet garnishing and precision food presentation',
      },
      {
        url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=2000&q=80',
        title: 'Artisanal Bakery & Dough',
        caption: 'Freshly baked sourdough and pastry oven craft',
      },
      {
        url: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?auto=format&fit=crop&w=2000&q=80',
        title: 'Open Kitchen Service Line',
        caption: 'Stainless steel pass and coordinated brigade service',
      },
    ],
    scrimTint: 'rgba(248, 246, 244, 0.86)',
    bgPage: '#F8F6F4',
    bgSurface: '#FFFFFF',
    bgSurfaceSubtle: '#F0ECE8',
    bgCard: '#FFFFFF',
    borderSubtle: '#E5DED8',
    borderStrong: '#CCA896',
    textHeading: '#1F1916',
    textBody: '#332A26',
    textMuted: '#635650',
    accentPrimary: '#BE123C', // Burgundy culinary accent
    accentSecondary: '#B45309',
    accentHover: '#9F1239',
    accentGlow: 'rgba(190, 18, 60, 0.14)',
    patternType: 'terrace-rays',
    orbColor1: 'rgba(190, 18, 60, 0.12)',
    orbColor2: 'rgba(180, 83, 9, 0.10)',
    accentBadgeBg: 'rgba(190, 18, 60, 0.08)',
    accentBadgeText: '#BE123C',
    accentBadgeBorder: 'rgba(190, 18, 60, 0.25)',
    gradientText: 'from-rose-800 via-rose-600 to-amber-700',
  },
];

// Helper to get all available images across all themes for ultimate variety
export const allHospitalityImages: ThemeImage[] = themes.flatMap((t) => t.themeImages);
