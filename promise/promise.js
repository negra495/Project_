// promise -


// промис делится на 3 серии
// pending - ожидания
// resolved - успешно выполнен
// rejected - (ошибка) выполнен не успешно
// http code =


// методы промиса
// .then
// .catch
// .finally


// get - захватывающий данных
// post/patch - изменить
// put - отправка данные к фронтенду
// delete - удалить

// let status = 204
// const promise = new Promise ((resolve, reject)=>{
//     console.log("pending...")
//     setTimeout(()=>{
//         // console.log("success")
//         if (status >= 200 && status <300){
//             resolve({st:"OK",})
//             // console.log("success")
//         }else{
//             reject({status})
//         }
//     },2000)
// })
//
// promise
//     .then((data)=>console.log(data))
//     .catch((data)=>{
//         console.log(data)
//     })
//     .finally(()=>console.log("finish!"))
// console.log(promise)
// console.log(10)
// console.log(20)
// setTimeout(()=>{
//     console.log("timer")
// },2000)
// console.log(30)

function getPromise(ms){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("go")
                resolve("success")
        },ms)
    })

}

// Promise.all([getPromise(2000),getPromise(4000),getPromise(6000)])
//     .then(()=>console.log("all"))

// Promise.race([getPromise(2000),getPromise(4000),getPromise(6000)])
//     .then(()=>console.log("all"))

// fetch
// http://jsonplaceholder.typicode.com/users


const div = document.querySelector(".container")
fetch("http://jsonplaceholder.typicode.com/users")
.then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        data.map(el=>(
            div.innerHTML +=`<div>
        <h1>${el.name}</h1>
        <h3>${el.username}</h3>
        <p>${el.address.city}</p>
        <p>${el.phone}</p>
        
</div>`
        ))
    })
