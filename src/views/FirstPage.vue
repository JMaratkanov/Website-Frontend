<template>
  <div>
  <h1 style="text-align: center;">Willkommen</h1>
  <div class="row"><!--Bootstrap row kann bis zu 12 Spalten haben-->
                    <div class="col-xl-8 offset-xl-1">
  <produktkachel artikel-id=1 produktName="Tomate"></produktkachel></div>
  <div class="col-xl-8 offset-xl-1">
  <produktkachel artikel-id=2 produktName="Birne"></produktkachel>
   </div>
                    </div>
    <button class="btn btn-secondary" @click="weiter">Weiter</button>
  </div>
</template>

<script>import { mapGetters, mapActions } from "vuex";
import Sidebar from '../components/Sidebar.vue';
import Produktkachel from '../components/Produktkachel.vue';

export default {

  name: "FirstPage",
  components: {
      Produktkachel
   },
   

  methods: {
    ...mapActions(["setCurrentPage"]),
 
    weiter(){
      this.setCurrentPage(2);
    }
  },
};
</script>

<style></style>
