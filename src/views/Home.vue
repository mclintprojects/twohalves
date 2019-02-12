<template>
  <main class="container home-container">
    <nav class="home-nav">
      <div>
        <a class="home-nav__logo" href="/">
          <img src="/img/twohalves.svg">
        </a>
        <span>
          <p>Two Halves</p>
        </span>
      </div>
      <ul>
        <li>
          <a class="button" href="/login">Login</a>
        </li>
      </ul>
    </nav>
    <section id="home-content">
      <img class="home-content__logo" src="/img/logo.png" alt="two_halves_logo">
      <h3>How does Two Halves work?</h3>
      <br>
      <p>Two Halves is an ephemeral speed dating app. You'll be matched with a stranger (irrespective of gender) and given six (6) minutes to get to know them.</p>
      <br>
      <p>Once 6 minutes elapses, you'll both be asked whether either of you are interested in the other and your answers will be recorded. Your chat history disappears forever and you'll both be matched with new dates.</p>
      <br>
      <p>You can view your mutuals anytime. Mutuals are dates you were interested in that showed the same interest in you.</p>
      <br>
      <p>
        For more information on speed dating, follow this
        <a
          href="https://www.randemotyl.cz/en/speed-dating/how-does-speed-dating-work"
        >link</a>
      </p>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss">
.home-container {
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='355' height='42.6' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23ff3057' stroke-width='13.2' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: auto auto;
}

.home-content {
  &__logo {
    width: 144px;
    margin-bottom: 24px;

    + h3 {
      font-size: 22px;
      margin-bottom: 0px !important;
    }
  }
}

.home-nav {
  background: white;
  padding: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    p {
      font-size: 1.4rem;
      color: $colorAccent;
    }
  }

  ul {
    list-style-type: none;
  }

  &__logo {
    img {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
}
</style>


