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
  { icon: '🏗️', text: '作为一名结构工程师，每天跟大量的图纸和计算书打交道，这个归档助手帮我自动整理，查找文件方便多了！', author: '结构工程师王工' },
  { icon: '💡', text: '我是项目资料员，以前手动归档工程资料费时费力还容易出错。用了这个软件后，效率大大提升，而且分类命名都符合我们的项目规范。', author: '项目资料员李女士' },
  { icon: '🚀', text: '非常看好这款AI工具在工程领域的应用！OCR识别扫描件很准，自定义规则也很灵活，期待后续能集成更多针对工程文档的功能。', author: 'BIM工程师张工' },
  { icon: '📋', text: '管理施工日志和技术交底文件一直是个头疼事，这款软件能按日期和类型自动归档，太实用了，已推荐给监理和施工队的同事。', author: '现场工程师赵工' },
  { icon: '⚙️', text: 'AI自动提取文件名中的项目编号和图号进行重命名，这个功能对我们设计院来说简直是福音，大大减少了手动修改的工作量。', author: '电气工程师陈工' },
  { icon: '⏱️', text: '以前在海量竣工资料里找一份特定文件得半天，现在几秒钟就能定位到。感谢开发团队，为我们工程人节省了宝贵时间！', author: '档案管理员周女士' },
]);
</script>

<style scoped>
/* 样式可以保留或注释，如果模板完全移除，样式将不应用 */
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
