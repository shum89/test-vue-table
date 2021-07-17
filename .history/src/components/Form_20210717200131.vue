<template>
  <form @submit.prevent="onFormSubmit">
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
        <input
          @input="$emit('update:age', $event.target.value)"
          v-model="age"
          type="number"
          id="age"
        />
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
