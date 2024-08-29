

// crud
// create - Создавать
// reade {rename} - Чтение
// update - Обновить
// delete - Удалить

// to do list - Список Дел (расписание)


const input = document.querySelector(".text")
const btn = document.querySelector(".btn-add")
const ul = document.querySelector(".list")

btn.addEventListener("click",()=>{

    if (input.value === ""){
        return false
    }
    if (e.key === "Enter"){
    let newText = `<li class="list-group-item d-flex justify-content-between
 align-items-center">
 <span>
 <input type="checkbox" class="check">
${input.value}
</span>
 <button class="delete-btn btn btn-success">Delete</button>


</li>`

    ul.innerHTML += newText
    // input.value = ""
})

// remove()

// parentNode-отображении родительских элементов

ul.addEventListener("click",(e)=>{
    if (e.target.classList.contains("delete-btn")){
        e.target.parentNode.remove()
    }


    if (e.target.classList.contains("check")){
        console.log(e.target.parentNode)
        // if (e.target.parentNode.classList.contains("line")){
        //     e.target.parentNode.classList.remove("line")
        // }else{
        //     e.target.parentNode.classList.add("line")
        // }
        e.target.parentNode.classList.toggle("line")
    }
})