import { DEFAULT_LANG, LANGUAGES } from "./constants";

export const languages = LANGUAGES;

export const defaultLang = DEFAULT_LANG;

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.project": "Projects",

    "hero.viewSite": "Visit Website",

    "section.projects": "Featured Projects",
    "section.viewAll": "View all",

    "project.subtitle":
      "Our lab explores the frontiers of artificial intelligence, with a focus on computer vision and machine learning.",
    "project.learnMore": "Learn More",
    "project.noAreas": "No project areas defined.",

    "footer.rights": "All rights reserved.",
    "footer.powered": "Powered by",
  },
  ja: {
    "nav.home": "ホーム",
    "nav.project": "プロジェクト",

    "hero.viewSite": "ウェブサイト",

    "section.projects": "主なプロジェクト",
    "section.viewAll": "すべて見る",

    "project.subtitle":
      "私たちの研究室はコンピュータビジョンと機械学習に重点を置き、AIの最前線に挑戦しています。",
    "project.learnMore": "詳しく見る",
    "project.noAreas": "プロジェクトがまだありません。",

    "footer.rights": "All rights reserved.",
    "footer.powered": "Powered by",
  },
} as const;

export function getLangFromUrl(url: URL) {
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
