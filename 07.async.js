//event loop

// const timeout = setTimeout(() => {
    
//     console.log('after timeout')
// }, 1000)
// clearTimeout(timeout)


// const interval = setInterval(() => {
    
//     console.log('after interval')
// }, 1000)
// // clearInterval(interval)

// const delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait)
// }

// delay(() => {
//     console.log('after 2 seconds')
// }, 2000)


const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {

 
    setTimeout(() => {
        //resolve() 
        reject('Something is going wrong')
        }, wait)
    })
    return promise
}

// delay(1000)
// .then(() => {
//     console.log('100')
// })
// .catch(err => console.error('error:', err))
// .finally(() => console.log('finally'))

const getData = () => new Promise( resolve => resolve([
    1, 1, 2, 3, 4, 8 , 13
]))

// getData().then(data => console.log(data))

async function asyncExample() {
    try {
        await delay(300) 
        const data = await getData()
        console.log('Data', data)
    } catch (e) {
        console.log(e)
        } finally {
            console.log('finally')
        }
}
asyncExample()
