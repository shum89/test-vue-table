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
      class="form__input"
      :autocomplete="autocomplete"
    />
    <p class="form__input-error" v-show="errorMessage">
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

<style scoped>
.form__label {
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
.form__label:focus-within {
  color: var(--baseDark2);
}
.form__input {
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
.form__input:focus-within {
  transition: var(--shadow-transition);
  box-shadow: var(--input-shadow-active);
  border-color: var(--baseDark3);
  outline: 0;
}
.form__input-error {
  position: absolute;
  top: calc(100% + 5px);
  bottom: 0;
  color: var(--error);
}
</style>
