<template>
  <section class="software-preview-section">
    <div class="container">
      <h2 class="section-title">软件界面概览</h2>
      <div class="image-container">
        <img src="/归档设置.png" alt="AI 工程文档归档助手 - 归档设置界面" class="preview-image" />
      </div>
      <p class="image-caption">
        灵活的归档设置界面，用户可根据需求自定义文件结构、命名规则及AI参数等。
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
// No script needed for this simple section
</script>

<style scoped>
.software-preview-section {
  background-color: #161e31; /* 与其他深色区域背景一致 */
  padding: 80px 0;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 40px;
  color: #ffffff;
}

.image-container {
  margin-bottom: 20px;
  border-radius: 12px;
  overflow: hidden; /* 确保图片圆角生效 */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  max-width: 900px; /* 限制图片最大宽度 */
  margin-left: auto;
  margin-right: auto;
}

.preview-image {
  max-width: 100%;
  height: auto;
  display: block; /* 去除图片底部可能的空白 */
  border-radius: 12px; /* 图片也加圆角，防止溢出容器 */
}

.image-caption {
  font-size: 1.1rem;
  color: #a0aec0;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto; /* 居中描述文字 */
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  .image-caption {
    font-size: 1rem;
  }
}
</style> 