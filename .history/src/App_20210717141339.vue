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
