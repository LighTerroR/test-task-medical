<template>
  <footer class="footer">
    <div class="footer__wrapper container">
      <div class="footer__column-info">
        <p class="footer__title">
          Medical
        </p>
        <p class="footer__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        </p>
        <p class="footer__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate
        </p>
      </div>
      <div class="footer__column-address">
        <p class="footer__title">
          New York
        </p>
        <p class="footer__address">
          709 Honey Creek Dr. <br>New York<br>NY 10028
        </p>
        <a
          href="tel:18882992000"
          class="footer__link"
        >1-888-299-2000</a>
        <a
          href="mailto:yourmail@company.com"
          class="footer__link"
        >yourmail@ompany.com</a>
      </div>
      <div class="footer__column-address">
        <p class="footer__title">
          London
        </p>
        <p class="footer__address">
          4851 Willow Greene Drive<br>Montgomery<br>AL 36109
        </p>
        <a
          href="tel:18882992000"
          class="footer__link"
        >1-888-299-2000</a>
        <a
          href="mailto:yourmail@company.com"
          class="footer__link"
        >yourmail@ompany.com</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MedicalFooter',
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: $second;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    padding: 110px 0;
  }

  &__column-info {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 40%;
  }

  &__column-address {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 20%;
  }

  &__title {
    margin-bottom: 40px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
    font-style: normal;
    line-height: 150%;
    color: #fff;
  }

  &__text,
  &__address,
  &__link {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    line-height: 150%;
    color: rgba(255, 255, 255, 0.7);
  }

  &__text,
  &__address {
    margin-bottom: 40px;
  }

  &__text:last-child {
    margin-bottom: 0;
  }
}

@media screen and (max-width: 767px) {
  .footer {
    &__wrapper {
      flex-wrap: wrap;
      padding: 50px 10px;
    }

    &__column-info {
      width: 100%;
      margin-bottom: 20px;
    }

    &__column-address {
      width: 48%;
    }

    &__title,
    &__address,
    &__text {
      margin-bottom: 20px;
    }
  }
}

@media screen and (max-width: 400px) {
  .footer__column-address {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
