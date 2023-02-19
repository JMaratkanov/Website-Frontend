<template>
  <div>
  <h1 style="text-align: center;">Warenkorb</h1>

  

  <div class="row"><!--Bootstrap row kann bis zu 12 Spalten haben-->
                    <div class="col-xl-8 offset-xl-2">
                      <div class="progress" style="margin-top: 10px;
margin-bottom: 50px;">
  <div class="progress-bar" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
</div>
<h3 style="text-align:center;margin-top: 40px;margin-bottom: 40px;" >Bestellung abgeschlossen</h3>

  <div class="card" >
  <div class="card-body">
    <h5 class="card-title">Bestellungsdetails</h5> mit MwSt.
    

    <button @click="weiter" class="btn btn-secondary">Abschließen</button>
    
  </div>
</div>
</div>
</div>




  </div>
</template>

<script>import { mapGetters, mapActions } from "vuex";



export default {

  name: "OrderSuccessPage",

  
  created(){
    this.setWarenkorb([]);

  },
   

  methods: {
    ...mapActions(["setCurrentPage","setWarenkorb"]),
    weiter() {
      this.setCurrentPage(1);
    },
  },
};
</script>

<style></style>
