import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { HebrewTranslations } from './HebrewTranslations';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      he: HebrewTranslations,
    },
    lng: 'he',
    fallbackLng: 'he',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
