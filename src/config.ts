import heroImage from "./assets/hero-real.jpg";

export const SITE = {
  website: "https://tpu-kanglabs.github.io/", // Replace with your actual deployed URL
  author: "AI ViSION Lab",
  description:
    "A lightweight, modern static website template for academic labs and scholars.",
  title: "AI Vision Lab's Projects",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes

  // Lab Info
  labName: "AI Vision Lab",
  university: "Tokyo Polytechnic University",
  logo: "/assets/logo-real.svg", // Logo path
  avatar: "/assets/logo-real.svg", // Avatar for SEO/Schema
  email: "yskang@t-kougei.ac.jp", // Contact email for Join Us page

  // Hero Section (Home Page) - Main content does not need to be translated for 8 languages by default
  hero: {
    title: "Advancing Computer Vision & Deep Learning Research.",
    subtitle: "We are the AI Vision Lab.",
    action: "View Publications", // Optional call to action text
    image: heroImage, // Hero image path
  },

  // Navigation
  nav: [
    { text: "Home", link: "/", key: "home" },
    { text: "Projects", link: "/projects", key: "project" },
  ],

  // Custom Pages (Appended after 'Join Us')
  customPages: [
    // Example: { text: 'Alumni', link: '/alumni', key: 'alumni' }
  ],

  // i18n Config
  i18n: {
    enabled: true,
    defaultLocale: "en",
  },
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const SOCIALS = [
  {
    link: "https://github.com/fjd2004711/scholar-lite",
    active: true,
  },
];

// Default language configuration
export const DEFAULT_LANG: "en" | "ja" = "en";
