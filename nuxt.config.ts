// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseUrl: 'http://localhost:3000'
    }
  },
  plugins: [
    "~/plugins/analytics.client.ts",
  ],
  devtools: { enabled: true }
})
