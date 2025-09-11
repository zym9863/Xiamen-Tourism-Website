<template>
  <div class="home-page">
    <header class="hero">
      <div class="hero-content">
        <h1>探索魅力厦门</h1>
        <p>一座海上花园城市，文化与自然的完美融合</p>
      </div>
      <div class="scroll-indicator" @click="scrollToNext">
        <i class="fa-solid fa-chevron-down"></i>
      </div>
    </header>

    <section class="intro-section">
      <div class="container">
        <ScrollReveal>
          <h2>厦门简介</h2>
        </ScrollReveal>
        <ScrollReveal :delay="200">
          <p>厦门，别称鹭岛，是福建省副省级城市、计划单列市，国务院批复确定的中国经济特区，东南沿海重要的中心城市、港口及风景旅游城市。厦门市位于福建省东南部，西界漳州市，北邻南安市，东南与大小金门和大担岛隔海相望，总面积1699.39平方公里。</p>
        </ScrollReveal>
        
        <div class="feature-cards">
          <ScrollReveal :delay="100" direction="up">
            <div class="feature-card">
              <h3>自然风光</h3>
              <p>碧海蓝天、阳光沙滩，鼓浪屿、环岛路等自然景观令人流连忘返。</p>
            </div>
          </ScrollReveal>
          <ScrollReveal :delay="200" direction="up">
            <div class="feature-card">
              <h3>人文历史</h3>
              <p>深厚的闽南文化底蕴，中西合璧的建筑风格，独特的历史遗迹。</p>
            </div>
          </ScrollReveal>
          <ScrollReveal :delay="300" direction="up">
            <div class="feature-card">
              <h3>美食天堂</h3>
              <p>沙茶面、海蛎煎、土笋冻等闽南特色美食，让您大饱口福。</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <section class="highlights-section">
      <div class="container">
        <ScrollReveal>
          <h2>热门景点</h2>
        </ScrollReveal>
        <div class="highlights-grid">
          <ScrollReveal :delay="100" direction="left">
            <div class="highlight-item">
              <div class="highlight-image"></div>
              <h3>鼓浪屿</h3>
              <p>被誉为"海上花园"，是国家5A级旅游景区和世界文化遗产。</p>
              <NuxtLink to="/attractions" class="btn">了解更多</NuxtLink>
            </div>
          </ScrollReveal>
          <ScrollReveal :delay="200" direction="up">
            <div class="highlight-item">
              <div class="highlight-image"></div>
              <h3>厦门大学</h3>
              <p>中国最美大学之一，依山傍海，风景如画。</p>
              <NuxtLink to="/attractions" class="btn">了解更多</NuxtLink>
            </div>
          </ScrollReveal>
          <ScrollReveal :delay="300" direction="right">
            <div class="highlight-item">
              <div class="highlight-image"></div>
              <h3>环岛路</h3>
              <p>全长环岛路是厦门最美的海滨风景大道。</p>
              <NuxtLink to="/attractions" class="btn">了解更多</NuxtLink>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <section class="food-section">
      <div class="container">
        <ScrollReveal>
          <h2>特色美食</h2>
        </ScrollReveal>
        <div class="food-grid">
          <ScrollReveal :delay="100" direction="scale">
            <div class="food-item">
              <div class="food-image"></div>
              <h3>沙茶面</h3>
              <p>厦门最具代表性的特色小吃之一。</p>
            </div>
          </ScrollReveal>
          <ScrollReveal :delay="200" direction="scale">
            <div class="food-item">
              <div class="food-image"></div>
              <h3>海蛎煎</h3>
              <p>闽南沿海地区特色小吃，外酥里嫩。</p>
            </div>
          </ScrollReveal>
          <ScrollReveal :delay="300" direction="scale">
            <div class="food-item">
              <div class="food-image"></div>
              <h3>土笋冻</h3>
              <p>厦门传统风味小吃，清凉爽口。</p>
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal :delay="400">
          <div class="text-center">
            <NuxtLink to="/food" class="btn">探索更多美食</NuxtLink>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <section class="travel-info-section">
      <div class="container">
        <ScrollReveal>
          <h2>旅游信息</h2>
        </ScrollReveal>
        <div class="info-grid">
          <ScrollReveal :delay="100" direction="left">
            <div class="info-card">
              <h3>最佳旅游季节</h3>
              <p>厦门属于亚热带海洋性季风气候，四季如春，全年均适合旅游，其中3-5月和9-11月气候最为宜人。</p>
            </div>
          </ScrollReveal>
          <ScrollReveal :delay="200" direction="right">
            <div class="info-card">
              <h3>交通出行</h3>
              <p>厦门拥有完善的公共交通系统，包括公交、BRT、出租车和共享单车等多种出行方式。</p>
              <NuxtLink to="/transportation" class="btn">查看详情</NuxtLink>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 首页组件逻辑
