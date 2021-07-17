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
      <button type="submit">Отправить</button>
    </fieldset>
  </form>
  <div v-if="list.length > 0" class="table" role="grid" aria-colcount="3">
    <div class="table__row-group" role="rowgroup">
      <div class="table__row" role="row">
        <span role="columnheader" aria-colindex="1">First Name</span>
        <span role="columnheader" aria-colindex="2">Last Name</span>
        <span role="columnheader" aria-colindex="3">Phone</span>
      </div>
    </div>
    <div class="table__row-group" role="rowgroup">
      <div class="table__row" v-for="listItems in list" :ref="add" :key="listItems.id" role="row">
        <span role="gridcell" aria-colindex="1">{{ listItems }}</span>
        <span role="gridcell" aria-colindex="2">{{ listItems.lastName }}</span>
        <span role="gridcell" aria-colindex="3">5{{ listItems.age }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import { uuid } from 'vue-uuid';
import { ref } from 'vue';

export default {
  setup() {
    const list = ref([]);
    const firstName = ref('');
    const lastName = ref('');
    const age = ref('');
    const addData = () => {
      console.log({
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value,
        id: uuid.v1(),
      });
      list.value.push({
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value,
        id: uuid.v1(),
      });
    };
    return {
      list,
      firstName,
      lastName,
      age,
      addData,
    };
  },
};
</script>
<script></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.table__row-group {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.table__row {
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  max-width: 500px;
  width: 100%;
}
</style>
