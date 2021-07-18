<template>
  <label class="form__label" for="firstName">
    <span class="form__label-text">Имя</span>
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
    <ErrorMessage class="invalid-feedback" name="contact.email" />
  </label>
</template>

<script>
export default {};
</script>

<style></style>
