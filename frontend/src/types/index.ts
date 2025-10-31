// Type definitions for FRW Global Ministries

export interface NavigationItem {
  name: string;
  path: string;
  dropdown?: DropdownItem[];
}

export interface DropdownItem {
  name: string;
  path: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  videoUrl: string;
  backgroundImage: string;
}

export interface StatsData {
  number: string;
  description: string;
  images: string[];
}

export interface MissionContent {
  title: string;
  description: string;
  highlight: string;
}

export interface AboutContent {
  title: string;
  founderName: string;
  founderImage: string;
  founderBio: string;
  usJourney: string;
  ourMission: string;
  expansion: string;
  commitment: string;
}

export interface SchoolVerse {
  verse: string;
  text: string;
  image: string;
}

export interface SchoolsContent {
  mainSchool: {
    name: string;
    tagline: string;
    description: string;
    mission: string;
    guidance: string;
    commitment: string;
    founded: string;
    location: string;
    image: string;
  };
  verses: SchoolVerse[];
  galleryImages: string[];
}

export interface ActionCard {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
  content: string;
}
