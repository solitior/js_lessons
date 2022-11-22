// Переменные

// const firstName = 'Evgen'

// let age = 22
// const isProgrammer = true

// let _private = 'private'
// let $ = 'some value'

// // let if = 'awdawd' // ошибка

// let num56 = '56'
// // let 56num = '56' // ошибка

// Мутирование

// // console.log('Имя: ' + firstName + ', а возраст: ' + age) // age.toString() для перевода из числа в строку
// // alert('Имя: ' + firstName + ', а возраст: ' + age) 

// // const lastName = prompt('Введите фамилю')
// // alert(firstName + ' ' + lastName) 

// Операторы

// let currentYear = 2022
// const birthYear = 1999

// // const age1 = currentYear - birthYear

// const a = 10
// const b = 5
// let c = 32
// // c = c + a
// c += a
// c -= a

// console.log(a + b)
// console.log(a - b)
// console.log(a / b)
// console.log(a * b)
// console.log(currentYear++)
// console.log(currentYear)
// console.log(c)

// Типы данных

// const isProgrammer = true
// const firstName = 'Evgen'
// let age = 22
// let x

// console.log(typeof isProgrammer) 
// console.log(typeof firstName)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// Приоритеты 

// let fullAge = 22
// const birthYear = 1999
// let currentYear = 2022

// // mdn и оператор для поиска документации с информацией

// const isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)

// Условные операторы

// let courseStatus = 'fail'

// if (courseStatus === 'ready') {
//    console.log('Курс уже готов и его можно проходить')
// }
// else if (courseStatus === 'pending') {
//    console.log('Курс пока нахходится в процессе разработки')
// }
// else {
//     console.log('Курс не получился')
// }

// const isReady = false

// if (isReady) {
//     console.log('Все готово')
// }
// else {
//     console.log('Все не готово')
// }

// isReady ? console.log('Все готово') : console.log('Все не готово') // то же самое, что и сверху. ? = if , : = else

// const num1 = 42
// const num2 = '42'
// console.log(num1 === num2) // два равно == приводят num1 к строке три равно === стравнивают строчку с числом

// Булевая логика https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators

// Функции

// function calculateAge(year) {
//     return 2022 - year
// }

// let myAge = calculateAge(1999)
// console.log(--myAge)
// console.log(calculateAge(1999))

// function logInfo(name, year) {
//     let age = calculateAge(year)

//     if (age < 100) {
//         console.log('Имя' + name + ' сейчас ему '+ age )
//     }  else {
//         console.log('Введите настоящий год')
//     } 


// }
// logInfo( 'Evgen', 1999)

// Массивы
// const cars = ['мазда', 'форд', 'мерседес']
// let cars = new Array('мазда', 'форд', 'мерседес')
// console.log(cars,length)

// console.log(cars[1])
// console.log(cars[3])

// cars[0] = 'Порше'
// console.log(cars)

// cars[cars.length] = 'Mazda' // добавить элемент в конец
// console.log(cars)

// Циклы

// const cars = ['мазда', 'форд', 'мерседес', 's']

// for (let i = 0; i < cars.length; i++) {
//    let car = cars[i]
//    console.log(cars)
// }

// for (let car of cars) {
//     console.log(car)
// }

// Объекты

const person = {
    firsName: 'Evgen',
    lastName: 'Reut',
    year: 1999,
    languages: ['Ru', 'Eng'],
    hasWife: false,
    greet: function() {
        console.log('greet from person')
    }
}

console.log(person.firsName)
console.log(person['lastName'])
const key = 'languages'
console.log(person[key])
person.hasWife = true
console.log(person)
person.greet()