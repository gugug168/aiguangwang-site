<template>
  <section class="pricing-section">
    <div class="container">
      <h2 class="section-title">免费使用，持续进化</h2>
      <div class="pricing-grid-single-free">
        <div class="pricing-card-free">
          <div class="plan-name">免费使用</div>
          <div class="plan-icon-free">🎉</div> 
          <p class="free-text">
            本软件目前完全免费开放使用！<br />
            我们致力于不断优化和增加更多实用功能，敬请期待后续更新。
          </p>
          <p class="free-text-secondary">
            您的支持是我们前进的动力，欢迎通过 <a href="https://fv2fbshiww0.feishu.cn/docx/QGMbdlKSKoFcAVxTKc0cCaEIngf" target="_blank" class="link-to-feedback">更新与反馈</a> 区域提供宝贵意见。
          </p>
          <!-- 可以保留一个下载或跳转到更新日志的按钮 -->
           <a href="https://fv2fbshiww0.feishu.cn/docx/QGMbdlKSKoFcAVxTKc0cCaEIngf" target="_blank" class="btn-cta primary">查看更新日志</a>
        </div>
      </div>
      <!-- <p class="pricing-note">具体付费方案详情请参考 FileNeatAI 官方网站，本站仅为风格演示。</p> -->
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.pricing-section {
  background: linear-gradient(to bottom, #161e31, #121828);
  padding: 80px 0;
  color: white;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 50px;
}

.pricing-grid-single-free {
  display: flex;
  justify-content: center;
  align-items: center;
}

.pricing-card-free {
  background-color: #1f2a40;
  border: 1px solid #00d1b2; /* 主题色边框突出 */
  padding: 40px 35px;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 209, 178, 0.1);
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 500px; /* 限制卡片最大宽度 */
}

.plan-name {
  font-size: 2rem; /* 稍大一些 */
  font-weight: 600;
  margin-bottom: 20px;
  color: #ffffff;
}

.plan-icon-free {
    font-size: 3rem;
    margin-bottom: 20px;
    color: #00d1b2;
}

.free-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #c0c8d8;
  margin-bottom: 15px;
}

.free-text-secondary {
  font-size: 1rem;
  line-height: 1.7;
  color: #a0aec0;
  margin-bottom: 30px;
}

.link-to-feedback {
    color: #00d1b2;
    text-decoration: underline;
}
.link-to-feedback:hover {
    color: #00bfa5;
}

.btn-cta {
  text-decoration: none;
  padding: 12px 25px;
  border-radius: 25px;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: inline-block;
  margin-top: auto;
  width: auto; /* 按钮宽度自适应内容 */
  align-self: center;
}

.btn-cta.primary {
  background-color: #00d1b2;
  color: #121828;
}
.btn-cta.primary:hover {
  background-color: #00bfa5;
  transform: translateY(-2px);
}

/* 移除 pricing-note 和旧的 grid 样式 */

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  .plan-name {
      font-size: 1.8rem;
  }
  .free-text {
      font-size: 1rem;
  }
  .free-text-secondary {
      font-size: 0.9rem;
  }
}
</style> 