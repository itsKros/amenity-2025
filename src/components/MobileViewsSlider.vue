<template> 
    <div class="mobile-slider-wrapper" role="region" aria-label="Amenities slider">
    <div class="logoArea"><img src="../assets/imgs/amenity-logo-mobile.svg" alt="Explore Amenities" id="logo" class="mobile"></div>        
    <button class="leftArrowArea arrow-btn left-arrow" @click="prev" aria-label="Previous"></button>
    <button class="rightArrowArea arrow-btn right-arrow" @click="next" aria-label="Next"></button>
    <div class="SliderArea">
      <div class="swiper-container" ref="swiperEl">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(view, index) in views"
            :key="'view-' + (view.id || index)"
          >
            <a
              href="#"
              class="slide-link"
              :class="{ selected: activeViewId === view.id }"
              @click.prevent="$emit('viewClicked', view)"
            >
              <span class="dot" :class="{ active: activeViewId === view.id }"></span>
              <span class="label">{{ view.name }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>             
  </div>
</template>

<script>
/*
  For your Vue2 project we assume swiper@6.x is installed.
  Make sure to run: npm install swiper@6.8.4 --legacy-peer-deps
*/
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

export default {
  name: "MobileViewsSlider",
  props: {
    views: { type: Array, required: true },
    activeViewId: { required: false }
  },
  data() {
    return {
      swiper: null
    };
  },
  mounted() {
    // initialize swiper after DOM ready
    this.$nextTick(() => {
      this.swiper = new Swiper(this.$refs.swiperEl, {
        slidesPerView: 2,    // two items visible
        spaceBetween: 6,     // very small gap
        loop: false,
        centeredSlides: false,
        slideToClickedSlide: false
      });
    });
  },
  methods: {
    prev() {
      if (this.swiper) this.swiper.slidePrev();
    },
    next() {
      if (this.swiper) this.swiper.slideNext();
    }
  },
  beforeDestroy() {
    if (this.swiper && typeof this.swiper.destroy === "function") {
      this.swiper.destroy(true, true);
      this.swiper = null;
    }
  }
};
</script>

<style scoped>

.mobile-slider-wrapper {
  display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "leftArrowArea logoArea logoArea logoArea logoArea logoArea logoArea rightArrowArea"
    "leftArrowArea SliderArea SliderArea SliderArea SliderArea SliderArea SliderArea rightArrowArea"; 
}
.leftArrowArea { grid-area: leftArrowArea; }
.rightArrowArea { grid-area: rightArrowArea; }
.logoArea { grid-area: logoArea; }
.SliderArea { grid-area: SliderArea; display: flex; align-items: center;margin-top: 5px;}


.slide-link {
  display: flex;
  align-items: center;
  gap: 2px;
  color: #ffffff;
  font-size: 13px;
  text-transform: uppercase;
  white-space: nowrap;
  text-decoration: none;
  justify-content: start;
}


.dot {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: 1px solid #fff;
  display: inline-block;
  box-sizing: border-box;
}
.dot.active {
  background: var(--primary, #4da0ff);
  border-color: var(--primary, #4da0ff);
}


.selected .label {
  color: var(--primary, #4da0ff);
  font-weight: 600;
}


.label {
  display: inline-block;
  color: #fff;
  line-height: 1;
}
.arrow-btn {  
  background: transparent;
  border: none;
  padding: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.left-arrow::before {
  content: "";
  display: inline-block;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-right: 15px solid #ffffff;
}

.right-arrow::before {
  content: "";
  display: inline-block;
  border-top: 25px solid transparent;
  border-bottom: 25px solid transparent;
  border-left: 15px solid #ffffff;
}



</style>
