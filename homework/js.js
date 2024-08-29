

// task 1
// Напишите функцию, которая вернет текст внутри первого тэга - a.
//
//     Task 2
// Напишите функцию, которая вернет массив с текстами внутри тэгов - a.
//
//     Task 3
// Напишите функцию, которая вернет массив с текстами внутри
// тэгов элементов с классом nav__link__item
// const all = document.querySelectorAll(".nav__link__item+=-")
// Task 4
// Напишите функцию, которая вернет массив со значениями
// атрибута class внутри тэгов элементов с классом nav__link__item
//   const task = document.querySelectorAll(".nav__link__item")
//
//   console.log(Array.from(task).map(el=> el.getAttribute("class")))

// Task 5
// Напишите функцию, которая вернет массив со значениями
// атрибута data-link внутри тэгов элементов с классом nav__link .
// const task5 = document.querySelectorAll(".nav__link")
//   console.log(Array.from(task5).map(el=> el.getAttribute("data-link")))

//
// Task 6
// Вы пишете робота, который проверяет, что страница отображается корректно,
// по правилам внутри элемента
// с классом nav__link должен быть текст порядкового номера индекса.
// И у этого же элемента должен быть класс с текстовым номером индекса.
//     Например
// <a class="nav__link  first" data-link="1">first</a>
// Но база данных была повреждена и по ошибке некоторые
// элементы стали отображаться с некорректно.
// <a class="nav__link  zero" data-link="0">first</a>
// Ваша задача вернуть массив атрибутов data-link у элементов, у которых
// сломана логика. То есть текст внутри не имеет соответствующего класса.
// Используйте map для обхода массива. Иными словами элемент считается
// сломанным если в классах не содержится текста элемента.

// const collection = document.querySelectorAll(".nav__link")

// const collection = Array.from(document.querySelectorAll(".nav__link"))
// collection.forEach(el =>{
//   if (el.classList[1] !==el.innerHTML){
//     console.log(el.getAttribute("data-link"))
//   }
//   // console.log(el.classList[1])
// })
//   // console.log(collection)
//
// collection.filter(el=>{
//   return el.classList[1] !== el.innerHTML
// }).map(el=>{
//   el.getAttribute("data-link")
// })
//   console.log(collection.filter(el=>{
// return el.classList[1] !== el.innerHTML
//   }).map(el=>{
//     return el.getAttribute("data-link")
//   }))







//
// Task 7
// Обновите текст всех элементов с классом nav__link , по следующему шаблону
// <a href="#" class="nav__link zero" data-link="0">zero</a>
// Стало
// <a href="#" class="nav__link zero" data-link="0"> 0 zero</a>
// <a href="#" class="nav__link first" data-link="1">five</a>
// Стало
// <a href="#" class="nav__link first" data-link="1">1 first</a>
// То есть `${data-link
// Используйте forEach
// yourElementsArray.forEach((element) => {
//
// })

// const task7 = document.querySelectorAll(".nav__link")
//
// task7.forEach(el=>{
//   el.innerHTML = `${el.getAttribute("data-link")}${el.classList[1]}`
// })

// Task 8
// Вы знаете, что в документе есть сломанные элементы с классом nav__link.
// Удалите их на странице. Для удаления используйте forEach`.
// Что бы удалить элемент из DOM - используйте метод .remove()
//
// yourElementsArray.forEach((element) => {
//
// })

// const task8 = document.querySelectorAll(".nav__link")
//
// task8.forEach(el=>{
//     if (el.classList[1] !== el.innerHTML){
//         el.remove()
//     }
// })


//
//
// Task 9
// Напишите функцию, которая добавляет div элемент внутрь элемента
// с селектором #append-div
// у дива должен быть айди #just-text и текст внутри Hello

// const div = document.querySelector('append-div')
// const newEl = document.createElement('div')
// newEl.setAttribute('id','just-text')
// div.appendChild(newEl)
//   console.log(div)
//   document.querySelector('#just-text').innerHTML='hello'


// Task 10
// Напишите функцию, которая добавляет ul элемент внутрь элемента с
// селектором #append-div у ul элемента должен быть айди
// #list Внутри ul элемента находится 10 тегов li с текстом
// от Child 1,...., Child 10
// Используйте:
// document.createElement(tagName).
// element.appendChild(element2).
// и другие...

// const div = document.querySelector('#append-div')
// const newEl = document.createElement('ul')
// newEl.setAttribute('id','list')
// div.appendChild(newEl)
// console.log(div)
// document.querySelector('#list').innerHTML = '<li>Child1</li><li>Child2</li><li>Child3</li><li>Child4</li><li>Child5<li>Child6</li><li>Child7</li><li>Child8</li><li>Child9</li><li>Child10</li>'

