<template>
  <div id="app" class="relative" v-if="this.activeView !=null">
     
    <Header :activeViewId="this.activeView.id" id="header" @viewClicked="viewClickedHandler"></Header>
    <Sidebar id="sidebar"></Sidebar>
    <div >
      <div v-show="this.activeView.pano">
        <VuePannellum id="panorama" :src="activeView.link"  :yaw="-90" :hfov="detectMobile() ? 55 : 200" class="relative panoimage"></VuePannellum>
        <iframe id="framePano" width="100%"  allowfullscreen :src="activeView.link"></iframe>
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
          { id: 1, name:'Pool & Jacuzzi', pano: true, active: false, link:'https://tourmkr.com/F1XyKbbHfP/33288239p&43.60h&88.28t' },
          { id: 2, name:'Outdoor Kitchen', pano: true, active: false, link:'https://tourmkr.com/F1XyKbbHfP/33288241p&130.08h&87.33t' },
          { id: 3, name:'Resident Lounge', pano: true, active: true, link:'https://tourmkr.com/F1XyKbbHfP/33288235p&95.11h&89.78t' },
          { id: 4, name:'Billiards Lounge', pano: true, active: false, link:'https://tourmkr.com/F1oL1ageti/33288245p&333.71h&85.56t' },
          { id: 5, name:'Co-Working Space', pano: true, active: false, link:'https://tourmkr.com/F1oL1ageti/33288246p&68.11h&78.90t' },
          { id: 6, name:'Fitness Center', pano: true, active: false, link:'https://tourmkr.com/F1fPRSvYcj/33288243p&14.29h&76.95t' },
          { id: 7, name:'Terrace Lounge', pano: true, active: false, link:'https://tourmkr.com/F1we0ub1Cv/33288229p&130.10h&83.57t' },
          { id: 8, name:'View Terrace', pano: true, active: false, link:'https://tourmkr.com/F1FzkeY33a/33288232p&318.95h&89.71t' },
          { id: 9, name:'Courtyard', pano: true, active: false, link:'https://tourmkr.com/F1qaodKUwg/33288233p&0.00h&90.00t' },
        ],
        activeView : { id: 1, name:'Pool & Jacuzzi', pano: true, active: true, link:'https://tourmkr.com/F1XyKbbHfP/33288239p&43.60h&88.28t' },
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
        // height: 'calc( 100vh - '+header+'px)'
      });
      jQuery('#framePano').css({
        // height: 'calc( 100vh - '+header+'px)'

        height: '100vh'
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
  height: 100vh !important;background-size: cover !important;
}
.panoimage {display:none;}

    
</style>
