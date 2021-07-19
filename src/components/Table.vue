<template>
  <div v-if="list.length > 0" class="table" role="grid" aria-colcount="3">
    <div class="table__row-group table__row-group_head" role="rowgroup">
      <div class="table__row" role="row">
        <span class="table__cell" role="columnheader" aria-colindex="1">Имя</span>
        <span class="table__cell" role="columnheader" aria-colindex="2">Фамилия</span>
        <span class="table__cell" role="columnheader" aria-colindex="3">Возраст</span>
      </div>
    </div>
    <div class="table__row-group table__row-group_body" role="rowgroup">
      <div class="table__row" v-for="listItems in list" :key="listItems.id" role="row">
        <div class="table__cell table__cell_row" aria-colindex="1" role="gridcell">
          <p class="table__row-text">{{ listItems.firstName }}</p>
        </div>
        <div class="table__cell table__cell_row" aria-colindex="2" role="gridcell">
          <p class="table__row-text">{{ listItems.lastName }}</p>
        </div>
        <div class="table__cell table__cell_row" aria-colindex="3" role="gridcell">
          <p class="table__row-text">{{ listItems.age }}</p>
        </div>
        <div class="table__cell table__cell_row" aria-colindex="4" role="gridcell">
          <CustomButton :size="`small`" @click="removeData(listItems.id)">
            <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14 1.41L12.59 0 7 5.59 1.41 0 0 1.41 5.59 7 0 12.59 1.41 14 7 8.41 12.59 14 14 12.59 8.41 7 14 1.41z"
                fill="#000"
                fill-opacity=".54"
              />
            </svg>
          </CustomButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from './UI/CustomButton.vue';

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

<style scoped>
.table {
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  width: 70%;
  align-items: center;
}
.table__row-group {
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid var(--baseDark3);
  width: 100%;
}
.table__row-group_head {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}
.table__row-group_body {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.table__row-group:last-of-type {
  border-top: none;
}
.table__cell {
  padding: 15px;
}

.table__cell_row:last-of-type {
  justify-self: flex-end;
  padding: 7px;
  word-wrap: break-word;
  word-break: break-all;
}
.table__row-text {
  margin: 0;
  text-align: left;
  line-height: 1rem;
  word-wrap: break-word;
}
.table__row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr)) minmax(40px, 70px) minmax(50px, 100px);
  justify-content: center;
  width: 100%;
  place-items: flex-start;
}
.table__row:not(:last-of-type) {
  border-bottom: 1px solid var(--baseDark3);
}
@media screen and (max-width: 768px) {
  .table {
    width: 90%;
    font-size: 0.8rem;
  }
  .table__cell {
    padding: 5px;
  }
}
</style>
