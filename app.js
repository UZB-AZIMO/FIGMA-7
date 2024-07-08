
const sidebar = document .querySelector(".sidebare")
const btns = document.querySelector(".btns")
const but = document.querySelector(".but")
const header = document.querySelector("header")
btns.addEventListener("click",sidebarOpen)
but.addEventListener("click",sidebarOpen)

function sidebarOpen(){
    sidebar.classList.toggle("show")
}

