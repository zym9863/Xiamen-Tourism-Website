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
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  text-decoration: none;
}

.app-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(26, 115, 232, 0.25);
}

.app-button:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

/* Button variants */
.app-button--primary {
  background-color: var(--primary-color);
  color: white;
  border-color: var(--primary-color);
}

.app-button--primary:hover:not(:disabled) {
  background-color: var(--primary-dark);
  border-color: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.app-button--primary:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

.app-button--secondary {
  background-color: var(--secondary-color);
  color: white;
  border-color: var(--secondary-color);
}

.app-button--secondary:hover:not(:disabled) {
  background-color: var(--secondary-dark);
  border-color: var(--secondary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.app-button--secondary:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

.app-button--outline {
  background-color: transparent;
  color: var(--primary-color);
  border-color: var(--primary-color);
}

.app-button--outline:hover:not(:disabled) {
  background-color: var(--primary-light);
  color: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.app-button--outline:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

.app-button--text {
  background-color: transparent;
  color: var(--primary-color);
  border-color: transparent;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.app-button--text:hover:not(:disabled) {
  color: var(--primary-dark);
  background-color: rgba(26, 115, 232, 0.05);
}

/* Button sizes */
.app-button--small {
  padding: 0.25rem 0.75rem;
  font-size: 0.875rem;
}

.app-button--medium {
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
}

.app-button--large {
  padding: 0.75rem 1.75rem;
  font-size: 1.125rem;
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
  margin-right: 0.5rem;
}

/* Ripple effect */
.app-button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5px;
  height: 5px;
  background: rgba(255, 255, 255, 0.5);
  opacity: 0;
  border-radius: 100%;
  transform: scale(1, 1) translate(-50%, -50%);
  transform-origin: 50% 50%;
}

.app-button:focus:not(:active)::after {
  animation: ripple 0.6s ease-out;
}

@keyframes ripple {
  0% {
    transform: scale(0, 0) translate(-50%, -50%);
    opacity: 0.5;
  }
  100% {
    transform: scale(20, 20) translate(-50%, -50%);
    opacity: 0;
  }
}
</style>
