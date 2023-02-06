<template>
  <div>
  <h1 style="text-align: center;">Willkommen</h1>
   
  <produktkachel></produktkachel>
    
   
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
