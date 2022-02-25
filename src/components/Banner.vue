<template>
  <div class="banner">
    <div class="container">
      <div class="banner__content">
        <h1 class="banner__title">
          The best doctors in <span>Medicine!</span>
        </h1>
        <p class="banner__subtitle">
          in the world of modern medicine!
        </p>
        <p class="banner__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        </p>
        <a
          href="#contact"
          class="button banner__button"
        >Get started now</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MedicalBanner',
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  background: url('@/assets/img/banner/banner-bg.png') no-repeat 0 0;
  background-size: cover;

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 50%;
    padding-top: 375px;
    padding-bottom: 145px;
  }

  &__title {
    margin-bottom: 15px;
    font-family: 'Roboto', sans-serif;
    font-size: 70px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    color: $white;

    span {
      font-weight: 700;
    }
  }

  &__subtitle {
    margin-bottom: 60px;
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    color: $white;
  }

  &__text {
    margin-bottom: 60px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    color: $white;
  }

  &__button {
    width: 200px;
    height: 46px;
    border: 1px solid $white;
    background-color: $white;
    color: $button-text;
    transition: background-color .3s ease;
  }
}

@media  (any-hover: hover) {
  .banner__button:hover {
    background-color: transparent;
    color: $white;
  }
}

@media screen and (max-width: 1200px) {
  .banner {
    // background-size: 100% 100%;

    &__content {
      width: 60%;
      padding-top: 170px;
      padding-bottom: 70px;
    }
  }
}

@media screen and (max-width: 991px) {
  .banner__content {
    width: 75%;
    padding-top: 100px;
  }
}

@media screen and (max-width: 768px) {
  .banner {
    background: unset;

    &__content {
      width: 100%;
      align-items: center;
      text-align: center;
    }

    h1,
    h2,
    p {
      color: $text-color
    }

    &__button {
      background-color: $second;
      color: $white;
    }
  }

  .dark .banner {
    h1,
    h2,
    p {
      color: $white;
    }

    &__button {
      background-color: $white;
      color: $text-color;
    }
  }
}

@media screen and (max-width: 599px) {
  .banner {
    &__content {
      padding-bottom: 30px;
    }

    &__title {
      font-size: 38px;
    }

    &__subtitle {
      margin-bottom: 30px;
      font-size: 20px;
    }

    &__text {
      margin-bottom: 30px;
      font-size: 16px;
    }
  }
}
</style>
