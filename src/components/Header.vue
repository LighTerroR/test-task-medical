<template>
  <header
    ref="header"
    class="header"
  >
    <div class="header__wrapper container">
      <div class="header__group">
        <div class="header__logo">
          <span>M</span>EDICAL
        </div>
        <nav class="header__menu">
          <a
            href="#"
            class="header__nav-link"
          >Home</a>
          <a
            href="#"
            class="header__nav-link"
          >About us</a>
          <a
            href="#"
            class="header__nav-link"
          >Services</a>
          <a
            href="#"
            class="header__nav-link"
          >Portfolio</a>
          <a
            href="#"
            class="header__nav-link"
          >Blog</a>
          <a
            href="#"
            class="header__nav-link"
          >Contact</a>
        </nav>
      </div>
      <toggle-theme class="header__toggle" />
      <a
        href="#contact"
        class="button header__button"
      >Get Started</a>
      <span
        v-show="!menu"
        class="header__mobile-menu"
        @click="openMenu"
      />
    </div>
    <transition name="slide">
      <MobileMenu
        v-show="menu"
        @close-menu="closeMenu"
      />
    </transition>
    <div class="progress">
      <div
        ref="myBar"
        class="progress__bar"
      />
    </div>
  </header>
</template>

<script>
import ToggleTheme from '@/components/ToggleTheme';
import MobileMenu from '@/components/MobileMenu';

export default {
  name: 'MedicalHeader',

  components: {
    ToggleTheme,
    MobileMenu,
  },

  data() {
    return {
      menu: false,
    };
  },

  mounted() {
    window.onscroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const heightHeader = 80;
      this.$refs.myBar.style.width = `${scrolled}%`;
      if (winScroll < heightHeader) {
        this.$refs.header.style.top = `-${winScroll}px`;
      } else {
        this.$refs.header.style.top = `-${heightHeader}px`;
      }
    };
  },

  unmounted() {
    window.onscroll = undefined;
  },

  methods: {
    openMenu() {
      this.menu = true;
    },

    closeMenu() {
      this.menu = false;
    },
  },
};
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: rgba(255, 255, 255, .7);

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__group {
    display: flex;
    justify-content: space-between;
    width: 60%;
  }

  &__logo {
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    color: $header-text;

    span {
      color: $first;
    }
  }

  &__menu {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  &__nav-link {
    position: relative;
    margin-right: 20px;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    color: $header-text;

    &::before {
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0%;
      height: 1px;
      background-color: $header-text;
      content: '';
      transition: width .3s ease;
    }
  }

  &__button {
    width: 140px;
    height: 46px;
    border: 1px solid $first;
    background-color: $first;
    color: $white;
    transition: background-color .3s ease;
  }

  &__mobile-menu {
    position: relative;
    display: none;
    width: 35px;
    height: 2px;
    background-color: $second;

    &::before,
    &::after {
      position: absolute;
      left: 0;
      width: 35px;
      height: 2px;
      background-color: inherit;
      content: ' ';
    }

    &::before {
      top: -10px;
    }

    &::after {
      top: 10px;
    }
  }
}

.progress {
  position: absolute;
  bottom: -8px;
  width: 100%;
  height: 8px;
  background: transparent;

  &__bar {
    width: 0%;
    height: 8px;
    background: $first;
  }
}

@media (any-hover: hover) {
  .header__nav-link:hover::before {
    width: 100%;
  }

  .header__button:hover {
    background-color: transparent;
    color: $first;
  }
}

@media screen and (max-width: 991px) {
  .header {
    &__group {
      width: unset;
    }

    &__menu {
      display: none;
    }

    &__toggle.toggle-theme{
      display: none;
    }

    &__mobile-menu {
      display: block;
    }
  }
}

@media screen and (max-width: 599px) {
  .header__button {
    width: 100px;
    height: 30px;
  }
}
</style>
