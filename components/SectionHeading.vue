<template>
  <div class="section-heading" :class="{ 'section-heading--centered': centered }">
    <h2 class="section-heading__title">
      <slot></slot>
    </h2>
    <p v-if="subtitle" class="section-heading__subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  subtitle: {
    type: String,
    default: ''
  },
  centered: {
    type: Boolean,
    default: true
  }
});
</script>

<style scoped>
.section-heading {
  margin-bottom: 3rem;
}

.section-heading--centered {
  text-align: center;
}

.section-heading__title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--neutral-dark);
  position: relative;
  display: inline-block;
  margin-bottom: 1.5rem;
}

.section-heading__title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 3px;
  background: var(--primary-color);
  border-radius: var(--radius-sm);
}

.section-heading--centered .section-heading__title::after {
  left: 50%;
  transform: translateX(-50%);
}

.section-heading__subtitle {
  font-size: 1.1rem;
  color: var(--neutral-medium);
  max-width: 700px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .section-heading__title {
    font-size: 2rem;
  }
  
  .section-heading__subtitle {
    font-size: 1rem;
  }
}
</style>
