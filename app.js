
const sidebar = document .querySelector(".sidebare")
const btns = document.querySelector(".btns")

btns.addEventListener("click",sidebarOpen)

function sidebarOpen(){
    sidebar.classList.toggle("show")
}