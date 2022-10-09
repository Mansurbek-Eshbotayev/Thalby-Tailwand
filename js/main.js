let elList = document.querySelector(".menu__box");
let elBtn = document.querySelector(".nav__btn");

elBtn.addEventListener("click",function(){
  elList.classList.toggle("menu__box--on")
})