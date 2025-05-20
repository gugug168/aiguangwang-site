<template>
  <section class="features-section">
    <div class="container">
      <h2 class="section-title">核心功能，AI 赋能</h2>
      <div class="features-grid">
        <div class="feature-item">
          <div class="feature-icon-wrapper">
            <!-- 替换为SVG或图片 -->
            <span class="feature-icon">📁</span>
          </div>
          <h3>智能文件整理</h3>
          <p>通过AI快速归纳文件内容，完成分类整理至对应文件夹，并为您自动推荐专业的命名方案。告别手动整理的繁琐。</p>
        </div>
        <div class="feature-item">
          <div class="feature-icon-wrapper">
            <!-- 替换为SVG或图片 -->
            <span class="feature-icon">🏷️</span>
          </div>
          <h3>精准文件重命名</h3>
          <p>AI深度分析文件内容，智能生成专业且符合规范的文档名称。无论是报告、图片还是代码片段，都能精准识别并命名。</p>
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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