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

*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: 'Noto Sans SC', 'Segoe UI', 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', sans-serif;
  line-height: var(--line-height-normal);
  color: var(--neutral-dark);
  background: linear-gradient(135deg, var(--neutral-light) 0%, var(--neutral-lighter) 100%);
  overflow-x: hidden;
  font-feature-settings: 'kern' 1;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Enhanced Typography */
h1, h2, h3, h4, h5, h6 {
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-tight);
  margin-bottom: var(--spacing-md);
  color: var(--neutral-dark);
  letter-spacing: -0.02em;
}

h1 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: var(--font-weight-bold);
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--spacing-lg);
}

h2 {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  position: relative;
  display: inline-block;
  margin-bottom: var(--spacing-xl);
}

h2::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: var(--gradient-primary);
  border-radius: var(--radius-sm);
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
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  color: var(--primary-color);
  margin-bottom: var(--spacing-sm);
}

h4 {
  font-size: 1.25rem;
  color: var(--neutral-dark);
}

h5 {
  font-size: 1.125rem;
}

h6 {
  font-size: 1rem;
  font-weight: var(--font-weight-semibold);
}

p {
  margin-bottom: var(--spacing-md);
  line-height: var(--line-height-relaxed);
  color: var(--neutral-medium);
  font-size: 1.05rem;
}

/* Enhanced Links */
a {
  text-decoration: none;
  color: var(--primary-color);
  transition: all var(--transition-normal);
  position: relative;
}

a:hover {
  color: var(--primary-dark);
}

a:focus {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
  border-radius: var(--radius-xs);
}

/* Enhanced Images */
img {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: var(--radius-md);
}

/* Enhanced Buttons */
button, .btn {
  cursor: pointer;
  border: none;
  outline: none;
  background: var(--gradient-primary);
  color: var(--white);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  font-weight: var(--font-weight-medium);
  font-size: 1rem;
  transition: all var(--transition-normal);
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  text-transform: none;
  letter-spacing: 0.02em;
}

button:hover, .btn:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
  filter: brightness(1.1);
}

button:active, .btn:active {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

button:focus, .btn:focus {
  box-shadow: var(--shadow-lg), 0 0 0 3px rgba(30, 136, 229, 0.3);
}

/* Enhanced Container */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  position: relative;
}

/* Enhanced Sections */
section {
  padding: var(--spacing-xxxl) 0;
  position: relative;
  overflow: hidden;
}

section:nth-child(even) {
  background: var(--white);
}

section:nth-child(odd) {
  background: var(--neutral-lighter);
}

/* Utility Classes */
.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.font-light {
  font-weight: var(--font-weight-light);
}

.font-medium {
  font-weight: var(--font-weight-medium);
}

.font-bold {
  font-weight: var(--font-weight-bold);
}

/* Enhanced Animation Classes */
.fade-in {
  animation: fadeIn 0.8s ease-out;
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
  animation: slideUp 0.8s ease-out;
}

@keyframes slideUp {
  from { 
    transform: translateY(40px); 
    opacity: 0; 
  }
  to { 
    transform: translateY(0); 
    opacity: 1; 
  }
}

.scale-in {
  animation: scaleIn 0.6s ease-out;
}

@keyframes scaleIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.bounce-in {
  animation: bounceIn 0.8s var(--transition-bounce);
}

@keyframes bounceIn {
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Glass Effect Utility */
.glass {
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
}

/* Gradient Text Utility */
.gradient-text {
  background: var(--gradient-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Enhanced Responsive Design */
@media (max-width: 1024px) {
  .container {
    padding: 0 var(--spacing-lg);
  }
}

@media (max-width: 768px) {
  html {
    font-size: 15px;
  }
  
  section {
    padding: var(--spacing-xxl) 0;
  }
  
  .container {
    padding: 0 var(--spacing-md);
  }
  
  h2::after {
    width: 40px;
    height: 3px;
  }
}

@media (max-width: 480px) {
  html {
    font-size: 14px;
  }
  
  section {
    padding: var(--spacing-xl) 0;
  }
  
  .container {
    padding: 0 var(--spacing-sm);
  }
  
  button, .btn {
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: 0.9rem;
  }
}

/* Accessibility Improvements */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Print Styles */
@media print {
  * {
    background: transparent !important;
    color: black !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }
  
  a {
    text-decoration: underline;
  }
  
  h1, h2, h3 {
    page-break-after: avoid;
  }
}
</style>
