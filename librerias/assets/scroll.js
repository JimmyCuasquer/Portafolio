const header =document.getElementById("main-header")
const scrollButton = document.getElementById("scroll-button");
const inicio = document.getElementById("create-porfolio");
const scrollButton2 = document.getElementById("scroll-button2");
const crearportafolio = document.getElementById("what-create-porfolio")
const scrollButton3 = document.getElementById("scroll-button3")
const tipoportafolio = document.getElementById("type-porfolio")
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
 if(window.scrollY > 300){
  //  console.log("entro");
    header.classList.add("fixed-header")
  
 }else if(window.scrollY === 0){
    header.classList.remove("fixed-header")

}
}

function scrollWindowTop() {
    // let offsetMain = mainSection.offsetTop;
   // let x =inicio.offsetHeight;
    let offsetinicio = inicio.offsetTop
   
    //let offsetcreatePorfolio = offsetinicio - scrollY; 
     //console.log (window.scrollY)  
    window.scrollTo(0, offsetinicio);
    

    // scrollWindowTop
  }
  function scrollWindowButton2() {
    let offsetheight = crearportafolio.offsetHeight -400;
    let offsetcreatePorfolio = crearportafolio.offsetTop - offsetheight ;
      window.scrollTo(0, offsetcreatePorfolio);
  }

  function scrollWindowButton3() {
    let offsetheight = crearportafolio.offsetHeight -450;
    let typePorfolio = tipoportafolio.offsetTop - offsetheight;
    if(scrollButton2.onclick){
      window.scrollTo(0, typePorfolio);
    }
  }

document.addEventListener("scroll", scrolHeaderTop)
//document.onscroll = scrolHeaderTop;
scrollButton.onclick = scrollWindowTop;
scrollButton2.onclick = scrollWindowButton2;
scrollButton3.onclick = scrollWindowButton3

