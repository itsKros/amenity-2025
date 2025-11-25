<template>
  <header id="header" class="bg-gray-900 text-white flex flex-col md:flex-row justify-between px-4 py-2 relative">

    <!-- Brand Logo -->
    <div class="brand uppercase flex text-primary items-center justify-center md:justify-start text-3xl md:text-xl tracking-widest">
      <img src="../assets/imgs/amenity-logo.svg" alt="Explore Amenities" id="logo" class="desktop">
      <!-- <img src="../assets/imgs/amenity-logo-mobile.svg" alt="Explore Amenities" id="logo" class="mobile"> -->
    </div>

    <!-- Desktop Items -->
    <div class="amenties desktop w-10/12 hidden md:flex justify-between item-center uppercase text-white overflow-x-scroll md:overflow-x-hidden">
      <a href="#" v-for="(view, index) in $parent.views"
         :key="`view-${index}`"
         :class="[activeViewId==view.id ? 'selected' : '']"
         @click="viewClicked(view)"
         class="w-1/2 md:w-auto flex justify-center items-center flex-row text-white">
        <span class="circle rounded-full bg-white mr-1"></span>
        <span>{{ view.name }}</span>
      </a>

      <a href="#">
        <img src="../assets/imgs/360iconnew.png" alt="360 degree" id="icon360">
      </a>
    </div>  
    <MobileViewsSlider
      v-if="isMobile"
      :views="$parent.views"
      :activeViewId="activeViewId"
      @viewClicked="viewClicked"
    />

  </header>
</template>

<script>

import MobileViewsSlider from "@/components/MobileViewsSlider.vue";

export default {
  name: "Header",
  components: {
    MobileViewsSlider
  },
  props: ["activeViewId"],
  data() {
    return {
      isMobile: window.innerWidth <= 767,   // ✅ define isMobile here
    };
  },
  methods: {
    viewClicked(view) {
      this.$emit("viewClicked", view);
    },
  },
};
</script>

<style scoped>

header#header {
  width: 98.4375%;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 13px;
  border-radius: 50px;
  background-color: rgb(48 50 61 / 81%);
  gap:30px;
}

/* Logo */
img#logo {
  height: 35px;
}

/* Desktop menu */
.amenties { width: 90%;     gap: 17px;}
.amenties a { font-size: 16px; font-family: 'Open Sans', sans-serif; }

/* Selected state */
a.selected { color: var(--primary); }
.circle {
  height: 10px;
  width: 10px;
  background-color: transparent;
  border: 1px solid #fff;
}
a.selected .circle {
  background-color: var(--primary);
  border: 1px solid var(--primary);
}

/* responsive visibility */
.mobile { display: none; }
button {
  -webkit-appearance: none !important;
  border-radius: 0;
}

@media only screen and (min-width:1700px) and (max-width:2500px) {
  .amenties a { font-size: 14px;}
}

@media only screen and (min-width:1300px) and (max-width:1700px) {
  .amenties a { font-size: 12px;}
}

@media only screen and (min-width:1200px) and (max-width:1300px) {
  .amenties a { font-size: 9px;}
}

@media only screen and (max-width: 767px) {
  .desktop { display: none; }
  .mobile { display: flex; }

  #logo.mobile { display: inline; height: 25px; }

  header#header{
    padding: 10px 40px;
    border-radius: 25px;
    background-color: rgb(48 50 61);
     gap: 0;
  }
  .brand {
    justify-content: flex-start;
    padding: 0 0px;
    padding-bottom: 7px;
  }
}




@media only screen and (min-width:391px) and (max-width: 431px) {
  

   header#header{
    padding: 10px 20px;
    border-radius: 25px;
    background-color: rgb(48 50 61);
            gap: 0;
  }

  img#logo { padding-left: 15px;  }




}

@media only screen and (min-width:414.4px) and (max-width: 430px) {

      
   header#header{
    padding: 10px 35px;
    border-radius: 25px;
    background-color: rgb(48 50 61);
  }

    img#logo[data-v-61dd7a3d] {
        padding-left: 0;
    }
}


</style>
