<template>
  <div class="mobile-menu">
    <div class="mobile-menu__item">
      <span
        class="mobile-menu__cross"
        @click="$emit('close-menu')"
      />
    </div>
    <div class="mobile-menu__item">
      <a
        href="#"
        class="mobile-menu__link"
      >Home</a>
    </div>
    <div class="mobile-menu__item">
      <a
        href="#"
        class="mobile-menu__link"
      >About us</a>
    </div>
    <div class="mobile-menu__item">
      <a
        href="#"
        class="mobile-menu__link"
      >Services</a>
    </div>
    <div class="mobile-menu__item">
      <a
        href="#"
        class="mobile-menu__link"
      >Portfolio</a>
    </div>
    <div class="mobile-menu__item">
      <a
        href="#"
        class="mobile-menu__link"
      >Blog</a>
    </div>
    <div class="mobile-menu__item">
      <a
        href="#"
        class="mobile-menu__link"
      >Contact</a>
    </div>
    <toggle-theme class="mobile-menu__toggle" />
  </div>
</template>

<script>
import ToggleTheme from '@/components/ToggleTheme';

export default {
  name: 'MobileMenu',
  components: {
    ToggleTheme,
  },
  emits: ['close-menu'],
};
</script>

<style lang="scss" scoped>
.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  height: 100vh;
  background-color: rgba(255, 255, 255, .7);

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    padding: 10px;
    border-bottom: 1px solid $first;
  }

  &__cross {
    position: relative;
    align-self: flex-start;
    width: 35px;
    height: 35px;

    &::before,
    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 35px;
      height: 2px;
      background-color: $second;
      content: '';
    }

    &::before {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }

  &__link {
    margin-right: 20px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    color: $header-text;
  }

  &__toggle {
    margin-top: 10px;
  }
}
</style>
