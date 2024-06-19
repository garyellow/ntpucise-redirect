<template>
  <SpeedInsights />
  <NuxtRouteAnnouncer />
  <component
    :is="'script'"
    src="https://kukrosti.com/act/files/tag.min.js?z=7629780"
    data-cfasync="false"
    async
  >
  </component>
  <component :is="'script'">
    (function(d,z,s){s.src='https://'+d+'/400/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('foomaque.net',7629795,document.createElement('script'))
  </component>
  <component
    :is="'script'"
    async="async"
    data-cfasync="false"
    src="//thubanoa.com/1?z=7629797"
  ></component>
  <component :is="'script'">
    (function(d,z,s){s.src='https://'+d+'/401/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('aistekso.net',7629798,document.createElement('script'))
  </component>
  <NuxtPage />
</template>

<script lang="ts" setup>
import { SpeedInsights } from "@vercel/speed-insights/vue";

const baseUrl = useRuntimeConfig().public.vercelProjectProductionUrl;

useSeoMeta({
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8",
  title: "國立臺北大學資訊工程學系",
  ogTitle: "國立臺北大學資訊工程學系",
  description:
    "這是一個臨時的跳轉網站，用於重定向到國立臺北大學資訊工程學系的真正官網。請稍等，我們會自動將您帶到最新的系所資訊、課程介紹、師資陣容及研究成果。",
  ogDescription:
    "這是一個臨時的跳轉網站，用於重定向到國立臺北大學資訊工程學系的真正官網。請稍等，我們會自動將您帶到最新的系所資訊、課程介紹、師資陣容及研究成果。",
  ogType: "website",
  ogUrl: baseUrl,
  ogImage: `${baseUrl}/logo-lg.png`,
  ogImageType: "image/png",
  ogImageAlt: "國立臺北大學資訊工程學系的標誌",
  ogLocale: "zh_TW",
  ogSiteName: "國立臺北大學資訊工程學系",
  twitterSite: baseUrl,
  twitterTitle: "國立臺北大學資訊工程學系",
  twitterDescription:
    "這是一個臨時的跳轉網站，用於重定向到國立臺北大學資訊工程學系的真正官網。請稍等，我們會自動將您帶到最新的系所資訊、課程介紹、師資陣容及研究成果。",
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
  script: [
    {
      type: "text/javascript",
      src: "//difficultywithhold.com/7a/28/94/7a28941585da82022eefd4ad6f43591d.js",
    },
    {
      type: "text/javascript",
      async: "true",
      "data-cfasync": "false",
      src: "//difficultywithhold.com/4bdfa196bc768bfc2c76cf9e542660c3/invoke.js",
    },
  ],
});
</script>
