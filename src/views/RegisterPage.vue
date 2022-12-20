<template>
  <div>
    <h1 style="text-align: center">Registrierung</h1>
    <div class="row" style="padding:10px"><div class="inputwrapper"> Email: 
      <input v-model="email" type="text" id="login" class="registerfield"/>
    </div></div>
    <div class="row"  style="padding:10px"> <div class="inputwrapper">Passwort:
      <input v-model="password" type="text" id="password" class="registerfield" />
    </div></div>
    <div class="row"  style="padding:10px">
   
      <button type="button" class="btn btn-primary inputbutton">
      Speichern
      </button>

    </div>
  </div>
</template>

<script>import { mapGetters, mapActions } from "vuex";

export default {

  name: "RegisterPage",

  methods: {

  },
};
</script>

<style>
.registerfield{
  width: 20% !important;
 
  height: 45px;

border-radius: 5px;

border-width: 1.5px;
}
.inputwrapper{text-align: center;}
</style>
