<template>
  <header class="app-header">
    <div class="container nav-container">
      <div class="logo">
        <a href="/">文件禅</a>
      </div>
      <nav>
        <ul class="nav-links">
          <li><NuxtLink to="/#home" @click="scrollToSection('home', $event)">首页</NuxtLink></li>
          <li><NuxtLink to="/#pricing" @click="scrollToSection('pricing', $event)">价格</NuxtLink></li>
          <!-- <li><NuxtLink to="/#contact" @click="scrollToSection('contact', $event)">联系我们</NuxtLink></li> -->
        </ul>
      </nav>
      <div class="lang-switcher">
        <button class="lang-button">简体中文</button>
        <!-- 可以扩展为下拉菜单 -->
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const scrollToSection = (sectionId: string, event: MouseEvent) => {
  event.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  } else {
    // 如果在不同页面，或者元素不存在，则正常导航
    const router = useRouter();
    router.push(`/#${sectionId}`);
  }
};
</script>

<style scoped>
.app-header {
  background-color: rgba(28, 38, 59, 0.8); /* 深蓝透明背景，模仿目标站 */
  backdrop-filter: blur(10px); /* 毛玻璃效果 */
  color: white;
  padding: 1rem 0;
  position: fixed; /* 固定在顶部 */
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nav-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 2rem; /* 链接间距 */
}

.nav-links a {
  color: #e0e0e0; /* 浅灰色链接 */
  text-decoration: none;
  font-size: 1rem;
  padding-bottom: 5px;
  transition: color 0.3s ease, border-color 0.3s ease;
}

.nav-links a:hover,
.nav-links a.router-link-active, /* NuxtLink 激活状态 */
.nav-links a.router-link-exact-active { /* NuxtLink 精确激活状态 */
  color: white;
  border-bottom: 2px solid #00d1b2; /* 目标站风格的下划线 */
}

.lang-switcher .lang-button {
  background-color: transparent;
  color: #e0e0e0;
  border: 1px solid #e0e0e0;
  padding: 0.5rem 1rem;
  border-radius: 20px; /* 圆角按钮 */
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s, color 0.3s;
}

.lang-switcher .lang-button:hover {
  background-color: #00d1b2;
  color: #1c263b;
  border-color: #00d1b2;
}

/* 移动端样式 */
@media (max-width: 768px) {
  .nav-links {
    /* 在移动端可以考虑隐藏或变为汉堡菜单 */
    display: none; /* 简单隐藏，复杂情况需要JS切换 */
  }
   .logo a {
    font-size: 1.5rem;
   }
  .lang-switcher .lang-button {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
}
</style> 