<template>
  <section class="testimonials-section">
    <div class="container">
      <h2 class="section-title">听听用户的声音</h2>
      <div class="testimonials-grid">
        <div class="testimonial-card" v-for="(testimonial, index) in testimonials" :key="index">
          <div class="testimonial-icon">{{ testimonial.icon }}</div>
          <p class="testimonial-text">"{{ testimonial.text }}"</p>
          <p class="testimonial-author">- {{ testimonial.author }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const testimonials = ref([
  { icon: '💬', text: '文件杂乱无章中摸提案整理处理文件夹，这款工具帮大忙了！', author: '设计师小王' },
  { icon: '👍', text: '我是企业中层管理者，文件整理非常适合处理大量文件夹，效率提升明显。', author: '项目经理李女士' },
  { icon: '🚀', text: '一款实用高效的AI Agent，希望能出更多实用的功能，期待！', author: '自由职业者张先生' },
  { icon: '💪', text: '文件整理功能太棒了！使用效果符合预期，已经推荐给同事们了。', author: '行政助理赵小姐' },
  { icon: '✨', text: 'AI算法真强大，能够准确预测我的整理方式，太方便了！', author: '科研人员陈博士' },
  { icon: '🔋', text: '以前每天整理文件都要花几小时，现在用它很快搞定，解决大问题了！', author: '市场专员周女士' },
]);
</script>

<style scoped>
.testimonials-section {
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

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.testimonial-card {
  background-color: #1f2a40;
  padding: 30px 25px;
  border-radius: 10px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.2);
  text-align: left;
  border: 1px solid #2d3748;
  position: relative; /* 为引号定位 */
  overflow: hidden; /* 防止引号溢出 */
}

.testimonial-card::before { /* 添加装饰性引号 */
  content: '“';
  font-family: Georgia, serif;
  font-size: 4rem;
  color: rgba(0, 209, 178, 0.1); /* 半透明主题色 */
  position: absolute;
  top: 10px;
  left: 15px;
  line-height: 1;
}


.testimonial-icon {
  font-size: 1.8rem; /* emoji 图标大小 */
  margin-bottom: 15px;
  display: inline-block; /* 确保背景等效果正确应用 */
  /* background-color: rgba(0, 209, 178, 0.1);
  padding: 5px 8px;
  border-radius: 5px; */
}

.testimonial-text {
  font-size: 1rem;
  font-style: italic;
  color: #c0c8d8;
  line-height: 1.7;
  margin-bottom: 20px;
  position: relative; /* 确保在引号之上 */
  z-index: 1;
}

.testimonial-author {
  font-size: 0.9rem;
  font-weight: 600; /* 加粗作者 */
  color: #00d1b2; /* 作者使用主题色 */
  text-align: right;
  position: relative;
  z-index: 1;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
}
</style> 