function newPage() {
  window.onload(
    "https://drive.google.com/file/d/1XqW2mxc9-fozirMbc6f25IAkx0pQVbc2/view?usp=sharing"
  );
}

var menuBtn = document.getElementsByClassName("menu-btn");
var mobileMenu = document.getElementsByClassName("mobile-menu");

window.addEventListener("resize", () => {
  if (mobileMenu[0].classList.contains("active")) {
    mobileMenu[0].classList.remove("active");
  }
});

var clickedBtn = () => {
  mobileMenu[0].classList.toggle("active");
};

menuBtn[0].addEventListener("click", clickedBtn);
