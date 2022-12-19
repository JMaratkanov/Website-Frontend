<template>
  <div><h1 style="text-align: center;">Willkommen</h1>
    <sidebar></sidebar>
    
   
    <button class="btn btn-secondary" @click="weiter">Weiter</button>
  </div>
</template>

<script>import { mapGetters, mapActions } from "vuex";
import Sidebar from '../components/Sidebar.vue';

export default {

  name: "FirstPage",
   components: {
      Sidebar
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
