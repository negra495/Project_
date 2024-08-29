// sort ()
// let arr = [1,2,1,5,3,16,22,2,9,7,5]
// console.log(arr.sort(function(a,b){
//     return b - a
// }))

let arr = [1,2,1,5,3,16,22,2,9,7,5]
console.log(arr.filter(el => {
    return el > 5
}))
console.log(arr.find(el => {
    return el > 5
}))
