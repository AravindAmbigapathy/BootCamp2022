// setTimeout(()=>{
//     document.body.style.backgroundColor='red'
//     setTimeout(()=>{
//         document.body.style.backgroundColor='yellow'
//         setTimeout(()=>{
//             document.body.style.backgroundColor='orange'
//             setTimeout(()=>{
//                 document.body.style.backgroundColor='black'
//                 setTimeout(()=>{
//                     document.body.style.backgroundColor='blue'
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)

const delayedColor = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext()
    }, delay);
}

// delayedColor('olive', 1000, () => {
//     delayedColor('orange', 1000, () => {
//         delayedColor('blue', 1000, () => {
//             delayedColor('green', 1000, () => {
//                 delayedColor('yellow', 1000, () => {

//                 })
//             })
//         })
//     })
// })



//---------------promises----------------------------
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve()
        }, delay);
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('black', 1000))
//     .then(() => delayedColorChange('brown', 1000))

async function rainbow() {
    await delayedColorChange('blue', 1000)
    await delayedColorChange('pink', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('black', 1000)
    await delayedColorChange('yellow', 1000)
    return 'All done!!'
}
// rainbow().then(r=>{console.log(r);})

async function printing() {
    await rainbow();
    console.log('End of it');
}
printing()

// async function hello(){

// }
// const singing=async()=>{
//     throw new Error('uh ohhh')
//     return 'lalala'
// }

// singing().then((data)=>{
//     console.log('Promises resolved',data);
// }).catch((err)=>{
//     console.log('promise rejectetd',err);
// })


const login = async (username, pass) => {
    if (!username || !pass) throw 'Missing Cred'
    if (pass === 'corgi') return 'Welcome'
    throw 'Invalid Pass'
}

login('asdfgh', 'corgi')
    .then(msg => {
        console.log('Logged In!!');
        console.log(msg);
    })
    .catch(err => {
        console.log('Error!!');
        console.log(err);
    })




















