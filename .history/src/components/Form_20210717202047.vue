<template>
  <form @submit.prevent="onSubmit">
    <fieldset>
      <label for="firstName">
        Имя
        <input
          @input="$emit('update:firstName', $event.target.value)"
          v-model="firstName"
          type="text"
          id="firstName"
        />
      </label>

      <label for="lastName">
        Фамилия
        <input
          @input="$emit('update:lastName', $event.target.value)"
          v-model="lastName"
          type="text"
          id="lastName"
        />
      </label>
      <label for="age">
        Возраст
        <input v-model="age" type="number" id="age" />
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
