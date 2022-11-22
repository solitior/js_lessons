// greet('Евгений')
// greet2('Евгений')


// function decloration
// function greet(firstname) {
//     console.log('Привет, ', firstname)
// }

// function expression // Нельзя сначала обратиться, а потом создать 
// const greet2 = function greet2(firstname) {
//     console.log('Привет2, ', firstname)
// }

// console.log(typeof greet)
//console.dir(greet)

// Анонимные функции
// let counter = 0
// const interval = setInterval(function() {
//     if (counter === 150) {
//       clearInterval(interval)    
//     }  else {
//         console.log(++counter)
//     }
// }, 10)

// Стрелочная функция

// const arrow = (firstname, age) => {
//     console.log('Привет, ', firstname , age)
// }

// const arrow2 = firstname => console.log('Привет2, ', firstname)

// arrow('Евгений')
// arrow2('Евгений')

// const pow2 = num => num ** 2
// console.log(pow2(5))

// Параметры по умолчанию 

// const sum = (a, b) => a + b
// console.log(sum(41, 1))

// const sum2 = (a, b = 1) => a + b
// console.log(sum2(41))

// const sum3 = (a, b = a * 5) => a + b
// console.log(sum3(4))

// function sumAll(...all) {
//    let result = 0
//    for (let num of all) {
//        result += num
//    }
//    return result
// }

// const res = sumAll(4, 6, 1, 7, 4, 3)
// console.log(res)

// // Замыкания
// function createMember(firstName) {
//     return function(lastName) {
//         console.log(firstName + lastName)
//     }
// }
// const logWithLastName = createMember('Евгений')
// console.log(logWithLastName('Реут'))

function logPerson(i, name, age) {
    
    return `${i[0]}${name}${i[1]}${age}${i[2]}`
}
const firstname = 12
let age = 22
const output = logPerson`${firstname} ${age}`

console.log(output)