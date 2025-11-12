<template>
  <div class="mobile-slider-wrapper" role="region" aria-label="Amenities slider">

    <!-- left arrow -->
    <button class="arrow-btn left-arrow" @click="prev" aria-label="Previous"></button>

    <!-- swiper -->
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

    <!-- right arrow -->
    <button class="arrow-btn right-arrow" @click="next" aria-label="Next"></button>
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
/* wrapper aligns arrows and slider */
.mobile-slider-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
}

/* swiper container must have width so slides are visible */
.swiper-container {
  flex: 1 1 auto;
  width: 100%;
}

/* ensure wrapper inside swiper aligns items */
.swiper-wrapper { align-items: center; }

/* each slide content layout */
.swiper-slide {
  display: flex !important;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 6px 4px;
}

/* clickable area */
.slide-link {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #ffffff;
  font-size: 12px;
  text-transform: uppercase;
  white-space: nowrap;
  text-decoration: none;
}

/* small dot and active state */
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

/* selected text styling */
.selected .label {
  color: var(--primary, #4da0ff);
  font-weight: 600;
}

/* labels (ensure visible) */
.label {
  display: inline-block;
  color: #fff;
  line-height: 1;
}

/* arrow buttons (pure CSS) */
.arrow-btn {
  width: 28px;
  height: 28px;
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

/* small screens tweaks */
@media (max-width: 420px) {
  .slide-link { font-size: 13px; gap: 4px; }
  .swiper-slide { padding:0; }



  .arrow-btn.left-arrow {
        width: 31px;
        height: 32px;
        position: absolute;
        left: 3px;
        top: 17px;
    }

.arrow-btn.right-arrow[data-v-8015f726] {
        width: 31px;
        height: 32px;
        position: absolute;
        right: 3px;
        top: 17px;
    }



}
</style>
