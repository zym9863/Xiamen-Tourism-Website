<template>
  <div class="app-layout">
    <header class="header">
      <div class="container">
        <div class="logo">
          <NuxtLink to="/">
            <i class="fa-solid fa-umbrella-beach logo-icon"></i>
            <span>厦门旅游</span>
          </NuxtLink>
        </div>
        <nav class="main-nav">
          <ul>
            <li><NuxtLink to="/"><i class="fa-solid fa-home"></i> 首页</NuxtLink></li>
            <li><NuxtLink to="/attractions"><i class="fa-solid fa-mountain-sun"></i> 景点</NuxtLink></li>
            <li><NuxtLink to="/food"><i class="fa-solid fa-utensils"></i> 美食</NuxtLink></li>
            <li><NuxtLink to="/transportation"><i class="fa-solid fa-bus"></i> 交通</NuxtLink></li>
            <li><NuxtLink to="/about"><i class="fa-solid fa-circle-info"></i> 关于</NuxtLink></li>
          </ul>
        </nav>
        <button class="mobile-menu-btn" @click="toggleMobileMenu" aria-label="菜单">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>

    <div class="mobile-menu" :class="{ 'active': mobileMenuOpen }">
      <nav>
        <ul>
          <li><NuxtLink to="/" @click="closeMobileMenu"><i class="fa-solid fa-home"></i> 首页</NuxtLink></li>
          <li><NuxtLink to="/attractions" @click="closeMobileMenu"><i class="fa-solid fa-mountain-sun"></i> 景点</NuxtLink></li>
          <li><NuxtLink to="/food" @click="closeMobileMenu"><i class="fa-solid fa-utensils"></i> 美食</NuxtLink></li>
          <li><NuxtLink to="/transportation" @click="closeMobileMenu"><i class="fa-solid fa-bus"></i> 交通</NuxtLink></li>
          <li><NuxtLink to="/about" @click="closeMobileMenu"><i class="fa-solid fa-circle-info"></i> 关于</NuxtLink></li>
        </ul>
      </nav>
    </div>

    <main class="main-content">
      <slot></slot>
    </main>

    <footer class="footer">
      <div class="wave-decoration"></div>
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3><i class="fa-solid fa-building"></i> 关于厦门旅游</h3>
            <p>我们致力于为您提供最全面的厦门旅游信息，帮助您规划完美的厦门之旅。</p>
          </div>
          <div class="footer-section">
            <h3><i class="fa-solid fa-link"></i> 快速链接</h3>
            <ul>
              <li><NuxtLink to="/"><i class="fa-solid fa-angle-right"></i> 首页</NuxtLink></li>
              <li><NuxtLink to="/attractions"><i class="fa-solid fa-angle-right"></i> 景点</NuxtLink></li>
              <li><NuxtLink to="/food"><i class="fa-solid fa-angle-right"></i> 美食</NuxtLink></li>
              <li><NuxtLink to="/transportation"><i class="fa-solid fa-angle-right"></i> 交通</NuxtLink></li>
              <li><NuxtLink to="/about"><i class="fa-solid fa-angle-right"></i> 关于</NuxtLink></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3><i class="fa-solid fa-address-book"></i> 联系我们</h3>
            <p><i class="fa-solid fa-envelope"></i> 邮箱：info@xiamentravel.com</p>
            <p><i class="fa-solid fa-phone"></i> 电话：+86 123 4567 8910</p>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="微信"><i class="fa-brands fa-weixin"></i></a>
              <a href="#" class="social-link" aria-label="微博"><i class="fa-brands fa-weibo"></i></a>
              <a href="#" class="social-link" aria-label="抖音"><i class="fa-brands fa-tiktok"></i></a>
            </div>
          </div>
        </div>
        <div class="copyright">
          <p><i class="fa-regular fa-copyright"></i> 2025 厦门旅游网站 版权所有</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const mobileMenuOpen = ref(false);
const isScrolled = ref(false);

// Toggle mobile menu
function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;

  // Add animation delay to each menu item
  if (mobileMenuOpen.value) {
    setTimeout(() => {
      const menuItems = document.querySelectorAll('.mobile-menu nav li');
      menuItems.forEach((item, index) => {
        item.style.setProperty('--i', index);
      });
    }, 100);
  }
}

function closeMobileMenu() {
  mobileMenuOpen.value = false;
}

// Handle scroll events for header styling
function handleScroll() {
  isScrolled.value = window.scrollY > 50;

  const header = document.querySelector('.header');
  if (isScrolled.value) {
    header.style.boxShadow = 'var(--shadow-lg)';
    header.style.background = 'rgba(255, 255, 255, 0.95)';
  } else {
    header.style.boxShadow = 'var(--shadow-md)';
    header.style.background = 'var(--white)';
  }
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Noto Sans SC', 'Microsoft YaHei', sans-serif;
}

