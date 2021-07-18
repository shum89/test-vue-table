<template>
  <Form @submit="addData" />
  <Table @remove="removeData" :list="list" />
</template>
<script>
import { uuid } from 'vue-uuid';
import { ref } from 'vue';
import Form from './components/Form.vue';
import Table from './components/Table.vue';

export default {
  components: { Form, Table },
  setup() {
    const list = ref([]);

    const normalizeString = (str) => {
      const result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      return result;
    };

    const addData = (person) => {
      list.value.push({
        firstName: normalizeString(person.firstName),
        lastName: normalizeString(person.lastName),
        age: person.age,
        id: uuid.v1(),
      });
    };

    const removeData = (id) => {
      list.value = list.value.filter((i) => i.id !== id);
    };

    return {
      list,
      addData,
      removeData,
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
