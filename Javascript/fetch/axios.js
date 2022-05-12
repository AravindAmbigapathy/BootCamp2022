// axios.get('https://swapi.dev/api/people/1/')
// .then((res)=>{
//     console.log('response',res);
// }).catch((e)=>{
//     console.log('error',e);
// })

const getstar = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
        console.log(res.data);
    } catch (e) {
        console.log('error', e);
    }
};

getstar(6);
getstar(11);

const button = document.querySelector('button');
const jokes = document.querySelector('#jokes');

const addNewjoke= async()=>{
    const jokeText= await getDadJoke()
    const newLi = document.createElement('li')
    newLi.append(jokeText)
    jokes.append(newLi)
}

const getDadJoke = async () => {
    try{
        const res = await axios.get('https://icanhazdadjke.com/', { headers: { Accept: 'application/json' } })
        console.log(res.data.joke);
        return res.data.joke;
    }catch(e){
        return 'No Jokes Available!!'
    }
}
button.addEventListener('clcik', addNewjoke);

