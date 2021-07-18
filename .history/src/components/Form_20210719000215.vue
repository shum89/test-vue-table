<template>
  <Form class="form" :validationSchema="schema" @submit="onSubmit">
    <fieldset class="form__fieldset">
      <TextInput name="firstName" label="Имя" />
      <TextInput name="lastName" label="Фамилия" />
      <TextInput name="age" type="number" label="Фамилия" />
      <button class="form__submit" type="submit">Добавить</button>
    </fieldset>
  </Form>
</template>

<script>
import { Form, Field } from 'vee-validate';
import * as yup from 'yup';
import TextInput from './UI/TextInput.vue';

export default {
  setup() {
    const schema = yup.object().shape({
      firstName: yup.string().required('Поле Имя необходимо к заполнению'),
      lastName: yup.string().required('Поле Фамилия необходимо к заполнению'),
      age: yup.number().required('Поле Возраст необходимо к заполнению'),
    });

    const onSubmit = (values) => {
      console.log(JSON.stringify(values, null, 2));
    };

    return { onSubmit, schema };
  },

  name: 'FormCustom',
  components: { Form, Field, TextInput },
  inheritAttrs: false,
};
</script>

<style scoped>
.form {
  display: flex;
  width: 100%;
}
.form__label {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 10px;
  color: var(--base3);
  flex: 1;
  max-width: 250px;
  text-align: left;
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
.form__fieldset {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex: 1;
}
.form__submit {
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
.form__submit:active {
  outline: none;
  box-shadow: var(--base-shadow-active);
  color: var(--baseDark2);
  border-color: var(--base3);
}
.form__submit:focus {
  outline: none;
  border-color: var(--base3);
}
</style>
