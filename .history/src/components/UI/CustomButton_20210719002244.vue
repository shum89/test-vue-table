<template>
  <button class="form__submit" type="submit">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
};
</script>

<style></style>
