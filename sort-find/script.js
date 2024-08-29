// sort ()
// let arr = [1,2,1,5,3,16,22,60,2,9,7,5]
// console.log(arr.sort(function(a,b){
//     return a - b
// }))
// let arr = [1,5,3,8,90,55]
// console.log(arr.sort())

// Find //

let arr = [1,2,1,5,3,16,22,60,2,9,7,5]
console.log(arr.filter(el => {
    return el > 5
}))
console.log(arr.find(el =>{
    return el > 5
}))