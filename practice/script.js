// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно',
// иначе выведите 'Неверно'.
// let a = 10
// if (a === 10) {
//     console.log('Верно')
// } else{
//     console.log('Неверно')
// }

// 2. Вам даны две переменные a=50, b=100. Составьте условие,
// по которому в консоль будет выводиться 'a больше b', 'a меньше b'.
// let a = 50
// let b = 100
// if (a > b){
//     console.log('a больше b')
// } else {
//     console.log('a меньше b')
// }

// 3. Вам дана переменная a=-2. Составьте условие, по которому в
// консоль будет выводиться 'positive' - если число больше 0,
// 'равно' если число равно 0, "negative" если число меньше 0.
// let a = 0
// if (a > 0){
//     console.log('positive')
// } else if (a===0){
//     console.log('равно')
// } else{
//     console.log('negative')
// }


// 4. Вам дана переменная number=45. Составьте условие,
// по которому будет выводиться в консоль "Четное число", "Нечетное число".
// let number = 45
// if (number % 2 ===0){
//     console.log("Четное число")
// }else{
//     console.log("Нечетное число")
// }


// 5. Вам даны две переменные a=10, b=2. Составьте условие,
// по которому, остаток деления a на b, будет выводиться консоль
// "Четное число", "Нечетное число".
// let a = 10
// let b = 2
// let result = a / b
// if (result % 2 === 0){
//     console.log("Четное число")
// }else{
//     console.log("Нечетное число")
// }

// 6. Вам дана переменная s. Составьте условие, по которому в
// консоль будет выводится тип этой переменной - "boolean", "number", "string".
// typeof
// let typeOf = true
// console.log(typeof 'motion')
// console.log(typeof 123456)
// console.log(typeof false)
// console.log(typeof undefined)


// 7. Вам дана переменная а. Если переменная a больше
// одного и меньше 9-ти, то выведите 'Верно', иначе выведите 'Неверно'.
// function muFn (a){
//     if (a >= 1 && a<=9){
//         return ('true')
//     }else{
//         return ('false')
//     }
// }
//
// console.log(muFn(5))


// 8. Вам дана переменная а. Если переменная a равна
// трем или равна семи, то прибавьте к ней 7, иначе поделите
// ее на 10. Выведите новое значение переменной в консоль.
// function meFn(a){
//     if (a === 3 || a === 7){
//         return (a + 7)
//     }else{
//         return (a / 10)
//     }
// }
//
// console.log(meFn(3))

// 9. Вам даны переменные а , b. Если переменная a равна
// или меньше 0, а переменная b больше или равна 5, то
// выведите сумму этих переменных, иначе выведите их разность (результат вычитания).

// function myFn(a, b){
//     if (a <= 0 || b <=5){
//         return (a + b)
//     }else{
//         return (a - b)
//     }
// }
//
// console.log(myFn(2, 4))

// 10. Вам даны переменные a , b. Если переменная a больше
// 4-х и меньше 10-ти, или переменная b больше или равна
// 7-ми и меньше 17-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
// function meFn(a, b){
//     if (a > 4 && a < 10 || b >= 7 && b <17){
//     return ('Верно')
// }else{
//     return ('Неверно')
// }
// console.log(meFn(2, 5))



// array function


// const myFn = (a, b) =>{
//     if (a === 5 || b === 5){
//         return 'равно'
//     }else{
//         return 'неравно'
//     }
// }
// console.log(myFn(5, 5))
// function myFunc(){
//
// }


// function expression
// const func = function() {
//     return 'expression'
// };
// console.log(func())



// 1  Дан массив ['a', 'b', 'c'].
// Добавьте ему в конец элементы 1, 2, 3.
// let arr = ['a', 'b', 'c']
// arr. splice(3, 0, 1, 2, 3)
// arr. push(1, 2, 3)
// console.log(arr)
// 2 Даны два массива: [1, 2, 3] и [4, 5, 6].
// Объедините их вместе.
// let arr = [1, 2, 3]
// let arr2 = [4, 5, 6]
// console.log(arr.concat(arr2))
// 3 Дан массив [1, 2, 3].
// Добавьте ему в конец элементы 4, 5, 6.
// let arr = [1, 2, 3]
// arr.push(4, 5, 6)
// console.log(arr)
// 4 Дан массив [1, 2, 3].
// Добавьте ему в начало элементы 4, 5, 6.
// let arr = [1,2,3]
// arr.unshift(4, 5, 6)
// console.log(arr)
// 5 Дан массив ['js', 'css', 'jq'].
// Выведите на экран первый элемент.
// let arr = ['js', 'css', 'jq']
// arr.shift()
// console.log(arr)
// console.log(arr[0])
// 6 Дан массив . ['js', 'css', 'jq']
// Выведите на экран последний элемент.
// let arr = ['js', 'css', 'jq']
// console.log(arr.pop())
// 7  Дан массив [1, 2, 3, 4, 5].
// С помощью метода slice запишите в новый элементы [1, 2, 3].
//  let arr = [1, 2, 3, 4, 5]
// console.log(arr.slice(0, 3))
// 8  Дан массив [1, 2, 3, 4, 5].
// С помощью метода slice запишите в новый элементы [4, 5].
// let arr = [1, 2 , 3 , 4, 5]
// console.log(arr.slice(3))
// arr.shift()
// arr.shift()
// arr.shift()
// console.log(arr)
// 9  Дан массив [1, 2, 3, 4, 5].
// С помощью метода splice преобразуйте массив в [1, 4, 5].
// let arr = [1, 2, 3, 4, 5]
// arr.splice(0, 1 )
// arr.splice(3, 2)
// console.log(arr)
// 10  Дан массив [1, 2, 3, 4, 5].
// С помощью метода splice запишите в новый массив элементы [2, 3, 4].
// let arr = [1, 2, 3, 4, 5]
// arr.splice(0 ,1)
// arr.pop()
// console.log(arr)
// 11  Дан массив [1, 2, 3, 4, 5].
// С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let arr = [1, 2, 3, 4, 5]
// arr.splice(3,6 , 'a','b','c',4,5 )
// console.log(arr)
// 12  Дан массив [1, 2, 3, 4, 5].
// С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let arr = [1, 2, 3, 4, 5]
// arr.splice(1, 0, 'a','b')
// arr.splice(6,0,'c')
// arr.splice(8,0, 'e')
// console.log(arr)
// 13  Дан массив [3, 4, 1, 2, 7].
// Отсортируйте его.





// ARRAY METHODS

// let arr = ['motion', 2018, true, 'web']
// arr.splice (0, 2, 'developer', 2023, 1)
// arr.splice (5, 0, 'Kyrgyzstan')
//
//
// console.log(arr)


// console.log(arr.slice(1))
// arr.unshift (10)
// arr.shift()
// arr.shift()
// arr.unshift('motion')

// arr.push(false)
// arr.pop()
// arr.pop()
// console.log(arr)



