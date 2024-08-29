// const a = 0
// if (a == 50){
//     console.log(true)
// }
// else {
//     console.log(false)
// }

// const x = 56
// const y = 554
// if (x > y){
//     console.log("x")
// }
// else {
//     console.log("y")
// }



// If-Else

// const num = 598
// if (num > 0 ){
//     console.log("Позитивный")
// }
// else{
//     console.log("Отрицательный")
// }

// const num = 6
// if (num > 0 && num < 10){
//     console.log("ОдноЗначный")
// }
// else if (num > 9 && num < 100){
//     console.log("2-чЗначный")
// }
// else if (num > 99 && num < 1000){
//     console.log("3-чЗначный")
// }






// const n1 = Math.floor(Math.random() * (10000-1) + 1)
// const n2 =Math.floor(Math.random() * (10000-1) + 1)
// const n3 =Math.floor(Math.random() * (10000-1) + 1)
// if (n1 > n2 && n1 > n3){
//     console.log(`${n1} > ${n2} jana ${n3}`)
// }
// else if (n2 > n1 && n2 > n3){
//     console.log(`${n2} > ${n1} jana ${n3}`)
// }
// else if (n3 > n1 && n3 > n2){
//     console.log(`${n3} > ${n2} jana ${n1}`)
// }



// const n1 = Math.floor(Math.random() * (900-1) + 1)
// const n2 = Math.floor(Math.random() * (900 -1) +1)
// const n3 = Math.floor(Math.random() * (900 -1) +1)
// if (n1 < n2 && n1 < n3){
//     console.log(`${n1} < ${n2} jana ${n3}`)
// }
// else if (n2 < n3 && n2 < n1){
//     console.log(`${n2} < ${n3} jana ${n1}`)
// }
// else if (n3 < n2 && n3 < n1){
//     console.log(`${n3} < ${n1} jana ${n2}`)
// }

// const n1 = Math.floor(Math.random() * (900-1) + 1)
// const n2 = Math.floor(Math.random() * (900 -1) +1)
// if (n1 > n2){
//     console.log(`${n1} > ${n2}`)
// }
// else if (n2 > n1){
//     console.log(`${n2} > ${n1}`)
// }
//
//
// if (n1 < n2){
//     console.log(`${n1} < ${n2}`)
// }
// else{
//     console.log(`${n2} < ${n1}`)
// }
// console.log(n1 > n2 ? `${n1} > ${n2}`: `${n2} < ${n1}`)







// Цикл

// const num = 87
// if (num  % 2 == 1){
//     console.log("Nechёtniy")
// }
// else {
//     console.log("chёtNiy")
// }

// for(let i = 5000; i > 0; i--){
//     if (i % 2 == 0){
//         console.log(i)
//     }
//
// }
// console.log("start")



//
// for (let i = 1; i < 11; i++){
//     if (i  % 2 == 0){
//         console.log("Nechёtniy " +i)
//     }
//     else {
//         console.log("chёtNiy " +i)
//     }
// }
//
// console.log("Start")
// for(let i= 0; i < 6; i++){
//     console.log(i)
//
// }
// console.log("finish")


// console.log("Start")
// for (let i = 0; i < 5; i++){
//     console.log(i)
// }
// console.log("Продолжаю")
//
// for (let i = 5; i < 11; i++){
//     console.log(i)
// }
// console.log("Finish")




// 1) 1ден 10го чейинки сандарды чыгарыш керек
// for (let i = 1; i < 11; i= i*2){
//     console.log(i)
// }
// 29sec

//
// 2) 1ден 33го чейинки сандарды чыгарыш керек.
// for (let i = 1; i < 34; i++){
//     console.log(i)
// } 29sec

//
// 3) 33дон 1ге чейинки сандарды чыгарыш керек
// for (let i = 33; i > 0; i--){
//     console.log(i)
// } 39sec

//
// 4) 30дан 10го чейинки сандарды чыгарыш керек
// for (let i = 30; i>9; i--){
//     console.log(i)
// } 32sec
//
// 5) 30дан -10го чейинки сандарды чыгарыш керек
// for (let i = 30; i > -11; i--){
//     console.log(i)
// } 47sec

