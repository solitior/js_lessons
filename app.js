// prompt('Как тебя зовут?')
// confirm('Нажмите "ОК"')

const heading = document.getElementById('hello')
//const heading2 = document.getElementsByTagName('h2')[0]
//const heading2 = document.getElementsByClassName('h2-class')[0]
//const heading2 = document.querySelector('.sub-hello') 
const heading2 = document.querySelector('#sub-hello') // Возвращает всегда только 1 элемент



// console.dir(heading2)

// const heading3 = heading2.nextElementSibling
// const heading3 = document.querySelector('#head2')

console.log(heading3)

setTimeout(() => {
    addStylesTo(heading, 'JavaScript')
}, 1500)

// setTimeout(() => {
//     addStylesTo(heading3)
// }, 3000)

// console.dir(heading.id)
// console.dir(heading.textContent)

function addStylesTo(node, text) {
    heading.textContent = text
    heading.style.color = 'red'
    heading.style.textAlign = 'center'
    heading.style.backgroundColor = 'gray'
    heading.style.padding = '2rem'
}

heading.onclick = () => {
    if (heading.style.color === 'red') {
        heading.style.color = 'white'
        heading.style.backgroundColor = 'gray'
    } else {
        heading.style.color = 'black'
        heading.style.backgroundColor = 'white'
    }
}


