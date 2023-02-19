<template>
  <div>
    <template v-if="this.warenkorb.length == 0">
    Der Warenkorb ist leer
    </template>
  <template v-else> <!--TODO Nur zeigen wenn etwas im Warenkorb ist-->
  <h1 style="text-align: center;">Warenkorb</h1>

  

  <div class="row"><!--Bootstrap row kann bis zu 12 Spalten haben-->
                    <div class="col-xl-8 offset-xl-2">
                     
                     <div class="progress" style="margin-top: 10px; margin-bottom: 50px;">
  <div class="progress-bar" role="progressbar" style="width: 33%;" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100">33%</div>
</div>

</div>
</div>
<h3 style="text-align:center;margin-top: 40px;margin-bottom: 40px;" >Adresse</h3>


<div class="row"><!--Bootstrap row kann bis zu 12 Spalten haben-->
                    <div class="col-xl-8 offset-xl-2">
  <div v-if="loginStatus==0" class="card cardborder"  >
  <div class="card-body">
    <h5 class="card-title">bla</h5>
   <register-page></register-page>
  
    
  </div>
</div>

<div v-else class="card cardborder"  >
  <div class="card-body">
    <h5 class="card-title">Gespeicherte Adressen</h5>
   <template v-if="this.adressen != ''">
    <template v-for="adr in adressen">
    

    <template v-if="adr.typ == 'rechnungsadresse'" >
        Rechnungsadresse:<br>
        {{adr.strasse}} {{ adr.hausnummer }} {{ adr.hausnummerzusatz }}, <br>
         {{ adr.plz }} {{ adr.ort }}

         <input type="checkbox" @click="this.switchCheckbox2()" id="cbox2" name="cbox2" value="adressflag" >
    <label for="cbox2"> Abweichende Rechnungsadresse</label><br>
    <template v-if="this.checkbox2" >
      <div class="row" style="padding: 10px">
      <div class="inputwrapper">
        Strasse:
        <input
          v-model="bKundeAlterRStrasse"
          type="text"
          id="strasse"
          class="registerfield"
        />
      </div>
    </div>
    <div class="row" style="padding: 10px">
      <div class="inputwrapper">
        Ort:
        <input v-model="bKundeAlterROrt" type="text" id="ort" class="registerfield" />
      </div>
    </div>
    <div class="row" style="padding: 10px">
      <div class="inputwrapper">
        Postleitzahl:
        <input
          v-model="bKundeAlterRPlz"
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
          v-model="bKundeAlterRHausnummer"
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
          v-model="bKundeAlterRHausnummerZusatz"
          type="text"
          id="hausnummerzusatz"
          class="registerfield"
        />
      </div>
    </div>
    <button
        @click="this.changeBestandskundeRechnungsAdresse()"
        type="button"
        class="btn btn-primary inputbutton"
      >
        Übernehmen
      </button>
    </template>

    </template>


   
      <br>
      <br>
      <template v-if="adr.typ == 'lieferadresse'" >
        Lieferadresse:<br>
        {{adr.strasse}} {{ adr.hausnummer }} {{ adr.hausnummerzusatz }}, <br>
         {{ adr.plz }} {{adr.ort }}

        <br>
    

    <input type="checkbox" @click="this.switchCheckbox()" id="cbox" name="cbox" value="adressflag" >
    <label for="cbox"> Abweichende Lieferadresse</label><br>
    <template v-if="this.checkbox" >
      <div class="row" style="padding: 10px">
      <div class="inputwrapper">
        Strasse:
        <input
          v-model="bKundeAlterLStrasse"
          type="text"
          id="strasse"
          class="registerfield"
        />
      </div>
    </div>
    <div class="row" style="padding: 10px">
      <div class="inputwrapper">
        Ort:
        <input v-model="bKundeAlterLOrt" type="text" id="ort" class="registerfield" />
      </div>
    </div>
    <div class="row" style="padding: 10px">
      <div class="inputwrapper">
        Postleitzahl:
        <input
          v-model="bKundeAlterLPlz"
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
          v-model="bKundeAlterLHausnummer"
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
          v-model="bKundeAlterLHausnummerZusatz"
          type="text"
          id="hausnummerzusatz"
          class="registerfield"
        />
      </div>
    </div>
    <button
        @click="this.changeBestandskundeLieferAdresse()"
        type="button"
        class="btn btn-primary inputbutton"
      >
        Übernehmen
      </button>
    </template>
    <hr>
      
    </template>
  </template>
   </template>
  
    
  </div>
