<template>
  <div>
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue';
import AppFooter from '~/components/AppFooter.vue';
</script>

<style scoped>
main {
  /* 主内容区的样式，可以根据需要添加 */
  /* 例如，如果Header是fixed的，这里可能需要一个padding-top */
  /* padding-top: 70px; /* 假设Header高度为70px */
}
</style> 