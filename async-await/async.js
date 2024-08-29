

// async - await

https://jsonplaceholder.typicode.com/users

function getUsers(){

    // fetch("https://jsonplaceholder.typicode.com/users")
    //     .then((res)=> res.json())
    //     .then((data)=> console.log(data))

    axios("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            console.log(res.data)
        })
}