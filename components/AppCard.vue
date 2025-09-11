<template>
  <div class="app-card" :class="{ 'app-card--hover': hover, 'app-card--shadow': shadow }">
    <div v-if="$slots.image" class="app-card__image">
      <slot name="image"></slot>
    </div>
    <div class="app-card__content">
      <h3 v-if="title" class="app-card__title">{{ title }}</h3>
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="app-card__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  hover: {
    type: Boolean,
    default: true
  },
  shadow: {
    type: Boolean,
    default: true
  }
});
</script>

<style scoped>
.app-card {
  background: var(--gradient-card);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-normal);
  border: 1px solid rgba(30, 136, 229, 0.08);
  position: relative;
}

.app-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--gradient-primary);
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.app-card--shadow {
  box-shadow: var(--shadow-md);
}

.app-card--hover:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: var(--shadow-xl);
  border-color: var(--primary-color);
}

.app-card--hover:hover::before {
  opacity: 1;
}

.app-card__image {
  width: 100%;
  height: 240px;
  overflow: hidden;
  position: relative;
}

.app-card__image::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.1) 100%);
  opacity: 0;
  transition: opacity var(--transition-normal);
}

.app-card:hover .app-card__image::after {
  opacity: 1;
}

.app-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
  border-radius: 0;
}

.app-card:hover .app-card__image img {
  transform: scale(1.08);
}

.app-card__content {
  padding: var(--spacing-xl);
  position: relative;
}

.app-card__title {
  font-size: 1.4rem;
  margin-bottom: var(--spacing-md);
  color: var(--primary-color);
  font-weight: var(--font-weight-semibold);
  line-height: var(--line-height-tight);
  transition: color var(--transition-normal);
}

.app-card:hover .app-card__title {
  color: var(--primary-dark);
}

.app-card__content p {
  color: var(--neutral-medium);
  line-height: var(--line-height-relaxed);
  font-size: 1rem;
}

.app-card__footer {
  padding: var(--spacing-lg) var(--spacing-xl);
  border-top: 1px solid var(--neutral-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(30, 136, 229, 0.02);
  transition: background-color var(--transition-normal);
}

.app-card:hover .app-card__footer {
  background: rgba(30, 136, 229, 0.05);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .app-card__image {
    height: 200px;
  }
  
  .app-card__content {
    padding: var(--spacing-lg);
  }
  
  .app-card__footer {
    padding: var(--spacing-md) var(--spacing-lg);
  }
  
  .app-card__title {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .app-card__content {
    padding: var(--spacing-md);
  }
  
  .app-card__footer {
    padding: var(--spacing-sm) var(--spacing-md);
  }
}
</style>
