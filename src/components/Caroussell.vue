<template>
  <div>
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div
          :class="showSlideNumber == 1 ? 'active' : ''"
          class="carousel-item"
        >
          <img
            class="d-block w-100"
            src="../assets/images/Slide1.png"
            alt="First slide"
          />
        </div>
        <div
          :class="showSlideNumber == 2 ? 'active' : ''"
          class="carousel-item"
        >
          <img
            class="d-block w-100"
            src="../assets/images/Slide2.png"
            alt="Second slide"
          />
        </div>
        <div
          :class="showSlideNumber == 3 ? 'active' : ''"
          class="carousel-item"
        >
          <img
            class="d-block w-100"
            src="../assets/images/Slide3.png"
            alt="Third slide"
          />
        </div>
      </div>
      <button class="carousel-control-prev" @click="prev()">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button class="carousel-control-next" @click="next()">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Caroussell",
  data: () => {
    return {
      showSlideNumber: 0,
    };
  },
  methods: {
    delay(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    },
    next() {
      console.log("tf");
      if (this.showSlideNumber == 1) {
        this.delay(0).then(() => this.showSlideNumber = 2);
      }
      if (this.showSlideNumber == 2) {
         this.delay(0).then(() => this.showSlideNumber = 3);
      }
      if (this.showSlideNumber == 3) {
         this.delay(0).then(() => this.showSlideNumber = 1);
      }
    },
     prev() {
      console.log("tf");
      if (this.showSlideNumber == 1) {
        this.delay(0).then(() => this.showSlideNumber = 3);
      }
      if (this.showSlideNumber == 2) {
         this.delay(0).then(() => this.showSlideNumber = 1);
      }
      if (this.showSlideNumber == 3) {
         this.delay(0).then(() => this.showSlideNumber = 2);
      }
    },
  },
  created() {
    this.showSlideNumber = 1;
    console.log("created");
  },
  watch: {/*
    showSlideNumber() {
      if (this.showSlideNumber == 1) {
        this.delay(5000).then(() => this.showSlideNumber = 2);
      }
      if (this.showSlideNumber == 2) {
         this.delay(5000).then(() => this.showSlideNumber = 3);
      }
      if (this.showSlideNumber == 3) {
         this.delay(5000).then(() => this.showSlideNumber = 1);
      }
    },*/
  },
};
</script>

<style></style>
