import zh from "./assets/language/zh-TW.json"
import en from "./assets/language/en-US.json"
import { setLocalStorage, getLocalStorage } from './utils/localstorage'

const Locale_Cookie_Key = 'locale'
const locale_TW = 'zh'

function setLocaleValue(value) {
  setLocalStorage(Locale_Cookie_Key, value)
}

function getLocaleValue() {
  let value = getLocalStorage(Locale_Cookie_Key)

  if (value === null) {
      value = locale_TW
  }

  return value;
}

const Locale_List = [
  {
      name: 'TW',
      locale: 'zh-TW',
      langFile: zh
  },
  {
      name: 'EN',
      locale: 'en-US',
      langFile: en
  },
]

export default defineI18nConfig(() => ({
  legacy: false,
  locale: locale_TW,
  fallbackLocale: locale_TW,
  messages: {
    en,
    zh
  }
}))