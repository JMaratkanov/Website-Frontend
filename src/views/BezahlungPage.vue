<template>
  <div>
  <h1 style="text-align: center;">Warenkorb</h1>

  

  <div class="row"><!--Bootstrap row kann bis zu 12 Spalten haben-->
                    <div class="col-xl-8 offset-xl-2">
                      <div class="progress" style="margin-top: 10px;
margin-bottom: 50px;">
  <div class="progress-bar" role="progressbar" style="width: 66%;" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100">66%</div>
</div>
  <div class="card" >
  <div class="card-body">
    <h5 class="card-title">Gesammtsumme</h5> mit MwSt.
    
    
    
  </div>
</div>
</div>
</div>
<h3 style="text-align:center;margin-top: 40px;margin-bottom: 40px;" >Zahlungsart</h3>

<div class="row"><!--Bootstrap row kann bis zu 12 Spalten haben-->
                    <div class="col-xl-8 offset-xl-2">
  <div class="card cardborder"  >
  <div class="card-body">
    <h5 class="card-title">Paypal</h5>
   bla
  
    
  </div>
</div>
</div>
<div class="col-xl-8 offset-xl-2">
<div class="card cardborder" style="border-top-left-radius: 0;
border-top-right-radius: 0;" >
  <div class="card-body">
    <h5 class="card-title">Kreditkarte</h5>
    

    
  </div></div>
</div>
<div class="col-xl-8 offset-xl-2">
<div class="card cardborder" style="border-top-left-radius: 0;
border-top-right-radius: 0;">
  <div class="card-body" >
    <h5 class="card-title">Vorkasse</h5>
    
   
    
  </div></div>
</div>
<div class="col-xl-8 offset-xl-2">
<div class="card" style="border-top-left-radius: 0;
border-top-right-radius: 0;">
  <div class="card-body">
    <h5 class="card-title">Banküberweisung</h5>
    
    
    
  </div></div>
</div>


</div>



   

    

    <button style="width: 30%;
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



export default {

  name: "BezahlungPage",

  computed: {
    ...mapGetters(["kundeId","adressen", "bankverbindungen"]),
   
  },

   

  methods: {
    ...mapActions(["setCurrentPage"]),
 
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
