const tilte = document.querySelector(".omad__title")
const omad__btn = document.querySelector(".omad__btn")


const TEL__NUMBER =[
    "+998 99 825 55 19",
    "+998 99 825 56 13",
    "+998 99 825 45 18",
    "+998 99 825 95 16",
    "+998 99 825 52 17",
    "+998 99 825 21 15" ,
]

omad__btn.addEventListener("click",()=>{
    omad__btn.setAttribute("disabled",true)
    let interval= setInterval(()=>{
        let index = Math.floor(Math.random()*TEL__NUMBER.length )
        tilte.textContent = TEL__NUMBER [index]
    },100)
setInterval(()=>{
    clearInterval(interval)
    omad__btn.removeAttribute("disabled")
}, 2500)
})



const sidebar = document .querySelector("sidebare")


function sidebarOpen(){
    sidebar.classList.toggle("show")
}