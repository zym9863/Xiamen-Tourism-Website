<template>
  <div class="home-page">
    <header class="hero">
      <div class="hero-content">
        <h1>探索魅力厦门</h1>
        <p>一座海上花园城市，文化与自然的完美融合</p>
      </div>
    </header>

    <section class="intro-section">
      <div class="container">
        <h2>厦门简介</h2>
        <p>厦门，别称鹭岛，是福建省副省级城市、计划单列市，国务院批复确定的中国经济特区，东南沿海重要的中心城市、港口及风景旅游城市。厦门市位于福建省东南部，西界漳州市，北邻南安市，东南与大小金门和大担岛隔海相望，总面积1699.39平方公里。</p>
        
        <div class="feature-cards">
          <div class="feature-card">
            <h3>自然风光</h3>
            <p>碧海蓝天、阳光沙滩，鼓浪屿、环岛路等自然景观令人流连忘返。</p>
          </div>
          <div class="feature-card">
            <h3>人文历史</h3>
            <p>深厚的闽南文化底蕴，中西合璧的建筑风格，独特的历史遗迹。</p>
          </div>
          <div class="feature-card">
            <h3>美食天堂</h3>
            <p>沙茶面、海蛎煎、土笋冻等闽南特色美食，让您大饱口福。</p>
          </div>
        </div>
      </div>
    </section>

    <section class="highlights-section">
      <div class="container">
        <h2>热门景点</h2>
        <div class="highlights-grid">
          <div class="highlight-item">
            <div class="highlight-image" style="background-image: url('/images/gulangyu-island.jpg'); background-size: cover; background-position: center;"></div>
            <h3>鼓浪屿</h3>
            <p>被誉为"海上花园"，是国家5A级旅游景区和世界文化遗产。</p>
            <NuxtLink to="/attractions" class="btn">了解更多</NuxtLink>
          </div>
          <div class="highlight-item">
            <div class="highlight-image" style="background-image: url('/images/xiamen-university.jpg'); background-size: cover; background-position: center;"></div>
            <h3>厦门大学</h3>
            <p>中国最美大学之一，依山傍海，风景如画。</p>
            <NuxtLink to="/attractions" class="btn">了解更多</NuxtLink>
          </div>
          <div class="highlight-item">
            <div class="highlight-image" style="background-image: url('/images/ring-road.jpg'); background-size: cover; background-position: center;"></div>
            <h3>环岛路</h3>
            <p>全长环岛路是厦门最美的海滨风景大道。</p>
            <NuxtLink to="/attractions" class="btn">了解更多</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="food-section">
      <div class="container">
        <h2>特色美食</h2>
        <div class="food-grid">
          <div class="food-item">
            <div class="food-image" style="background-image: url('/images/shacha-noodles.jpg'); background-size: cover; background-position: center;"></div>
            <h3>沙茶面</h3>
            <p>厦门最具代表性的特色小吃之一。</p>
          </div>
          <div class="food-item">
            <div class="food-image" style="background-image: url('/images/oyster-omelet.jpg'); background-size: cover; background-position: center;"></div>
            <h3>海蛎煎</h3>
            <p>闽南沿海地区特色小吃，外酥里嫩。</p>
          </div>
          <div class="food-item">
            <div class="food-image" style="background-image: url('/images/tushun-jelly.jpg'); background-size: cover; background-position: center;"></div>
            <h3>土笋冻</h3>
            <p>厦门传统风味小吃，清凉爽口。</p>
          </div>
        </div>
        <div class="text-center">
          <NuxtLink to="/food" class="btn">探索更多美食</NuxtLink>
        </div>
      </div>
    </section>

    <section class="travel-info-section">
      <div class="container">
        <h2>旅游信息</h2>
        <div class="info-grid">
          <div class="info-card">
            <h3>最佳旅游季节</h3>
            <p>厦门属于亚热带海洋性季风气候，四季如春，全年均适合旅游，其中3-5月和9-11月气候最为宜人。</p>
          </div>
          <div class="info-card">
            <h3>交通出行</h3>
            <p>厦门拥有完善的公共交通系统，包括公交、BRT、出租车和共享单车等多种出行方式。</p>
            <NuxtLink to="/transportation" class="btn">查看详情</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// 首页组件逻辑
