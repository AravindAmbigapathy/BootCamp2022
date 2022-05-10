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

const delayedColor = (newColor, delay,doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext()
    }, delay);
}

delayedColor('olive',1000,()=>{
    delayedColor('orange',1000,()=>{
        delayedColor('blue',1000,()=>{
            delayedColor('green',1000,()=>{
                delayedColor('yellow',1000,()=>{
        
                })
            })
        })
    })
})



//---------------promises----------------------------






























