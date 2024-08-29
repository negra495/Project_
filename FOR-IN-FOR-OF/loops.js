
// loop
// for()
// while()
// do while()
// for in
// for of

// let n = 0
// n++
// console.log(n)
//
// for()

// for (let i = 0;i<10;i++){
//     // console.log(i)
//     console.log(sayHi())
// }
//
// function sayHi(){
//     return"hello Azamat"
// }

// break
// continue

// for (let i = 0;i<15;i++){
//     if (i === 4){
//         continue
//     }
//     if (i === 10){
//         break
//     }
//     console.log(i)
// }

// for in
// for of

// let name = ["Zalkarbek", "Shergazy", "Timur", "Adilet", "Talgat", "Argen"]
// for (let i = 0; i<name.length;i++){
//     console.log(name[i])
// }
//
// for (let i in name){
//     console.log(name[i])
// }
//
// for (let i of name){
//     console.log(i)
// }


// this

// console.log(this)
// console.log(window)

// function task(){
//     console.log(window === this)
// }
// task()


let obj = {
    id: 1,
    name: "Zalkarbek",
    age: 18,
    job: "developer",
    dateOfYear: 2004,
    getInfo: function () {
        console.log(`my name is ${this.name}, i am ${this.job}, i am ${this.age} age `)
        console.log(this)
        return 0
    }
}
    getAge:function (){
        return new Date().getFullYear() - this.dateOfYear
    },
    getHobby:function(hobby){
        return `my hobby is ${hobby}`
    }
}
// console.log(obj.getInfo())
// console.log(obj.getAge())
// console.log(obj.getHobby("chess"))


// bind
// apply
// call

let user = {
    id:2,
    name:"Asan",
    job:"mentor",

}
console.log(obj.getInfo.bind(user)())
console.log(obj.getInfo.apply(user))
console.log(obj.getInfo.call(user))

console.log(obj.getHobby.bind(this)("chess"))