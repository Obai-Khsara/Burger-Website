const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")
const closeICon = document.getElementById("nav-close")
const navLink = document.querySelectorAll(".nav-link")



navLink.forEach(link => 
    link.addEventListener("click", () => {
        navMenu.classList.add("hidden")
    })
)
hamburger.addEventListener("click", ()=>{
    navMenu.classList.remove("hidden")
})

closeICon.addEventListener("click", () =>{
    navMenu.classList.add("hidden")
})

const tabs = document.querySelectorAll(".tabs_wrap ul li")
const all = document.querySelectorAll(".item_wrap")
const foods = document.querySelectorAll(".food")
const snacks = document.querySelectorAll(".snack")
const beverages = document.querySelectorAll(".beverage")

tabs.forEach(tab => {
    tab.addEventListener("click", ()=>{
        tabs.forEach(tab => {
            tab.classList.remove("active")
        })
        tab.classList.add("active")

        const tabVal = tab.getAttribute("data-tabs")


        all.forEach(item => {
            item.style.display = "none"
        })

        
        if(tabVal == "food"){
            foods.forEach(item => {
                item.style.display = "block"
            })
        }else if(tabVal == "snack"){
            snacks.forEach(item => {
                item.style.display = "block"
            })
        }else if(tabVal == "beverage"){
            beverages.forEach(item => {
                item.style.display = "block"
            })
        }else{
            all.forEach(item => {
                item.style.display = "block"
            })
        }
    })
})


// swiper
const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    grabCursor: true,
    breakpoints: {
    // when window width is >= 640px
    640: {
        slidesPerView: 1
    },
    // when window width is >= 768px
    768: {
        slidesPerView: 2
    },
    // when window width is >= 1024px
    1024: {
        slidesPerView: 3
    }
    }
    });


// Scroll-up
window.addEventListener("scroll", scrollUp)

function scrollUp(){
    const scrollUpBtn = document.getElementById("scroll-up")
    if(scrollY >= 250){
        scrollUpBtn.classList.remove("-bottom-1/2")
        scrollUpBtn.classList.add("bottom-4")
    }else{
        scrollUpBtn.classList.add("-bottom-1/2")
        scrollUpBtn.classList.remove("bottom-4")
    }
}

// background-header
window.addEventListener("scroll", scrollHeader)

function scrollHeader(){
    const header = document.getElementById("header")
    if(scrollY >= 50){
        header.classList.add("border-b", "border-secondaryColor")
    }else{
        header.classList.remove("border-b", "border-secondaryColor")
    }
}

// DarkMode
const html = document.querySelector("html")
const themeBtn = document.getElementById("theme-toggle")
const darkMode = () =>{
    html.classList.add("dark")
    themeBtn.classList.replace("ri-moon-line", "ri-sun-line")
    localStorage.setItem("mode", "dark")
}
const lightMode = () =>{
    html.classList.remove("dark")
    themeBtn.classList.replace("ri-sun-line", "ri-moon-line")
    localStorage.setItem("mode", "light")
}

if(localStorage.getItem("mode") == "dark"){
    darkMode()
}else{
    lightMode()
}


themeBtn.addEventListener("click", ()=>{
    if(localStorage.getItem("mode") == "light"){
        darkMode()
    }else{
        lightMode()
    }
})

// ActiveLink in header
const navLinks = document.querySelectorAll("#nav-menu ul li a")
navLinks.forEach((item) => {
    item.addEventListener("click",()=>{
        navLinks.forEach((link)=>{
            link.classList.remove("text-secondaryColor")
        })
        item.classList.add("text-secondaryColor")
    })
})


// Scroll Animation
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true
})
sr.reveal(".home__image")
sr.reveal(".footer")
sr.reveal(".home__content", {origin: "bottom"})
sr.reveal(".category__card", {interval: 300})
sr.reveal(".promo__card-1", {origin: "top"})
sr.reveal(".promo__card-2", {origin: "bottom"})
sr.reveal(".about__img", {origin: "bottom"})
sr.reveal(".about__content", {origin: "top"})
sr.reveal(".menu__items", {origin: "top"})
sr.reveal(".customer__review", {origin: "bottom"})