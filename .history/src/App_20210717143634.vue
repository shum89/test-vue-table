<template>
  <form>
    <fieldset>
      <label for="firstName">
        Имя
        <input type="text" id="firstName" />
      </label>

      <label for="lastName">
        Фамилия
        <input type="text" id="lastName" />
      </label>
      <label for="age">
        Возраст
        <input type="number" id="age" />
      </label>
      <button type="submit">Отправить</button>
    </fieldset>
  </form>
  <div class="table" role="grid" aria-colcount="3">
    <div class="table__row-group" role="rowgroup">
      <div class="table__row" role="row">
        <span role="columnheader" aria-colindex="1">First Name</span>
        <span role="columnheader" aria-colindex="2">Last Name</span>
        <span role="columnheader" aria-colindex="3">Phone</span>
      </div>
      <div role="rowgroup">
        <div class="table__row" role="row">
          <span role="gridcell" aria-colindex="1">Fred</span>
          <span role="gridcell" aria-colindex="2">Jackson</span>
          <span role="gridcell" aria-colindex="3">555-1234</span>
        </div>
      </div>
    </div>
    <div role="row"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

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
  justify-content: center;
}
.table__row {
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  max-width: 500px;
}
</style>
