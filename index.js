const express = require('express');
const app = express();
fetch = require('node-fetch');
require('dotenv').config();
app.use(express.static('public'));
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log('listening on', 'http://localhost:5000')
})
app.get('/', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
        .then(result => result.json())
        .then(data => {
            //res.json(data)
            res.render('pages/myShows.ejs', {
                title: 'MYSHOWS ',
                data: data,
            })
        })

})
app.get('/moviesDetails/:id', (req, res) => {
    fetch(`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${process.env.API_KEY}&language=en-US`)
        .then(result => result.json())
        .then(data => {
            console.log(data)
            //res.json(data)
            res.render('pages/moviesDetails.ejs', {
                title: 'MYSHOWS ',
                data: data
            })
        })


})
app.get('/genre', (req, res) => {
    fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.API_KEY}&language=en-US`)
        .then(result => result.json())
        .then(data => {
            //res.json(data)
            res.render('pages/genre', {
                title: 'MYGENRE ',
                data: data,
            })
        })

})