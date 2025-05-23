<template>
  <header class="app-header">
    <div class="container nav-container">
      <div class="logo">
        <a href="/">AI 工程文档归档助手</a>
      </div>
      <nav>
        <ul class="nav-links">
          <li><NuxtLink to="/#home" @click="scrollToSection('home', $event)">首页</NuxtLink></li>
          <li><NuxtLink to="/#features" @click="scrollToSection('features', $event)">软件特色</NuxtLink></li>
          <li><NuxtLink to="/#versions" @click="scrollToSection('versions', $event)">更新日志</NuxtLink></li>
          <!-- <li><NuxtLink to="/#contact" @click="scrollToSection('contact', $event)">联系我们</NuxtLink></li> -->
        </ul>
      </nav>
      <div class="right-section">
        <div class="header-actions">
          <a href="#" class="download-button">下载</a>
        </div>
        <div class="lang-switcher">
          <button class="lang-button">简体中文</button>
          <!-- 可以扩展为下拉菜单 -->
        </div>
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
  font-size: 1.6rem; /* 略微调整字号以适应较长的文本 */
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

.right-section {
  display: flex;
  align-items: center;
  gap: 1rem; /* 下载按钮和语言切换器之间的间距 */
}

.header-actions {
  /* display: flex; align-items: center; */ /* 由父级 .right-section 控制 */
}

.download-button {
  background-color: #00d1b2; /* 主题色 */
  color: #121828; /* 深色文字 */
  padding: 0.6rem 1.3rem;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: background-color 0.3s, transform 0.2s;
}

.download-button:hover {
  background-color: #00bfa5; /* 主题色加深 */
  transform: translateY(-1px);
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
    font-size: 1.3rem; /* 稍微再小一点，给右侧按钮留空间 */
   }
  .right-section {
    /* 在移动端，下载按钮和语言切换器会靠右 */
  }
  .download-button {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
  .lang-switcher .lang-button {
    padding: 0.5rem 1rem; /* 统一按钮大小 */
    font-size: 0.8rem;
  }
}
</style> 