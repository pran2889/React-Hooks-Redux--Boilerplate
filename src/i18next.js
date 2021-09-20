import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
import Cache from 'i18next-localstorage-cache';


import navbarTranslationEN from "../src/locales/en/navbar.json"
import navbarTranslationFR from '../src/locales/fr/navbar.json'
import menulistTranslationEN from "../src/locales/en/menulist.json"
import menulistTranslationFR from "../src/locales/fr/menulist.json"
import layout2TranslationEN from "../src/locales/en/layout2.json"
import layout2TranslationFR from "../src/locales/fr/layout2.json"

// "Inline" English and French translations. 
// We can localize to any language and any number of languages.

const resources = {
  en: {
    // Namspaces
    navbar: navbarTranslationEN,
    menulist:menulistTranslationEN,
    layout2:layout2TranslationEN
  },
  fr:{
    navbar:navbarTranslationFR,
    menulist:menulistTranslationFR,
    layout2:layout2TranslationFR
  }
};

i18next
  .use(detector)
  .use(Cache)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    ns:{
    namespaces:[
      "navbar",
      "menulist",
      "layout2"
    ]
    },
    resources,
    defaultNS: "navbar",
    interpolation: {
      escapeValue: false,
    },
    Cache: {
      //hint: the cache plugin is disabled by default. Enable it by setting enabled: true in init options for production usage.
      enabled: false,
      prefix: 'translation_',
      expirationTime: Infinity,
      Version: {},
      // defaultVersion: '',
    },
  });
export default i18next;