// 6) 7ден 20га чейинки сандарга 1ди кошуп чыгарыш керек
// for (let i = 7; i< 21; i++){
//     console.log(i+1)
// } 57sec
//
// 7) 1ден 100го чейинки сандарга 10ду кошуп чыгарыш керек
// for (let i = 1; i < 101; i++){
//     console.log(i+10)
// } 1min 10sec
    //
// 8) 10дон 20га чейинки сандарды 2ге болуп чыгарыш керек
// for (let i = 10; i < 21; i++){
//     console.log(i/2)
// } 40sec
//
// 9) 10дон 100го чейинки сандарды 2ге кобойтуп чыгарыш керек
// for (let i = 10; i < 101; i++){
//     console.log(i*2)
// } 1min 5sec
//
// 10) 5000 жолу "Я айтишник" деп чыгарыш керек
// for (let i = 0; i < 5001; i++){
//     console.log(`${i} - Я Айтишник`)
// } 33sec
//
// 11) 1 жылдыз, 2 жылдыз, 3 жылдыз, 4 жылдыз - деп 100го чейин санап чыгыш керек
// for (let i =0; i<101;i++){
//     console.log(`${i} жылдыз`)
// } 34sec

// 12) 0дон 100го чейин отступ болуш керек 0 менен 100 чыгыш керек
// for (let i =0;i<101;i++){
//     if (i==0){
//         console.log(0)
//     }
//     else if (i==100){
//         console.log(100)
//     }
//     else {
//         console.log()
//     }
// } 57sec

// Переменный
// let age= 54
// let name = "Max"
// console.log(`${name} ${age} jashta`)
// name = "qwerty"
// age = 5464
// console.log(`${name} ${age} jashta`)

// let a = 10
// let b =15
// let c = a + b
// console.log(`${a} jana ${b} summasy ${c}`)

// let a = 98
// let b = 4546
// console.log(a/b)

// let a = 10
// let b = a
// let c = b
// console.log(c)

// let a = 789
// let b = 456
// let c = 123
// let d = a+b+c
// b = 546
// console.log(d)

// let a = "Argen"
// let b = "Izat"
// console.log(`В команде ${a} и ${b}`)
// a = "Web"
// console.log(`В Команде ${a} и ${b}`)







// Array- Массив
// let a = [1,4,2,7,34,8]
// console.log(a)
// let b = a
// console.log(b)
// a[0]=987
// console.log(a[0])
// a[2]=67854
// console.log(a)

// const a = [1,2,3,4,5]
// let sum = 0
// for (let i = 0; i < a.length; i++){
//     sum = sum + a[i]
// }
// console.log(sum)

// let a = [1,2,3,4,5]
// for (let i =0; i < a.length; i++){
//     console.log(a[i] * a[i])
// }

// const a = [54,456,-98, -12, 87,5, -78, 89789, -13, 564]
// for (let i =0; i < a.length; i++){
//     if (a[i] < 0){
//         a[i] = 0
//     }
//     else if (a[i] > 0) {
//              a[i] = 1
//     }
// }
// console.log(a)

/*const a = [1,2,3,4,5]
let sum = 0
for(let i )*/

/*
1) Позитивный жана негативный сандар болгон массив берилет.
Анын ичинен негативный сандардын ордуна 0 деп калыш керек*/

// let a = [-342, 34, -32, 43]
// for (let i = 0; i < a.length; i++){
// 	if (a[i] < 0){
// 		a[i] = 0
// 	}
// }
// console.log(a)





// /1) Позитивный жана негативный сандар болгон массив берилет.
// Анын ичинен позитивный сандардын ордуна 1 деп калыш керек/

// const a = [-45, 6, 65, -78]
// for (let i =0; i < a.length; i++){
// 	if (a[i] < 0){
// 		a[i] = 0
// 	}
// 	else if (a[i] > 0){
// 		a[i] = 1
// 	}
// }
// console.log(a)




