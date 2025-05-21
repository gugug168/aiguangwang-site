<template>
  <section class="why-choose-us-section">
    <div class="container">
      <h2 class="section-title">为什么选择 AI 工程文档归档助手？</h2>
      <div class="reasons-grid">
        <div class="reason-card">
          <div class="reason-icon-placeholder"><span>🛠️</span></div> <!-- 工程相关图标 -->
          <h3>专为工程领域优化</h3>
          <p class="reason-subtitle">深入理解行业痛点，满足专业需求</p>
          <p>针对工程师、资料员的日常工作习惯和文档特点进行设计，提供最贴合实际应用场景的归档解决方案。</p>
        </div>
        <div class="reason-card">
          <div class="reason-icon-placeholder"><span>⚙️</span></div> <!-- 自动化/自定义图标 -->
          <h3>高度自动化与自定义</h3>
          <p class="reason-subtitle">智能处理，灵活配置，省心省力</p>
          <p>从文件识别、分类到重命名、归档全程自动化处理。同时支持用户根据自身需求灵活设置归档层级、命名规则等。</p>
        </div>
        <div class="reason-card">
          <div class="reason-icon-placeholder"><span>📈</span></div> <!-- 效率提升图标 -->
          <h3>显著提升效率，减少错误</h3>
          <p class="reason-subtitle">智能高效，精准可靠，保障质量</p>
          <p>大幅度减少人工整理文档的重复劳动和时间成本，有效避免手动操作可能产生的错误和遗漏，确保归档的准确性和规范性。</p>
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