function scrollToNext() {
  const introSection = document.querySelector('.intro-section');
  if (introSection) {
    introSection.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
}
</script>

<style scoped>
.home-page {
  font-family: 'Noto Sans SC', 'Segoe UI', 'Microsoft YaHei', sans-serif;
}

/* Enhanced Hero Section */
.hero {
  height: 100vh;
  min-height: 600px;
  background: var(--gradient-ocean);
  position: relative;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
  animation: float 20s ease-in-out infinite;
}

/* Floating elements for enhanced visual appeal */
.hero::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z' fill='%23f5f7fa'%3E%3C/path%3E%3C/svg%3E") repeat-x;
  background-size: 1200px 100px;
}

/* Floating particles animation */
.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
  animation: float 20s ease-in-out infinite;
}

/* Add scroll indicator */
.scroll-indicator {
  position: absolute;
  bottom: var(--spacing-xl);
  left: 50%;
  transform: translateX(-50%);
  color: var(--white);
  opacity: 0.8;
  animation: bounce 2s infinite;
  cursor: pointer;
  z-index: 3;
}

.scroll-indicator i {
  font-size: 2rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

/* Enhanced section transitions */
.intro-section::before {
  content: '';
  position: absolute;
  top: -50px;
  left: 0;
  width: 100%;
  height: 100px;
  background: var(--white);
  clip-path: polygon(0 50px, 100% 0, 100% 100%, 0 100%);
}

/* Parallax effect for sections */
.parallax-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: -1;
}

/* Enhanced card interactions */
.highlight-item, .food-item {
  cursor: pointer;
  position: relative;
  overflow: visible;
}

.highlight-item::after, .food-item::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
  opacity: 0;
  transform: translateX(-100%);
  transition: all var(--transition-slow);
  pointer-events: none;
}

.highlight-item:hover::after, .food-item:hover::after {
  opacity: 1;
  transform: translateX(100%);
}

/* Enhanced feature cards with icon animations */
.feature-card::before {
  content: '';
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  width: 60px;
  height: 60px;
  background: var(--gradient-primary);
  border-radius: var(--radius-round);
  opacity: 0.1;
  transition: all var(--transition-normal);
}

.feature-card:nth-child(1)::before {
  background: var(--gradient-primary);
}

.feature-card:nth-child(2)::before {
  background: var(--gradient-secondary);
}

.feature-card:nth-child(3)::before {
  background: linear-gradient(135deg, var(--accent-teal), var(--accent-green));
}

.feature-card:hover::before {
  opacity: 0.2;
  transform: scale(1.1);
}

/* Loading animation for images */
.highlight-image, .food-image {
  position: relative;
}

.highlight-image::after, .food-image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transform: translateX(-100%);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.hero-content {
  max-width: 900px;
  padding: 0 var(--spacing-lg);
  z-index: 2;
  position: relative;
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero h1 {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  margin-bottom: var(--spacing-lg);
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  animation: slideDown 1s ease-out 0.3s both;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero p {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  margin-bottom: var(--spacing-xl);
  opacity: 0.95;
  font-weight: var(--font-weight-light);
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  animation: slideUp 1s ease-out 0.6s both;
}

/* Enhanced Sections */
section {
  padding: var(--spacing-xxxl) 0;
  position: relative;
}

.intro-section {
  background: var(--white);
  position: relative;
}

.intro-section::before {
  content: '';
  position: absolute;
  top: -50px;
  left: 0;
  width: 100%;
  height: 100px;
  background: var(--white);
  clip-path: polygon(0 50px, 100% 0, 100% 100%, 0 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

h2 {
  text-align: center;
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: var(--spacing-xxl);
  color: var(--neutral-dark);
  position: relative;
}

/* Enhanced Feature Cards */
.feature-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xxl);
}

.feature-card {
  background: var(--gradient-card);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  border: 1px solid rgba(30, 136, 229, 0.1);
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: var(--gradient-primary);
}

.feature-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: var(--shadow-xl);
  border-color: var(--primary-color);
}

.feature-card:nth-child(1)::before {
  background: var(--gradient-primary);
}

.feature-card:nth-child(2)::before {
  background: var(--gradient-secondary);
}

.feature-card:nth-child(3)::before {
  background: linear-gradient(135deg, var(--accent-teal), var(--accent-green));
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
  color: var(--primary-color);
  font-weight: var(--font-weight-semibold);
}

.feature-card p {
  color: var(--neutral-medium);
  line-height: var(--line-height-relaxed);
}

/* Enhanced Highlights Section */
.highlights-section {
  background: var(--neutral-lighter);
  position: relative;
}

.highlights-grid, .food-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
}

.highlight-item, .food-item {
  background: var(--white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  position: relative;
}

.highlight-item:hover, .food-item:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-xl);
}

