const loaderFile = document.getElementById("loader_image");

window.onload = function () {
  loaderFile.style.display = "flex";
  setTimeout(() => {
    loaderFile.style.display = "none";
  }, 2000);
};

function newPage() {
  window.open(
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
