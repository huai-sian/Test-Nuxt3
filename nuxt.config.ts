// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"
import { envSettings } from "./envSettings.js"
const appEnv = process.env.ENV || 'development'

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "SEVEN Shopping Site",
      script: [
        { src: "https://applepay.cdn-apple.com/jsapi/v1/apple-pay-sdk.js", 
          "data-org-id": "e6c7f963-0d8f-4fe3-b83f-485228dc1736" },
      ]
    },
    
  },
  runtimeConfig: {
    public: {
      apiBase: 'https://fakestoreapi.com',
      showCookiePolicy: envSettings[appEnv].showCookiePolicy,
    }
  },
  css: ['~/assets/css/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@element-plus/nuxt',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
  ],
  elementPlus: { 
    components: ['ElMessage'],
  },
  i18n: {
    defaultLocale: 'zh',    // default locale of your project for Nuxt pages and routings,
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'my_custom_cookie_name',
      redirectOn: 'root',
    },
    locales: [
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'zh',
        name: '中文'
      },
    ],
  }
})
