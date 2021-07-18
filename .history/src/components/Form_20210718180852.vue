<template>
  <form class="form" @submit.prevent="onSubmit">
    <fieldset class="form__fieldset">
      <label class="form__label" for="firstName">
        <span class="form__label-text">Имя</span>
        <input
          required
          autocomplete="off"
          type="search"
          class="form__input"
          v-model="person.firstName"
          id="firstName"
        />
      </label>

      <label class="form__label" for="lastName">
        <span>Фамилия</span>
        <input
          required
          type="search"
          autocomplete="off"
          class="form__input"
          v-model="person.lastName"
          id="lastName"
        />
      </label>

      <label class="form__label" for="age">
        <span>Возраст</span>
        <input
          required
          autocomplete="off"
          class="form__input"
          v-model="person.age"
          type="number"
          id="age"
          min="0"
          step="1"
          @keypress="onKeyPress"
        />
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

    function onKeyPress(e) {
      console.log(e);

      if (e.charCode >= 48 && e.charCode <= 57) {
        e.preventDefault();
      }
    }
    return { onSubmit, person, onKeyPress };
  },

  name: 'Form',
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
