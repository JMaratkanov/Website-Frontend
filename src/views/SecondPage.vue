<template>
  <div>
    <h1 style="text-align: center;">Über uns</h1>
   <button @click="zurueck" class="btn btn-light">Zurück</button>
    <button @click="weiter" class="btn btn-secondary">Weiter</button>
  </div>
</template>

<script>import { mapGetters, mapActions } from "vuex";

export default {

  name: "SecondPage",

  methods: {
    ...mapActions(["setCurrentPage"]),
    zurueck(){
      this.setCurrentPage(1);
    },
    weiter(){
      this.setCurrentPage(3);
    }
  },
};
</script>

<style></style>
