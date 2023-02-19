<template>
    <div>

        <Carousel :settings="settings" :breakpoints="breakpoints">
    <Slide v-for="product in products" :key="slide">
      <div class="carousel__item">
        <produktkachel :artikel-id="product.id" :produktName="product.name"></produktkachel>

      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
     
    </div>
  </template>
  
  <script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import Produktkachel from '../components/Produktkachel.vue';



export default defineComponent({
  name: "ProduktCaroussell",
  components: {
    Carousel,
    Slide,
    Navigation,
    Produktkachel,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 4,
        snapAlign: 'start',
      },
    },

    products:
[{"id":1, "name":"Tomate"}, {"id":2, "name":"Birne"}, {"id":2, "name":"Birne"}, {"id":2, "name":"Birne"}, {"id":2, "name":"Birne"}, {"id":2, "name":"Birne"}, {"id":2, "name":"Birne"}, {"id":2, "name":"Birne"}, {"id":2, "name":"Birne"}]

  }),
})






  </script>
  
  <style src='vue3-carousel/dist/carousel.css'>
  /* global styles */
</style>
  