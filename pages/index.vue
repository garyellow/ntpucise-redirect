<template>
  <div class="my-24 flex min-h-[120dvh] w-full justify-center">
    <ElSpace
      direction="vertical"
      justify="center"
      class="justify-center"
    >
      <img
        src="/title.png"
        alt="國立臺北大學資訊工程學系"
        class="w-[80dvw] md:w-[40dvw]"
      />
      <ElDivider class="!w-[80dvw] md:!w-[50dvw]" />
      <ElText
        tag="h1"
        class="w-[95dvw] text-balance text-center md:w-[60dvw]"
      >
        歡迎來到我們的網站！由於國立臺北大學資訊工程學系的網站在搜尋引擎中的 SEO
        優化不足，可能導致您無法輕鬆搜尋到相關資訊。為了解決這個問題，我們特別建立了這個網站，讓您可以方便地通過內嵌框架（iframe）瀏覽北大資工系網站的內容，或是點擊下方的按鈕直接前往網站。我們希望這樣能幫助您更輕鬆地找到所需的資源和資訊。
      </ElText>
      <ElDivider class="!w-[80dvw] md:!w-[50dvw]" />
      <div
        class="p-2 md:rounded-xl md:border-4 md:border-dashed md:border-blue-300/75"
      >
        <iframe
          src="https://www.csie.ntpu.edu.tw/index.php"
          title="北大資工官網"
          allow="fullscreen"
          class="h-[90dvh] w-[95dvw] md:w-[60dvw]"
        />
      </div>
      <ElDivider class="!w-[80dvw] md:!w-[50dvw]" />
      <ElButton
        type="primary"
        size="large"
        round
        plain
        tag="a"
        href="https://www.csie.ntpu.edu.tw/index.php"
        class="!border-2 !px-5 hover:animate-pulse"
      >
        <h2 class="text-2xl font-bold">NTPU CSIE</h2>
      </ElButton>
      <ElText
        tag="h2"
        type="warning"
        size="large"
        class="font-bold"
      >
        點擊上方按鈕直接前往網站
      </ElText>
      <ElDivider class="!w-[80dvw] md:!w-[50dvw]" />
      <div class="font-bold text-gray-500">
        Made by
        <NuxtLink
          to="https://github.com/garyellow"
          target="_blank"
          class="font-bold text-black hover:underline"
        >
          garyellow
        </NuxtLink>
        |
        <NuxtLink
          to="https://github.com/garyellow/ntpucsie-redirect"
          target="_blank"
          class="font-bold text-black hover:underline"
        >
          Open Source
        </NuxtLink>
      </div>
      <ElDivider class="!w-[80dvw] md:!w-[50dvw]" />
      <!-- <div class="flex flex-col items-center">
        <ElText type="info">廣告</ElText>
        <div id="container-4bdfa196bc768bfc2c76cf9e542660c3"></div>
      </div> -->
    </ElSpace>
  </div>
</template>
