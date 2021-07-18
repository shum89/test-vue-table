<template>
  <form @submit.prevent="onSubmit">
    <fieldset class="form__fieldset">
      <label for="firstName">
        <span>Имя</span>
        <input class="form__input" v-model="person.firstName" type="text" id="firstName" />
      </label>

      <label for="lastName">
        <span>Фамилия</span>
        <input class="form__input" v-model="person.lastName" type="text" id="lastName" />
      </label>

      <label for="age">
        <span>Возраст</span>
        <input class="form__input" v-model="person.age" type="number" id="age" />
      </label>

      <button class="form__submit" type="submit">Добавить</button>
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
  transition: var(--shadow-transition);
}
.form__input:focus-within {
  transition: var(--shadow-transition);
  box-shadow: var(--input-shadow-active);
  border: var(--baseDark3);
  outline: 0;
}
.form__fieldset {
  display: flex;
  gap: 35px;
}
.form__submit {
  border-radius: 10px;
  padding: 10px 15px;
  max-width: 500px;
  font-size: 12px;
  line-height: 22px;
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
</style>
