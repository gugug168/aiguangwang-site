<template>
  <section class="hero-section">
    <div class="container hero-content">
      <h1 class="hero-title">文件禅：一键告别文件杂乱</h1>
      <p class="hero-subtitle">
        1. 文件整理，通过AI智能文件分类，快速分拣整理零乱且杂乱无章的文件。<br />
        2. 重命名，通过AI分析文件内容，快速给整理后的文件更为专业的文件名。
      </p>
      <p class="hero-subtitle-secondary">
        把嘈杂信息集中整理管理，为复杂杂乱的文档清洁。
      </p>
      <!-- 登录注册按钮已按要求移除 -->
      <!-- 可以添加一个指向产品介绍或下载的按钮 -->
      <!-- <NuxtLink to="/#versions" class="cta-button">查看版本</NuxtLink> -->
    </div>
  </section>
</template>

<script setup lang="ts">
// No script needed for this simple version
</script>

<style scoped>
.hero-section {
  /* 目标网站有深色渐变背景 */
  background: linear-gradient(135deg, #1f2a40 0%, #121828 100%); /* 深邃的蓝黑渐变 */
  color: white;
  padding: 120px 0 80px; /* 顶部留出导航栏空间，再加额外padding */
  text-align: center;
  min-height: 80vh;
  display: flex;
  align-items: center; /* 垂直居中内容 */
  justify-content: center; /* 水平居中内容 */
}

.hero-content {
  max-width: 800px;
}

.hero-title {
  font-size: 3.2rem;
  font-weight: 700; /* 更粗的字体 */
  margin-bottom: 1.5rem;
  line-height: 1.2;
  /* 文字描边或阴影可以增加可读性，模仿目标网站 */
  /* text-shadow: 0px 0px 10px rgba(0, 209, 178, 0.5); */
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  line-height: 1.7;
  color: #c0c8d8; /* 稍亮的灰色 */
  opacity: 0.9;
}
.hero-subtitle-secondary {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  color: #a0aec0; /* 更柔和的灰色 */
}

.cta-button {
  background-color: #00d1b2; /* 目标网站的亮青色 */
  color: #121828; /* 深色文字以确保对比度 */
  border: none;
  padding: 0.9rem 2.2rem;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 25px; /* 圆角按钮 */
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  text-decoration: none;
  display: inline-block;
}

.cta-button:hover {
  background-color: #00bfa5;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero-section {
    padding: 100px 0 60px;
    min-height: 70vh;
  }
  .hero-title {
    font-size: 2.5rem;
  }
  .hero-subtitle, .hero-subtitle-secondary {
    font-size: 1rem;
  }
}
</style> 