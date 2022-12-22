<template>
  <div>
    <h1 style="text-align: center">Login</h1>
    <div class="row" style="padding:10px">
      <input v-model="email" type="text" id="login" class="inputfield" placeholder="Nutzer"/>
    </div>
    <div class="row"  style="padding:10px">
      <input v-model="password" type="text" id="password" class="inputfield" placeholder="Passwort"/>
    </div>
    <div class="row"  style="padding:10px">
      <button @click="sendLogin()" type="button" class="btn btn-primary inputbutton">
      Login
      </button>

      <a class="underlineHover" href="#" style="text-align: center;">Forgot Password?</a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "LoginPage",
  data: () => {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    loginJson() {
      return { email: this.email, password: this.password };
    },
  },
  methods: {
    ...mapActions(["setLoginStatus","setCurrentPage"]),
    sendLogin() {
      const baseUrl= import.meta.env.VITE_BASE_URL;

      var headers = {
        "Content-Type": "application/json",
      };
      this.axios
        .post(baseUrl + "/signin", this.loginJson, { headers })
        .then((response) => {
          if (response.data == true) {
            this.setLoginStatus(1);
            this.setCurrentPage(1);
          }
        })
        .catch((error) => {
          console.error("Der Request ist gescheitert", error);
        });
    },
  },
};
</script>

<style>
.inputfield{
  width: 20% !important;
  margin-left: auto;
  height: 45px;
margin-right: auto;
border-radius: 5px;

border-width: 1.5px;
}
.inputbutton{
  width: 10% !important;
  margin-left: auto;
margin-right: auto;
}
</style>
