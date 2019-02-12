<template>
  <main class="container home-container">
    <nav class="home-nav">
      <div class="home-nav-header">
        <a class="home-nav-header__logo" href="/">
          <img src="/img/twohalves.svg">
        </a>
        <p class="home-nav-header__title">Two Halves</p>
      </div>
      <ul>
        <li>
          <a href="/tutorial">How to use</a>
        </li>
        <li>
          <a class="button" href="/start">Get started</a>
        </li>
      </ul>
    </nav>
    <img class="illustration" src="/img/twohalves-illustration.svg">
    <section class="home-content">
      <h1 class="home-content__title">No more lonely days. Get coupled!</h1>
      <p
        class="home-content__description"
      >Try to see if you can find your other half in the 6 minutes before your conversation disappears forever.</p>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
.illustration {
  position: fixed;
  z-index: 0;
  width: 35rem;
  left: 40%;
  top: 10%;
}

.home-container {
  background-color: #ffffff;
}

.home-content {
  position: relative;
  padding: 1.6rem;
  top: 15%;

  &__title {
    font-size: 3rem;
    font-family: "Poppins";
  }

  &__description {
    font-size: 1.6rem;
    margin-top: 1.6rem;
    color: $colorTextPrimaryLight;
  }
}

.home-nav {
  padding: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    list-style-type: none;

    li {
      display: inline-block;
      margin-left: 1.6rem;
    }
  }
}

.home-nav-header {
  display: flex;
  align-items: center;

  &__title {
    font-size: 1.4rem;
    color: $colorAccent;
    margin-left: 0.4rem;
    font-weight: 600;
  }

  &__logo {
    img {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
}
</style>


