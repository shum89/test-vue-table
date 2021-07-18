<template>
  <label :for="name" class="form__label">
    <span class="form__label-text">{{ label }}</span>
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
    <p class="form__label-text" v-show="errorMessage">
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
    } = useField(props.name, {
      initialValue: props.value,
    });
    const keypress = (e) => {
      if (e.key === '.' || e.key === ',' || e.key === 'e') {
        e.preventDefault();
      }
    };
    return {
      keypress,
      handleChange,
      handleBlur,
      errorMessage,
      inputValue,
      meta,
    };
  },
};
</script>

<style></style>
