const tilte = document.querySelector(".omad__title")
const omad__btn = document.querySelector(".omad__btn")


const TEL__NUMBER =[
    "+998 90 486 55 19",
    "+998 33 664 56 13",
    "+998 55 566 45 18",
    "+998 88 978 95 16",
    "+998 94 194 52 17",
    "+998 98 051 21 15" ,
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


