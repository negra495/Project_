
// DOM - document object modal
// BOM - browser object modal

// console.log(window)
// console.log(document)

// console.log(location.href)

// alert("hello DOM")

// const prom = prompt ("hello DOM")
// console.log(prom)

// const h1 = document.getElementsByTagName("h1")
// h1[1].style.fontSize = "3rem"
// h1[1].style.color = "red"

// const div = document.getElementsByTagName(".box")
// console.log(box)

// const desk = document.getElementById("desk")
//
// console.log(desk)

const h1 = document.querySelector("h1")
// console.log(h1)
h1.style.color = "green"


// const box = document.querySelectorAll(".box")
// console.log(box)
//
// const p = document.querySelectorAll("#desk")
// console.log(p)

const list = document.querySelectorAll("li")
console.log(list)
// list[2].style.color = "yellow"
list.forEach((el,idx)=>{
    if (idx === 2){
        el.style.fontSize = "3rem"
        el.style.color = "pink"
    }
})


document.body.style.background = "yellow"