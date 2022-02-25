<template>
  <div
    id="gallery"
    class="gallery"
  >
    <div class="gallery__wrapper container">
      <div
        class="gallery__image-wrapper"
        data-aos-anchor="#gallery"
        data-aos="fade-right"
      >
        <img
          src="@/assets/img/gallery/gallery-img-1.png"
          alt=""
          class="gallery__image sepia"
        >
      </div>
      <div
        class="gallery__image-wrapper"
        data-aos-anchor="#gallery"
        data-aos="fade-down"
        data-aos-delay="500"
      >
        <img
          src="@/assets/img/gallery/gallery-img-2.png"
          alt=""
          class="gallery__image grayscale"
        >
      </div>
      <div
        class="gallery__image-wrapper"
        data-aos-anchor="#gallery"
        data-aos="fade-left"
        data-aos-delay="1000"
      >
        <img
          src="@/assets/img/gallery/gallery-img-3.png"
          alt=""
          class="gallery__image zoom-in"
        >
      </div>
      <div
        class="gallery__image-wrapper"
        data-aos-anchor="#gallery"
        data-aos="fade-up-right"
        data-aos-delay="1500"
      >
        <img
          src="@/assets/img/gallery/gallery-img-4.png"
          alt=""
          class="gallery__image zoom-out"
        >
      </div>
      <div
        class="gallery__image-wrapper"
        data-aos-anchor="#gallery"
        data-aos="fade-up"
        data-aos-delay="2000"
      >
        <img
          src="@/assets/img/gallery/gallery-img-5.png"
          alt=""
          class="gallery__image blur"
        >
      </div>
      <div
        class="gallery__image-wrapper"
        data-aos-anchor="#gallery"
        data-aos="fade-up-left"
        data-aos-delay="2500"
      >
        <img
          src="@/assets/img/gallery/gallery-img-6.png"
          alt=""
          class="gallery__image opacity"
        >
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import { Fancybox } from '@fancyapps/ui';
// import { Navigation, Pagination, Scrollbar } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/vue';

import 'aos/dist/aos.css';
import '@fancyapps/ui/dist/fancybox.css';
// import 'swiper/scss';

export default {
  name: 'MedicalGallery',

  mounted() {
    AOS.init({
      disable() {
        const maxWidth = 768;
        return window.innerWidth < maxWidth;
      },
      duration: 500,
      easing: 'ease-in-out',
      once: true,
      anchorPlacement: 'center-center',
    });
    Fancybox.bind('#gallery img', {
      groupAll: true,
    });
  },
};
</script>

<style lang="scss" scoped>
.gallery {
  padding: 45px 0;
  background-color: $gray;

  &__wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__image-wrapper {
    width: 31.63%;
    margin: 15px 0;
    overflow: hidden;
    cursor: pointer;
  }

  &__image {
    width: 100%;
  }
}

@media (any-hover: hover) {
  .sepia {
    filter: sepia(100%);
    transition: .3s ease-in;

    &:hover {
      filter: sepia(0%);
    }
  }

  .grayscale {
    filter: grayscale(100%);
    transition: .3s ease-in;

    &:hover {
      filter: grayscale(0%);
    }
  }

  .zoom-in {
    transform: scale(1.0);
    transition: .3s ease-in;

    &:hover {
      transform: scale(1.3);
    }
  }

  .zoom-out {
    transform: scale(1.3);
    transition: .3s ease-in;

    &:hover {
      transform: scale(1.0);
    }
  }

  .blur {
    filter: blur(10px);
    transition: .3s ease-in;

    &:hover {
      filter: blur(0px);
    }
  }

  .opacity {
    opacity: 30%;
    transition: .3s ease-in;

    &:hover {
      opacity: 100%;
    }
  }
}

@media screen and (max-width: 767px) {
  .gallery__image-wrapper {
    width: 45%;
  }
}

@media screen and (max-width: 599px) {
  .gallery__image-wrapper {
    width: 100%;
  }
}
</style>
