<template>
  <section class="pricing-section">
    <div class="container">
      <h2 class="section-title">灵活的方案选择</h2>
      <div class="pricing-grid">
        <div class="pricing-card">
          <div class="plan-name">免费版</div>
          <div class="plan-price">¥0 <span class="price-period">/ 永久</span></div>
          <ul class="plan-features">
            <li><span class="feature-icon">✔️</span> 基本PDF文件识别</li>
            <li><span class="feature-icon">✔️</span> 有限的文件管理与分类</li>
            <li><span class="feature-icon">➖</span> 普通网络速度</li>
            <li><span class="feature-icon">❌</span> 无高级AI工具集</li>
          </ul>
          <a href="#" class="btn-cta secondary">立即体验</a>
        </div>

        <div class="pricing-card featured">
          <span class="featured-badge">热门推荐</span>
          <div class="plan-name">付费版</div>
          <div class="plan-price">¥XX <span class="price-period">/ 月 (咨询获取)</span></div>
          <ul class="plan-features">
            <li><span class="feature-icon">✔️</span> 增强图像与PDF识别</li>
            <li><span class="feature-icon">✔️</span> 高级文件管理与智能分类</li>
            <li><span class="feature-icon">⚡</span> 优先网络与处理速度</li>
            <li><span class="feature-icon">✨</span> 一体化AI高级工具集</li>
          </ul>
          <a href="#" class="btn-cta primary">升级专业版</a>
        </div>
      </div>
      <p class="pricing-note">具体付费方案详情请参考 FileNeatAI 官方网站，本站仅为风格演示。</p>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.pricing-section {
  background: linear-gradient(to bottom, #161e31, #121828); /* 从稍亮到更深的渐变 */
  padding: 80px 0;
  color: white;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 50px;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px; /* 卡片间距 */
  align-items: stretch; /* 使卡片等高 */
  max-width: 800px; /* 限制最大宽度，使其居中更好看 */
  margin: 0 auto;
}

.pricing-card {
  background-color: #1f2a40;
  border: 1px solid #2d3748;
  padding: 35px 30px;
  border-radius: 12px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  text-align: center; /* 卡片内容居中 */
  position: relative; /* 为了热门推荐徽章定位 */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.pricing-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 209, 178, 0.15);
}

.pricing-card.featured {
  border-color: #00d1b2;
  /* transform: scale(1.05); */ /* 稍微放大突出 */
}

.featured-badge {
  position: absolute;
  top: -15px; /* 调整到卡片外部 */
  left: 50%;
  transform: translateX(-50%);
  background-color: #00d1b2;
  color: #121828;
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: bold;
  z-index: 1;
}


.plan-name {
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #ffffff;
}

.plan-price {
  font-size: 2.5rem; /* 价格字体放大 */
  font-weight: 700;
  color: #00d1b2; /* 主题色价格 */
  margin-bottom: 25px;
}

.price-period {
  font-size: 0.9rem;
  font-weight: normal;
  color: #a0aec0;
  margin-left: 5px;
}

.plan-features {
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
  text-align: left; /* 特性列表左对齐 */
  flex-grow: 1; /* 使列表占据剩余空间 */
}

.plan-features li {
  font-size: 0.95rem;
  line-height: 1.9; /* 加大行高 */
  color: #c0c8d8;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
}

.feature-icon {
  margin-right: 10px;
  color: #00d1b2; /* icon 颜色 */
  font-weight: bold;
}
.plan-features li .feature-icon:nth-child(3) { /* 普通网络速度 */
  color: #f6e05e; /* 黄色 */
}
.plan-features li .feature-icon:nth-child(4) { /* 无AI */
  color: #e53e3e; /* 红色 */
}


.btn-cta {
  text-decoration: none;
  padding: 12px 25px;
  border-radius: 25px; /* 更圆的按钮 */
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
  display: inline-block;
  margin-top: auto; /* 将按钮推到底部 */
  width: 80%; /* 按钮宽度 */
  max-width: 250px;
}

.btn-cta.primary {
  background-color: #00d1b2;
  color: #121828;
}
.btn-cta.primary:hover {
  background-color: #00bfa5;
  transform: translateY(-2px);
}

.btn-cta.secondary {
  background-color: transparent;
  color: #00d1b2;
  border: 2px solid #00d1b2;
}
.btn-cta.secondary:hover {
  background-color: rgba(0, 209, 178, 0.1);
  transform: translateY(-2px);
}

.pricing-note {
  text-align: center;
  margin-top: 40px;
  font-size: 0.9rem;
  color: #a0aec0;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  .pricing-grid {
    grid-template-columns: 1fr; /* 移动端单列 */
  }
   .pricing-card.featured {
    transform: scale(1);
  }
}
</style> 