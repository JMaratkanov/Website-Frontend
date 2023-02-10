<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <!--<img src="../assets/images/navbarlogo.png" width="30" height="30" alt="" style="margin-left: 90px;">
  <a class="navbar-brand">Menü</a>-->

      <div class="navbar-collapse" id="navbarNav"> <!-- class collapse entfernt für mobile -->
        <ul class="navbar-nav" style="margin-left: auto; margin-right: auto">
          <li class="nav-item active">
            <a class="nav-link" href="#" @click="changeToPage(1)">Startseite</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="changeToPage(2)">Über Uns</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="changeToPage(3)">Weiteres</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="changeToPage(7)">Warenkorb</a>
          </li>
          <li class="nav-item"  v-if="loginStatus==0">
            <a class="nav-link" href="#" @click="changeToPage(4)">Login</a>
          </li>
          <li class="nav-item" v-if="loginStatus==0">
            <a class="nav-link" href="#" @click="changeToPage(5)">Registrierung</a>
          </li>
          <li class="nav-item" v-if="loginStatus==1">
            <a class="nav-link" href="#" @click="changeToPage(6)">Einstellungen</a>
          </li>
          <li class="nav-item" v-if="loginStatus==1">
            <a class="nav-link" href="#" @click="logout()">Abmelden</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters(["loginStatus"]),
  },

  methods: {
    ...mapActions(["setCurrentPage","setLoginStatus"]),
    changeToPage(number) {
      this.setCurrentPage(number);
    },
    logout(){
      this.changeToPage(1);
      this.setLoginStatus(0);
    }
  },
};
</script>

<style>
.nav-item{
  padding-left: 30px;
  padding-right: 30px;
}
</style>
