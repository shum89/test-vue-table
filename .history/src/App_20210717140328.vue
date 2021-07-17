<template>
  <form>
    <fieldset>
      <label for="firstName"></label>
      <input id="firstName" />
      <label for="lastName"></label>
      <input id="lastName" />
      <label for="phone"></label>
      <input id="phone" />
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
