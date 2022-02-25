<template>
  <div class="features">
    <a
      href="#"
      class="features__block features__block--image-1"
    >
      <p class="features__link">
        Learn more about
      </p>
    </a>
    <div class="features__block order">
      <p class="features__subtitle">
        Features
      </p>
      <h2 class="features__title">
        Professional surgeons
      </h2>
      <p class="features__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate
      </p>
    </div>
    <div class="features__block">
      <p class="features__subtitle">
        Features
      </p>
      <h2 class="features__title">
        Emergency care for children
      </h2>
      <p class="features__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
      </p>
    </div>
    <a
      href="#"
      class="features__block features__block--image-2"
    >
      <p class="features__link">
        Learn more about
      </p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'MedicalFeatures',
};
</script>

<style lang="scss" scoped>
.features {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: $first;

  &__block {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 507px;

    &--image-1 {
      background: url('@/assets/img/features/features-img-1.png') no-repeat 0 0;
      background-size: 100% 100%;

      &::before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0;
        background-color: rgba(107, 194, 241, .6);
        transition: opacity .3s ease;
        content: '';
      }
    }

    &--image-2 {
      background: url('@/assets/img/features/features-img-2.png') no-repeat 0 0;
      background-size: 100% 100%;

      &::before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0;
        background-color: rgba(107, 194, 241, .6);
        transition: opacity .3s ease;
        content: '';
      }
    }
  }

  &__link {
    z-index: 1;
    opacity: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
    font-weight: 400;
    font-style: normal;
    line-height: 150%;
    text-transform: uppercase;
    color: $white;
    transition: opacity .3s ease;
  }

  &__subtitle {
    margin-bottom: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 19px;
    font-weight: 400;
    font-style: normal;
    line-height: 120%;
    text-transform: uppercase;
    color: $white;
  }

  &__title {
    margin-bottom: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 36px;
    font-weight: 400;
    font-style: normal;
    line-height: 120%;
    color: $white;
  }

  &__text {
    width: 70%;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    line-height: 150%;
    text-align: center;
    color: $white;
  }
}

@media (any-hover:hover) {
  .features {
    &__block:hover {

      &::before,
      &::before {
        opacity: 0.6;
      }

      & .features__link {
        opacity: 1;
      }
    }
  }
}

@media (any-hover: none) {
  .features {
    &__block {

      &::before,
      &::before {
        opacity: 0.6;
      }

      & .features__link {
        opacity: 1;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .features__text {
    width: 90%;
  }
}

@media screen and (max-width: 991px) {
  .features {
    &__block {
      width: 100%;
    }
  }

  .order {
    order: -1;
  }
}

@media screen and (max-width: 599px) {
  .features {
    &__block {
      height: 370px;
      text-align: center;
    }

    &__subtitle {
      font-size: 18px;
    }

    &__title {
      font-size: 30px;
    }

    &__text {
      font-size: 16px;
    }
  }
}
</style>
