<template>
  <div>
    <login-page v-if="loginStatus === 0"></login-page>

    <div v-else>
      <img src="./assets/images/Biglogo.jpg" class="mainlogo" alt="" />
      <caroussell></caroussell>
      <navbar></navbar>
      <div class="col-xl-12 offset-xl-0 col-l1-12-offset-l-0">
        <first-page v-if="currentPage === 1"></first-page>
        <second-page v-if="currentPage === 2"></second-page>
        <third-page v-if="currentPage === 3"></third-page>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import LoginPage from "./views/LoginPage.vue";
import FirstPage from "./views/FirstPage.vue";
import SecondPage from "./views/SecondPage.vue";
import ThirdPage from "./views/ThirdPage.vue";
import Navbar from "./components/Navbar.vue";
import Caroussell from "./components/Caroussell.vue";

export default {
  name: "App",
  components: {
    FirstPage,
    SecondPage,
    ThirdPage,
    Navbar,
    Caroussell,
    LoginPage,
  },
  data: () => {
    return {};
  },
  Navbardata: () => {
    return {};
  },
  computed: {
    ...mapGetters(["currentPage", "loginStatus"]),
  },
  methods: {
    ...mapActions(["setCurrentPage"]),
  },
};
</script>

<style>
.mainlogo {
  width: 100%;
  height: 4rem;
}
</style>
