<template>
  <div>
    <h1 style="text-align: center;">Weiteres</h1>
     <sidebar></sidebar>
   <button @click="zurueck" class="btn btn-light">Zurück</button>
    
  </div>
</template>

<script>import { mapGetters, mapActions } from "vuex";
import Sidebar from '../components/Sidebar.vue';


export default {

  name: "ThirdPage",
  components: {
      Sidebar
   },

  methods: {
    ...mapActions(["setCurrentPage"]),
    zurueck(){
      this.setCurrentPage(2);
    },

  },
};
</script>

<style></style>
