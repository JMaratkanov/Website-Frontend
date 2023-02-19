<template>
<div style="margin-left:100px">
 <div class="card produktCard" style="width: 18rem;">
  <img src="https://via.placeholder.com/150 " class="card-img-top" alt="bla">
  <div class="card-body">
    <h5 class="card-title">{{produktName}}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  
  <div class="card-body produktBtnWrapper" @mouseover="buttonHover = true"
    @mouseleave="buttonHover = false">
    <button   :style="[(selected || buttonHover)?{'background':'gray'}:{'background':'lightgray'}]" @click="select()" class="produktBtn">
    {{buttonText}}
    </button>
  </div>

  <div class="card-body produktBtnWrapper" @mouseover="buttonHover2 = true"
    @mouseleave="buttonHover2 = false">
    <button   :style="[( buttonHover2)?{'background':'gray'}:{'background':'lightgray'}]" @click="remove()" class="produktBtn">
    Entfernen
    </button>
  </div>
</div>

</div>
</template>

<script>import { mapGetters, mapActions } from "vuex";

export default {
  

  name: "Produktkachel",
  props: {
    artikelId: {
            type: Number,
            required: true,
            default: 0,
        },
        produktName: {
            type: String,
            required: true,
            default: "",
        },
  },
  data: () => {
    return {
      selected: false,
      count:0,
      buttonHover: false,
      buttonHover2: false,
      buttonText:"In den Warenkorb",
    };
  },
  computed: {
    ...mapGetters(["warenkorb"]),
  },
   created(){
      this.count = this.warenkorb.filter(artikel => artikel.id==this.artikelId).length;
      if (this.count > 0){
        this.buttonText = "Menge: " +this.count + "x";
        this.selected = true;
      }
   },

  methods: {
    ...mapActions(["setCurrentPage", "setWarenkorb"]),
    select(){
        
            this.selected =true;
            let tmpWarenkorb = this.warenkorb;
            tmpWarenkorb.push({"id":this.artikelId, "name":this.produktName});
            this.setWarenkorb(tmpWarenkorb);
            this.count++;
            this.buttonText="Menge: " +this.count + "x";
        
        
        console.log("selected");
    },
    remove(){
      const tmpWarenkorb = this.warenkorb.filter(artikel => artikel.id != this.artikelId);
      this.setWarenkorb(tmpWarenkorb);
      this.count = 0;
      this.buttonText="In den Warenkorb";
      this.selected = false;
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