/*3) 1ден 20га чейинки сандар болгон массив берилет.
Анын ичинен четный сандардын ордуна 0, нечетныйлардын ордуна 1 деп калыш керек.*/
// let a = [1,2,3,4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// for (let i = 0; i < a.length; i++){
//     if (a[i] % 2 == 0){
//        a[i] = 0
//     }
//     else if (a[i] % 2 == 1){
//         a[i] = 1
//     }
// }
// console.log(a)




/*4) 1ден 20га чейинки массив берилет. Четный сандардын суммасын чыгарыш керек. */

// const a = [1,2,3,4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// let sum = 0
// for (let i = 0; i < a.length; i++){
//     if (a[i] % 2 == 0){
//         sum = sum + a[i]
//     }
// }
// console.log(sum)




// /5) 1ден 20га чейинки сандар берилет. Нечётный сандардын суммасын чыгарыш керек/
// const a = [1,2,3,4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// let sum = 0
// for (let i = 0; i < a.length; i++){
//     if (a[i] % 2 == 1){
//         sum =sum + a[i]
//     }
// }
// console.log(sum)
//                       THE END


// let sum = 0
// for (let i = 1; i < 1001; i++){
//         sum = sum + i
// }
// console.log(sum)

// let sum = 10000
// for (let i =5000; i > 0; i--){
//     if (i % 2 == 0){
//         sum = sum - i
//     }
// }
// console.log(sum)

// let a = [1,2, "a", "b"]
// a[4] = "bc"
// a.length = 6
// a[a.length] = 98
// a.push("g")
// a.pop()
// a.shift()
// a.unshift(567)
// console.log(a)


// object----->Объект

// const slovar = {
//     til: "leangues",
//     ruchka: "pen"
// }
// console.log(slovar)

// const user = {
//     name: "Argen",
//     job: "It",
//     sex: "Man",
//     isMarried: false,
//     staj: 5,
//     hobbies: ["footbal", "coding", "hacking", "sleeping"],
//     imushestvo: {
//         house: true,
//         car: true,
//         jer: true,
//         plane: false
//     }
//
// }
// user.city = "moscow"
// user.city = "bishkek"
// user.staj = 6
// user[2] = 56

// user.hobbies.unshift("tur")
// user.hobbies.pop()
// user.imushestvo.biznes={
//     it: false,
//     amway: true
// }
// "gdfs"
// console.log(user)


// Повторение
// 1) 1ден 100го чейинки сандарды консольго чыгарыш керек
// for (let i = 1; i < 101; i++){
//     console.log(i)
// }

// 2) 80ден 30га чейинки сандарды чыгарыш керек
// for (let i = 80; i > 29; i--){
//     console.log(i)
// }


// 3) -20дан 20га чейинки сандардын ичинен позитивный сандарды эле чыгарыш керек
// for (let i = -20; i < 21; i++){
//     if (i > 0){
//         console.log(i)
//     }
// }

// // 4) 1ден 30га чейинки сандардын ичинен четный сандарды эле чыгарыш керек
// for (let i = 0; i < 31; i++){
//     if (i % 2 == 0){
//         console.log(i)
//     }
// }


// 5) 1ден 5ке чейинки сандардын суммасын чыгарыш керек
// let sum = 0
// for (let i = 1; i < 6; i++){
//     sum=sum+i
// }
// console.log(sum)
//
// // 6) 1ден 10го чейинки сандардын ичинен четный сандардын суммасын чыгарыш керек
// let sum = 0
// for (let i =1; i < 11; i++){
//     if (i % 2 == 0 ){
//         console.log(i)
//     }
// }
//
// 7) Любой сандар менен массив берилет, консольго ар бирин чыгарыш керек
// let a = [21,2,3,1,9,90]
//     console.log(a)

// 8) Любой сандар менен массив берилет, суммасын чыгарыш керек
// const a = [1,5,45,90]
// let sum = 0
// for (let i=0; i < a.length; i++){
//     sum = sum + a[i]
// }
// console.log(sum)

// 9) Любой сандар менен массив берилет, консольго позитивный сандарды чыгарыш керек


// 10) Позитивный дана негативный сандар менен массив берилет, консольго позитивный сандарды чыгарыш керек
//
// 11) Любой сандар менен массив берилет, позитивный сандардын суммасын чыгарыш керек



















