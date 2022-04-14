const btn_menu = document.querySelector(".fa-solid")
const nav = document.querySelector(".container-nav")
const menu = document.querySelector(".menu")

btn_menu.addEventListener("click", ()=> {

    btn_menu.classList.toggle("girar")
    menu.classList.toggle("active")
    nav.classList.toggle("color")

})
menu.addEventListener("click", ()=> {
    btn_menu.classList.remove("girar")
    menu.classList.remove("active")
    nav.classList.remove("color")
})

gsap.from(".container-nav",{
    y:"-100"
})
gsap.to(".container-nav",{
    y:"0",
    
})

gsap.from("#efect1",{
    opacity:0,
    y:200,
})
gsap.to("#efect1",{
    opacity:1, 
    y:-0, 
    ease:"bounce", 
    stagger:"0.5",
    delay:1.1
})


new Typed(".typed", {
    strings: ["Brayan Farro", "Developer"],
    loop:true,
    typeSpeed:75,
    backSpeed:75
})