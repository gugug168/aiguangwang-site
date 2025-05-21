<template>
  <section class="versions-section" id="versions">
    <div class="container">
      <h2 class="section-title">更新日志与说明</h2>
      <div class="versions-grid-single-column">
        <div class="version-card-log">
          <div class="version-header-log">
            <h3>版本号：1.1.0 (最新版)</h3>
            <span class="version-date">2025/05/18</span>
          </div>
          <h4>更新内容：</h4>
          <ul class="features-list-log">
            <li>增加识别文件格式：html/pptx/txt/MD/CSV/GIF/BMP/WEBP/HTM格式</li>
            <li>点击"AI处理"能够处理监控文件下所有层级文件夹里面的文件</li>
            <li>修正界面中消息无法显示"监控期间放入监控文件夹的文件的处理消息"</li>
            <li>明确不支持.doc和.ppt后缀的文件</li>
          </ul>
          <h4>现能处理：</h4>
          <ul class="features-list-log">
            <li>图片: .jpg、.jpeg、.png、.bmp、.tiff、.gif、.webp</li>
            <li>PDF: .pdf</li>
            <li>Word 文档: .docx</li>
            <li>Excel 表格: .xlsx</li>
            <li>PowerPoint 演示文稿: .pptx</li>
            <li>文本文件: .txt、.csv</li>
            <li>Markdown 文件: .md</li>
            <li>网页文件: .html、.htm</li>
          </ul>
          <p class="notes">注意：.doc、.ppt（老版 Word/PPT）不支持自动处理，需用户自行转为 .docx/.pptx。其它未列出的后缀会被自动跳过，并在日志中提示"不支持该格式"。</p>
        </div>

        <div class="version-card-log">
          <div class="version-header-log">
            <h3>版本号：1.0.0</h3>
            <span class="version-date">2025/05/13</span>
          </div>
          <h4>更新内容：</h4>
          <ul class="features-list-log">
            <li>正式上线。</li>
            <li>暂时只支持pdf/png/jpg/gif/doc/docx格式，后续再增加。</li>
          </ul>
        </div>

        <div class="info-card">
          <h3>【系统兼容性说明】</h3>
          <p>本软件当前仅支持Windows系统运行，macOS/Linux版本正在开发中，预计将于下一次更新上线。</p>
        </div>

        <div class="info-card">
          <h3>【安全提示】</h3>
          <p>若遇到杀毒软件误报情况，请将程序添加信任白名单。我们将在后续版本持续优化安全兼容性。</p>
        </div>

        <div class="info-card">
          <h3>【首次使用指引】</h3>
          <ul class="features-list-log">
            <li>设置工作目录：指定输入/输出文件夹路径</li>
            <li>点击【保存配置】按钮</li>
            <li>配置文件规则：自定义层级目录深度，设置命名模板（支持变量参数）</li>
            <li>再次点击【保存配置】</li>
            <li>重启软件使配置生效</li>
          </ul>
        </div>
        
        <div class="info-card">
          <h3>【监控机制说明】</h3>
          <p><strong>实时监控功能：</strong></p>
          <ul class="features-list-log">
            <li>新增文件：自动触发处理流程</li>
            <li>历史文件：需手动点击【AI处理】按钮批量执行</li>
          </ul>
          <p><strong>特别注意：</strong> 修改配置后必须重启软件才能生效</p>
        </div>

        <div class="info-card">
          <h3>【更新与反馈】</h3>
          <ul class="features-list-log">
            <li>✓ 每月至少一次功能更新</li>
            <li>✓ 季度性重大版本升级</li>
            <li>✓ 优先修复用户反馈问题</li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.versions-section {
  background-color: #121828;
  padding: 80px 0;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 50px;
  color: #ffffff;
}

.versions-grid-single-column {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 800px;
  margin: 0 auto;
}

.version-card-log, .info-card {
  background-color: #1f2a40;
  border: 1px solid #2d3748;
  border-radius: 12px;
  padding: 25px 30px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}

.version-header-log {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #2d3748;
}

.version-header-log h3 {
  font-size: 1.5rem;
  color: #ffffff;
  font-weight: 600;
  margin: 0;
}

.version-date {
  font-size: 0.9rem;
  color: #a0aec0;
}

.version-card-log h4, .info-card h3 {
  font-size: 1.2rem;
  color: #00d1b2;
  margin-top: 20px;
  margin-bottom: 10px;
}
.version-card-log:first-child h4, .info-card:first-child h3 {
    margin-top: 0;
}

.features-list-log {
  list-style: none;
  padding-left: 0;
  margin-bottom: 15px;
}

.features-list-log li {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #a0aec0;
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
}

.features-list-log li::before {
  content: '•';
  color: #00d1b2;
  position: absolute;
  left: 0;
  font-weight: bold;
}

.notes {
  font-size: 0.9rem;
  color: #718096;
  line-height: 1.6;
  margin-top: 15px;
}

.info-card p {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #a0aec0;
  margin-bottom: 10px;
}

.info-card p strong {
  color: #c0c8d8;
  font-weight: 600;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  .version-header-log h3 {
    font-size: 1.3rem;
  }
  .version-card-log h4, .info-card h3 {
    font-size: 1.1rem;
  }
}
</style> 