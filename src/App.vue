<template>
  <div>
      <div>
      <div class="mainlogo"></div>
      <caroussell></caroussell>
      <navbar></navbar>
      <div class="col-xl-12 offset-xl-0 col-l1-12-offset-l-0">
        <first-page v-if="currentPage === 1"></first-page>
        <second-page v-if="currentPage === 2"></second-page>
        <third-page v-if="currentPage === 3"></third-page>
        <kasse-page v-if="currentPage === 99"></kasse-page>
       <bezahlung-page  v-if="currentPage === 99"></bezahlung-page>
        <warenkorb-page v-if="currentPage === 7"></warenkorb-page>
        <login-page v-if="currentPage === 4"></login-page>
        <register-page v-if="currentPage === 5 && loginStatus === 0"></register-page>
        <settings-page v-if="currentPage === 6 && loginStatus === 1"></settings-page>
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
import RegisterPage from './views/RegisterPage.vue';
import SettingsPage from './views/SettingsPage.vue';
import WarenkorbPage from './views/WarenkorbPage.vue';
import BezahlungPage from './views/BezahlungPage.vue';
import KassePage from './views/KassePage.vue';

export default {
  name: "App",
  components: {
    FirstPage,
    SecondPage,
    ThirdPage,
    Navbar,
    Caroussell,
    LoginPage,
    RegisterPage,
    SettingsPage,
    WarenkorbPage,
    BezahlungPage,
    KassePage
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
  background: black;
}
</style>
