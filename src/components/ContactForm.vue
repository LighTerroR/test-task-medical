<template>
  <div
    id="contact"
    class="contact-us container"
  >
    <form class="contact-us__form">
      <h2 class="contact-us__title">
        Contact us
      </h2>
      <input
        v-model.trim="$v.name.$model"
        class="contact-us__input"
        :class="{'contact-us__error': $v.name.$error}"
        type="text"
        placeholder="Name"
      >
      <input
        v-model.trim="$v.email.$model"
        class="contact-us__input"
        :class="{'contact-us__error': $v.email.$error}"
        type="text"
        placeholder="Email"
      >
      <input
        v-model.trim="subject"
        class="contact-us__input"
        type="text"
        placeholder="Subject"
      >
      <textarea
        v-model.trim="message"
        class="contact-us__message"
        placeholder="Your Message"
      />
      <button
        class="button contact-us__button"
        :disabled="$v.$invalid"
        @click.prevent="submitForm"
      >
        Submit
      </button>
      <p
        v-show="$v.$invalid"
        class="contact-us__error"
      >
        *invalid fields
      </p>
    </form>
  </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators';

export default {
  name: 'ContactForm',
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  },
  methods: {
    submitForm() {
      console.log(`Form data is: name - ${this.name}, email - ${this.email},
        subject - ${this.subject} and message - ${this.message}`);
    },
  },
  validations: {
    name: {
      required,
      minLength: minLength(2),
    },
    email: {
      required,
      email,
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-us {
  display: flex;
  justify-content: center;
  padding: 90px 0;

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
  }

  &__title {
    margin-bottom: 60px;
    font-family: 'Roboto', sans-serif;
    font-size: 36px;
    font-weight: 400;
    font-style: normal;
    line-height: 120%;
    color: $form-color;
  }

  &__input,
  &__message {
    width: 100%;
    margin-bottom: 20px;
    padding: 16px 20px;
    border: 1px solid $light-form-color;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    line-height: 120%;
    color: $form-color;

    &::placeholder {
      font-size: 14px;
      color: $light-form-color;
    }
  }

  &__message {
    height: 200px;
    overflow: auto;
    resize: none;
  }

  &__button {
    width: 120px;
    height: 40px;
    margin-bottom: 10px;
    border: 1px solid $first;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    line-height: 120%;
    text-transform: uppercase;
    color: $first;
    cursor: pointer;

    &:disabled {
      border-color: $light-form-color;
      color: $light-form-color;
      pointer-events: none;
    }
  }

  &__error {
    border-color: $danger;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    font-style: normal;
    line-height: 120%;
    color: $danger;

    &::placeholder {
      color: $danger;
    }
  }
}

@media (any-hover: hover) {
  .contact-us__button:hover {
    background-color: $first;
    color: $white;
  }
}

@media screen and (max-width: 991px) {
  .contact-us__form {
    width: 75%;
  }
}

@media screen and (max-width: 599px) {
  .contact-us__form {
    width: 90%;
  }
}
</style>
