const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'))


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
//path and __dirname will be refer to current folder path


app.get('/', (rec, res) => {
    res.render('home')
})

app.get('/cats',(rec,res)=>{
    const cats=[
        'Blue','Rocket','Monty','Puppy','Ammu'
    ]
    res.render('cats',{cats})
})

app.get('/r/:subreddit', (rec, res) => {
    const { subreddit } = rec.params;
    res.render('subreddit', { subreddit })
})

app.get('/rand', (rec, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    res.render('random', { num })
})

app.listen(3000, () => {
    console.log('Listening on 3000');
})








