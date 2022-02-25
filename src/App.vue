<template>
  <div id="app">
    <Header />
    <main>
      <Banner />
      <Clinic />
      <Features />
      <Gallery />
      <contact-form />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header';
import Banner from '@/components/Banner';
import Clinic from '@/components/Clinic';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Banner,
    Clinic,
    Features,
    Gallery,
    ContactForm,
    Footer,
  },
};
</script>

<style lang="scss">
</style>
