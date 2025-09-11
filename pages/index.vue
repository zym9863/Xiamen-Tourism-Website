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
            <div class="highlight-image" style="background-image: url('https://image.pollinations.ai/prompt/Gulangyu%20Island%20in%20Xiamen%20China%2C%20charming%20historic%20European-style%20colonial%20buildings%20with%20red%20roof%20tiles%2C%20narrow%20cobblestone%20streets%2C%20lush%20tropical%20vegetation%2C%20peaceful%20island%20atmosphere%2C%20soft%20morning%20light%2C%20travel%20destination%20photography%2C%204%3A3%20aspect%20ratio?width=1200&height=800&model=flux&seed=42'); background-size: cover; background-position: center;"></div>
            <h3>鼓浪屿</h3>
            <p>被誉为"海上花园"，是国家5A级旅游景区和世界文化遗产。</p>
            <NuxtLink to="/attractions" class="btn">了解更多</NuxtLink>
          </div>
          <div class="highlight-item">
            <div class="highlight-image" style="background-image: url('https://image.pollinations.ai/prompt/Xiamen%20University%20campus%20in%20China%2C%20beautiful%20traditional%20Chinese%20architecture%20mixed%20with%20modern%20buildings%2C%20students%20walking%20on%20campus%20paths%2C%20lake%20and%20mountains%20in%20background%2C%20lush%20green%20trees%20and%20gardens%2C%20peaceful%20academic%20atmosphere%2C%20soft%20daylight%2C%20educational%20tourism%20photography?width=1200&height=800&model=flux&seed=42'); background-size: cover; background-position: center;"></div>
            <h3>厦门大学</h3>
            <p>中国最美大学之一，依山傍海，风景如画。</p>
            <NuxtLink to="/attractions" class="btn">了解更多</NuxtLink>
          </div>
          <div class="highlight-item">
            <div class="highlight-image" style="background-image: url('https://image.pollinations.ai/prompt/Huandao%20Road%20coastal%20scenic%20drive%20in%20Xiamen%20China%2C%20beautiful%20curved%20road%20along%20the%20ocean%2C%20cyclists%20and%20joggers%20enjoying%20the%20seaside%20path%2C%20palm%20trees%20lining%20the%20road%2C%20blue%20sea%20and%20white%20sandy%20beach%2C%20modern%20city%20skyline%20in%20distance%2C%20perfect%20weather%20for%20outdoor%20activities?width=1200&height=800&model=flux&seed=42'); background-size: cover; background-position: center;"></div>
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
            <div class="food-image" style="background-image: url('https://image.pollinations.ai/prompt/Xiamen%20Shacha%20noodle%20soup%2C%20traditional%20Fujian%20cuisine%2C%20steaming%20bowl%20of%20rice%20noodles%20in%20rich%20peanut-based%20broth%2C%20topped%20with%20prawns%2C%20squid%2C%20bean%20sprouts%2C%20Chinese%20chives%2C%20served%20in%20ceramic%20bowl%2C%20street%20food%20photography%2C%20appetizing%20and%20authentic?width=800&height=800&model=flux&seed=42'); background-size: cover; background-position: center;"></div>
            <h3>沙茶面</h3>
            <p>厦门最具代表性的特色小吃之一。</p>
          </div>
          <div class="food-item">
            <div class="food-image" style="background-image: url('https://image.pollinations.ai/prompt/Hai%20Li%20Jian%20oyster%20omelette%2C%20traditional%20Fujian%20Xiamen%20street%20food%2C%20crispy%20golden%20egg%20pancake%20with%20fresh%20oysters%2C%20starch%20coating%2C%20served%20on%20white%20plate%2C%20garnished%20with%20green%20lettuce%20and%20cilantro%2C%20food%20photography%2C%20authentic%20Chinese%20cuisine?width=800&height=800&model=flux&seed=42'); background-size: cover; background-position: center;"></div>
            <h3>海蛎煎</h3>
            <p>闽南沿海地区特色小吃，外酥里嫩。</p>
          </div>
          <div class="food-item">
            <div class="food-image" style="background-image: url('https://image.pollinations.ai/prompt/Tu%20Sun%20Dong%20%28bamboo%20worm%20jelly%29%2C%20traditional%20Xiamen%20Fujian%20delicacy%2C%20transparent%20gelatinous%20blocks%20on%20white%20ceramic%20plate%2C%20served%20with%20soy%20sauce%20dipping%2C%20garlic%20and%20vinegar%20condiments%2C%20refreshing%20summer%20snack%2C%20authentic%20Chinese%20street%20food%20photography?width=800&height=800&model=flux&seed=42'); background-size: cover; background-position: center;"></div>
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
.home-page {
  font-family: 'Microsoft YaHei', sans-serif;
}

.hero {
  height: 80vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url('https://image.pollinations.ai/prompt/Beautiful%20scenic%20view%20of%20Xiamen%20coastal%20city%20in%20China%2C%20panoramic%20ocean%20view%20with%20blue%20sea%20and%20sky%2C%20palm%20trees%2C%20modern%20buildings%20along%20the%20coastline%2C%20golden%20sunset%20light%2C%20peaceful%20atmosphere%2C%20travel%20photography%20style%2C%20high%20quality%2C%2016%3A9%20aspect%20ratio?width=1920&height=1080&model=flux&seed=42') #3498db;
  background-size: cover;
  background-position: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  padding: 0 20px;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

section {
  padding: 5rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.feature-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature-card {
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-10px);
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2980b9;
}

.highlights-grid, .food-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.highlight-item, .food-item {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.highlight-item:hover, .food-item:hover {
  transform: translateY(-10px);
}

.highlight-image, .food-image {
  height: 200px;
  background-color: #ddd;
}

.placeholder {
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 0.9rem;
}

.highlight-item h3, .food-item h3 {
  padding: 1.5rem 1.5rem 0.5rem;
  font-size: 1.3rem;
  color: #2980b9;
}

.highlight-item p, .food-item p {
  padding: 0 1.5rem 1.5rem;
  color: #666;
}

.btn {
  display: inline-block;
  background-color: #2980b9;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  margin: 1rem 1.5rem 1.5rem;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #3498db;
}

.text-center {
  text-align: center;
  margin-top: 2rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.info-card {
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.info-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2980b9;
}

.travel-info-section {
  background-color: #f0f8ff;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero p {
    font-size: 1.2rem;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  section {
    padding: 3rem 0;
  }
}
</style>