const bodyElement = document.body
const navBtn = document.getElementById("nav-btn")
const navBtnImg = document.getElementById("nav-btn-img")
const navMenu = document.getElementById("nav-menu")
const menuBG = document.getElementById("menu-bg")

const navOpen = () => {
  navBtn.setAttribute("aria-expanded", "true")
  bodyElement.dataset.overflow = "hidden"
  menuBG.dataset.state = "visible"
  navBtnImg.src = "./images/icon-close.svg"
  navMenu.dataset.state = "expanded"
}

const navClose = () => {
  navBtn.setAttribute("aria-expanded", "false")
  bodyElement.dataset.overflow = "visible"
  menuBG.dataset.state = "hidden"
  navBtnImg.src = "./images/icon-hamburger.svg"
  navMenu.dataset.state = "collapsed"
}

navBtn.addEventListener("click", () => {
  if (navBtn.getAttribute("aria-expanded") === "false") {
    navOpen()
  }
  else {
    navClose()
  }
})

const navList = Array.from(navMenu.children[0].children)

if (window.matchMedia("(max-width: 46.875rem)").matches) {
  navList.forEach((li) => {
    li.addEventListener("click", () => {
      navClose()
    })
  })
}