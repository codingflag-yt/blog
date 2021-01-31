let tab = {
  self:document.querySelector(".tabs"),
  header:document.querySelector(".tabs .tab-header"),
  body:document.querySelector(".tabs .tab-body"),
  headerElements:document.querySelectorAll(".tabs .tab-header div"),
  bodyElements:document.querySelectorAll(".tabs .tab-body div"),
}

for(let i=0;i<tab.headerElements.length;i++){
  tab.headerElements[i].addEventListener("click",function(){
    tab.header.querySelector(".active").classList.remove("active");
    tab.headerElements[i].classList.add("active");
    tab.body.querySelector(".active").classList.remove("active");
    tab.bodyElements[i].classList.add("active");
  })
}