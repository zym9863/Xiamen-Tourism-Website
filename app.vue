<template>
  <div>
    <NuxtRouteAnnouncer />
    <AppLayout>
      <NuxtPage />
    </AppLayout>
  </div>
</template>

<script setup>
// 引入全局样式
</script>

<style>
/* 全局样式重置和基础设置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: 'Noto Sans SC', 'Microsoft YaHei', -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: var(--leading-normal);
  color: var(--neutral-dark);
  background: var(--bg-gradient-light);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

/* 自定义滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: var(--neutral-light);
  border-radius: var(--radius-md);
}

::-webkit-scrollbar-thumb {
  background: var(--gradient-primary);
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--gradient-ocean);
}

/* 标题样式增强 */
h1, h2, h3, h4, h5, h6 {
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  margin-bottom: var(--spacing-md);
  color: var(--neutral-dark);
}

h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: var(--font-extrabold);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

h2 {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  position: relative;
  display: inline-block;
}

h2::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: var(--gradient-secondary);
  border-radius: var(--radius-md);
  animation: slideIn 0.6s ease-out;
}

@keyframes slideIn {
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 60px;
    opacity: 1;
  }
}

h3 {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: var(--primary-color);
}

h4 {
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  color: var(--neutral-medium);
}

/* 段落和文本优化 */
p {
  margin-bottom: var(--spacing-md);
  color: var(--neutral-medium);
  line-height: var(--leading-relaxed);
}

/* 链接样式增强 */
a {
  text-decoration: none;
  color: var(--primary-color);
  transition: all var(--transition-normal);
  position: relative;
}

a:hover {
  color: var(--primary-dark);
}

a:not(.btn):hover::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--gradient-primary);
  border-radius: var(--radius-sm);
  animation: linkUnderline 0.3s ease-out;
}

@keyframes linkUnderline {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

/* 图片优化 */
img {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-md);
  transition: all var(--transition-smooth);
}

img:hover {
  transform: scale(1.02);
  box-shadow: var(--shadow-lg);
}

/* 按钮样式大幅提升 */
button, .btn {
  cursor: pointer;
  border: none;
  outline: none;
  background: var(--gradient-primary);
  color: var(--white);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-lg);
  font-weight: var(--font-semibold);
  font-size: 1rem;
  line-height: 1;
  transition: all var(--transition-smooth);
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-md);
}

button::before, .btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left var(--transition-slow);
}

button:hover, .btn:hover {
  background: var(--gradient-ocean);
  transform: translateY(-3px);
  box-shadow: var(--shadow-hover);
}

button:hover::before, .btn:hover::before {
  left: 100%;
}

button:active, .btn:active {
  transform: translateY(-1px);
  box-shadow: var(--shadow-lg);
}

/* 玻璃态效果类 */
.glass {
  background: var(--glass-bg);
  backdrop-filter: var(--blur-md);
  -webkit-backdrop-filter: var(--blur-md);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
}

.glass-light {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: var(--blur-sm);
  -webkit-backdrop-filter: var(--blur-sm);
  border: 1px solid rgba(255, 255, 255, 0.25);
}

/* 卡片样式增强 */
.card {
  background: var(--bg-gradient-card);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-smooth);
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

/* 3D翻转卡片效果 */
.card-flip {
  perspective: 1000px;
}

.card-flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform var(--transition-slow);
  transform-style: preserve-3d;
}

.card-flip:hover .card-flip-inner {
  transform: rotateY(180deg);
}

.card-flip-front,
.card-flip-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: var(--radius-lg);
}

.card-flip-back {
  transform: rotateY(180deg);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

section {
  padding: var(--spacing-xxl) 0;
}

.text-center {
  text-align: center;
}

/* 进阶动画效果 */
.fade-in {
  animation: fadeIn var(--duration-slow) ease-in;
}

@keyframes fadeIn {
  from { 
    opacity: 0;
    transform: translateY(20px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-up {
  animation: slideUp var(--duration-slow) ease-out;
}

@keyframes slideUp {
  from { 
    transform: translateY(30px); 
    opacity: 0;
  }
  to { 
    transform: translateY(0); 
    opacity: 1;
  }
}

.zoom-in {
  animation: zoomIn var(--duration-normal) ease-out;
}

@keyframes zoomIn {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.bounce-in {
  animation: bounceIn var(--duration-slower) var(--transition-bounce);
}

@keyframes bounceIn {
  from {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  70% {
    transform: scale(0.9);
    opacity: 0.9;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* 悬停效果增强 */
.hover-lift {
  transition: all var(--transition-smooth);
}

.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.hover-glow {
  transition: all var(--transition-normal);
}

.hover-glow:hover {
  box-shadow: 0 0 30px rgba(26, 115, 232, 0.4);
}

/* 渐变文本效果 */
.gradient-text {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gradient-text-secondary {
  background: var(--gradient-secondary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 脉冲动画 */
.pulse {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(26, 115, 232, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 20px rgba(26, 115, 232, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(26, 115, 232, 0);
  }
}

/* 浮动动画 */
.float {
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* 旋转加载动画 */
.spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 骨架屏样式 */
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

/* 响应式工具类 */
.hidden-mobile {
  display: block;
}

.hidden-desktop {
  display: none;
}

/* 响应式断点 */
@media (max-width: 1024px) {
  .container {
    padding: 0 var(--spacing-md);
  }
  
  section {
    padding: var(--spacing-xl) 0;
  }
}

@media (max-width: 768px) {
  .hidden-mobile {
    display: none;
  }
  
  .hidden-desktop {
    display: block;
  }
  
  h1 {
    font-size: clamp(1.8rem, 4vw, 2.5rem);
  }

  h2 {
    font-size: clamp(1.4rem, 3.5vw, 2rem);
  }
  
  section {
    padding: var(--spacing-lg) 0;
  }
  
  .container {
    padding: 0 var(--spacing-md);
  }
  
  .card:hover {
    transform: none;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 var(--spacing-sm);
  }
  
  section {
    padding: var(--spacing-md) 0;
  }
  
  button, .btn {
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: 0.9rem;
  }
}
</style>
