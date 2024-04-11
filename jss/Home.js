const hamburgerMenu = document.querySelector("#hamburger-menu");
const overlay = document.querySelector("#overlay");
const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");
const nav5 = document.querySelector("#nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];
//Changing to index animation
//var timer = setTimeout(function() {
            //window.location='https://anthomy3000.github.io/anthomytan.github.io/index.html'
        //}, 100000);

// Control Navigation Animation
function navAnimation(val1, val2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
  });
}

function toggleNav() {
  // Toggle: Hamburger Open/Close
  hamburgerMenu.classList.toggle("active");

  //   Toggle: Menu Active
  overlay.classList.toggle("overlay-active");

  if (overlay.classList.contains("overlay-active")) {
    // Animate In - Overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");

    // Animate In - Nav Items
    navAnimation("out", "in");
  } else {
    // Animate Out - Overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");

    // Animate Out - Nav Items
    navAnimation("in", "out");
  }
}
// Changing website location
function changeproduct(){
            location.replace("https://anthomy3000.github.io/assignmentB/")
}
function changeproduct1(){
            location.href("https://drive.google.com/file/d/1o2c0P20xcCVUgXSULdC44obtES1d1Z4n/view?usp=sharing")
}
function changeproduct2(){
            location.href("https://drive.google.com/file/d/1d6T1-pFqt98CRXz-Zzpb17W5aB3zQx6X/view?usp=sharing")
}
// Events Listeners
hamburgerMenu.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});
