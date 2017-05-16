require('isomorphic-fetch');
//set env variables
require('dotenv').config();


const express = require('express');
const app = express();
//xml parser
var parseString = require('xml2js').parseString;



app.get('/api/search', (req, res, next) => {
    let title = req.query.title;
    let author = req.query.author;

    if (!title || !author) {
        //search by one
        let q = title ? title : author;
        let field = title ? "title" : "author";
        let queryString = `?q=${q}&key=${process.env.GOODREADS_API_KEY}&search[field]=${field}`;
        fetch(`https://www.goodreads.com/search/index.xml${queryString}`)
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
                res.status(200).json(json.GoodreadsResponse.search[0].results[0].work);
            })
            .catch((err) => {
                res.json({
                    err: "There was an error"
                });
            })
    }
    // both are present
    let queryString = `?q=${q}&key=${process.env.GOODREADS_API_KEY}`
    let titleFetch = fetch(`https://www.goodreads.com/search/index.xml${queryString}`)
        .then((response) => {
            return response.text()
        })
        .then((textResponse) => {
            return new Promise((resolve, reject) => {
                parseString(textResponse, (err, json) => {
                    resolve(json)
                })
            })
        });

    let authorFetch = fetch(`https://www.goodreads.com/search/index.xml${queryString}`)
        .then((response) => {
            return response.text()
        })
        .then((textResponse) => {
            return new Promise((resolve, reject) => {
                parseString(textResponse, (err, json) => {
                    resolve(json)
                })
            })
        });

    Promise.all([titleFetch, authorFetch])
        .then(([booksByTitle, booksByAuthor]) => {

            booksByTitle = booksByTitle.GoodreadsResponse.search[0].results[0].work;
            booksByAuthor = booksByAuthor.GoodreadsResponse.search[0].results[0].work;
            
            


        })


});


app.get('/api/books/:id', (req, res, next) => {
    const id = req.params.id || 1;
    let queryString = `?key=${process.env.GOODREADS_API_KEY}`
        //request data as json with extension
    fetch(`https://www.goodreads.com/book/show/${id}.json${queryString}`)
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
            //grab book infomation from response;
            res.status(200).json(json.GoodreadsResponse.book[0]);
        })
        .catch((err) => {
            res.json({
                err: "There was an error"
            });
        })
});



app.get('/', (req, res, next) => {
    res.end("server listening");
});

app.listen(8081, () => {
    console.log('server listening on 8081');
});
