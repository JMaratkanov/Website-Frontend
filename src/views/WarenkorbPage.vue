<template>
  <div>
  <h1 style="text-align: center;">Warenkorb</h1>
   

    {{this.orderJson}}
   
    <button class="btn btn-secondary" @click="order">Zur Kasse</button>
  </div>
</template>

<script>import { mapGetters, mapActions } from "vuex";



export default {

  name: "WarenkorbPage",

  computed: {
    ...mapGetters(["kundeId","adressen", "bankverbindungen"]),
   
  
    orderJson() {
        let rAdress = { strasse:"", ort:"", plz:"", hausnummer:"",hausnummerzusatz:""};
        let lAdress = { strasse:"", ort:"", plz:"", hausnummer:"",hausnummerzusatz:""};
        let bank ="";

        if(this.adressen != ""){
         if(this.adressen[0].typ == "rechnungsadresse"){
          rAdress = this.adressen[0];
          lAdress = this.adressen[0];
         }

         if(Object.keys(this.adressen).length == 2){
         
          lAdress = this.adressen[1];
         }
        }
        if(this.bankverbindungen != ""){
          bank= this.bankverbindungen[0].iban;
        }

      return {
        
  "artikel": [
    {
      "id": 1
    },
    {
      "id": 2
    }
  ],
  "rechnungStrasse": rAdress.strasse,
  "rechnungOrt": rAdress.ort,
  "rechnungPlz": rAdress.plz,
  "rechnungHausnummer": rAdress.hausnummer,
  "rechnungHausnummerzusatz": rAdress.hausnummerzusatz,
  "lieferungStrasse": lAdress.strasse,
  "lieferungOrt": lAdress.ort,
  "lieferungPlz": lAdress.plz,
  "lieferungHausnummer": lAdress.hausnummer,
  "lieferungHausnummerzusatz": lAdress.hausnummerzusatz,
  "iban": bank,
  "bic": "string",
  "kunde": this.kundeId
};
    },
  },

   

  methods: {
    ...mapActions(["setCurrentPage"]),
 
    order() {
      const baseUrl = import.meta.env.VITE_BASE_URL;
      var headers = {
        "Content-Type": "application/json",
      };

      console.log(this.orderJson);
    
      this.axios
        .post(baseUrl + "/kunde/order", this.orderJson, { withCredentials: true, headers })
        .then((response) => {
          if(response.data == "Auftrag speichern erfolgreich"){
              this.setCurrentPage(4);
          }
          console.log(response);
        });
      
    },
  },
};
</script>

<style></style>
