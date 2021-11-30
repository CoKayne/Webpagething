const mobileBtn = document.getElementById("mobile-cta")
    nav = document.querySelector("nav")
    mobileBtnExit = document.getElementById("mobile-exit");

mobileBtn.addEventListener("click", () => {
  nav.classList.add("menu-btn");
})

mobileBtnExit.addEventListener("click", () => {
  nav.classList.remove("menu-btn");
})

  AOS.init({
    duration : 3000,
    mirror : false,
    once : false
  });

var switchStatus = "off",
  center = document.querySelector('.center'),
  box1 = document.querySelector('.box1'),
  box2 = document.querySelector('.box2'),
  shape = document.querySelector('.shape'),
  circle = document.querySelector('.circle'),
  body = document.querySelector('.body'),
  nav = document.querySelector('.navbar');

const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
  
  document.body.classList.toggle('dark');
  if(switchStatus == "off"){
    center.style.transform = "rotate(720deg)";
    box1.style.background = "white";
    box2.style.background = "white";
    circle.style.background = "#292929";
    shape.style.background = "white";
    shape.style.width = "18px";
    shape.style.height = "18px";
    shape.style.left = "11px";
    shape.style.bottom = "11px";
    shape.style.borderRadius = "50%";

    switchStatus = "on";
  }else if(switchStatus == "on"){
    center.style.transform = "rotate(0deg)";
    box1.style.background = "#292929";
    box2.style.background = "#292929";
    circle.style.background = "white";
    shape.style.background = "#292929";
    shape.style.width = "22px";
    shape.style.height = "30px";
    shape.style.left = "1px";
    shape.style.bottom = "5px";
    shape.style.borderRightRadius = "30px";

    switchStatus = "off";
  }
});