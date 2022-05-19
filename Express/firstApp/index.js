const express = require('express');
const app = express();

// app.use((rec,res) => {
//     console.log('got new request');
//     // res.send('Hello, We got your request')
//     res.send('<h1>This is my webPage!</h1>')
// })
app.get('/', (rec, res) => {
    res.send('This is Home!!!')
})

app.get('/r/:subreddit', (rec, res) => {
    const { subreddit } = rec.params;
    res.send(`Browsing the ${subreddit} subreddit`)
})
app.get('/r/:subreddit/:postId', (rec, res) => {
    const { subreddit, postId } = rec.params;
    res.send(`viewing post id ${postId} subredditos ${subreddit}`)
})

app.post('/cats', (rec, res) => {
    res.send('This is post rec')
})

app.get('/cats', (rec, res) => {
    res.send('Meow!!')
})

app.get('/dogs', (rec, res) => {
    res.send('Wolf!!')
})

app.get('/search', (rec, res) => {
    const { q } = rec.query;
    if (!q) {
        res.send('Nothing found')
    }
    res.send(`<h1>Search result for :${q}</h1>`)
})

app.get('*', (rec, res) => {
    res.send('I dont Know to route there')
})

app.listen(8080, () => {
    console.log('listening on 8080');
})








