<template>
  <section class="why-choose-us-section">
    <div class="container">
      <h2 class="section-title">为什么选择文件禅？</h2>
      <div class="reasons-grid">
        <div class="reason-card">
          <div class="reason-icon-placeholder"><span>📁</span></div>
          <h3>更智能的文件整理</h3>
          <p class="reason-subtitle">AI驱动，高效便捷，告别混乱</p>
          <p>AI快速归纳分析，自动分类至对应文件夹，并智能推荐命名。复杂的文档结构也能轻松搞定，大幅提升工作效率。</p>
        </div>
        <div class="reason-card">
          <div class="reason-icon-placeholder"><span>🏷️</span></div>
          <h3>更精准的文件重命名</h3>
          <p class="reason-subtitle">精准识别，专业命名，规范统一</p>
          <p>AI深度理解文件内容，无论是报告、设计稿还是代码，都能生成专业且易于检索的名称，让文件管理更规范。</p>
        </div>
        <div class="reason-card">
          <div class="reason-icon-placeholder"><span>🛡️</span></div> <!-- 隐私图标 -->
          <h3>更安全的模型选择</h3>
          <p class="reason-subtitle">云端强大，本地安全，灵活选择</p>
          <p>提供强大的云端AI模型处理能力，同时支持本地模型运行，文件无需上传第三方，充分保障数据隐私与安全。</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.why-choose-us-section {
  background-color: #161e31;
  padding: 80px 0;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 50px;
  color: #ffffff;
}

.reasons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.reason-card {
  background-color: #1f2a40;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  text-align: left; /* 内容左对齐 */
  border-left: 4px solid #00d1b2; /* 左侧主题色边框 */
  transition: transform 0.3s ease;
}
.reason-card:hover {
  transform: translateY(-5px);
}

.reason-icon-placeholder {
  font-size: 2.8rem;
  color: #00d1b2;
  margin-bottom: 15px;
  display: inline-block; /* 防止被p标签挤压 */
}

.reason-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #ffffff;
}

.reason-subtitle {
  font-size: 1rem;
  font-weight: 500; /* 正常字重 */
  color: #00d1b2; /* 主题色副标题 */
  margin-bottom: 15px;
}

.reason-card p:not(.reason-subtitle) {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #a0aec0;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  .reason-card h3 {
    font-size: 1.3rem;
  }
}
</style> 