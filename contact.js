var closeoffer=document.getElementById("close-offer")
var offer=document.getElementById("offer")

closeoffer.addEventListener("click",function(){
    offer.style.display="none"
})

var sidenavmenu=document.getElementById("side-navbar-activate")
var sidenavbar=document.getElementById("side-nav")

sidenavmenu.addEventListener("click",function(){
     sidenavbar.style.marginLeft="0%"
     sidenavbar.style.display="block"

})

document.getElementById("side-navbar-close").addEventListener("click",function(){
    document.getElementById("side-nav").style.marginLeft="-60%"
})