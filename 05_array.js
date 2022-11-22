const cars = ['Мазда', 'Форд', 'Мерседес', 'БМВ']
// const people = [
//     {firsName: 'Евгений', age: 22},
//     {firsName: 'Влад', age: 30},
//     {firsName: 'Петя', age: 30}
// ]
const fib = [1,  1, 2, 3, 5, 8, 13, '21', true]

//добавить методом
// cars.push('Порше') //добавить в конец
// cars.unshift('Волга') //добавить в начало 
// const  firstCar = cars.shift() // удалить первый элемент
// const lastCar = cars.pop() // удалить последний элемент
// console.log(cars)

// console.log(cars.reverse())
// console.log(cars)

// const index = cars.indexOf('БМВ')
// cars[index] = 'Порш'
// console.log(cars)

// let findedPerson
// for (const person of people) {
//     if (person.age === 30) {
//         findedPerson = person
//     }
// }
// console.log(findedPerson)

// const index = people.findIndex(function (person){
//     return person.age === 30
// })
// const person = people.find(function (person){
//     return person.age === 30
// })

// const person = people.find(person => person.age === 30)

// console.log(person)

// console.log(cars.includes('Мазда'))

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })
// console.log(upperCaseCars)

// const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)

// const pow2Fib = fib.map(pow2).map(Math.sqrt)
// console.log(pow2Fib)

// const pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => num > 100)
// console.log(pow2Fib)
// console.log(filteredNumbers)

const people = [
    {firsName: 'Евгений', age: 22},
    {firsName: 'Влад', age: 30},
    {firsName: 'Петя', age: 19}
]
const allAge = people
    .filter(person => person.age > 20)
    .reduce((acc, person) => {
      acc += person.age
      return acc
}, 0)

console.log(allAge)

// Задача 1

// const text = 'Случайный текст'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)
