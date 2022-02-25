<template>
  <div class="clinic container">
    <div class="clinic__content">
      <p class="clinic__subtitle">
        WELCOME TO clinic
      </p>
      <h2 class="clinic__title">
        Why you should choose us ?
      </h2>
      <p class="clinic__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in
      </p>
      <a
        href="#contact"
        class="button clinic__button"
      >get started now</a>
    </div>
    <img
      src="@/assets/img/clinic/doctor.png"
      alt="doctor"
      class="clinic__image"
    >
  </div>
</template>

<script>
export default {
  name: 'MedicalClinic',
};
</script>

<style lang="scss" scoped>
.clinic {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 120px 0;

  &__content {
    width: 50%;
  }

  &__subtitle {
    margin-bottom: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 19px;
    font-weight: 400;
    font-style: normal;
    line-height: 120%;
    text-transform: uppercase;
    color: $first;
  }

  &__title {
    margin-bottom: 10px;
    font-family: 'Roboto', sans-serif;
    font-size: 36px;
    font-weight: 400;
    font-style: normal;
    line-height: 120%;
    color: $text-color;
  }

  &__text {
    margin-bottom: 60px;
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    line-height: 150%;
    color: $text-color;
  }

  &__button {
    width: 200px;
    height: 46px;
    border: 1px solid $first;
    background-color: $first;
    color: $white;
    transition: background-color .3s ease;
  }

  &__image {
    width: 40%;
  }
}

@media (any-hover: hover) {
  .clinic__button:hover {
    background-color: transparent;
    color: $first;
  }
}

@media screen and (max-width: 767px) {
  .clinic {
    padding: 60px 0;

    &__content {
      width: 100%;
      text-align: center;
    }

    &__button {
      margin: 0 auto;
    }

    &__image {
      display: none;
    }
  }
}

@media screen and (max-width: 599px) {
  .clinic {
    padding: 30px 0;

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
