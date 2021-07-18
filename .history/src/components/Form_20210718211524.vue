<template>
  <Form class="form" @submit="onSubmit">
    <fieldset class="form__fieldset">
      <label class="form__label" for="firstName">
        <span class="form__label-text">Имя</span>
        <span class="form__label-text">{{ errorMessage }}</span>
        <input
          name="firstName"
          autocomplete="off"
          v-model="firstNameValue"
          type="search"
          class="form__input"
          id="firstName"
        />
      </label>

      <label class="form__label" for="lastName">
        <span>Фамилия</span>
        <input
          name="lastName"
          type="search"
          autocomplete="off"
          class="form__input"
          v-model="lastNameValue"
          id="lastName"
        />
      </label>

      <label class="form__label" for="age">
        <span>Возраст</span>
        <input
          name="age"
          autocomplete="off"
          class="form__input"
          v-model="ageValue"
          type="number"
          id="age"
          min="0"
          step="1"
        />
      </label>

      <button class="form__submit" type="submit">Добавить</button>
    </fieldset>
  </Form>
</template>

<script>
import { useField } from 'vee-validate';
// import * as yup from 'yup';

export default {
  setup() {
    // const schema = yup.object({
    //   firstName: yup.string().required('Поле Имя необходимо к заполнению'),
    //   lastName: yup.string().required('Поле Фамилия необходимо к заполнению'),
    //   age: yup.number().required('Поле Возраст необходимо к заполнению'),
    // });
    const { value: firstNameValue, errorMessage } = useField('firstName');
    const { value: lastNameValue } = useField('lastName');
    const { value: ageValue } = useField('age');

    const onSubmit = (values) => {
      // pretty print the values object

      alert(JSON.stringify(values, null, 2));
    };

    return { onSubmit, firstNameValue, lastNameValue, ageValue, errorMessage };
  },

  name: 'FormCustom',
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
