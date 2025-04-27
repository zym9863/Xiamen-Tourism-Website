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
/* 全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Noto Sans SC', 'Microsoft YaHei', sans-serif;
  line-height: 1.6;
  color: var(--neutral-dark);
  background-color: var(--neutral-light);
  overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 1rem;
}

h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2rem;
  position: relative;
  display: inline-block;
}

h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background: var(--primary-color);
  border-radius: var(--radius-sm);
}

p {
  margin-bottom: 1rem;
}

a {
  text-decoration: none;
  color: var(--primary-color);
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--primary-dark);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

button, .btn {
  cursor: pointer;
  border: none;
  outline: none;
  background: var(--primary-color);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: var(--radius-md);
  font-weight: 500;
  transition: all var(--transition-normal);
  text-align: center;
  display: inline-block;
}

button:hover, .btn:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

section {
  padding: var(--spacing-xl) 0;
}

.text-center {
  text-align: center;
}

/* Animation classes */
.fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.slide-up {
  animation: slideUp 0.5s ease-out;
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

/* Responsive utilities */
@media (max-width: 768px) {
  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  section {
    padding: var(--spacing-lg) 0;
  }
}
</style>
