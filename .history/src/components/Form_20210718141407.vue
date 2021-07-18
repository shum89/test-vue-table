<template>
  <form @submit.prevent="onSubmit">
    <fieldset>
      <label for="firstName">
        <span>Имя</span>
        <input class="form__input" v-model="person.firstName" type="text" id="firstName" />
      </label>

      <label for="lastName">
        <span>Фамилия</span>
        <input v-model="person.lastName" type="text" id="lastName" />
      </label>
      <label for="age">
        <span>Возраст</span>
        <input v-model="person.age" type="number" id="age" />
      </label>
      <button type="submit">Добавить</button>
    </fieldset>
  </form>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup(_, { emit }) {
    const person = reactive({
      firstName: '',
      lastName: '',
      age: '',
    });
    const onSubmit = () => {
      emit('submit', person);
    };

    return { onSubmit, person };
  },

  name: 'Form',
  inheritAttrs: false,
};
</script>

<style scoped>
.form__input {
  border: none;
  appearance: none;
  width: 100%;
  max-width: 250px;
  border-radius: 10px;
  font-size: 15px;
  line-height: 20px;
  min-height: 20px;
  padding: 10px 15px;
  background: var(--base2);
  box-shadow: var(--input-shadow);
  border-radius: 5px;
  border-color: transparent;
}
.form__input:focus-within {
  box-shadow: var(--input-shadow-active);
  border: var(--baseDark3);
  outline: 0;
}
</style>
