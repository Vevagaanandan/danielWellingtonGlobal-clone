// Banner START
var bannerClose = document.getElementById("topBanner");

function hideBanner(){
    bannerClose.style.display = "none";
    document.getElementById("brandHeader").style.top = "0px";
    document.getElementById("theNav").style.top = "48px";

    var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
        document.getElementById("theNav").style.top = "48px";
        document.getElementById("brandHeader").style.top = "0px";
        document.getElementById("header-iconsId").style.top = "38px";
  } 
  else 
  {
        document.getElementById("theNav").style.top = "-50px";
        document.getElementById("brandHeader").style.top = "0";
        document.getElementById("header-iconsId").style.top = "-30px";      }
  prevScrollpos = currentScrollPos;
}
}
// Banner END


// Menu START
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
        document.getElementById("theNav").style.top = "97px";
        document.getElementById("brandHeader").style.top = "49px";
        document.getElementById("topBanner").style.top = "0";
        document.getElementById("header-iconsId").style.top = "87px";
  } 
  else 
  {
        document.getElementById("theNav").style.top = "-50px";
         document.getElementById("brandHeader").style.top = "0";
         document.getElementById("topBanner").style.top = "-50px";
         document.getElementById("header-iconsId").style.top = "-30px";      }
  prevScrollpos = currentScrollPos;
}
// Menu END

// Side Menu Item-watch list
var sideMenuLinkWatches = document.getElementById("sideMenuLinkWatches");
var sideMenuLinkWatchStraps = document.getElementById("sideMenuLinkWatchStraps");
var sideMenuLinkJewelry = document.getElementById("sideMenuLinkJewelry");
var sideMenuLinkGiftSets = document.getElementById("sideMenuLinkGiftSets");
var sideMenuLinkCollections = document.getElementById("sideMenuLinkCollections");

function sideMenuWatchesList(){
    
    sideMenuLinkWatches.style.transform = "translateX(0)";
    document.getElementById("sideMenu-below").style.display = "none";
}

function sideMenuLinkWatchStrapsList(){
    
    sideMenuLinkWatchStraps.style.transform = "translateX(0)";
    document.getElementById("sideMenu-below").style.display = "none";
}

function sideMenuLinkJewelryList(){
    
    sideMenuLinkJewelry.style.transform = "translateX(0)";
    document.getElementById("sideMenu-below").style.display = "none";
}

function sideMenuLinkGiftSetsList(){
    
    sideMenuLinkGiftSets.style.transform = "translateX(0)";
    document.getElementById("sideMenu-below").style.display = "none";
}

function sideMenuLinkCollectionsList(){
    
    sideMenuLinkCollections.style.transform = "translateX(0)";
    document.getElementById("sideMenu-below").style.display = "none";
}

function closeSideMenuItemList(){

    sideMenuLinkWatches.style.transform = "translateX(100%)";
    sideMenuLinkWatchStraps.style.transform = "translateX(100%)";
    sideMenuLinkJewelry.style.transform = "translateX(100%)";
    sideMenuLinkGiftSets.style.transform = "translateX(100%)";
    sideMenuLinkCollections.style.transform = "translateX(100%)";

    document.getElementById("sideMenu-below").style.display = "block";
}


// Footer START
function shop() {
    document.getElementById("footerShow").classList.toggle("footerShow");
    document.getElementById("footerShop-arrowId").classList.toggle("rotateArrow");
}

function customer_service() {
    document.getElementById("footerCustomerService").classList.toggle("footerShow");
    document.getElementById("footerCustomerService-arrowId").classList.toggle("rotateArrow");
}

function information() {
    document.getElementById("footerInformation").classList.toggle("footerShow");
    document.getElementById("footerInformation-arrowId").classList.toggle("rotateArrow");
}

function about_us() {
    document.getElementById("footerAboutUs").classList.toggle("footerShow");
    document.getElementById("footerAboutUs-arrowId").classList.toggle("rotateArrow");
}
// Footer END

// Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 10,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


//   Swiper Shipping START
  var swiper = new Swiper(".mySwiperShipping", {
    spaceBetween: 5,
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


// Side Menu Appear
function sideMenuAppearResponsive(){
    document.getElementById('sideMenu-overlayId').style.display = "block";

    document.getElementById('sideMenuId').style.left = "0";
    document.getElementById('sideMenuId').style.width = "70%";

    

    document.getElementById('sideBarMenuXmarkId').style.display = "block";

    document.body.style.overflowY = "hidden";
}

function sideMenuAppear(){
    document.getElementById('sideMenu-overlayId').style.display = "block";

    document.getElementById('sideMenuId').style.display = "block";
    document.getElementById('sideMenuId').style.left = "0";
    document.getElementById('sideMenuId').style.width = "450px";

    document.getElementById('sideBarMenuXmarkId').style.display = "block";

    document.body.style.overflowY = "hidden";
}

// Side Bar Close One
function closeSidebarOne (){
    document.getElementById('sideMenu-overlayId').style.display = "none";

    document.getElementById('sideMenuId').style.left = "-750px";
    document.getElementById('sideMenuId').style.width = "initial";
    // sideMenu.classList.add("sideMenuCloseResponsive");
    // document.getElementById("sideMenuId").classList.toggle("sideMenuCloseResponsive");

    document.getElementById('sideBarMenuXmarkId').style.display = "none";

    document.body.style.overflowY = "auto";
}

function closeSidebarTwo (){
    document.getElementById('sideMenu-overlayId').style.display = "none";

    document.getElementById('sideMenuId').style.left = "-750px";
    document.getElementById('sideMenuId').style.width = "initial";
    // document.getElementById("sideMenuId").classList.toggle("sideMenuCloseResponsive");
    // sideMenu.classList.add("sideMenuCloseResponsive");

    document.getElementById('sideBarMenuXmarkId').style.display = "none";

    document.body.style.overflowY = "auto";
}

function topButton() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}