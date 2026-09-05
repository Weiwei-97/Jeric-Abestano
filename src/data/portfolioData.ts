import { PersonalInfo, WorkExperience, Certification, SkillCategory, ProjectInfo } from '../types';

export const personalInfo: PersonalInfo = {
  fullName: 'Jeric Abestano',
  title: 'Hospitality Management Student & Creator',
  careerObjective:
    'Seeking an opportunity to apply strong guest service skills and positive attitude to help the company deliver excellent customer experiences.',
  phone: '+63 936 904 4541',
  email: 'jericni.official@gmail.com',
  studentEmail: 'jabestano.student@asiancollege.edu.ph',
  location: 'Purok Tugas, Cadawinon, Dumaguete City, Negros Oriental',
  dob: 'February 1, 1997',
  gender: 'Male',
  civilStatus: 'Single',
  citizenship: 'Filipino',
  pob: 'Parañaque City',
  education: {
    degree: 'Bachelor of Science in Hospitality Management',
    status: 'Currently 4th Year Student',
    school: 'Asian College',
    location: 'Dumaguete City, Negros Oriental',
  },
  languages: [
    { name: 'Filipino', proficiency: 'Native Speaker' },
    { name: 'English', proficiency: 'Working Professional' },
  ],
};

export const workExperiences: WorkExperience[] = [
  {
    id: 'tooties-kitchen',
    role: 'Food Service Intern (SIL)',
    company: "Tootie's Kitchen",
    period: 'July 2026',
    description:
      'Assisted in preparing and serving orders while maintaining cleanliness and food safety standards.',
    type: 'Supervised Industry Learning (SIL)',
    highlights: [
      'Executed order preparation and plating in coordination with kitchen staff under fast-paced service hours.',
      'Maintained rigorous kitchen cleanliness, food hygiene, and safe storage compliance standards.',
      'Delivered warm and accurate food service ensuring guest satisfaction throughout each dining shift.',
    ],
    tags: ['Food Safety', 'Order Preparation', 'Kitchen Cleanliness', 'SIL Internship'],
  },
  {
    id: 'overdose-coffee',
    role: 'Food Service Intern (SIL)',
    company: 'Overdose Coffee',
    period: 'July 2025',
    description:
      'Ensured careful preparation and polite, friendly delivery of orders, maintaining high-quality guest satisfaction.',
    type: 'Supervised Industry Learning (SIL)',
    highlights: [
      'Handled careful specialty beverage and order prep with speed and hospitality polish.',
      'Greeted customers enthusiastically and delivered orders with a polite, professional attitude.',
      'Handled order queues effectively during rush periods while upholding presentation aesthetics.',
    ],
    tags: ['Beverage & Coffee Prep', 'Guest Relations', 'Order Accuracy', 'Polite Service'],
  },
  {
    id: 'gabbys-bistro',
    role: 'Food Service Intern (SIL)',
    company: "Gabby's Bistro",
    period: 'July – August 2024',
    description:
      'Contributed to a positive dining ambiance through effective communication and informed menu recommendations to guests.',
    type: 'Supervised Industry Learning (SIL)',
    highlights: [
      'Engaged with guests warmly, answering questions about ingredients and providing confident menu recommendations.',
      'Fostered an inviting, positive dining atmosphere through attentive table care and proactive assistance.',
      'Coordinated smoothly with back-of-house staff for timely order fulfillment and table turnover.',
    ],
    tags: ['Dining Ambiance', 'Menu Guidance', 'Guest Communication', 'Table Service'],
  },
];

