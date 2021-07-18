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
export default {
  props: {
    list: Array,
  },

  name: 'Table',
};
</script>

<style></style>
