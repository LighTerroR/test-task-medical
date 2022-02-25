<template>
  <label class="toggle-theme">
    <input
      v-model="theme"
      type="checkbox"
      class="toggle-theme__input"
    >
    <span class="toggle-theme__back">
      <span class="toggle-theme__toggle" />
      <span class="toggle-theme__label light">Light</span>
      <span class="toggle-theme__label dark">Dark</span>
    </span>
  </label>
</template>

<script>
export default {
  name: 'ToggleTheme',
  data() {
    return {
      theme: false,
    };
  },

  watch: {
    theme(newValue) {
      if (newValue) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.toggle-theme {
  position: relative;
  display: block;
  width: 200px;
  height: 30px;
  border: 1px solid $second;
  cursor: pointer;

  &__input {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;

    & + .toggle-theme__back {
      position: absolute;
      width: 100%;
      height: 100%;
      background: $second;
      transition: background 150ms linear;
    }

    & + .toggle-theme__back .toggle-theme__toggle {
      display: block;
      position: absolute;
      width: 50%;
      height: 100%;
      // content: ' ';
      background: $white;
      transition: margin 150ms linear;
      border: 1px solid $second;
    }

    &:checked + .toggle-theme__back .toggle-theme__toggle {
      margin-left: 100px;
      border-color: $white;
    }

    &:checked + .toggle-theme__back .toggle-theme__label.light {
      color: $white;
    }

    &:checked + .toggle-theme__back .toggle-theme__label.dark {
      color: $second;
    }
  }

  &__label {
    display: block;
    position: absolute;
    width: 50%;
    line-height: 28px;
    text-align: center;
    font-size: 14px;
    text-transform: uppercase;
    pointer-events: none;

    &.light {
      left: 0px;
      color: $second;
    }

    &.dark {
      right: 0px;
      color: $white;
    }
  }
}
</style>
