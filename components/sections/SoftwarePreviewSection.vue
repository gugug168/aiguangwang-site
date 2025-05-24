<template>
  <section class="software-preview-section">
    <div class="container">
      <h2 class="section-title">软件界面概览</h2>
      <div class="image-gallery">
        <div class="image-container">
          <h3 class="image-title">主界面</h3>
          <img src="/main-interface.png" alt="AI 工程文档归档助手 - 主界面" class="preview-image" />
          <p class="image-caption-item">简洁直观的主操作界面，方便选择输入输出文件夹及查看处理日志。</p>
        </div>
        <div class="image-container">
          <h3 class="image-title">归档设置</h3>
          <img src="/archive-settings.png" alt="AI 工程文档归档助手 - 归档设置界面" class="preview-image" />
          <p class="image-caption-item">灵活的归档设置界面，用户可根据需求自定义文件结构、命名规则及AI参数等。</p>
        </div>
      </div>
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
  margin-bottom: 50px;
  color: #ffffff;
}

.image-gallery {
  display: flex;
  flex-direction: column; /* 上下排列图片 */
  gap: 40px; /* 图片之间的间距 */
  align-items: center; /* 图片居中 */
}

.image-container {
  margin-bottom: 20px;
  border-radius: 12px;
  overflow: hidden; /* 确保图片圆角生效 */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  max-width: 900px; /* 限制图片最大宽度 */
  width: 100%; /* 让容器宽度适应父元素 */
  background-color: #1f2a40; /* 给每个图片容器一个背景色 */
  padding: 20px;
}

.image-title {
  font-size: 1.5rem;
  font-weight: 500;
  color: #00d1b2; /* 主题色 */
  margin-bottom: 15px;
}

.preview-image {
  max-width: 100%;
  height: auto;
  display: block; /* 去除图片底部可能的空白 */
  border-radius: 8px; /* 图片略微圆角 */
  margin-bottom: 15px; /* 图片和下方描述的间距 */
}

.image-caption-item {
  font-size: 1rem;
  color: #a0aec0;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto; /* 居中描述文字 */
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  .image-title {
    font-size: 1.3rem;
  }
  .image-caption-item {
    font-size: 0.9rem;
  }
}
</style> 