<template>
  <div>
    <h1 style="text-align: center">Über uns</h1>
    <p style="margin-left: 150px">{{ notification }}</p>

    <button @click="zurueck" class="btn btn-light">Zurück</button>
    <button @click="weiter" class="btn btn-secondary">Weiter</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "SecondPage",
  data: () => {
    return {
      notification: "Lädt",
    };
  },
  created() {
    const baseUrl = import.meta.env.VITE_BASE_URL;

    this.axios
      .get(baseUrl + "/notification/ewr3jd")
      .then((response) => {
        this.notification = response.data;
      })
      .catch((error) => {
        console.error("Der Request ist gescheitert", error);
      });
  },
  methods: {
    ...mapActions(["setCurrentPage"]),
    zurueck() {
      this.setCurrentPage(1);
    },
    weiter() {
      this.setCurrentPage(3);
    },
  },
};
</script>

<style></style>
