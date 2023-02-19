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
          <li v-if="loginStatus==0" class="nav-item">
            <img @click="changeToPage(7)" src="../assets/images/icons8-warenkorb.png" width="25" height="25" alt=""/>
        </li>
        <li v-if="loginStatus==1" class="nav-item">
            <img @click="changeToPage(8)" src="../assets/images/icons8-warenkorb.png" width="25" height="25" alt=""/>
        </li>
          <li class="nav-item" v-if="loginStatus==0">
            <img @click="changeToPage(5)" src="../assets/images/icons8-user.png" width="25" height="25" alt=""/>
        </li>
          <li class="nav-item" v-if="loginStatus==1">
            <img @click="changeToPage(6)" src="../assets/images/icons8-user.png" width="25" height="25" alt=""/>
         </li>
          <li class="nav-item" v-if="loginStatus==1">
            <img @click="logout()" src="../assets/images/icons8-abmelden.png" width="25" height="25" alt=""/>
          </li>
          <li class="nav-item"  v-if="loginStatus==0">
            <img @click="changeToPage(4)" src="../assets/images/icons8-anmelden.png" width="25" height="25" alt=""/>
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
