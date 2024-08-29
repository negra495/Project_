// map, filter -> []
// let arr = ['Argen', 'Timur', 'Zalkarbek', 'Shergazy']
// console.log(arr.filter(function (el,idx, array){
//     // return el + '->'+idx
//     // return el.length > 5
//     // return array
//     return el.length === 5
//
// }))


let arr = [1,2,3,4,5,6,7,8,9,10]
console.log(arr.filter(function (el){
    return el % 2 === 0
    // return el % 2 !== 0
}).map(function (el){
    return el * 2
}))