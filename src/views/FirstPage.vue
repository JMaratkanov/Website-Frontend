<template>
  <div>
  <h1 style="text-align: center;">Willkommen</h1>
  <div class="row"><!--Bootstrap row kann bis zu 12 Spalten haben-->
                   
                      
  <produkt-caroussel></produkt-caroussel>
 </div>
                    
    <button class="btn btn-secondary" @click="weiter">Weiter</button>
  </div>
  
</template>

<script>import { mapGetters, mapActions } from "vuex";

import ProduktCaroussel from '../components/ProduktCaroussel.vue';

export default {

  name: "FirstPage",
  components: {
      
      ProduktCaroussel
   },
   computed: {
    ...mapGetters(["loginStatus"]),
   
  
  },


  methods: {
    ...mapActions(["setCurrentPage"]),
 
    weiter(){
      if(this.loginStatus == 0){
        this.setCurrentPage(7);
      }else{
        this.setCurrentPage(8);
      }
      
    }
  },
};
</script>

<style></style>
