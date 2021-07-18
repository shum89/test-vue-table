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

export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    successMessage: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const {
      value: inputValue,
      errorMessage,
      handleBlur,
      handleChange,
      meta,
    } = useField(props.name, _, {
      initialValue: props.value,
    });
  },
};
</script>

<style></style>
