<template>
  <Form />
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
      console.log('1');
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
body {
  --base: #090e10;
  --base1: #ebeff3;
  --base2: #c3d0db;
  --base3: #88a1b7;
  --baseDark1: #396387;
  --baseDark2: #204566;
  --baseDark3: #152e44;
  --base-shadow: inset 0px 0px 0px var(--base3), inset 0px 0px 0px var(--base1),
    4px 4px 9px var(--base3), -4px -4px 9px var(--base1);
  --base-shadow-active: inset 4px 4px 9px var(--base3), inset -4px -4px 6px var(--base1),
    2px 2px 9px var(--base3), -2px -2px 9px var(--base1);
  --input-shadow: 2px 2px 9px var(--base3), -2px -2px 9px var(--base1);
  --input-shadow-active: inset 2px 2px 6px var(--base3), inset -2px -2px 6px var(--base1),
    1px 1px 6px var(--base3), -1px -1px 6px var(--base1);
  --shadow-transition: all 0.25s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  background: var(--base2);
}
fieldset {
  border: none;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: inset 1px 1px 1px 1000px transparent !important;
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 174, 255, 0.04) 50%,
    rgba(255, 255, 255, 0) 51%,
    rgba(0, 174, 255, 0.03) 100%
  );
  box-shadow: var(--input-shadow-active);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  box-sizing: border-box;
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
