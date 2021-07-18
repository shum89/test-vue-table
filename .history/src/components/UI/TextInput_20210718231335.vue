<template>
  <label :for="name" class="form__label">
    <span class="form__label-text">{{ label }}</span>
    <span class="form__label-text">{{ errorMessage }}</span>
    <input
      :name="name"
      :id="name"
      :type="type"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleChange"
      @blur="handleBlur"
      @keypress="keypress"
    />
    <p class="help-message" v-show="errorMessage">
      {{ errorMessage }}
    </p>
  </label>
</template>

<script>
import { useField } from 'vee-validate';

export default {};
</script>

<style></style>
