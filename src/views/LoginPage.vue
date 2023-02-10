<template>
  <div>
    <h1 style="text-align: center">Login</h1>
    <div class="row" style="padding: 10px">
      <input
        v-model="email"
        type="text"
        id="login"
        class="inputfield"
        placeholder="Nutzer"
      />
    </div>
    <div class="row" style="padding: 10px">
      <input
        v-model="password"
        type="text"
        id="password"
        class="inputfield"
        placeholder="Passwort"
      />
    </div>
    <div class="row" style="padding: 10px">
      <button
        @click="sendLogin()"
        type="button"
        class="btn btn-primary inputbutton"
      >
        Login
      </button>

      <a class="underlineHover" href="#" style="text-align: center"
        >Forgot Password?</a
      >
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
      password: ""
    };
  },
  methods: {
    ...mapActions([
    "setLoginStatus", 
    "setCurrentPage",
    "setAdressen",
    "setAnrede",
    "setAuftraege",
    "setBankverbindungen",
    "setEmail",
    "setGeburtstag",
    "setNachname",
    "setPasswort",
    "setRolle",
    "setRufnummer",
    "setVorname",
    "setVorwahl",
    ]),

    sendLogin() {
      const baseUrl = import.meta.env.VITE_BASE_URL;

      const username = this.email;
      const password = this.password;
      
      this.axios
        .get(baseUrl + "/user", { "headers": { "Authorization": 'Basic ' + btoa(username + ':' + password) }})
        .then((response) => {
          console.log(response);

          //if (response.headers.token) {
    //localStorage.setItem('token', response.headers.token)
   //}

          if (response.data.id > 0) {
              this.setAdressen(response.data.adressen);
              this.setAnrede(response.data.anrede);
              this.setAuftraege(response.data.auftraege);
              this.setBankverbindungen(response.data.bankverbindungen);
              this.setEmail(response.data.email);
              this.setGeburtstag(response.data.geburtstag);
              this.setNachname(response.data.nachname);
              this.setPasswort(response.data.passwort);
              this.setRolle(response.data.rolle);
              this.setRufnummer(response.data.rufnummer);
              this.setVorname(response.data.vorname);
              this.setVorwahl(response.data.vorwahl);

            this.setLoginStatus(1);
            this.setCurrentPage(1);
          }
        })
        .catch((error) => {
          console.error("Invalid Login");
        });
    },
  },
};
</script>

<style>
.inputfield {
  width: 20% !important;
  margin-left: auto;
  height: 45px;
  margin-right: auto;
  border-radius: 5px;

  border-width: 1.5px;
}
.inputbutton {
  width: 10% !important;
  margin-left: auto;
  margin-right: auto;
}
</style>
