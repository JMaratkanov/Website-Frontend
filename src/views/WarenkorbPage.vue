<template>
  <div>
  <h1 style="text-align: center;">Warenkorb</h1>
   

    
   
    <button class="btn btn-secondary" @click="order">Zur Kasse</button>
  </div>
</template>

<script>import { mapGetters, mapActions } from "vuex";



export default {

  name: "WarenkorbPage",

  computed: {
   
  
    orderJson() {
      return {
 
  artikel: [
    {
      id: 1
    },
{
      id: 2
    }
  ],
  adressen: [
    {
      id: 1
    }
  ],
  bankverbindung: {
    id: 1
  }

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
