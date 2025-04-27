[中文](README.md) | [English](README_EN.md)

# 厦门旅游网站 (Xiamen Tourism Website)

基于 Nuxt.js 构建的厦门旅游信息网站，提供景点、美食、交通等全方位旅游信息。

## 项目概述

本项目是一个现代化的旅游信息网站，专注于为游客提供厦门旅游相关的全面信息。网站采用了响应式设计，确保在各种设备上都能提供良好的用户体验。

### 页面结构

网站包含以下主要页面：

- **首页 (index.vue)**: 网站主页，展示厦门概览和热门内容
- **景点 (attractions.vue)**: 介绍厦门主要旅游景点
- **美食 (food.vue)**: 展示厦门特色美食和推荐餐厅
- **交通 (transportation.vue)**: 提供厦门交通出行信息
- **关于 (about.vue)**: 网站相关信息

### 视觉设计特点

- **配色方案**: 采用海洋主题配色，反映厦门作为海滨城市的特色
- **图标系统**: 集成 Font Awesome 图标库，提升用户界面的视觉体验
- **组件化设计**: 使用自定义组件确保界面一致性
- **动画效果**: 添加适当的过渡和动画效果，提升用户体验
- **响应式布局**: 适配各种屏幕尺寸，提供流畅的移动端体验

### 技术栈

- **前端框架**: Nuxt.js 3.x
- **UI 组件**: 自定义组件系统
- **图标**: Font Awesome
- **样式**: CSS 变量系统，实现主题一致性

## 开发指南

### 环境要求

- Node.js 16.x 或更高版本
- npm 7.x 或更高版本

### 安装依赖

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

### 开发服务器

启动开发服务器 (`http://localhost:3000`):

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev
```

### 生产构建

构建生产版本:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build
```

本地预览生产构建:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview
```

## 项目结构

```
xiamen/
├── assets/            # 静态资源
│   └── css/           # CSS 文件
│       └── variables.css  # CSS 变量定义
├── components/        # 可复用组件
│   ├── AppButton.vue  # 按钮组件
│   ├── AppCard.vue    # 卡片组件
│   ├── AppLayout.vue  # 布局组件
│   └── SectionHeading.vue # 标题组件
├── pages/             # 页面组件
│   ├── index.vue      # 首页
│   ├── attractions.vue # 景点页面
│   ├── food.vue       # 美食页面
│   ├── transportation.vue # 交通页面
│   └── about.vue      # 关于页面
├── plugins/           # 插件
│   └── fontawesome.js # Font Awesome 配置
├── public/            # 公共文件
└── nuxt.config.ts     # Nuxt 配置
```

## 部署

有关部署信息，请参阅 [Nuxt 部署文档](https://nuxt.com/docs/getting-started/deployment)。
