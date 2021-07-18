<template>
  <form @submit.prevent="onSubmit">
    <fieldset>
      <label for="firstName">
        Имя
        <input class="form__input" v-model="person.firstName" type="text" id="firstName" />
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
  width: 169px;
  height: 24px;
  left: 506px;
  top: 45px;
  background: #f0f0f3;
  box-shadow: -1px -1px 3px #ffffff, 1.5px 1.5px 3px rgba(174, 174, 192, 0.4);
  border-radius: 5px;
  border-color: transparent;
}
.form__input:focus-within {
  background: #eeeeee;
  border-color: #f0f0f3;
}
</style>
