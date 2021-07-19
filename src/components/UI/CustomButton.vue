<template>
  <button class="button" :class="`button_${size}`" :type="type">
    <slot>{{ text }}</slot>
  </button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    text: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'medium',
    },
    type: {
      type: String,
      default: 'button',
    },
  },
};
</script>

<style scoped>
.button {
  border-radius: 10px;
  display: grid;
  place-items: center;
  padding: 10px 15px;
  text-transform: uppercase;
  transition: var(--shadow-transition);
  width: fit-content;
  color: var(--baseDark2);
  background: var(--base2);
  border: 2px solid var(--base2);
  box-shadow: var(--base-shadow);
}
.button:active {
  outline: none;
  box-shadow: var(--base-shadow-active);
  color: var(--baseDark2);
  border-color: var(--base3);
}
.button:focus {
  outline: none;
  border-color: var(--base3);
}
.button_medium {
  max-width: 350px;
}
.button_small {
  padding: 7px 7px;
  font-size: 12px;
  line-height: 14px;
  font-weight: 900;
}
</style>
