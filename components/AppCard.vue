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
  background-color: var(--white);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: all var(--transition-normal);
}

.app-card--shadow {
  box-shadow: var(--shadow-md);
}

.app-card--hover:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
}

.app-card__image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.app-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-normal);
}

.app-card:hover .app-card__image img {
  transform: scale(1.05);
}

.app-card__content {
  padding: 1.5rem;
}

.app-card__title {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--primary-color);
}

.app-card__footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--neutral-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
