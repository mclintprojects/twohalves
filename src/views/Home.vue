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
          <a href="/start">How to use</a>
        </li>
      </ul>
    </nav>
    <img class="illustration" src="/img/twohalves-illustration.svg">
    <section class="home-content">
      <h1 class="home-content__title">No more lonely days. Get coupled!</h1>
      <p
        class="home-content__description"
      >Two Halves is an ephemeral speed dating app. Try to see if you can find your other half in the 6 minutes before your conversation disappears forever.</p>
      <button class="button">Get started</button>
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
  background-color: #faedf7;
}

.home-content {
  position: relative;
  padding: 1.6rem;
  top: 15%;

  &__title {
    font-size: 3rem;
    font-family: "Poppins";
    font-weight: 700;
  }

  &__description {
    font-size: 1.6rem;
    margin-top: 0.8rem;
    color: $colorTextPrimaryLight;
    margin-bottom: 2.4rem;
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

@media screen and(min-width: 76.8rem) {
  .home-content {
    top: 30%;
    width: 50%;
    margin: auto;

    &__title {
      font-size: 5rem;
      width: 70%;
    }

    &__description {
      width: 50%;
    }
  }

  .illustration {
    width: 50%;
  }
}
</style>


