const btn_menu = document.querySelector(".fa-solid")
const menu = document.querySelector(".menu")

btn_menu.addEventListener("click", ()=> {
    menu.classList.toggle("active")
    btn_menu.classList.toggle("girar")
})