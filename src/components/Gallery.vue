<template>
  <div
    id="gallery"
    class="gallery"
  >
    <div class="container">
      <swiper
        class="gallery__wrapper"
        :options="swiperOption"
      >
        <swiper-slide
          class="gallery__image-wrapper"
          data-aos-anchor="#gallery"
          data-aos="fade-right"
        >
          <img
            src="@/assets/img/gallery/gallery-img-1.png"
            alt=""
            class="gallery__image sepia"
          >
        </swiper-slide>
        <swiper-slide
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
        </swiper-slide>
        <swiper-slide
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
        </swiper-slide>
        <swiper-slide
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
        </swiper-slide>
        <swiper-slide
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
        </swiper-slide>
        <swiper-slide
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
        </swiper-slide>
        <div
          slot="pagination"
          class="swiper-pagination"
        />
      </swiper>
    </div>
  </div>
</template>

<script>
import AOS from 'aos';
import { Fancybox } from '@fancyapps/ui';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

import 'aos/dist/aos.css';
import '@fancyapps/ui/dist/fancybox.css';
import 'swiper/css/swiper.css';

export default {
  name: 'MedicalGallery',

  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        slidesPerColumn: 1,
        watchOverflow: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
            slidesPerColumn: 2,
            spaceBetween: 30,
            watchOverflow: true,
            noSwiping: true,
            noSwipingClass: 'gallery__wrapper',
          },
        },
      },
    };
  },

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
    height: 630px;
    margin-left: auto;
    margin-right: auto;
  }

  &__image-wrapper {
    width: 370px;
    height: auto;
    overflow: hidden;
    cursor: pointer;
  }

  &__image {
    width: 100%;
    height: 100%;
  }

  /* &__wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 660px;
  }

  &__image-wrapper {
    width: 31.63%;
    height: 300px !important;
    margin: 15px 0;
    overflow: hidden;
    cursor: pointer;
  }

  &__image {
    width: 100%;
  } */
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

@media screen and (max-width: 1200px) {
  .gallery__wrapper {
    height: 530px;
  }
}

@media screen and (max-width: 991px) {
  .gallery__wrapper {
    height: 400px;
  }
}

@media screen and (max-width: 767px) {
  .gallery__wrapper {
    height: auto;
  }
  .gallery__image-wrapper {
    height: auto;
  }
}
</style>
