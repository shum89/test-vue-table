<template>
  <form @submit.prevent="onSubmit">
    <fieldset>
      <label for="firstName">
        Имя
        <input v-model="person.firstName" type="text" id="firstName" />
      </label>

      <label for="lastName">
        Фамилия
        <input v-model="person.lastName" type="text" id="lastName" />
      </label>
      <label for="age">
        Возраст
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
      age: 0,
    });
    const onSubmit = () => {
      emit('submit', person);
    };

    return { onSubmit, person };
  },

  name: 'Form',
};
</script>

<style></style>