</script>

<style scoped>
/* Home Page Styles Enhanced */
.home-page {
  font-family: 'Noto Sans SC', 'Microsoft YaHei', sans-serif;
  overflow-x: hidden;
}

/* Hero Section with Dynamic Background */
.hero {
  height: 90vh;
  background: var(--gradient-hero), 
              url('/images/hero-xiamen-skyline.jpg') center/cover;
  background-blend-mode: overlay;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.3) 70%);
  z-index: 1;
}

.hero::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(26, 115, 232, 0.1) 0%, transparent 70%);
  animation: rotateGradient 20s linear infinite;
  z-index: 1;
}

@keyframes rotateGradient {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.hero-content {
  max-width: 900px;
  padding: 0 var(--spacing-lg);
  position: relative;
  z-index: 2;
  animation: fadeInUp 1.2s ease-out;
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
  font-size: clamp(3rem, 8vw, 5rem);
  margin-bottom: var(--spacing-lg);
  font-weight: var(--font-extrabold);
  background: linear-gradient(45deg, #ffffff, #bbdefb, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.3);
  animation: textGlow 3s ease-in-out infinite alternate;
}

@keyframes textGlow {
  from { text-shadow: 0 0 20px rgba(255, 255, 255, 0.3); }
  to { text-shadow: 0 0 40px rgba(255, 255, 255, 0.6); }
}

.hero p {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  margin-bottom: var(--spacing-xl);
  opacity: 0.95;
  font-weight: var(--font-medium);
  line-height: var(--leading-relaxed);
  animation: fadeIn 1.5s ease-out 0.3s both;
}

/* Section Styles Enhanced */
section {
  padding: var(--spacing-xxl) 0;
  position: relative;
}

.intro-section {
  background: var(--bg-gradient-light);
  position: relative;
  overflow: hidden;
}

.intro-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 200%;
  height: 100%;
  background: linear-gradient(45deg, transparent, rgba(26, 115, 232, 0.05), transparent);
  animation: shimmer 8s infinite;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
  position: relative;
  z-index: 2;
}

h2 {
  text-align: center;
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: var(--spacing-xxl);
  color: var(--neutral-dark);
  position: relative;
}

/* Feature Cards with 3D Effects */
.feature-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xxl);
}

.feature-card {
  background: var(--bg-gradient-card);
  padding: var(--spacing-xl);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-smooth);
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(26, 115, 232, 0.1);
}

.feature-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient-glass);
  opacity: 0;
  transition: opacity var(--transition-normal);
  border-radius: var(--radius-xl);
}

.feature-card:hover {
  transform: translateY(-15px) rotateX(5deg);
  box-shadow: var(--shadow-xl), 0 25px 50px rgba(26, 115, 232, 0.2);
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-card h3 {
  font-size: 1.6rem;
  margin-bottom: var(--spacing-lg);
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: var(--font-bold);
  position: relative;
  z-index: 1;
}

.feature-card p {
  line-height: var(--leading-relaxed);
  color: var(--neutral-medium);
  position: relative;
  z-index: 1;
}

/* Highlights Section Enhanced */
.highlights-section {
  background: var(--bg-gradient-primary);
  position: relative;
}

.highlights-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: var(--white);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
}

.highlights-section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: var(--white);
  clip-path: polygon(0 20%, 100% 0, 100% 100%, 0 100%);
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
}

.highlight-item {
  background: var(--white);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-smooth);
  position: relative;
  border: 2px solid transparent;
}

.highlight-item::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: var(--gradient-primary);
  border-radius: var(--radius-xl);
  z-index: -1;
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.highlight-item:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: var(--shadow-xl);
}

.highlight-item:hover::before {
  opacity: 1;
}

.highlight-image {
  height: 250px;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}

.highlight-image::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, transparent, rgba(26, 115, 232, 0.2));
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.highlight-item:hover .highlight-image::before {
  opacity: 1;
}

