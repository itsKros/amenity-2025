<template>
    <div class="sidebar w-4/6 md:w-1/6 absolute top-5 z-10">
        <div id="moreAmenity" @click="moreAmenityList = !moreAmenityList, hideDetails()" class="button bg-primary flex flex-row justify-between items-center w-5/6 text-white uppercase tracking-widest text-xs cursor-pointer rounded-r-full px-2 py-1 relative select-none">
            <span>More Amenities </span>
            <i class="fas text-white" :class="[moreAmenityList == true ? 'fa-minus-circle' : 'fa-plus-circle ']"></i>
            <div class="arrow right absolute" v-if="moreAmenityList"></div>
        </div>
        <!-- <div class="detail cec absolute bg-white px-3 py-2 rounded-r-lg shadow-none md:shadow-lg border md:border-0 border-gray-400" v-if="isCEC">
            <span @click="hideDetails()" class="closeBtn cursor-pointer absolute bg-primary text-white rounded-full float-right text-xs flex justify-center items-center">X</span>
            <p class="pr-4 mb-2">
                Weather you choose a car less lifestyle or your car is in  for service, 
                the Vespaio community car is a great convenience.  
                Just download the mobile app, create an account, click and drive.  Fees apply.
            </p>
            <img src="../assets/imgs/detail/cec.png" class="w-full" alt="">
        </div> -->

        <div class="detail shp absolute bg-white px-3 py-2 rounded-r-lg shadow-none md:shadow-lg border md:border-0 border-gray-400" v-if="isSmartHomePkg">
            <span @click="hideDetails()" class="closeBtn cursor-pointer absolute bg-primary text-white rounded-full float-right text-xs flex justify-center items-center">X</span>
            <p class="pr-4 mb-2">
                Available smart home packages make every part of your life easier.  Your smart apartment will save energy and lower your utilities bill, save time, and make your home more comfortable.  See a leasing associate for more information.
            </p>
            <img src="../assets/imgs/detail/shp.png" class="w-full" alt="">
        </div>

        <div class="detail ffa absolute bg-white px-3 py-2 rounded-r-lg shadow-none md:shadow-lg border md:border-0 border-gray-400" v-if="isFrndFmlyApt">
            <span @click="hideDetails()" class="closeBtn cursor-pointer absolute bg-primary text-white rounded-full float-right text-xs flex justify-center items-center">X</span>
            <p class="pr-4 mb-2">
                Enjoy the convenience of having guest stay at Vespaio when visiting.  The friends and family apartment is fully furnished with everything that your guest will need during their visit.  Fees apply, see a leasing associate for more information.
            </p>
            <img src="../assets/imgs/detail/ffa.png" class="w-full" alt="">
        </div>

        <div class="detail dpl absolute bg-white px-3 py-2 rounded-r-lg shadow-none md:shadow-lg border md:border-0 border-gray-400" v-if="isDigiPkgLock">
            <span @click="hideDetails()" class="closeBtn cursor-pointer absolute bg-primary text-white rounded-full float-right text-xs flex justify-center items-center">X</span>
            <p class="pr-4 mb-2">
                Our digital lockers offer a convenient and secure way to receive or send all of your important packages.  Whether it is your Grubhub delivery or your latest online purchase, you will recieve a text when your package arrives.  
            </p>
            <img src="../assets/imgs/detail/dpl.png" class="w-full" alt="">
        </div>

        <div class="detail sba absolute bg-white px-3 py-2 rounded-r-lg shadow-none md:shadow-lg border md:border-0 border-gray-400" v-if="isSmartBuildAccess">
            <span @click="hideDetails()" class="closeBtn cursor-pointer absolute bg-primary text-white rounded-full float-right text-xs flex justify-center items-center">X</span>
            <p class="pr-4 mb-2">
                Built for modern living, Vespaio's smart building intercom provides a new standard in convenience and safety.  Use your smartphone to see who is at the building's front door, grant access anywhere, and issue virtual keys to your guest. 
            </p>
            <img src="../assets/imgs/detail/sba.png" class="w-full" alt="">
        </div>

        <div class="detail evc absolute bg-white px-3 py-2 rounded-r-lg shadow-none md:shadow-lg border md:border-0 border-gray-400" v-if="isEVCharging">
            <span @click="hideDetails()" class="closeBtn cursor-pointer absolute bg-primary text-white rounded-full float-right text-xs flex justify-center items-center">X</span>
            <p class="pr-4 mb-2">
                Charge your car right in your assigned parking spot using your charging card for exclusive access.  Use your mobile app to track charging sessions, pay for electricity and set reminders to plug in.  
            </p>
            <img src="../assets/imgs/detail/evc.png" class="w-full" alt="">
        </div>

        <div class="detail solAr absolute bg-white px-3 py-2 rounded-r-lg shadow-none md:shadow-lg border md:border-0 border-gray-400" v-if="isSolarArray">
            <span @click="hideDetails()" class="closeBtn cursor-pointer absolute bg-primary text-white rounded-full float-right text-xs flex justify-center items-center">X</span>
            <p class="pr-4 mb-2">
                Sustainable features have been woven throughout Vespaio as an integral part of its design.  Vespaio helps you leave a smaller footprint with its 98 KW solar array that powers the entire building common area.
            </p>
            <img src="../assets/imgs/detail/solAr.png" class="w-full" alt="">
        </div>

        <div class="detail dcs absolute bg-white px-3 py-2 rounded-r-lg shadow-none md:shadow-lg border md:border-0 border-gray-400" v-if="isDigiConServ">
            <span @click="hideDetails()" class="closeBtn cursor-pointer absolute bg-primary text-white rounded-full float-right text-xs flex justify-center items-center">X</span>
            <p class="pr-4 mb-2">
                Sometimes you need a little help keeping up with everyday chores.  Does the dog need a walk?  Has your laundry been in the hamper for weeks?  Help is just a click away with the Vespaio digital concierge.  
            </p>
            <img src="../assets/imgs/detail/dcs.png" class="w-full" alt="">
        </div>
        
        <div class="list bg-white pt-3 pb-2 md:p-2 pl-4 pr-0 md:py-4  rounded-r-lg select-none" v-if="moreAmenityList">
            <ul class="text-xs relative select-none overflow-y-scroll md:overflow-hidden">
                <!-- <li class="text-xs pb-2 pt-2 cursor-pointer relative" :class="[isCEC == true ? 'text-primary' : '']" @click="hideDetails(), isCEC = true">
                    <span>Commuity Electric Car</span> <i class="fal ml-1" :class="[isCEC == true ? 'fa-minus-circle' : 'fa-plus-circle ']"></i>
                </li> -->
                <li class="text-xs pb-2 pt-2 cursor-pointer relative" :class="[isSmartHomePkg == true ? 'text-primary' : '']" @click="isSmartHomePkg=!isSmartHomePkg, hideDetailsEXSHP()">
                    <span>Available Smart Home Packages</span> <i class="fal ml-1" :class="[isSmartHomePkg == true ? 'fa-minus-circle' : 'fa-plus-circle ']"></i>
                </li>
                <li class="text-xs pb-2 cursor-pointer relative" :class="[isFrndFmlyApt == true ? 'text-primary' : '']" @click="isFrndFmlyApt = !isFrndFmlyApt, hideDetailsEXFFA()">
                    <span>Friends & Family Apartment</span> <i class="fal ml-1" :class="[isFrndFmlyApt == true ? 'fa-minus-circle' : 'fa-plus-circle ']"></i>
                </li>
                <li class="text-xs pb-2 cursor-pointer">
                    <span>Outdoor Movie Theater</span>
                </li>
                <li class="text-xs pb-2 cursor-pointer relative" :class="[isDigiPkgLock == true ? 'text-primary' : '']" @click="isDigiPkgLock = !isDigiPkgLock, hideDetailsEXDPL()">
                    <span>Digital Package Lockers</span> <i class="fal ml-1" :class="[isDigiPkgLock == true ? 'fa-minus-circle' : 'fa-plus-circle ']"></i>
                </li>
                <li class="text-xs pb-2 cursor-pointer relative" :class="[isSmartBuildAccess == true ? 'text-primary' : '']" @click="isSmartBuildAccess = !isSmartBuildAccess, hideDetailsEXSBA()">
                    <span>Smart Building Access</span> <i class="fal ml-1" :class="[isSmartBuildAccess == true ? 'fa-minus-circle' : 'fa-plus-circle ']"></i>
                </li>
                <li class="text-xs pb-2 cursor-pointer relative" :class="[isEVCharging == true ? 'text-primary' : '']" @click="isEVCharging = !isEVCharging, hideDetailsEXEVC()">
                    <span>EV Charging Stations</span> <i class="fal ml-1" :class="[isEVCharging == true ? 'fa-minus-circle' : 'fa-plus-circle ']"></i>
                </li>
                <li class="text-xs pb-2 cursor-pointer relative" :class="[isSolarArray == true ? 'text-primary' : '']" @click="isSolarArray = !isSolarArray, hideDetailsEXSOL()">
                    <span>96 KW Solar Array</span> <i class="fal ml-1" :class="[isSolarArray == true ? 'fa-minus-circle' : 'fa-plus-circle ']"></i>
                </li>
                <li class="text-xs pb-2 cursor-pointer">
                    <span>Two Fire Pits</span>
                </li>
                <li class="text-xs pb-2 cursor-pointer">
                    <span>Jacuzzi</span>
                </li>
                <li class="text-xs pb-2 cursor-pointer">
                    <span>Pet Park</span>
                </li>
                <li class="text-xs pb-2 cursor-pointer">
                    <span>Common Area Wi-Fi</span>
                </li>
                <li class="text-xs pb-2 cursor-pointer">
                    <span>Gated Parking</span>
                </li>
                <li class="text-xs pb-2 cursor-pointer relative" :class="[isDigiConServ == true ? 'text-primary' : '']" @click="isDigiConServ=!isDigiConServ, hideDetailsEXDCS()">
                    <span>Digital Concierge Service</span> <i class="fal ml-1" :class="[isDigiConServ == true ? 'fa-minus-circle' : 'fa-plus-circle ']"></i>
                </li>
                <li class="text-xs pb-2 cursor-pointer">
                    <span>Fitness Parcoursse</span>
                </li>
                <li class="text-xs pb-2 cursor-pointer">
                    <span>Community App & Social Platform</span>
                </li>
                <li class="text-xs pb-2 cursor-pointer">
                    <span>Fitness & Wellness Classes</span>
                </li>
                <li class="text-xs pb-2 cursor-pointer">
                    <span>Community Social Events</span>
                </li>
                <li class="text-xs pb-2 cursor-pointer">
                    <span>Sustainable Building Design</span>
                </li>
                <li class="text-xs pb-2 cursor-pointer">
                    <span>Community Art</span>
                </li>
                <li class="text-xs cursor-pointer">
                    <span>RO Drinking Water</span>
                </li>
            </ul>
        </div>
    </div>    
