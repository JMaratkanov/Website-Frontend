<template>
  <div>
  <h1 style="text-align: center;">Warenkorb</h1>

  

  <div class="row"><!--Bootstrap row kann bis zu 12 Spalten haben-->
                    <div class="col-xl-8 offset-xl-2">
                      <div class="progress" style="margin-top: 10px;
margin-bottom: 50px;">
  <div class="progress-bar" role="progressbar" style="width: 33%;" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100">33%</div>
</div>

</div>
</div>
<h3 style="text-align:center;margin-top: 40px;margin-bottom: 40px;" >Adresse</h3>

<div class="row"><!--Bootstrap row kann bis zu 12 Spalten haben-->
                    <div class="col-xl-8 offset-xl-2">
  <div class="card cardborder"  >
  <div class="card-body">
    <h5 class="card-title">bla</h5>
   <register-page></register-page>
  
    
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
  </div>
</template>

<script>import { mapGetters, mapActions } from "vuex";
import RegisterPage from './RegisterPage.vue';


export default {

  name: "KassePage",
  components:{
    RegisterPage
  },

  computed: {
    ...mapGetters(["kundeId","adressen", "bankverbindungen"]),
   
  },

   

  methods: {
    ...mapActions(["setCurrentPage"]),
   
    weiter() {
      this.setCurrentPage(9);
    },
 
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
