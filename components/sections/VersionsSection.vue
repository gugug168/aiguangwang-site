<template>
  <section class="versions-section">
    <div class="container">
      <h2 class="section-title">两大版本，满足不同需求</h2>
      <div class="versions-grid">
        <div class="version-card recommended">
          <div class="version-header">
            <h3>V3 版本 (AI增强版)</h3>
            <span class="badge">推荐</span>
          </div>
          <div class="version-icon-placeholder">
            <img src="/images/v3_icon.svg" alt="V3 Icon" v-if="true" />
            <span v-else>🚀</span>
          </div>
          <ul class="features-list">
            <li>全新交互式UI，自定义提示词，更灵活</li>
            <li>AI Langchain驱动，整体质量与智能度大幅提升</li>
            <li>高级文件整理与重命名，支持复杂场景</li>
            <li>本地模型能力增强，兼顾隐私与效率</li>
          </ul>
          <div class="version-tag">最新版本: 3.0.3</div>
          <div class="download-buttons">
            <a href="#" class="btn-download primary">Windows 下载</a>
            <a href="#" class="btn-download">MacOS Intel 下载</a>
            <a href="#" class="btn-download">MacOS ARM 下载</a>
          </div>
        </div>

        <div class="version-card">
          <div class="version-header">
            <h3>V2 版本 (经典版)</h3>
          </div>
           <div class="version-icon-placeholder">
            <img src="/images/v2_icon.svg" alt="V2 Icon" v-if="true" />
            <span v-else>📦</span>
          </div>
          <ul class="features-list">
            <li>基础文件整理与批量重命名功能</li>
            <li>简洁界面，操作直观易上手</li>
            <li>稳定可靠，满足日常整理需求</li>
            <li>轻量级，资源占用小</li>
          </ul>
          <div class="version-tag">稳定版本: 2.4.7</div>
          <div class="download-buttons">
            <a href="#" class="btn-download">Windows 下载</a>
            <a href="#" class="btn-download">MacOS Intel 下载</a>
            <a href="#" class="btn-download">MacOS ARM 下载</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.versions-section {
  background-color: #121828; /* 与 body 背景一致或稍有区别 */
  padding: 80px 0;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 50px;
  color: #ffffff;
}

.versions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 40px;
}

.version-card {
  background-color: #1f2a40;
  border: 1px solid #2d3748; /* 边框颜色 */
  border-radius: 12px;
  padding: 35px 30px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  align-items: center; /* 图标等居中 */
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.version-card:hover {
  transform: translateY(-5px);
  border-color: #00d1b2;
}

.version-card.recommended {
  border-top: 4px solid #00d1b2; /* 推荐版本的特殊标记 */
}

.version-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  text-align: left;
}

.version-header h3 {
  font-size: 1.7rem;
  color: #ffffff;
  font-weight: 600;
  margin: 0;
}

.badge {
  background-color: #00d1b2;
  color: #121828;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: bold;
}

.version-icon-placeholder {
  font-size: 3.5rem;
  color: #00d1b2;
  margin-bottom: 25px;
  /* 如果用图片:
  width: 70px;
  height: 70px;
  img { width: 100%; height: 100%; object-fit: contain; }
  */
}

.features-list {
  list-style: none;
  padding: 0;
  margin-bottom: 25px;
  width: 100%;
  text-align: left;
}

.features-list li {
  font-size: 0.95rem;
  line-height: 1.8;
  color: #a0aec0;
  padding-left: 25px;
  position: relative;
  margin-bottom: 10px;
}

.features-list li::before {
  content: '✓';
  color: #00d1b2;
  position: absolute;
  left: 0;
  font-weight: bold;
}

.version-tag {
  font-size: 0.85rem;
  color: #718096; /* 较暗的灰色 */
  margin-bottom: 25px;
  align-self: flex-start; /* 左对齐 */
}

.download-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.btn-download {
  background-color: #2d3748; /* 次要按钮颜色 */
  color: #e0e0e0;
  text-decoration: none;
  padding: 12px 20px;
  border-radius: 8px;
  font-weight: 500;
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: block;
  border: 1px solid #4a5568;
}

.btn-download:hover {
  background-color: #4a5568;
  color: white;
}

.btn-download.primary {
  background-color: #00d1b2;
  color: #121828;
  border: none;
}
.btn-download.primary:hover {
  background-color: #00bfa5;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  .version-header h3 {
    font-size: 1.5rem;
  }
}
</style> 