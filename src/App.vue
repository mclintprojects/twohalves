<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("setUsername", localStorage.getItem("username"));
  }
};
</script>

<style lang="scss">
:root {
  font-size: 62.5%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Noto Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
}

a {
  text-decoration: none;
  text-transform: uppercase;
  color: $colorPrimary;
  font-size: 1.2rem;
}

.container {
  width: 100vw;
  height: 100vh;
}

.button {
  background: $colorPrimary;
  padding: 1.2rem 1.6rem;
  border-radius: 3rem;
  color: white;
  font-size: 1.1rem;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: all 400ms;

  &:hover {
    cursor: pointer;
    background: lighten($colorPrimary, 10);
  }
}
</style>
