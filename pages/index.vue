<template>
  <div class="homepage">
    <SectionsHeroSection id="home" />
    <SectionsFeaturesSection id="features" />
    <SectionsVersionsSection id="versions" />
    <!-- <SectionsVideoSection id="video-showcase" /> -->
    <SectionsWhyChooseUsSection id="why-us" />
    <SectionsTestimonialsSection id="testimonials" />
    <SectionsPricingSection id="pricing" />
  </div>
</template>

<script setup lang="ts">
// 如果组件没有在 components/sections/ 目录下正确命名并自动导入，
// 你可能需要手动导入：
// import SectionsHeroSection from '~/components/sections/HeroSection.vue';
// import SectionsFeaturesSection from '~/components/sections/FeaturesSection.vue';
// import SectionsVersionsSection from '~/components/sections/VersionsSection.vue';
// import SectionsWhyChooseUsSection from '~/components/sections/WhyChooseUsSection.vue';
// import SectionsTestimonialsSection from '~/components/sections/TestimonialsSection.vue';
// import SectionsPricingSection from '~/components/sections/PricingSection.vue';

// Nuxt 3 自动导入 components 目录下的组件，包括子目录。
// 所以，如果你的组件在 `components/sections/HeroSection.vue`，
// 你可以在模板中直接使用 `<SectionsHeroSection />`。

// 暂时注释掉 useHead 以排查错误
// useHead({
//   title: '文件禅 - 首页 | AI智能文件整理与重命名',
//   meta: [
//     { name: 'description', content: '欢迎来到文件禅，体验与 FileNeatAI 类似风格的智能文件整理与重命名服务。让AI助您告别文件杂乱。' }
//   ]
// })
</script>

<style scoped>
.homepage {
  /* 可以在这里为整个页面添加一些特定样式 */
  /* 各个 section 已经有自己的背景和内边距，这里可能不需要太多 */
}
</style> 