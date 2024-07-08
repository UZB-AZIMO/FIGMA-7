
const sidebar = document .querySelector(".sidebare")
const btns = document.querySelector(".btns")
const but = document.querySelector(".but")


btns.addEventListener("click",sidebarOpen)
but.addEventListener("click",sidebarOpen)

function sidebarOpen(){
    sidebar.classList.toggle("show")
}