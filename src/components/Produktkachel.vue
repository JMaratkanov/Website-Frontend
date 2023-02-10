<template>
<div style="margin-left:100px">
 <div class="card produktCard" style="width: 18rem;">
  <img src="https://via.placeholder.com/150 " class="card-img-top" alt="bla">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  
  <div class="card-body produktBtnWrapper" @mouseover="buttonHover = true"
    @mouseleave="buttonHover = false">
    <button   :style="[(selected || buttonHover)?{'background':'gray'}:{'background':'lightgray'}]" @click="select()" class="produktBtn">
    {{buttonText}}
    </button>
  </div>
</div>

</div>
</template>

<script>import { mapGetters, mapActions } from "vuex";

export default {

  name: "Produktkachel",
  data: () => {
    return {
      selected: false,
      buttonHover: false,
      buttonText:"In den Warenkorb",
      artikelId: 1
    };
  },
  computed: {
    ...mapGetters(["warenkorb"]),
  },
   

  methods: {
    ...mapActions(["setCurrentPage", "setWarenkorb"]),
    select(){
        if(this.selected == false){
            this.selected = true;
            
            let tmpWarenkorb = this.warenkorb;
            tmpWarenkorb.push(this.artikelId);
            this.setWarenkorb(tmpWarenkorb);

            this.buttonText="Entfernen";
        }else{
            this.selected = false;

            let tmpWarenkorb = this.warenkorb;
            let index = tmpWarenkorb.indexOf(this.artikelId);
            if (index > -1) { 
            tmpWarenkorb.splice(index, 1); 
            }
            this.setWarenkorb(tmpWarenkorb);

            this.buttonText="In den Warenkorb";
        }
        
        console.log("selected");
    }

  },
};
</script>

<style>
.produktBtn{
    width: 100%;
height: 100%;
border-left-width: 0px;
border-left-style: solid;
padding-left: 0px;
padding-top: 0px;
border-top-width: 0px;
border-top-style: solid;
border-right-width: 0px;
border-right-style: solid;
padding-right: 0px;
border-bottom-width: 0px;
border-bottom-style: solid;
padding-bottom: 0px;



}


.produktBtnWrapper{
padding-top: 0px !important;
padding-right: 0px !important;
padding-bottom: 0px !important;
padding-left: 0px !important;
height: 3rem;
}

.produktCard{
    border-radius: 0 !important;
}
</style>