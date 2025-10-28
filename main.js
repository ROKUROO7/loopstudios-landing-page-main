const bodyElement = document.body
const navBtn = document.getElementById("nav-btn")
const navBtnImg = document.getElementById("nav-btn-img")
const navMenu = document.getElementById("nav-menu")
const menuBG = document.getElementById("menu-bg")

navBtn.addEventListener("click", () => {
  
  if (navBtn.getAttribute("aria-expanded") === "false") {
    
    navBtn.setAttribute("aria-expanded", "true")
    bodyElement.dataset.overflow = "hidden"
    menuBG.dataset.state = "visible"
    navBtnImg.src = "./images/icon-close.svg"
    navMenu.dataset.state = "expanded"
  }
  else {
    navBtn.setAttribute("aria-expanded", "false")
    bodyElement.dataset.overflow = "visible"
    menuBG.dataset.state = "hidden"
    navBtnImg.src = "./images/icon-hamburger.svg"
    navMenu.dataset.state = "collapsed"
  }
})