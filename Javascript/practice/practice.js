//--------------Team1---------------------
let teams = 4;
teamSize = 3;
let Totalplayer = teams * teamSize;
let overs = 5;
let runs1 = [];
function ScoreO1(TotalPlayer) {
    for (let i = 0; i < Totalplayer; i++) {
        runs1.push(Math.floor(Math.random() * (60 - 20) + 20));
    }
    // console.log(runs1);
    let runsCopy = [...runs1];
    let arr = [];
    // console.log(runsCopy);
    let num = Math.ceil(runs1.length / 3);
    // console.log(num);
    for (let i = 0; i < num; i++) {
        let val = runs1.splice(0, 3);
        // console.log(val);
        let res = val.reduce((ini, cur) => ini + cur);
        // console.log(res);
        arr.push(res);
    }
    console.log(arr);
    // console.log(arr);
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    console.log(`Max is ${min}, MIn id ${max}`);
    let ScoreObject = Object.assign({}, arr);
    console.log(ScoreObject);

    let maxKey = 0;
    let minKey = 0;
    let secondKey = 0;
    for (let val in ScoreObject) {
        if (ScoreObject[val] === max) {
            maxKey = val;
        } else if (ScoreObject[val] === min) {
            minKey = val;
        } else {
            secondKey = val;
        }
    }

    let Prize = [0, 0, 0];
    for (let i in Prize) {
        if (maxKey === i) {
            Prize[maxKey] = 100;
        } else if (minKey === i) {
            Prize[minKey] = 10;
        } else {
            Prize[secondKey] = 50;
        }
    }
    // console.log(Prize);
    return Prize;
}
let Over1;
let result = []
for (let i = 1; i <= overs; i++) {

    Over1 = ScoreO1(Totalplayer);
    // ScoreO1(Totalplayer);
    result.push(Over1)
}
console.log(result);

let arr1 = [];

for (let i = 0; i < result[0].length; i++) {
    let sum = 0;
    for (let j = 0; j < result.length; j++) {
        sum = sum + result[j][i];

    }
    arr1.push(sum);
}
console.log(arr1);

// let val1=[]
// let val2=[]
// let val3=[]
// for (let i = 0; i < result.length; i++) {

//    val1.push(result[i][0])
//    val2.push(result[i][1])
//    val3.push(result[i][2])
    
// }
// let num1=val1.reduce((ini,cur)=>{
//     return ini+cur
// })
// let num2=val2.reduce((ini,cur)=>{
//     return ini+cur
// })
// let num3=val3.reduce((ini,cur)=>{
//     return ini+cur
// })
// let resultvalue=[num1,num2,num3]
// console.log(resultvalue);