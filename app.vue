<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// 全局脚本或导入可以在这里添加
// 例如: import '~/assets/css/main.css';
</script>

<style>
/* 全局基础样式 */
body {
  margin: 0;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif;
  background-color: #121828; /* 模拟目标网站的深色背景 */
  color: #ffffff; /* 默认文字颜色改为白色以适应深色背景 */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 可以定义一些全局的容器样式，便于统一管理 */
.container {
  width: 100%;
  max-width: 1200px; /* 或者你希望的最大宽度 */
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}

/* 通用区块上下间距 */
section {
  padding: 60px 0; /* 上下间距 */
}

/* 确保ID链接跳转时，内容不被固定导航栏遮挡 */
section[id] {
  scroll-margin-top: 80px; /* 根据你的Header高度调整 */
}

/* 基本的链接样式 */
a {
  color: #4A90E2; /* 示例链接颜色，请根据目标网站调整 */
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style> 