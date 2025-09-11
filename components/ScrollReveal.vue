<template>
  <div 
    ref="element" 
    :class="[
      'scroll-reveal',
      { 'is-visible': isVisible }
    ]"
    :style="{ 
      transitionDelay: `${delay}ms`,
      transform: transformStyle 
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const props = defineProps({
  delay: {
    type: Number,
    default: 0
  },
  direction: {
    type: String,
    default: 'up',
    validator: (value) => ['up', 'down', 'left', 'right', 'scale', 'fade'].includes(value)
  },
  distance: {
    type: Number,
    default: 50
  },
  threshold: {
    type: Number,
    default: 0.1
  }
});

const element = ref(null);
const isVisible = ref(false);

const transformStyle = computed(() => {
  if (isVisible.value) return 'none';
  
  switch (props.direction) {
    case 'up':
      return `translateY(${props.distance}px)`;
    case 'down':
      return `translateY(-${props.distance}px)`;
    case 'left':
      return `translateX(${props.distance}px)`;
    case 'right':
      return `translateX(-${props.distance}px)`;
    case 'scale':
      return `scale(0.8)`;
    default:
      return 'none';
  }
});

let observer = null;

onMounted(() => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              isVisible.value = true;
            }, props.delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: props.threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (element.value) {
      observer.observe(element.value);
    }
  } else {
    // Fallback for browsers without IntersectionObserver
    isVisible.value = true;
  }
});

onUnmounted(() => {
  if (observer && element.value) {
    observer.unobserve(element.value);
    observer.disconnect();
  }
});
</script>

<style scoped>
.scroll-reveal {
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform, opacity;
}

.scroll-reveal.is-visible {
  opacity: 1;
  transform: none !important;
}
</style>