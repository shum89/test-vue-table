<template>
  <form>
    <fieldset>
      <label slot= for="firstName">Имя</label>
      <input type="text" id="firstName" />
      <label for="lastName">Фамилия</label>
      <input id="lastName" />
      <label for="age">Возраст</label>
      <input id="age" />
    </fieldset>
  </form>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
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
</style>
