<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">文件禅</div>
        <div class="footer-links">
          <NuxtLink to="/#home" @click="scrollToSection('home', $event)">首页</NuxtLink>
          <NuxtLink to="/#pricing" @click="scrollToSection('pricing', $event)">价格</NuxtLink>
          <!-- 根据需要添加更多链接 -->
        </div>
        <p class="copyright">&copy; Copyright {{ new Date().getFullYear() }} TechEntertainAI (风格模仿). All Rights Reserved.</p>
        <p class="credits">灵感来源于 FileNeatAI 官网</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const scrollToSection = (sectionId: string, event: MouseEvent) => {
  event.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  } else {
    const router = useRouter();
    router.push(`/#${sectionId}`);
  }
};
</script>

<style scoped>
.app-footer {
  background-color: #1c263b; /* 页脚背景色，比body稍亮或不同 */
  color: #a0aec0; /* 页脚文字颜色 */
  padding: 3rem 0;
  text-align: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.footer-links a {
  color: #a0aec0;
  text-decoration: none;
  font-size: 0.9rem;
}

.footer-links a:hover {
  color: #ffffff;
  text-decoration: underline;
}

.copyright, .credits {
  font-size: 0.85rem;
  margin: 0.25rem 0;
}
</style> 