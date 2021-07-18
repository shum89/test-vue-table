<template>
  <button class="form__submit" :type="type">{{ text }}</button>
</template>

<script>
export default {
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

<style></style>
