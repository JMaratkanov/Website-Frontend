<template>
<div>
  
  <nav class="navbar navbar-expand-lg navbar-light bg-light"> <img src="../assets/images/navbarlogo.png" width="30" height="30" alt="" style="margin-left: 90px;">
  <a class="navbar-brand">Menü</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#"  @click="changeToPage(1)">Startseite</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"  @click="changeToPage(2)">Über Uns</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" @click="changeToPage(3)">Weiteres</a>
      </li>
    </ul>
  </div>
</nav></div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: "Navbar",
    
    methods: {
    ...mapActions(["setCurrentPage"]),
    changeToPage(number){
      this.setCurrentPage(number);
    }
  },
};



</script>

<style>


</style>