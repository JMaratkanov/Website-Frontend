<template>
  <div>
  <h1 style="text-align: center;">Warenkorb</h1>

  

  <div class="row"><!--Bootstrap row kann bis zu 12 Spalten haben-->
                    <div class="col-xl-8 offset-xl-2">
                      <div class="progress" style="margin-top: 10px;
margin-bottom: 50px;">
  <div class="progress-bar" role="progressbar" style="width: 99%;" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100">99%</div>
</div>
  <div class="card" >
  <div class="card-body">
    <h5 class="card-title">Gesammtsumme</h5> mit MwSt.
    
    
    
  </div>
</div>
</div>
</div>
<h3 style="text-align:center;margin-top: 40px;margin-bottom: 40px;" >Zusammenfassung</h3>

<div class="row"><!--Bootstrap row kann bis zu 12 Spalten haben-->
                    <div class="col-xl-4 offset-xl-2">
  <div class="card" >
  <div class="card-body">
    <h5 class="card-title">Rechnungsadresse</h5>
    {{ orderJson.rechnungStrasse + " " + orderJson.rechnungHausnummer +" "+ orderJson.rechnungHausnummerzusatz }} <br>
    {{ orderJson.rechnungOrt +","+ orderJson.rechnungPlz }} <br>
    Iban: {{ orderJson.iban }}
    <a href="#" class="card-link">Bearbeiten</a>
    
  </div>
</div>
</div>
<div class="col-xl-4 offset-xl-0">
<div class="card" >
  <div class="card-body">
    <h5 class="card-title">Lieferadresse</h5>
    {{ orderJson.lieferungStrasse + " " + orderJson.lieferungHausnummer +" "+ orderJson.lieferungHausnummerzusatz }} <br>
    {{ orderJson.lieferungOrt +","+ orderJson.lieferungPlz }}
  
    <a href="#" class="card-link">Bearbeiten</a>
    
  </div></div>
</div>

</div>


<div class="row"><!--Bootstrap row kann bis zu 12 Spalten haben-->
                    <div class="col-xl-4 offset-xl-2">
<div class="card" style="margin-top: 25px;">
  <div class="card-body">
    <h5 class="card-title">Bezahlung</h5>
   
  
    <a href="#" class="card-link">Bearbeiten</a>
    
  </div> </div>
</div>
</div>
   
<div class="row"><!--Bootstrap row kann bis zu 12 Spalten haben-->
                    <div class="col-xl-8 offset-xl-2">
<div class="card" style="margin-top: 25px;">
  <div class="card-body">
    <h5 class="card-title">Artikel</h5>
    <p v-for="artikel in this.warenkorb"> {{artikel.name}}</p>
  
    <a href="#" class="card-link">Bearbeiten</a>
    
  </div> </div>
</div>
</div>
    

    <button style="width: 30%;
margin-top: 50px;
height: 40px;
margin-bottom: 50px;
left: 50%;
position: absolute;
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);" class="btn btn-secondary" @click="order">Jetzt Kaufen</button>
  </div>
</template>

<script>import { mapGetters, mapActions } from "vuex";



export default {

  name: "WarenkorbPage",

  computed: {
    ...mapGetters(["kundeId","adressen", "bankverbindungen", "warenkorb"]),
   
  
    orderJson() {
        let rAdress = { strasse:"", ort:"", plz:"", hausnummer:"",hausnummerzusatz:""};
        let lAdress = { strasse:"", ort:"", plz:"", hausnummer:"",hausnummerzusatz:""};
        let bank ="";

        if(this.adressen != ""){

          for (var i = 0; i < this.adressen.length; i++) {
            if(this.adressen[i].typ == "rechnungsadresse"){
 rAdress = this.adressen[i];
            }
            if(this.adressen[i].typ == "lieferadresse"){
lAdress = this.adressen[i];
            }
          }

         

        
        }

        //wk
        let artikel = [];
         
        for (var i = 0; i < this.warenkorb.length; i++) {
          artikel.push({"id":this.warenkorb[i].id});
        }
        console.log(artikel);

        if(this.bankverbindungen != ""){
          bank= this.bankverbindungen[0].iban;
        }

      return {
        
  "artikel": artikel,
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
              this.setCurrentPage(11);
          }
          console.log(response);
        });
      
    },
  },
};
</script>

<style></style>
