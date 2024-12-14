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
let productContainer = document.getElementById("product-container");
let searchProducts = document.getElementById("search-products");
let productList = productContainer.querySelectorAll("div")
console.log(productList)

searchProducts.addEventListener("keyup",function(){
    let enterValue=event.target.value
    console.log(enterValue)
    
    for(count=0;count<productList.length;count=count+1){

        let productName=productList[count].querySelector("h1").textContent//product name
        console.log(productName)

        if(productName.indexOf(enterValue)<0){
            productList[count].style.display="none"
        }
        else{
            productList[count].style.display="block"

        }
    }
})