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

/* ========== Promotion ========== */
/*
(function(){
  function promotion(){
    let popupPromotionElement = document.createElement("div");
        popupPromotionElement.classList.add("popup-promotion");
        popupPromotionElement.innerHTML = `
          <div class="overlay"></div>
          <div class="popup">
            <div class="close-btn">&times;</div>
            <h2>Checkout my new Youtube Channel</h2>
            <p>Subscribe if you are intrested in web development & C programming related stuff in hindi language.</p>
            <a href="http://bit.ly/3bs6eDF" target="_blank">Subscibe</a>
          </div>
        `;
        document.body.appendChild(popupPromotionElement);
        setTimeout(function(){
          popupPromotionElement.classList.add("active");
          document.querySelector(".popup-promotion .overlay").addEventListener("click",function(){
            localStorage.setItem("promotion-status","skipped");
            popupPromotionElement.classList.remove("active");
          });
          document.querySelector(".popup-promotion .popup .close-btn").addEventListener("click",function(){
            localStorage.setItem("promotion-status","skipped");
            popupPromotionElement.classList.remove("active");
          });
          document.querySelector(".popup-promotion .popup a").addEventListener("click",function(){
            localStorage.setItem("promotion-status","ok");
            popupPromotionElement.classList.remove("active");
          });
        },1000);    
  }  
  if(!localStorage.getItem("promotion-status")){
    promotion();
  } else if(localStorage.getItem("promotion-status") == "skipped" && Math.random() > 0.8){
    promotion();
  }
})();
*/
