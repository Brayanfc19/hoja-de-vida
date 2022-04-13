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