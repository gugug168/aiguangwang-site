<template>
  <div class="homepage">
    <SectionsHeroSection id="home" />
    <SectionsFeaturesSection id="features" />
    <SectionsSoftwarePreviewSection id="preview" />
    <SectionsWhyChooseUsSection id="why-us" />
    <SectionsTestimonialsSection id="testimonials" />
    <!-- <SectionsVersionsSection id="versions" /> -->
    <!-- <SectionsVideoSection id="video-showcase" /> -->
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

// 如果需要，手动导入 SoftwarePreviewSection (尽管Nuxt3通常会自动导入)
// import SectionsSoftwarePreviewSection from '~/components/sections/SoftwarePreviewSection.vue';

useHead({
  title: 'AI 工程文档归档助手 - 智能管理工程文档 | 爱土木',
  meta: [
    { name: 'description', content: 'AI 工程文档归档助手：基于先进OCR与AI技术，为工程专业人士打造。轻松实现电脑内海量工程文档的智能分类、归档与检索。支持PDF、Word及图片。立即提升您的文档管理效率！' }
  ]
})
</script>

<style scoped>
.homepage {
  /* 可以在这里为整个页面添加一些特定样式 */
  /* 各个 section 已经有自己的背景和内边距，这里可能不需要太多 */
}
</style> 