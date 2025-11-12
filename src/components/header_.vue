<template>
    <header class="bg-gray-900 text-white flex flex-col md:flex-row justify-between px-4 py-2 relative">
        
        <div class="brand uppercase flex text-primary items-center justify-center md:justify-start text-3xl md:text-xl tracking-widest">
           <img src="../assets/imgs/amenity-logo.png" alt="Explore Amenities" id="logo" class="desktop">
           <img src="../assets/imgs/amenity-logo-mobile.png" alt="Explore Amenities" id="logo" class="mobile">
        </div>

        <div class="amenties desktop w-10/12 hidden md:flex justify-between item-center uppercase text-white overflow-x-scroll md:overflow-x-hidden">
            <a href="#" v-for="(view, index) in this.$parent.views" :key="`view-${index}`" :class="[activeViewId==view.id ? 'selected' : '']" @click="viewClicked(view)" class="w-1/2 md:w-auto flex justify-center items-center flex-row text-white">
                <span class="circle rounded-full bg-white mr-1"></span> 
                <span>{{view.name}}</span>
            </a>
            <a href="#"> <img src="../assets/imgs/360iconnew.png" alt="360 degree" id="icon360"></a>
        </div>

        <carousel class="block mobile" :navigationEnabled=true :paginationEnabled=false>
            <slide v-for="(view, index) in this.$parent.views" :key="`view-${index}`">
                <a href="#" :class="[activeViewId==view.id ? 'selected' : '']" @click="viewClicked(view)" class="flex justify-start items-center flex-row text-white " >
                    <span class="circle rounded-full bg-white mr-1"></span> 
                    <span>{{view.name}}</span>
                </a>
            </slide>
        </carousel>

    </header>

    
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: 'Header',
  components: {
    Carousel,
    Slide
  },
  props:['activeViewId'],
  data () {
      return {
         
      }
  },
  methods: {
    viewClicked(view){
          this.$emit('viewClicked', view);
    },
      
  },
}
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
    background-color: rgb(48 50 61 / 81%)
}

img#logo {
    height: 35px;
}

.amenties {width:90%}
.amenties a{font-size:13px;font-family: 'Open Sans', sans-serif;}
a.selected {color:var(--primary);}
.circle{height:10px;width:10px;    background-color: transparent;
    border: 1px solid #fff;}
a.selected .circle {background-color:var(--primary); border: 1px solid var(--primary);}

.mobile {display:none;}
button{
    -webkit-appearance: none !important;
border-radius: 0;
}
@media only screen and (max-width:767px){
    .desktop {display:none;}
    .mobile {display:flex;}

    #logo.desktop {display:none;}
    #logo.mobile {display:inline; height: 25px;}

    header#header {    padding-left: 32px;    padding-right: 32px;    }

    .brand {   justify-content: flex-start;    padding: 0 10px;}

    a.selected {color:var(--primary);}
    .circle{height:10px;width:10px;    background-color: transparent;    border: 1px solid #fff;}
    a.selected .circle {background-color:var(--primary); border: 1px solid var(--primary);}


    
}


</style>