/* Header Styles */
.header {
  background-color: var(--white);
  box-shadow: var(--shadow-md);
  position: sticky;
  top: 0;
  z-index: 100;
  transition: all var(--transition-normal);
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.logo a {
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--primary-color);
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: all var(--transition-normal);
}

.logo a:hover {
  transform: scale(1.05);
}

.logo-icon {
  margin-right: 0.5rem;
  color: var(--secondary-color);
  font-size: 1.5rem;
}

.main-nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.main-nav li {
  margin-left: 2rem;
  position: relative;
}

.main-nav a {
  color: var(--neutral-dark);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
}

.main-nav a i {
  margin-right: 0.4rem;
  font-size: 1rem;
  color: var(--primary-color);
  transition: all var(--transition-normal);
}

.main-nav a:hover,
.main-nav a.router-link-active {
  color: var(--primary-color);
}

.main-nav a:hover i,
.main-nav a.router-link-active i {
  color: var(--secondary-color);
  transform: scale(1.2);
}

.main-nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-color);
  transition: width var(--transition-normal);
}

.main-nav a:hover::after,
.main-nav a.router-link-active::after {
  width: 100%;
}

/* Mobile Menu Styles */
.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 30px;
}

.mobile-menu-btn span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: var(--primary-color);
  transition: all var(--transition-normal);
  border-radius: var(--radius-sm);
}

.mobile-menu-btn:hover span {
  background-color: var(--secondary-color);
}

.mobile-menu {
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  height: 0;
  background-color: var(--white);
  overflow: hidden;
  transition: height var(--transition-normal);
  z-index: 99;
  box-shadow: var(--shadow-md);
}

.mobile-menu.active {
  height: auto;
  max-height: 80vh;
  overflow-y: auto;
}

.mobile-menu nav ul {
  list-style: none;
  padding: 2rem;
  margin: 0;
}

.mobile-menu nav li {
  margin-bottom: 1.5rem;
  opacity: 0;
  transform: translateY(10px);
  animation: fadeInUp 0.3s forwards;
  animation-delay: calc(0.1s * var(--i, 0));
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mobile-menu nav a {
  color: var(--neutral-dark);
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  padding: 0.8rem 0;
  transition: all var(--transition-normal);
  border-bottom: 1px solid var(--neutral-light);
}

.mobile-menu nav a i {
  margin-right: 0.8rem;
  font-size: 1.2rem;
  color: var(--primary-color);
  width: 24px;
  text-align: center;
}

.mobile-menu nav a:hover {
  color: var(--primary-color);
  padding-left: 0.5rem;
}

.mobile-menu nav a:hover i {
  color: var(--secondary-color);
}

/* Main Content */
.main-content {
  flex: 1;
}

/* Footer Styles */
.footer {
  background-color: var(--neutral-dark);
  color: var(--white);
  padding: 4rem 0 1.5rem;
  position: relative;
}

.wave-decoration {
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
  height: 10px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' fill='%23263238'%3E%3C/path%3E%3Cpath d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5' fill='%23263238'%3E%3C/path%3E%3Cpath d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' fill='%23263238'%3E%3C/path%3E%3C/svg%3E") repeat-x;
  background-size: 1200px 10px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: var(--primary-light);
  display: flex;
  align-items: center;
  position: relative;
  padding-bottom: 0.8rem;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 2px;
  background: var(--secondary-color);
}

.footer-section h3 i {
  margin-right: 0.5rem;
  color: var(--secondary-color);
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section li {
  margin-bottom: 0.8rem;
  transition: all var(--transition-normal);
}

.footer-section li:hover {
  transform: translateX(5px);
}

.footer-section a {
  color: var(--neutral-light);
  text-decoration: none;
  transition: all var(--transition-normal);
  display: flex;
  align-items: center;
}

.footer-section a i {
  margin-right: 0.5rem;
  font-size: 0.8rem;
  color: var(--secondary-color);
}

.footer-section a:hover {
  color: var(--primary-light);
}

.footer-section p {
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
}

.footer-section p i {
  margin-right: 0.8rem;
  color: var(--secondary-color);
  width: 16px;
  text-align: center;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-round);
  transition: all var(--transition-normal);
  color: var(--white);
}

.social-link i {
  font-size: 1.2rem;
}

.social-link:hover {
  background-color: var(--secondary-color);
  transform: translateY(-5px);
  color: var(--white);
}

.copyright {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: var(--neutral-light);
}

.copyright p {
  display: flex;
  align-items: center;
  justify-content: center;
}

.copyright i {
  margin-right: 0.5rem;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .main-nav {
    display: none;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .mobile-menu {
    display: block;
  }

  .footer-content {
    grid-template-columns: 1fr;
  }

  .footer-section {
    margin-bottom: 2rem;
  }
}
</style>