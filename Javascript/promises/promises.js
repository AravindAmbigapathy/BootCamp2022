const myFunc = new Promise((resolve, reject) => {
    const error = false
    if (!error) {
        resolve('You are Genius')
        console.log('It is resolvedd');
    } else {
        console.log('It is rejected');
        reject('error is true, stupidd!!')
    }
}).then((r) => {
    console.log(r);
}).catch((e) => {
    console.log(e);
})


const fakeRe=(url)=>{
    return new Promise((resolve, reject) => {
        const rand=Math.random()
    setTimeout(() => {
        if (rand<0.5) {
            
            resolve('Fake data')
        }
        reject('Reuest Erro')
    }, 1000);
    })

}
fakeRe('/dogs/1')
.then((r)=>{
    console.log('Done reuest!!');
    console.log(r);
}).catch((e)=>{
    console.log('ohh Noo!',e);
})






























































































































