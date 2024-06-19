<template>
  <SpeedInsights />
  <NuxtRouteAnnouncer />
  <NuxtPage />
  <ClientOnly><Ad /></ClientOnly>
</template>

<script lang="ts" setup>
import { SpeedInsights } from "@vercel/speed-insights/vue";

const baseUrl = useRuntimeConfig().public.vercelProjectProductionUrl;

useSeoMeta({
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
  title: "國立臺北大學資訊工程學系☠️",
  ogTitle: "國立臺北大學資訊工程學系☠️",
  description:
    "歡迎來到我們的網站！由於國立臺北大學資訊工程學系(NTPU CSIE)網站的 SEO 優化不足，我們建立了這個網站，讓您可以方便地通過內嵌框架(iframe)瀏覽北大資工系網站內容，或點擊下方按鈕直接前往，幫助您更輕鬆地找到所需的資源和資訊。",
  ogDescription:
    "歡迎來到我們的網站！由於國立臺北大學資訊工程學系(NTPU CSIE)網站的 SEO 優化不足，我們建立了這個網站，讓您可以方便地通過內嵌框架(iframe)瀏覽北大資工系網站內容，或點擊下方按鈕直接前往，幫助您更輕鬆地找到所需的資源和資訊。",
  ogType: "website",
  ogUrl: baseUrl,
  ogImage: `${baseUrl}/logo-lg.png`,
  ogImageType: "image/png",
  ogImageAlt: "國立臺北大學資訊工程學系的標誌",
  ogLocale: "zh_TW",
  ogSiteName: "國立臺北大學資訊工程學系☠️",
  twitterSite: baseUrl,
  twitterTitle: "國立臺北大學資訊工程學系☠️",
  twitterDescription:
    "歡迎來到我們的網站！由於國立臺北大學資訊工程學系(NTPU CSIE)網站的 SEO 優化不足，我們建立了這個網站，讓您可以方便地通過內嵌框架(iframe)瀏覽北大資工系網站內容，或點擊下方按鈕直接前往，幫助您更輕鬆地找到所需的資源和資訊。",
  twitterImage: `${baseUrl}/logo-lg.png`,
  twitterImageAlt: "國立臺北大學資訊工程學系的標誌",
  twitterCard: "summary",
  author: "https://github.com/garyellow",
  creator: "https://github.com/garyellow",
  publisher: "https://github.com/garyellow",
  googleSiteVerification: "v6QOluTEgbD2ScFJ8buIXMVrKmG9ZCZWmxBKIuPYjc8",
});

useHead({
  htmlAttrs: {
    lang: "zh_TW",
  },
  meta: [
    {
      name: "monetag",
      content: "adc7b9940d43a069ba57a40cd1c7e42d",
    },
  ],
  link: [
    {
      rel: "title",
      type: "image/png",
      href: "/title.png",
    },
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
});
</script>
