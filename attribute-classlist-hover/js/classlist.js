

// attribute





// setAttribute - Кошуп алуу
// getAttribute - Тартып алуу
// removeAttribute - Алып салуу (delete)


// container.setAttribute("id","div")
// container.setAttribute("class","header")
// container.setAttribute("id","person")
//
// console.log(container.getAttribute("class"))
//
// container.removeAttribute("class")
// console.log(container)

// const btn = document.querySelector(".btn")
// const square = document.querySelector(".square")
//
// btn.addEventListener("click",()=>{
//     if (square.getAttribute("class")==="square"){
//         square.removeAttribute("class")
//         square.setAttribute("class","round")
//     } else{
//         square.removeAttribute("class")
//         square.setAttribute("class","square")
//     }
// })










// classList

// add - Кошуу
// remove - Очуруу
// contains - Текшерип Алуу
// toggle -

// div.classList.add("header")
// div.classList.add("person")
//
// div.classList.remove("man")
// div.classList.remove("header")
//
// console.log(div.classList.contains("person"))
// console.log(div.classList.contains("container"))

// createElement -
// append -
// appendChild -


// const newDiv = document.createElement("div")
//
// div.append(newDivx)


const div = document.querySelector(".container")

const box = 600

for (let i = 0; i<box; i++){
    const square = document.createElement("div")
    const btn = document.querySelector(".btn")
    const btn2 = document.querySelector(".btn2")
    const body = document.querySelector("body")

    div.append(square)
    square.classList.add("square")

    square.addEventListener("mouseover",()=>{
        square.style.background = randomColor()
    })
    square.addEventListener("mouseleave",()=>{
        square.style.background = ""
    })
    btn.addEventListener("click",()=>{
        square.style.background = randomColor()
        body.style.background = randomColor()
        square.removeAttribute("class")
        square.setAttribute("class","round")
    })
    btn2.addEventListener("click",()=>{
        square.style.background = ""
        body.style.background = ""
        square.removeAttribute("class")
        square.setAttribute("class","square")
    })
}

function randomColor (){
    let a = "#"
    for (let i = 1;i<7;i++){
        a += Math.floor(Math.random()*10)
    }
    return a
}

console.log(randomColor())

