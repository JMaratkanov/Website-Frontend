<template>
  <div>
    <h1 style="text-align: center">Registrierung</h1>
    <h3 style="color:red;text-align: center" v-if="showError">Eingabefelder dürfen nicht leer sein</h3>
    <div class="row" style="padding: 10px">
      <div class="inputwrapper">
        Email:
        <input v-model="email" type="text" id="login" class="registerfield" />
      </div>
    </div>
    <div class="row" style="padding: 10px">
      <div class="inputwrapper">
        Passwort:
        <input
          v-model="passwort"
          type="text"
          id="passwort"
          class="registerfield"
        />
      </div>
    </div>
    <hr />

    <div class="row" style="padding: 10px">
      <div class="inputwrapper">
        Anrede:
        <input v-model="anrede" type="radio" id="anrede"  value="0"/>Frau
        <input v-model="anrede" type="radio" id="anrede"  value="1" />Herr
      </div>
    </div>
    <div class="row" style="padding: 10px">
      <div class="inputwrapper">
        Vorname:
        <input
          v-model="vorname"
          type="text"
          id="vorname"
          class="registerfield"
        />
      </div>
    </div>
    <div class="row" style="padding: 10px">
      <div class="inputwrapper">
        Nachname:
        <input
          v-model="nachname"
          type="text"
          id="nachname"
          class="registerfield"
        />
      </div>
    </div>
    <div class="row" style="padding: 10px">
      <div class="inputwrapper">
        Geburtstag:
        <input
          v-model="geburtstag"
          type="text"
          id="geburtstag"
          class="registerfield"
        />
      </div>
    </div>

    <hr />
    <div class="row" style="padding: 10px">
      <div class="inputwrapper">
        Strasse:
        <input
          v-model="strasse"
          type="text"
          id="strasse"
          class="registerfield"
        />
      </div>
    </div>
    <div class="row" style="padding: 10px">
      <div class="inputwrapper">
        Ort:
        <input v-model="ort" type="text" id="ort" class="registerfield" />
      </div>
    </div>
    <div class="row" style="padding: 10px">
      <div class="inputwrapper">
        Postleitzahl:
        <input
          v-model="postleitzahl"
          type="text"
          id="postleitzahl"
          class="registerfield"
        />
      </div>
    </div>
    <div class="row" style="padding: 10px">
      <div class="inputwrapper">
        Hausnummer:
        <input
          v-model="hausnummer"
          type="text"
          id="hausnummer"
          class="registerfield"
        />
      </div>
    </div>
    <div class="row" style="padding: 10px">
      <div class="inputwrapper">
        Hausnummerzusatz:
        <input
          v-model="hausnummerzusatz"
          type="text"
          id="hausnummerzusatz"
          class="registerfield"
        />
      </div>
    </div>

    <hr />
    <div class="row" style="padding: 10px">
      <div class="inputwrapper">
        Vorwahl:
        <input v-model="vorwahl" type="text" id="vorwahl" class="registerfield" />
      </div>
    </div>
    <div class="row" style="padding: 10px">
      <div class="inputwrapper">
        Rufnummer:
        <input
          v-model="rufnummer"
          type="text"
          id="rufnummer"
          class="registerfield"
        />
      </div>
    </div>
    <div class="row" style="padding: 10px">
      <div class="inputwrapper">
        Iban:
        <input v-model="iban" type="text" id="iban" class="registerfield" />
      </div>
    </div>

    <div class="row" style="padding: 10px">
      <button @click="postRegistration()" type="button" class="btn btn-primary inputbutton">
        Speichern
      </button>
    </div>

    <p>{{this.registerUserJson}}</p>
  </div>
 
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "RegisterPage",
  data: () => {
    return {
      showError: false,

      email: "",
      passwort: "",
      anrede: 0,
      vorname: "",
      nachname: "",
      geburtstag: "",
      strasse: "",
      ort: "",
      postleitzahl: "",
      hausnummer: "",
      hausnummerzusatz: "",
      vorwahl: "",
      rufnummer: "",
      iban: "",
    };
  },
  computed: {
    registerUserJson() {
      return {
        email: this.email,
        passwort: this.passwort,
        anrede: this.anrede,
        vorname: this.vorname,
        nachname: this.nachname,
        geburtstag: this.geburtstag,

        "adressen": [
            {
              
              strasse: this.strasse,
              ort: this.postleitzahl,
              plz: this.ort,
              hausnummer: this.hausnummer,
              hausnummerzusatz: this.hausnummerzusatz,
              typ: "rechnungsadresse"
            }
          ],

          "bankverbindungen": [
    {
      iban: this.iban,
      bic: "string"
    }
  ],
        vorwahl: this.vorwahl,
        rufnummer: this.rufnummer,
        
        rolle: "empty"
      };
    },
  },
  methods: {
     ...mapActions(["setCurrentPage"]),
    postRegistration() {
      const baseUrl = import.meta.env.VITE_BASE_URL;
      var headers = {
        "Content-Type": "application/json",
      };

      console.log(this.registerUserJson);

      if( this.email != "" && this.passwort != "" && this.vorname != ""  && this.nachname != ""  && this.geburtstag  != "" && this.strasse != ""  && this.ort != ""  && this.postleitzahl != ""  && this.hausnummer != ""
      && this.hausnummerzusatz != ""  && this.vorwahl != "" && this.rufnummer != ""  && this.iban != "" ){
      this.axios
        .post(baseUrl + "/registration", this.registerUserJson, { headers })
        .then((response) => {
          if(response.data == true){
              this.setCurrentPage(4);
          }
          console.log(response);
        });
      }else{
        this.showError = true;
        console.log("Eingabefelder dürfen nicht leer sein");
      }
    },
  },
};
</script>

<style>
.registerfield {
  width: 20% !important;

  height: 45px;

  border-radius: 5px;

  border-width: 1.5px;
}
.inputwrapper {
  text-align: center;
}
</style>
