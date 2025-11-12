<template>
  <div id="app" class="relative" v-if="this.activeView !=null">
     
    <Header :activeViewId="this.activeView.id" id="header" @viewClicked="viewClickedHandler"></Header>
    <Sidebar id="sidebar"></Sidebar>
    <div >
      <div v-show="this.activeView.pano">
        <VuePannellum id="panorama" :src="activeView.link"  :yaw="-90" :hfov="detectMobile() ? 55 : 200" class="relative"></VuePannellum>
      </div>
      <div v-show="!this.activeView.pano">
        <div id="panorama" class="bg-img" :style="{'background': 'url(' + activeView.link + ') center center no-repeat'}"></div>
        
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import VuePannellum from 'vue-pannellum'
import jQuery from 'jquery'
global.jQuery = jQuery 
import './assets/css/fontawesome/all.min.css'
import './assets/css/main.css'
import './assets/css/style.css'
import './assets/js/script.js'
import { get } from 'http'
export default {
  name: 'app',
  components: {
    Header,
    VuePannellum,
    Sidebar
  },
  computed:{
    cssVars() {
      return {
        'background': this.bgColor,
        '--height': this.height + 'px'
      }
    }
  },
  data: function() {
    return {
        views: [
          { id: 1, name:'Pool & Jacuzzi', pano: true, active: false, link:'https://prototypes.ssquares.co.in/panorama/5_Pool.png' },
          { id: 2, name:'Outdoor Kitchen', pano: true, active: false, link:'https://prototypes.ssquares.co.in/panorama/8_OutdoorKitchen.png' },
          { id: 3, name:'Resident Lounge', pano: true, active: true, link:'https://prototypes.ssquares.co.in/panorama/1_LoungePanorama.jpg' },
          { id: 4, name:'Billiards Lounge', pano: true, active: false, link:'https://prototypes.ssquares.co.in/panorama/2_Game_Lounge.png' },
          { id: 5, name:'Co-Working Space', pano: true, active: false, link:'https://prototypes.ssquares.co.in/panorama/3_Coworking.png' },
          { id: 6, name:'Fitness Center', pano: true, active: false, link:'https://prototypes.ssquares.co.in/panorama/4_Fitness.png' },
          { id: 7, name:'Terrace Lounge', pano: true, active: false, link:'https://prototypes.ssquares.co.in/panorama/6_TerraceLounge.png' },
          { id: 8, name:'View Terrace', pano: true, active: false, link:'https://prototypes.ssquares.co.in/panorama/7_ViewTerrace.png' },
          { id: 9, name:'Courtyard', pano: true, active: false, link:'https://prototypes.ssquares.co.in/panorama/5_Pool.png' },
        ],
        activeView : { id: 3, name:'Resident Lounge', pano: true, active: true, link:'https://prototypes.ssquares.co.in/panorama/1_LoungePanorama.jpg' },
    }
  },

  methods: {
      viewClickedHandler: function (e){
        this.activeView = e;
          console.log(e);
      },
      detectMobile(){
        if(window.innerWidth <= 800) {
            return true;
        } else {
            return false;
        } 
      }
  },
  mounted () {
    this.$nextTick(() => {
      let header = jQuery('#header').outerHeight();
      jQuery('#panorama').css({
        height: 'calc( 100vh - '+header+'px)'
      });
    });

    
  }
  
}
</script>


<style>
:root {
      --hero-image: url('{{activeView.link}}');
    }
#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.bg-img{
  height: calc(100vh - 46px) !important;background-size: cover !important;
}
#pano {
        width: 600px;
        height: 400px;
    }

    
</style>