</template>

<script>
import jQuery from 'jquery'
global.jQuery = jQuery 
export default {
  name: 'Sidepanel',
  data: function() {
    return {
        moreAmenityList: true,
        isCEC: false,
        isSmartHomePkg: false,
        isFrndFmlyApt: false,
        isDigiPkgLock: false,
        isSmartBuildAccess: false,
        isEVCharging: false,
        isSolarArray: false,
        isDigiConServ: false
    }
},
  methods:{
      hideDetails(){
          this.isCEC = false;
          this.isSmartHomePkg = false;
          this.isFrndFmlyApt = false;
          this.isDigiPkgLock = false;
          this.isSmartBuildAccess = false;
          this.isEVCharging = false;
          this.isSolarArray = false;
          this.isDigiConServ = false;
      },
      hideDetailsEXSHP() {
          this.isCEC = false;
          this.isFrndFmlyApt = false;
          this.isDigiPkgLock = false;
          this.isSmartBuildAccess = false;
          this.isEVCharging = false;
          this.isSolarArray = false;
          this.isDigiConServ = false;
      },
      hideDetailsEXFFA(){
          this.isCEC = false;
          this.isSmartHomePkg = false;
          this.isDigiPkgLock = false;
          this.isSmartBuildAccess = false;
          this.isEVCharging = false;
          this.isSolarArray = false;
          this.isDigiConServ = false;
      },
      hideDetailsEXDPL(){
          this.isCEC = false;
          this.isSmartHomePkg = false;
          this.isFrndFmlyApt = false;
          this.isSmartBuildAccess = false;
          this.isEVCharging = false;
          this.isSolarArray = false;
          this.isDigiConServ = false;
      },
      hideDetailsEXSBA(){
          this.isCEC = false;
          this.isSmartHomePkg = false;
          this.isFrndFmlyApt = false;
          this.isDigiPkgLock = false;
          this.isEVCharging = false;
          this.isSolarArray = false;
          this.isDigiConServ = false;
      },
      hideDetailsEXEVC(){
          this.isCEC = false;
          this.isSmartHomePkg = false;
          this.isFrndFmlyApt = false;
          this.isDigiPkgLock = false;
          this.isSmartBuildAccess = false;
          this.isSolarArray = false;
          this.isDigiConServ = false;
      },
      hideDetailsEXSOL(){
          this.isCEC = false;
          this.isSmartHomePkg = false;
          this.isFrndFmlyApt = false;
          this.isDigiPkgLock = false;
          this.isSmartBuildAccess = false;
          this.isEVCharging = false;
          this.isDigiConServ = false;
      },
      hideDetailsEXDCS(){
          this.isCEC = false;
          this.isSmartHomePkg = false;
          this.isFrndFmlyApt = false;
          this.isDigiPkgLock = false;
          this.isSmartBuildAccess = false;
          this.isEVCharging = false;
          this.isSolarArray = false;
      },
      
      checkMobile(){
        if(window.innerWidth <= 800) {
            this.moreAmenityList = false;
        } else {
            this.moreAmenityList = true;
        }
      }
  },
  mounted () {
    this.$nextTick(() => {
      let btnHeight = jQuery('#moreAmenity').outerHeight();
      jQuery('#moreAmenity').css({
        top: btnHeight/2
      });
    });

    this.checkMobile();
  }
}
</script>


<style scoped>

.arrow {width: 0; height: 0;top:25px;right: 7px;}
.arrow.right {border-top: 0px solid transparent;border-bottom: 10px solid transparent;border-left: 12px solid var(--primary);}
.detail{width:135%;left:102%;}
.detail p {font-size: 11px;line-height: 15px;}
.cec{top:8%}.shp {top: 9%;}.ffa {top: 13%;}.dpl {top:21%;}.sba {top:26%;}.evc{top:31%;}.solAr {top:36%;}.dcs {top:50%;}
span.closeBtn {width: 15px;height: 15px;font-size: 9px;top: 5px;right: 5px;}

@media only screen and (max-width: 768px){
    .detail {z-index:10;left: 3%;}
    .cec{top:12%}.shp {top: 16%;}.ffa {top: 21%;}.dpl {top:30%;}.sba {top:35%;}.evc{top:40%;}.solAr {top:44%;}.dcs {top:50%;}
    .list ul {height:78vh}
}

</style>
