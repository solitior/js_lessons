const person = {
    firstName: 'Evgen',
    age: undefined,
    isProgrammer: true,
    languages: ['ru', 'eng'],
    // 'complex key': 'Complex Value',
    // ['key_' + (1 + 3)]: 'Computed Key', // key_4
    greet() {
        console.log('greet from person')
    },
    info() {
        // console.log('this', this)
        console.info ('Информация про человека по имени:', this.firstName)
    }
}

// console.log(person.age)
// const ageKey = 'age'
// console.log(person['age'])
// console.log(person['complex key'])
// console.log(person[ageKey])
// person.greet()

// person.age++
// person.languages.push('by')
// // person['key_4'] = undefined
// delete person['key_4']
// console.log(person['key_4'])
// console.log(person)

// const firstName = person.firstName
// const age = person.age
// const languages = person.languages

// const {firstName, age: personAge = 10, languages} = person
// console.log(firstName, personAge, languages)

// console.log(person)

// for (let key in person) {
//    if (person.hasOwnProperty(key)) {
//     console.log('key:', key)
//     console.log('value:', person[key])
//    }
// }

// Object.keys(person).forEach((key) => {
//     console.log('key:', key)
//     console.log('value:', person[key])
    
// });

// Context
// person.info()

const logger = {
    keys() {
        console.log('Object Keys: ', Object.keys(this))
    },
    keysAndValues() {
        // Object.keys(this).forEach(key => {
        //         console.log(`"${key}": ${this[key]}`)
        // const sela = this
        Object.keys(this).forEach(function(key) {
            console.log(`"${key}": ${this[key]}`)
        }.bind(this))
    },
        withParams(top = false, between = false, bottom = false) {
            if (top) {
                console.log('----- start ----')
            }
            Object.keys(this).forEach((key, index, array) => {
            console.log(`"${key}": ${this[key]}`)
            if (between && index !== array.length -1) {
                console.log('---------')
            }
        })
        if (bottom) {
            console.log('----- end ----')
        }
    }
}

logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])
// const bound = logger.keys.bind(person)
// bound()
// logger.keys.call(person)




