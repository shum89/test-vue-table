<template>
  <form @submit.prevent="addData">
    <fieldset>
      <label for="firstName">
        Имя
        <input v-model="firstName" type="text" id="firstName" />
      </label>

      <label for="lastName">
        Фамилия
        <input v-model="lastName" type="text" id="lastName" />
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
export default {
  setup(_, { emit }) {
    onFormSubmit = () => {
      emit('submit');
    };
    return {
      onFormSubmit,
    };
  },
  name: 'Form',
};
</script>

<style></style>
