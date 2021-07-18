<template>
  <button class="button" :type="type">{{ text }}</button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    text: {
      type: String,
      default: '',
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
  padding: 10px 15px;
  max-width: 250px;
  font-size: 12px;
  line-height: 20px;
  font-weight: 900;
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
</style>
