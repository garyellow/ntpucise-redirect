<template>
  <div class="flex h-dvh w-full">
    <div class="flex w-1/3 flex-col justify-between">
      <div
        v-for="i in 3"
        :key="i"
        class="h-1/3"
      >
        <Adsbygoogle />
      </div>
    </div>
    <div class="flex w-1/3 flex-col justify-between">
      <div class="h-1/3"><Adsbygoogle /></div>
      <ElSpace
        direction="vertical"
        justify="center"
        class="h-1/3 justify-center"
      >
        <ElButton
          type="primary"
          tag="a"
          href="https://www.csie.ntpu.edu.tw/index.php"
          rel="noopener noreferrer"
        >
          北大資工
        </ElButton>
        <ElText>點擊上面的按鈕繼續</ElText>
      </ElSpace>
      <div class="h-1/3"><Adsbygoogle /></div>
    </div>
    <div class="flex w-1/3 flex-col justify-between">
      <div
        v-for="i in 3"
        :key="i"
        class="h-1/3"
      >
        <Adsbygoogle />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
