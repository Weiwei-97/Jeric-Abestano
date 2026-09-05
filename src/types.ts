export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  type: string;
  highlights: string[];
  tags: string[];
}

export interface Certification {
  id: string;
  title: string;
  credentialLevel: string;
  issuer: string;
  date: string;
  formattedDate: string;
  category: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    description?: string;
  }[];
}

export interface ProjectInfo {
  name: string;
  tagline: string;
  type: string;
  url: string;
  description: string;
  tags: string[];
  features: string[];
}

export interface PersonalInfo {
  fullName: string;
  title: string;
  careerObjective: string;
  phone: string;
  email: string;
  studentEmail: string;
  location: string;
  dob: string;
  gender: string;
  civilStatus: string;
  citizenship: string;
  pob: string;
  education: {
    degree: string;
    status: string;
    school: string;
    location: string;
  };
  languages: {
    name: string;
    proficiency: string;
  }[];
}
