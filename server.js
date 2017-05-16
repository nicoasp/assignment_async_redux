require('isomorphic-fetch');
//set env variables
require('dotenv').config();


const express = require('express');
const app = express();
//xml parser
var parseString = require('xml2js').parseString;



app.get('/api/search', (req, res, next) => {
    //send request to goodreads
    let testQueryString = `?key=${process.env.GOODREADS_API_KEY}&q=Ender%27s+Game`
    fetch(`https://www.goodreads.com/search/index.xml${testQueryString}`)
        .then((response) => {
            return response.text()
        })
        .then((textResponse) => {
            return new Promise((resolve, reject) => {
                parseString(textResponse, (err, json) => {
                    resolve(json)
                })  
            })          
        })
        .then((json) => {
            res.status(200).json(json);
        })
        .catch((err) => {
            res.json({err: "There was an error"});
        })
});


app.get('/api/books/:id', (req, res, next) => {
    //send request to goodreads
    let testQueryString = `?key=${process.env.GOODREADS_API_KEY}`
    fetch(`https://www.goodreads.com/book/show/50.xml${testQueryString}`)
        .then((response) => {
            return response.text()
        })
        .then((textResponse) => {
            return new Promise((resolve, reject) => {
                parseString(textResponse, (err, json) => {
                    resolve(json)
                })  
            })          
        })
        .then((json) => {
            res.status(200).json(json);
        })
        .catch((err) => {
            res.json({err: "There was an error"});
        })
});



app.get('/', (req, res, next) => {
    res.end("server listening");
});

app.listen(8081, () => {
    console.log('server listening on 8081');
});
