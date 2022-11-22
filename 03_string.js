// const firstname = 'Евгений'
// let age = 22

// function getAge() {
//     return age
// }

// const output = 'привет меня зовут ' + firstname + ', мне ' + age + ' лет'
// const output = `Привет, меня зовут ${firstname} и мне ${age < 30 ? 'A' : 'B'} года.`


// console.log(output)

// const output = `
//   <div> This is div </div>
//   <p>this is p</p>
// `
// console.log(output)

// const firstname = 'Евгений'

// console.log(firstname.length)
// console.log(firstname.toUpperCase())
// console.log(firstname.toLowerCase())
// console.log(firstname.charAt(0))
// console.log(firstname.indexOf('гений'))
// console.log(firstname.startsWith('Е'))
// console.log(firstname.toLowerCase().startsWith('е'))
// console.log(firstname.endsWith('ий'))
// console.log(firstname.repeat(5))
// const string = '            wqe            '
// console.log(string)
// console.log(string.trim())
// console.log(string.trimStart())
// console.log(string.trimEnd())

function logPerson(s, name, age) {
    if (age <0) {
        age = 'Еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const firstname = 'Евгений'
let age = 22
const output = logPerson`Имя: ${firstname}, Возраст:${age}`

console.log(output)



