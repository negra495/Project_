// event


// ---- mouse events
// click - самый популярный
// mouseover - кнопка указывающего свойства
// mouseleave - указыващее устройство перемещается от элемента, к которому поключен обработчик
// dbclick - на элементе дважды щёлкается кнопка указывающего свойства


// -- keyboard events
// keydown -
// keyup -
// keypress



// -- input events
// input
// change


// -- form events
// reset - сбросить
// submit - отправить

const input = document.querySelector(".input")
const form = document.querySelector(".form")
// window.addEventListener("click",(e)=>{
//     console.log(e.target.innerHTML)
// })


// input.addEventListener("input",(e)=>{
//     console.log(e.target.value)
// })
//
// input.addEventListener("change",(e)=>{
//     console.log(e.target.value)
// })



// from.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     console.log(input.value)
// })

// from.addEventListener("reset",(e)=>{
//     e.preventDefault()
//     console.log(input.value)
// })


// input.addEventListener("keydown",(e)=>{
//     if (e.key === "Enter"){
//         alert(true)
//     }
// })

input.addEventListener("keyup",(e)=>{
    if (e.key === "Enter"){
        alert(true)
    }
})