.highlight-item h3 {
  padding: var(--spacing-lg) var(--spacing-lg) var(--spacing-sm);
  font-size: 1.4rem;
  background: var(--gradient-secondary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: var(--font-bold);
}

.highlight-item p {
  padding: 0 var(--spacing-lg);
  color: var(--neutral-medium);
  line-height: var(--leading-relaxed);
}

.highlight-item .btn {
  margin: var(--spacing-lg);
  background: var(--gradient-primary);
  border: none;
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: var(--radius-lg);
  color: var(--white);
  font-weight: var(--font-semibold);
  transition: all var(--transition-smooth);
  position: relative;
  overflow: hidden;
}

.highlight-item .btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3), transparent);
  transition: all var(--transition-normal);
  border-radius: 50%;
}

.highlight-item .btn:hover::before {
  width: 300px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/* Food Section Enhanced */
.food-section {
  background: var(--white);
  position: relative;
}

.food-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
}

.food-item {
  background: var(--bg-gradient-card);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-smooth);
  position: relative;
  border: 1px solid rgba(255, 152, 0, 0.1);
}

.food-item:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-xl);
  border-color: var(--secondary-alpha);
}

.food-image {
  height: 220px;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}

.food-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--gradient-secondary);
  opacity: 0;
  mix-blend-mode: overlay;
  transition: opacity var(--transition-normal);
}

.food-item:hover .food-image::after {
  opacity: 0.2;
}

.food-item h3 {
  padding: var(--spacing-lg) var(--spacing-lg) var(--spacing-sm);
  font-size: 1.3rem;
  background: var(--gradient-sunset);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: var(--font-bold);
}

.food-item p {
  padding: 0 var(--spacing-lg) var(--spacing-lg);
  color: var(--neutral-medium);
  line-height: var(--leading-relaxed);
}

/* Travel Info Section Enhanced */
.travel-info-section {
  background: var(--bg-gradient-primary);
  position: relative;
  overflow: hidden;
}

.travel-info-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: var(--white);
  clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
}

.info-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: var(--blur-sm);
  padding: var(--spacing-xl);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all var(--transition-smooth);
}

.info-card:hover {
  transform: translateY(-8px);
  background: var(--white);
  box-shadow: var(--shadow-xl);
}

.info-card h3 {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-lg);
  background: var(--gradient-ocean);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: var(--font-bold);
}

.info-card p {
  line-height: var(--leading-relaxed);
  color: var(--neutral-medium);
  margin-bottom: var(--spacing-lg);
}

.info-card .btn {
  background: var(--gradient-ocean);
  color: var(--white);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-lg);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  font-weight: var(--font-medium);
  transition: all var(--transition-smooth);
  box-shadow: var(--shadow-sm);
}

.info-card .btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.text-center {
  text-align: center;
  margin-top: var(--spacing-xl);
}

.text-center .btn {
  background: var(--gradient-sunset);
  color: var(--white);
  padding: var(--spacing-lg) var(--spacing-xxl);
  border-radius: var(--radius-xl);
  font-size: 1.1rem;
  font-weight: var(--font-semibold);
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-smooth);
  position: relative;
  overflow: hidden;
}

.text-center .btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transform: translateX(-100%);
  transition: transform var(--transition-slow);
}

.text-center .btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: var(--shadow-xl);
}

.text-center .btn:hover::before {
  transform: translateX(100%);
}

/* Responsive Design Enhanced */
@media (max-width: 1024px) {
  .hero {
    height: 80vh;
  }
  
  .feature-cards {
    gap: var(--spacing-lg);
  }
  
  .highlights-grid,
  .food-grid {
    gap: var(--spacing-lg);
  }
}

@media (max-width: 768px) {
  .hero {
    height: 70vh;
  }
  
  .hero h1 {
    font-size: clamp(2.5rem, 6vw, 3.5rem);
  }
  
  .hero p {
    font-size: clamp(1rem, 2.5vw, 1.3rem);
  }
  
  section {
    padding: var(--spacing-xl) 0;
  }
  
  .feature-cards {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
  
  .highlights-grid,
  .food-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
  
  .feature-card:hover {
    transform: translateY(-5px);
  }
  
  .highlight-item:hover,
  .food-item:hover {
    transform: translateY(-5px) scale(1.01);
  }
}

@media (max-width: 480px) {
  .hero {
    height: 60vh;
  }
  
  .container {
    padding: 0 var(--spacing-md);
  }
  
  .feature-card,
  .info-card {
    padding: var(--spacing-lg);
  }
  
  .highlight-image,
  .food-image {
    height: 200px;
  }
}
</style>