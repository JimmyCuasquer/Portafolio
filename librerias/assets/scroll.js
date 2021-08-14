const header =document.getElementById("main-header")

/*
function scrolHeaderTop() {
    console.log("scrolHeaderTop")
 if(window.scrollY > 100){
    header.classList.add("fixed-header")
 }else if(window.scrollY === 0){
     header.classList.remove("fixed-header")
 }
}
*/
function scrolHeaderTop() {
    console.log("scrolHeaderTop")
 if(window.scrollY > 100){
   // header.classList.add("fixed-header")
   header.style.position = "fixed"
   header.style.width = "100%"
   header.style.top = 0
 }else if(window.scrollY === 0){
    header.style.position = "static"
}
}
document.onscroll = scrolHeaderTop;