/* Enhanced Image Placeholders with CSS Art */
.highlight-image, .food-image {
  height: 240px;
  position: relative;
  overflow: hidden;
  background: var(--gradient-ocean);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: 1.2rem;
  font-weight: var(--font-weight-medium);
}

/* Specific CSS art for different images */
.highlight-item:nth-child(1) .highlight-image {
  background: linear-gradient(135deg, #1e88e5 0%, #26a69a 50%, #81c784 100%);
  position: relative;
}

.highlight-item:nth-child(1) .highlight-image::before {
  content: '🏝️';
  font-size: 4rem;
  position: absolute;
  opacity: 0.8;
}

.highlight-item:nth-child(2) .highlight-image {
  background: linear-gradient(135deg, #3f51b5 0%, #2196f3 50%, #81c784 100%);
}

.highlight-item:nth-child(2) .highlight-image::before {
  content: '🎓';
  font-size: 4rem;
  position: absolute;
  opacity: 0.8;
}

.highlight-item:nth-child(3) .highlight-image {
  background: linear-gradient(135deg, #00bcd4 0%, #4fc3f7 50%, #81d4fa 100%);
}

.highlight-item:nth-child(3) .highlight-image::before {
  content: '🌊';
  font-size: 4rem;
  position: absolute;
  opacity: 0.8;
}

/* Food items styling */
.food-item:nth-child(1) .food-image {
  background: linear-gradient(135deg, #ff7043 0%, #ffab40 100%);
}

.food-item:nth-child(1) .food-image::before {
  content: '🍜';
  font-size: 4rem;
  position: absolute;
  opacity: 0.9;
}

.food-item:nth-child(2) .food-image {
  background: linear-gradient(135deg, #ffa726 0%, #ffcc02 100%);
}

.food-item:nth-child(2) .food-image::before {
  content: '🦪';
  font-size: 4rem;
  position: absolute;
  opacity: 0.9;
}

.food-item:nth-child(3) .food-image {
  background: linear-gradient(135deg, #26a69a 0%, #66bb6a 100%);
}

.food-item:nth-child(3) .food-image::before {
  content: '🥤';
  font-size: 4rem;
  position: absolute;
  opacity: 0.9;
}

.highlight-item h3, .food-item h3 {
  padding: var(--spacing-lg) var(--spacing-lg) var(--spacing-sm);
  font-size: 1.4rem;
  color: var(--primary-color);
  font-weight: var(--font-weight-semibold);
}

.highlight-item p, .food-item p {
  padding: 0 var(--spacing-lg) var(--spacing-lg);
  color: var(--neutral-medium);
  line-height: var(--line-height-relaxed);
}

/* Enhanced Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  background: var(--gradient-primary);
  color: var(--white);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  text-decoration: none;
  margin: 0 var(--spacing-lg) var(--spacing-lg);
  transition: all var(--transition-normal);
  font-weight: var(--font-weight-medium);
  box-shadow: var(--shadow-sm);
  position: relative;
  overflow: hidden;
}

.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
  color: var(--white);
}

.btn:hover::before {
  left: 100%;
}

.text-center {
  text-align: center;
  margin-top: var(--spacing-xl);
}

/* Enhanced Info Section */
.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
}

.info-card {
  background: var(--gradient-card);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  border-left: 4px solid var(--accent-teal);
  position: relative;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.info-card h3 {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
  color: var(--primary-color);
  font-weight: var(--font-weight-semibold);
}

.info-card p {
  color: var(--neutral-medium);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-lg);
}

.travel-info-section {
  background: var(--primary-lighter);
  position: relative;
}

.food-section {
  background: var(--white);
  position: relative;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .highlights-grid, .food-grid, .feature-cards, .info-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-lg);
  }
}

@media (max-width: 768px) {
  .hero {
    height: 80vh;
    min-height: 500px;
  }
  
  .hero h1 {
    font-size: clamp(2rem, 6vw, 3rem);
  }
  
  .hero p {
    font-size: clamp(1rem, 3vw, 1.4rem);
  }
  
  section {
    padding: var(--spacing-xxl) 0;
  }
  
  .feature-cards, .highlights-grid, .food-grid, .info-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
  
  .feature-card, .info-card {
    padding: var(--spacing-lg);
  }
  
  .highlight-image, .food-image {
    height: 200px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 var(--spacing-md);
  }
  
  .hero-content {
    padding: 0 var(--spacing-md);
  }
  
  .feature-card, .info-card {
    padding: var(--spacing-md);
  }
  
  .highlight-item h3, .food-item h3 {
    padding: var(--spacing-md) var(--spacing-md) var(--spacing-sm);
  }
  
  .highlight-item p, .food-item p {
    padding: 0 var(--spacing-md) var(--spacing-md);
  }
  
  .btn {
    margin: 0 var(--spacing-md) var(--spacing-md);
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: 0.9rem;
  }
}
</style>