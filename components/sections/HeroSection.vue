<template>
  <section class="hero-section">
    <div class="container hero-content">
      <h1 class="hero-title">AI 工程文档归档助手</h1>
      <p class="hero-subtitle">
        智能整理AI工程文档，提高工作效率。<br />
        专为工程师、资料员打造，实现扫描件、PDF及Word等文档的自动识别、分类、重命名和归档。
      </p>
      <p class="hero-subtitle-secondary">
        通过OCR技术与AI能力结合，允许用户高度自定义归档规则，显著提升工作效率，减少手动操作。
      </p>
      <div class="cta-buttons-container">
        <NuxtLink to="/#features" class="cta-button primary">核心功能</NuxtLink>
        <NuxtLink to="/#versions" class="cta-button secondary">更新日志</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No script needed for this simple version
</script>

<style scoped>
.hero-section {
  /* 调整渐变以增强背景图可见性 */
  background-image: linear-gradient(135deg, rgba(18, 24, 40, 0.75) 0%, rgba(10, 14, 22, 0.85) 100%), url('/主界面.png');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  color: white;
  padding: 140px 0 100px; /* 增加上下padding */
  text-align: center;
  min-height: 90vh; /* 略微增加高度 */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative; /* 为可能的叠加元素准备 */
}

.hero-content {
  max-width: 800px;
  position: relative; /* 确保内容在渐变之上 */
  z-index: 2;
}

.hero-title {
  font-size: 3.8rem; /* 增大字号 */
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7); /* 增强文字阴影 */
}

.hero-subtitle {
  font-size: 1.3rem; /* 略微增大 */
  margin-bottom: 1.5rem; /* 调整间距 */
  line-height: 1.7;
  color: #e0e6f0; /* 略微提亮副标题颜色 */
  opacity: 0.95;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
}
.hero-subtitle-secondary {
  font-size: 1.15rem; /* 略微增大 */
  margin-bottom: 2.5rem; /* 增大与按钮的间距 */
  line-height: 1.6;
  color: #c0c8d8;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.cta-buttons-container {
  display: flex;
  justify-content: center;
  gap: 1.5rem; /* 按钮之间的间距 */
  margin-top: 2rem; /* 与上方文字的间距 */
}

.cta-button {
  border: none;
  padding: 0.9rem 2.2rem;
  font-size: 1.1rem;
  font-weight: bold;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  text-decoration: none;
  display: inline-block;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.cta-button.primary {
  background-color: #00d1b2;
  color: #121828;
}

.cta-button.primary:hover {
  background-color: #00bfa5;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 209, 178, 0.4);
}

.cta-button.secondary {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.cta-button.secondary:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .hero-section {
    padding: 100px 0 60px;
    min-height: 80vh;
  }
  .hero-title {
    font-size: 2.8rem; /* 调整移动端字号 */
  }
  .hero-subtitle {
    font-size: 1.1rem;
  }
  .hero-subtitle-secondary {
    font-size: 1rem;
  }
  .cta-buttons-container {
    flex-direction: column; /* 移动端按钮竖向排列 */
    gap: 1rem;
  }
  .cta-button {
    width: 80%;
    margin: 0 auto;
  }
}
</style>