export const certifications: Certification[] = [
  {
    id: 'nc2-housekeeping',
    title: 'Housekeeping NC II',
    credentialLevel: 'National Certificate II',
    issuer: 'TESDA (Technical Education and Skills Development Authority)',
    date: '2024-01-23',
    formattedDate: 'January 23, 2024',
    category: 'Rooms Division & Maintenance',
  },
  {
    id: 'nc2-cookery',
    title: 'Cookery NC II',
    credentialLevel: 'National Certificate II',
    issuer: 'Asian College',
    date: '2024-07-23',
    formattedDate: 'July 23, 2024',
    category: 'Culinary Arts & Food Prep',
  },
  {
    id: 'nc2-fnb',
    title: 'Food and Beverage Services NC II',
    credentialLevel: 'National Certificate II',
    issuer: 'Asian College',
    date: '2024-07-17',
    formattedDate: 'July 17, 2024',
    category: 'Dining Service & Bar Operations',
  },
  {
    id: 'nc2-bread-pastry',
    title: 'Bread and Pastry Production NC II',
    credentialLevel: 'National Certificate II',
    issuer: 'Asian College',
    date: '2025-03-21',
    formattedDate: 'March 21, 2025',
    category: 'Baking & Confectionery',
  },
  {
    id: 'nc2-front-office',
    title: 'Front Office Services NC II',
    credentialLevel: 'National Certificate II',
    issuer: 'Asian College',
    date: '2026-03-26',
    formattedDate: 'March 26, 2026',
    category: 'Front Desk & Guest Concierge',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Hospitality & Food Operations',
    description: 'Practical training across dining room, kitchen, front desk, and rooms division operations.',
    skills: [
      { name: 'Food Service Operations', description: 'Table setting, sequence of service, and tray service' },
      { name: 'Food Safety & Hygiene', description: 'HACCP-aligned cleanliness and safe food handling' },
      { name: 'Housekeeping Standards', description: 'Bed making, room inspection, and sanitization' },
      { name: 'Bread & Pastry Prep', description: 'Basic dough handling, baking, and dessert presentation' },
      { name: 'Front Desk Procedures', description: 'Guest check-in, reservations, and concierge etiquette' },
    ],
  },
  {
    title: 'Core Interpersonal Skills',
    description: 'Essential soft skills cultivated through customer service internships and collaborative team roles.',
    skills: [
      { name: 'Active Listening', description: 'Attentively understanding customer preferences and special requests' },
      { name: 'Multitasking', description: 'Prioritizing order queues, table turns, and guest requests seamlessly' },
      { name: 'Adaptability', description: 'Thriving during peak rush hours and evolving work environments' },
      { name: 'Communication', description: 'Polite, clear, and confident verbal dialogue with guests and team members' },
      { name: 'Conflict Resolution', description: 'Handling guest concerns with empathy, patience, and swift remedies' },
    ],
  },
  {
    title: 'Creative Projects & Technology',
    description: 'Passionate curiosity for interactive digital experiences and leveraging AI tools.',
    skills: [
      { name: 'AI-Assisted Development', description: 'Utilizing modern generative AI workflows for rapid web creation' },
      { name: 'Browser Game Design', description: 'Building engaging game loops, puzzles, and user interactions' },
      { name: 'Digital Collaboration', description: 'Documenting workflows, GitHub hosting, and digital portfolios' },
      { name: 'Continuous Learning', description: 'Bridging hospitality guest empathy with digital technology' },
    ],
  },
];

export const mindMeldProject: ProjectInfo = {
  name: 'Mind Meld 2.0',
  tagline: 'Interactive AI-Assisted Browser Game',
  type: 'Browser / Web Game',
  url: 'https://weiwei-97.github.io/MIND-MELD-2.0/',
  description:
    'An interactive browser game I created using AI tools. Even though my main field is Hospitality Management, I wanted to explore creative technology and build an entertaining, accessible web experience for players everywhere.',
  tags: ['Browser Game', 'AI-Assisted', 'Interactive', 'GitHub Pages', 'Web Technology'],
  features: [
    'Fully playable in modern desktop and mobile browsers with zero downloads required.',
    'Developed through iterative prompt engineering and creative coding assisted by AI tools.',
    'Features engaging puzzle logic, responsive game controls, and intuitive interface feedback.',
    'Scannable QR code allows instant mobile play by simply scanning with any smartphone camera.',
  ],
};
