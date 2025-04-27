[中文](README.md) | [English](README_EN.md)

# Xiamen Tourism Website

A Xiamen tourism information website built with Nuxt.js, providing comprehensive travel information including attractions, food, transportation, and more.

## Project Overview

This project is a modern tourism information website focused on providing comprehensive information about Xiamen tourism for visitors. The website adopts a responsive design to ensure a good user experience across various devices.

### Page Structure

The website includes the following main pages:

- **Home (index.vue)**: Main page showcasing an overview of Xiamen and popular content
- **Attractions (attractions.vue)**: Introduction to Xiamen's main tourist attractions
- **Food (food.vue)**: Display of Xiamen's specialty foods and recommended restaurants
- **Transportation (transportation.vue)**: Provides information on transportation in Xiamen
- **About (about.vue)**: Website-related information

### Visual Design Features

- **Color Scheme**: Ocean-themed colors reflecting Xiamen's characteristics as a coastal city
- **Icon System**: Integration of Font Awesome icon library to enhance the visual experience
- **Component-based Design**: Use of custom components to ensure interface consistency
- **Animation Effects**: Addition of appropriate transitions and animation effects to enhance user experience
- **Responsive Layout**: Adaptation to various screen sizes, providing a smooth mobile experience

### Technology Stack

- **Frontend Framework**: Nuxt.js 3.x
- **UI Components**: Custom component system
- **Icons**: Font Awesome
- **Styling**: CSS variable system for theme consistency

## Development Guide

### Environment Requirements

- Node.js 16.x or higher
- npm 7.x or higher

### Installing Dependencies

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

### Development Server

Start the development server (`http://localhost:3000`):

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev
```

### Production Build

Build for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview
```

## Project Structure

```
xiamen/
├── assets/            # Static resources
│   └── css/           # CSS files
│       └── variables.css  # CSS variable definitions
├── components/        # Reusable components
│   ├── AppButton.vue  # Button component
│   ├── AppCard.vue    # Card component
│   ├── AppLayout.vue  # Layout component
│   └── SectionHeading.vue # Heading component
├── pages/             # Page components
│   ├── index.vue      # Home page
│   ├── attractions.vue # Attractions page
│   ├── food.vue       # Food page
│   ├── transportation.vue # Transportation page
│   └── about.vue      # About page
├── plugins/           # Plugins
│   └── fontawesome.js # Font Awesome configuration
├── public/            # Public files
└── nuxt.config.ts     # Nuxt configuration
```

## Deployment

For deployment information, please refer to the [Nuxt Deployment Documentation](https://nuxt.com/docs/getting-started/deployment).
