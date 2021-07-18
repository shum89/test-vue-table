<template>
  <label :for="name" class="input__label">
    <span class="input__label-text" :class="{ 'input__label-text_error': errorMessage }">{{
      label
    }}</span>
    <input
      :name="name"
      :id="name"
      :type="type"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleChange"
      @blur="handleBlur"
      class="input"
      :autocomplete="autocomplete"
      :class="{ input_error: errorMessage }"
    />
    <p class="input__error-text" v-show="errorMessage">
      {{ errorMessage }}
    </p>
  </label>
</template>

<script>
import { useField } from 'vee-validate';

export default {
  name: 'TextInput',
  props: {
    type: {
      type: String,
      default: 'search',
    },
    autocomplete: {
      type: String,
      default: 'off',
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

    return {
      handleChange,
      handleBlur,
      errorMessage,
      inputValue,
      meta,
    };
  },
};
</script>

<style scoped>
.input__label {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 10px;
  color: var(--base3);
  flex: 1;
  max-width: 250px;
  text-align: left;
  position: relative;
}
.input__label-text_error {
  color: var(--error);
}
.input__label:focus-within {
  color: var(--baseDark2);
}
.input {
  border: none;
  appearance: none;
  color: var(--base3);
  width: 100%;
  border-radius: 10px;
  font-size: 15px;
  line-height: 20px;
  min-height: 20px;
  padding: 10px 15px;
  background: var(--base2);
  box-shadow: var(--input-shadow);
  border-radius: 5px;
  border: 2px solid;
  border-color: var(--base2);
  transition: var(--shadow-transition);
}
.input:focus-within {
  transition: var(--shadow-transition);
  box-shadow: var(--input-shadow-active);
  border-color: var(--baseDark3);
  outline: 0;
}
.input_error {
  border-color: var(--error);
}
.input__error-text {
  position: absolute;
  top: calc(100% + 5px);
  bottom: 0;
  margin: 0;
  color: var(--error);
}
</style>
