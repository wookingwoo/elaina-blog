import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Detactor from 'i18next-browser-languagedetector';

import { Lang, LangCode } from './lang';

export type KeyLang = keyof typeof Lang;

const languages = {
  [LangCode.en]: {
    translation: require('./en-us.json')
  },
  [LangCode.ko]: {
    translation: require('./ko-kr.json')
  }
};

const detactor = new Detactor();
detactor.init({
  order: ['querystring', 'navigator'],
  lookupQuerystring: 'lng'
});

i18n.use(detactor).use(initReactI18next).init({
  resources: languages,
  fallbackLng: LangCode.en
});

function getCurrentLangCode(): LangCode {
  return i18n.language as LangCode;
}

function trans(key: Lang): string {
  return i18n.t(key);
}

function changeLang(code: LangCode): void {
  i18n.changeLanguage(code);
}

export { i18n, Lang, LangCode, getCurrentLangCode, trans, changeLang };
