<template>
  <Form @submit="addData" />
  <div v-if="list.length > 0" class="table" role="grid" aria-colcount="3">
    <div class="table__row-group" role="rowgroup">
      <div class="table__row" role="row">
        <span role="columnheader" aria-colindex="1">First Name</span>
        <span role="columnheader" aria-colindex="2">Last Name</span>
        <span role="columnheader" aria-colindex="3">Age</span>
      </div>
    </div>
    <div class="table__row-group" role="rowgroup">
      <div class="table__row" v-for="listItems in list" :key="listItems.id" role="row">
        <div aria-colindex="1" role="gridcell">
          <span> {{ listItems.firstName }}</span>
        </div>
        <div aria-colindex="2" role="gridcell">
          <span> {{ listItems.lastName }}</span>
        </div>
        <div aria-colindex="3" role="gridcell">
          <span>{{ listItems.age }}</span>
        </div>
        <button @click="removeData(listItems.id)">X</button>
      </div>
    </div>
  </div>
</template>
<script>
import { uuid } from 'vue-uuid';
import { reactive, ref, toRefs } from 'vue';
import Form from './components/Form.vue';

export default {
  components: { Form },
  setup() {
    const list = ref([]);

    const person = reactive({
      firstName: '',
      lastName: '',
      age: '',
    });

    const personState = toRefs(person);

    const { firstName, lastName, age } = personState;

    // const normalizeString = (str) => {
    //   const result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    //   return result;
    // };

    const addData = (personV) => {
      list.value.push({
        ...personV,
        id: uuid.v1(),
      });
    };

    const removeData = (id) => {
      list.value = list.value.filter((i) => i.id !== id);
    };

    return {
      list,
      firstName,
      lastName,
      age,
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
