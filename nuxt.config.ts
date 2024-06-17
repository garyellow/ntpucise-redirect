// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      vercelProjectProductionUrl: process.env.VERCEL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000"
    }
  },
  plugins: [
    "~/plugins/analytics.client.ts",
  ],
  devtools: { enabled: true },
  modules: [
    "@element-plus/nuxt",
    "@nuxtjs/seo",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-adsense"
  ],
  site: {
    url: process.env.NUXT_PUBLIC_BASE_URL,
    name: "國立臺北大學資訊工程學系",
    description: "這是一個臨時的跳轉網站，用於重定向到國立臺北大學資訊工程學系的真正官網。請稍等，我們會自動將您帶到最新的系所資訊、課程介紹、師資陣容及研究成果。",
    defaultLocale: "zh-TW",
  },
  googleAdsense: {
    id: "ca-pub-4345340552891469",
    overlayBottom: true,
    pageLevelAds: true,
  }
})
