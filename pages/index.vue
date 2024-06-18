<template>
  <div class="flex min-h-[120dvh] w-full justify-between">
    <div
      v-if="windowWidth >= 768"
      class="flex w-1/5 flex-col justify-between"
    >
      <div class="h-[40dvh]">
        <Adsbygoogle
          ad-client="ca-pub-4345340552891469"
          ad-slot="9235145893"
          ad-format="auto"
          :ad-full-width-responsive="true"
          :ad-style="{ display: 'block' }"
        />
      </div>
      <div class="h-[40dvh]">
        <Adsbygoogle
          ad-client="ca-pub-4345340552891469"
          ad-slot="7538920847"
          ad-format="auto"
          :ad-full-width-responsive="true"
          :ad-style="{ display: 'block' }"
        />
      </div>
      <div class="h-[40dvh]">
        <Adsbygoogle
          ad-client="ca-pub-4345340552891469"
          ad-slot="4149506029"
          ad-format="auto"
          :ad-full-width-responsive="true"
          :ad-style="{ display: 'block' }"
        />
      </div>
    </div>
    <div class="flex w-full flex-col justify-between">
      <div>
        <Adsbygoogle
          ad-client="ca-pub-4345340552891469"
          ad-slot="3599675837"
          ad-format="auto"
          :ad-full-width-responsive="true"
          :ad-style="{ display: 'block' }"
        />
      </div>
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
          歡迎來到我們的網站！由於國立臺北大學資訊工程學系的網站在搜尋引擎中的
          SEO
          優化不足，可能導致您無法輕鬆搜尋到相關資訊。為了解決這個問題，我們特別建立了這個網站，讓您可以方便地通過內嵌框架（iframe）瀏覽北大資工系系網的內容，或是點擊下方按鈕直接前往網站。希望能幫助您更輕鬆地找到所需的資源和資訊。
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
          <h2 class="text-2xl font-bold">北大資工系系網</h2>
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
      </ElSpace>
      <div>
        <Adsbygoogle
          ad-client="ca-pub-4345340552891469"
          ad-slot="8660430826"
          ad-format="auto"
          :ad-full-width-responsive="true"
          :ad-style="{ display: 'block' }"
        />
      </div>
    </div>
    <div
      v-if="windowWidth >= 768"
      class="flex w-1/5 flex-col justify-between"
    >
      <div class="h-[40dvh]">
        <Adsbygoogle
          ad-client="ca-pub-4345340552891469"
          ad-slot="8221447124"
          ad-format="auto"
          :ad-full-width-responsive="true"
          :ad-style="{ display: 'block' }"
        />
      </div>
      <div class="h-[40dvh]">
        <Adsbygoogle
          ad-client="ca-pub-4345340552891469"
          ad-slot="6908365451"
          ad-format="auto"
          :ad-full-width-responsive="true"
          :ad-style="{ display: 'block' }"
        />
      </div>
      <div class="h-[40dvh]">
        <Adsbygoogle
          ad-client="ca-pub-4345340552891469"
          ad-slot="9342957107"
          ad-format="auto"
          :ad-full-width-responsive="true"
          :ad-style="{ display: 'block' }"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const windowWidth = ref(0);

const updateWindowWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  updateWindowWidth();
  window.addEventListener("resize", updateWindowWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWindowWidth);
});
</script>
