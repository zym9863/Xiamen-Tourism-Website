<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :class="[
      'app-button',
      `app-button--${variant}`,
      `app-button--${size}`,
      { 'app-button--block': block, 'app-button--rounded': rounded }
    ]"
    :disabled="disabled"
    @click="onClick"
  >
    <i v-if="icon" :class="icon" class="app-button__icon"></i>
    <slot></slot>
  </component>
</template>

<script setup>
const props = defineProps({
  // Button variants
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline', 'text'].includes(value)
  },
  // Button sizes
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  // Button can be a link
  to: {
    type: [String, Object],
    default: null
  },
  // Button can be an external link
  href: {
    type: String,
    default: null
  },
  // Button can be disabled
  disabled: {
    type: Boolean,
    default: false
  },
  // Button can be full width
  block: {
    type: Boolean,
    default: false
  },
  // Button can be rounded
  rounded: {
    type: Boolean,
    default: false
  },
  // Button can have an icon
  icon: {
    type: String,
    default: null
  }
});

const emit = defineEmits(['click']);

// Determine the tag based on props
const tag = computed(() => {
  if (props.to) return resolveComponent('NuxtLink');
  if (props.href) return 'a';
  return 'button';
});

// Handle click event
const onClick = (event) => {
  if (props.disabled) {
    event.preventDefault();
    return;
  }
  emit('click', event);
};
</script>

<style scoped>
.app-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: var(--font-weight-medium);
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 2px solid transparent;
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: 1rem;
  line-height: var(--line-height-normal);
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  letter-spacing: 0.02em;
  min-height: 44px; /* Accessibility: minimum touch target */
}

.app-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(30, 136, 229, 0.25);
  z-index: 1;
}

.app-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}

/* Enhanced button variants */
.app-button--primary {
  background: var(--gradient-primary);
  color: var(--white);
  border-color: transparent;
  box-shadow: var(--shadow-sm);
}

.app-button--primary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left var(--transition-slow);
}

.app-button--primary:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
  filter: brightness(1.1);
}

.app-button--primary:hover::before {
  left: 100%;
}

.app-button--primary:active:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.app-button--secondary {
  background: var(--gradient-secondary);
  color: var(--white);
  border-color: transparent;
  box-shadow: var(--shadow-sm);
}

.app-button--secondary:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
  filter: brightness(1.1);
}

.app-button--secondary:active:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.app-button--outline {
  background-color: transparent;
  color: var(--primary-color);
  border-color: var(--primary-color);
  position: relative;
}

.app-button--outline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: var(--gradient-primary);
  transition: width var(--transition-normal);
  z-index: -1;
}

.app-button--outline:hover:not(:disabled) {
  color: var(--white);
  border-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.app-button--outline:hover::before {
  width: 100%;
}

.app-button--outline:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

.app-button--text {
  background-color: transparent;
  color: var(--primary-color);
  border-color: transparent;
  padding-left: var(--spacing-sm);
  padding-right: var(--spacing-sm);
  min-height: auto;
}

.app-button--text:hover:not(:disabled) {
  color: var(--primary-dark);
  background-color: rgba(30, 136, 229, 0.08);
  transform: none;
}

.app-button--text:active:not(:disabled) {
  background-color: rgba(30, 136, 229, 0.12);
}

/* Enhanced button sizes */
.app-button--small {
  padding: var(--spacing-xs) var(--spacing-md);
  font-size: 0.875rem;
  min-height: 36px;
}

.app-button--medium {
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: 1rem;
  min-height: 44px;
}

.app-button--large {
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: 1.125rem;
  min-height: 52px;
}

/* Button modifiers */
.app-button--block {
  display: flex;
  width: 100%;
}

.app-button--rounded {
  border-radius: 50px;
}

/* Button with icon */
.app-button__icon {
  margin-right: var(--spacing-sm);
  font-size: 0.9em;
  transition: transform var(--transition-normal);
}

.app-button:hover .app-button__icon {
  transform: scale(1.1);
}

/* Enhanced ripple effect */
.app-button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.5);
  opacity: 0;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s, opacity 0.6s;
}

.app-button:active:not(:disabled)::after {
  width: 300px;
  height: 300px;
  opacity: 0;
}

/* Loading state */
.app-button--loading {
  color: transparent;
  pointer-events: none;
}

.app-button--loading::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px;
  height: 16px;
  margin: -8px 0 0 -8px;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: button-spin 0.8s linear infinite;
}

@keyframes button-spin {
  to {
    transform: rotate(360deg);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .app-button--large {
    padding: var(--spacing-sm) var(--spacing-lg);
    font-size: 1rem;
    min-height: 44px;
  }
  
  .app-button--medium {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .app-button {
    font-size: 0.9rem;
  }
  
  .app-button--large,
  .app-button--medium {
    padding: var(--spacing-sm) var(--spacing-md);
    min-height: 40px;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .app-button--outline {
    border-width: 3px;
  }
  
  .app-button:focus {
    outline: 3px solid currentColor;
    outline-offset: 2px;
  }
}
</style>
