<template>
  <div v-if="list.length > 0" class="table" role="grid" aria-colcount="3">
    <div class="table__row-group" role="rowgroup">
      <div class="table__row" role="row">
        <span role="columnheader" aria-colindex="1">First Name</span>
        <span role="columnheader" aria-colindex="2">Last Name</span>
        <span role="columnheader" aria-colindex="3">Age</span>
      </div>
    </div>
    <div class="table__row-group" role="rowgroup">
      <CustomButton class="table__row" v-for="listItems in list" :key="listItems.id" role="row">
        <div aria-colindex="1" role="gridcell">
          <span> {{ listItems.firstName }}</span>
        </div>
        <div aria-colindex="2" role="gridcell">
          <span> {{ listItems.lastName }}</span>
        </div>
        <div aria-colindex="3" role="gridcell">
          <span>{{ listItems.age }}</span>
        </div>
        <CustomButton @click="removeData(listItems.id)"/>{{Cross}}</CustomButton>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from './UI/CustomButton.vue';
import Cross from '../assets/Cross';

export default {
  props: {
    list: Array,
  },
  setup(_, { emit }) {
    const removeData = (id) => {
      emit('remove', id);
    };
    return { removeData };
  },
  name: 'Table',
  components: { CustomButton },
};
</script>

<style></style>
