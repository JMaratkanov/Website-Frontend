<template>
  <div>
    <h1 style="text-align: center;">Weiteres</h1>
   <button @click="zurueck" class="btn btn-light">Zurück</button>
    
  </div>
</template>

<script>import { mapGetters, mapActions } from "vuex";

export default {

  name: "ThirdPage",

  methods: {
    ...mapActions(["setCurrentPage"]),
    zurueck(){
      this.setCurrentPage(2);
    },

  },
};
</script>

<style></style>
