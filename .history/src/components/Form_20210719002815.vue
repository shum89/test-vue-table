<template>
  <Form class="form" :validationSchema="schema" @submit="onSubmit">
    <fieldset class="form__fieldset">
      <TextInput name="firstName" label="Имя" />
      <TextInput name="lastName" label="Фамилия" />
      <TextInput @keypress="keypress" name="age" type="number" label="Возраст" />
      <Button text="Добавить" type="submit" />
    </fieldset>
  </Form>
</template>

<script>
import { Form } from 'vee-validate';
import * as yup from 'yup';
import TextInput from './UI/TextInput.vue';
import CustomButton from './UI/CustomButton.vue';

export default {
  setup(_, { emit }) {
    const schema = yup.object().shape({
      firstName: yup.string().required('Заполните поле Имя'),
      lastName: yup.string().required('Заполните поле Фамилия'),
      age: yup.number().required('Заполните поле Возраст').typeError('Введите цифру'),
    });

    const onSubmit = (values, actions) => {
      emit('submit', values);
      actions.resetForm();
    };
    const keypress = (e) => {
      if (e.key === '.' || e.key === ',' || e.key === 'e') {
        e.preventDefault();
      }
    };

    return { onSubmit, schema, keypress };
  },

  name: 'FormCustom',
  components: { Form, TextInput, CustomButton },
  inheritAttrs: false,
};
</script>

<style scoped>
.form {
  display: flex;
  width: 100%;
}
.form__fieldset {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex: 1;
}
</style>
