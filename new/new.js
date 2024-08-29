const root = document.querySelector(".root")

const words = ["Motion", "Web",]



    for (let i = 0;i <=162; i++){
        const div = document.createElement("div")
        div.classList.add("item")
        div.addEventListener("mouseover", ()=>{
            div.textContent = randomWord()
            setInterval(()=> div.style.color = generatorColor(),50)
            div.style.boxShadow = `0px 0px 30px 20px ${generatorColor()}`


        })
        div.addEventListener("mouseleave", ()=>{
            div.textContent = ""
            div.style.boxShadow = `none`
        })
        root.appendChild(div)
    }

function generatorColor(){
    return '#' + Math.floor(Math.random()*(999999 - 100000) + 100000)
}

function randomWord(){
    const ran = Math.floor(Math.random()*(100-10)+10)%2?1:0
    return words[ran]
}