</div>


</div>

</div>



   

    

    <button @click="weiter" style="width: 30%;
margin-top: 50px;
height: 40px;
margin-bottom: 50px;
left: 50%;
position: absolute;
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);" class="btn btn-secondary" >Weiter</button>
  </template>
</div>
</template>

<script>import { mapGetters, mapActions } from "vuex";
import RegisterPage from './RegisterPage.vue';


export default {

  name: "KassePage",
  data: () => {
    return {checkbox: false, checkbox2: false,
    bKundeAlterRStrasse:"",
    bKundeAlterRHausnummer:"",
    bKundeAlterRHausnummerZusatz:"",
    bKundeAlterROrt:"",
    bKundeAlterRPlz:"",
    bKundeAlterLStrasse:"",
    bKundeAlterLHausnummer:"",
    bKundeAlterLHausnummerZusatz:"",
    bKundeAlterLOrt:"",
    bKundeAlterLPlz:"",
  };
  },
  components:{
    RegisterPage
  },

  computed: {
    ...mapGetters(["kundeId","adressen", "bankverbindungen", "loginStatus","warenkorb"]),
   
  
  },

  
   

  methods: {
    ...mapActions(["setCurrentPage","setAdressen"]),
   
    weiter() {
      this.setCurrentPage(9);
    },
    switchCheckbox(){
      if(this.checkbox == false){
        this.checkbox = true;
      }
      else{
        this.checkbox = false;
      }
    },
    switchCheckbox2(){
      if(this.checkbox2 == false){
        this.checkbox2 = true;
      }
      else{
        this.checkbox2 = false;
      }
    },
    changeBestandskundeRechnungsAdresse(){
      const newAdress ={};
      newAdress.strasse = this.bKundeAlterRStrasse;
      newAdress.hausnummer = this.bKundeAlterRHausnummer;
      newAdress.hausnummerzusatz = this.bKundeAlterRHausnummerZusatz;
      newAdress.ort = this.bKundeAlterROrt;
      newAdress.plz = this.bKundeAlterRPlz;
      newAdress.typ = "rechnungsadresse";

      //Backend Update Adresss update
      const all = this.adressen;
     
      for (var i = 0; i < all.length; i++) {
    
    if(all[i].typ == "rechnungsadresse" ){
    newAdress.id = all[i].id;
        all[i] = newAdress;}

}
    this.setAdressen(all);

    this.checkbox2= false;

    },
    changeBestandskundeLieferAdresse(){
      const newAdress ={};
      newAdress.strasse = this.bKundeAlterLStrasse;
      newAdress.hausnummer = this.bKundeAlterLHausnummer;
      newAdress.hausnummerzusatz = this.bKundeAlterLHausnummerZusatz;
      newAdress.ort = this.bKundeAlterLOrt;
      newAdress.plz = this.bKundeAlterLPlz;
      newAdress.typ = "lieferadresse";

      //Backend Update Adresss update
      const all = this.adressen;
     
      
      for (var i = 0; i < all.length; i++) {
    
    if(all[i].typ == "lieferadresse" ){
    newAdress.id = all[i].id;
        all[i] = newAdress;}
}
    this.setAdressen(all);

    this.checkbox= false;

    }
 
  },
};
</script>

<style>
.cardborder{
  border-bottom-width: 0px !important;
border-bottom-style: solid !important;
border-bottom-left-radius: 0 !important;
border-bottom-right-radius: 0 !important;
}</style>
