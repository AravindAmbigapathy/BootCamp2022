const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })

    .then(() => {
        console.log('It is Open!!');
    }).catch(err => {
        console.log('OH NO Error' + err);
    })


const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})



const Movie = mongoose.model('Movie', movieSchema)
// const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' })

// Movie.insertMany([
//     {
//         title: "The Shawshank Redemption",
//         year: 1994,
//         director: "Frank Darabont",
//         duration: "2h 22min",
//         genre: ["Crime", "Drama"],
//         rate: 9.3,
//     },
//     {
//         title: "The Godfather",
//         year: 1972,
//         director: "Francis Ford Coppola",
//         duration: "2h 55min",
//         genre: ["Crime", "Drama"],
//         rate: 9.2,
//     },
//     {
//         title: "Mission Impossible",
//         year: 1999,
//         director: "zzz",
//         duration: "2h 55min",
//         genre: ["Action"],
//         rate: 7.2,
//     }
// ]).then((data)=>{
//     console.log('it worked!!');
//     console.log(data);
// }).catch(err=>{
//     console.log(err);
// })




























































































