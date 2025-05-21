<template>
  <section class="features-section">
    <div class="container">
      <h2 class="section-title">核心功能，专为工程领域打造</h2>
      <div class="features-grid">
        <div class="feature-item">
          <div class="feature-icon-wrapper">
            <span class="feature-icon">📄</span>
          </div>
          <h3>智能识别与分类</h3>
          <p>采用先进OCR技术，精准识别扫描件、图片及PDF文档内容。结合AI能力，自动对工程图纸、合同、报告等进行智能分类。</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon-wrapper">
            <span class="feature-icon">⚙️</span>
          </div>
          <h3>自定义归档与重命名</h3>
          <p>用户可根据项目需求、文档类型、日期等自定义多级目录结构和文件命名规则，实现高度个性化的自动归档。</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon-wrapper">
            <span class="feature-icon">🔄</span>
          </div>
          <h3>多格式支持与处理</h3>
          <p>支持处理 PDF、Word、Excel、PPT 及多种图片格式。对无法直接读取内容的文档，自动尝试OCR识别，最大化兼容性。</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.features-section {
  background-color: #161e31; /* 比body稍亮的深色背景 */
  padding: 80px 0;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 50px;
  color: #ffffff;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px; /* 加大间距 */
}

.feature-item {
  background-color: #1f2a40; /* 卡片背景色 */
  padding: 35px 30px;
  border-radius: 12px; /* 更大的圆角 */
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
  text-align: center; /* 内容居中 */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 35px rgba(0, 209, 178, 0.2); /* 悬停时使用主题色阴影 */
}

.feature-icon-wrapper {
  margin-bottom: 20px;
  /* 可以设置固定大小以统一图标显示 */
}

.feature-icon {
  font-size: 3.5rem; /* 图标大小 */
  color: #00d1b2; /* 主题色图标 */
  /* 如果使用图片/SVG，可以这样设置：
  display: inline-block;
  width: 60px;
  height: 60px;
  background-image: url('/images/your-icon.svg');
  background-size: contain;
  background-repeat: no-repeat;
  */
}

.feature-item h3 {
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #ffffff;
}

.feature-item p {
  font-size: 1rem;
  line-height: 1.7;
  color: #a0aec0; /* 浅灰色文字 */
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  .feature-item h3 {
    font-size: 1.4rem;
  }
}
</style> 