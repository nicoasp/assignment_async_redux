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
        .then(async (response) => {
            //check the response
            console.log("response in xml", response);
            let grResponse = await parseString(response);
            console.log('parsed xml from GR', grResponse);
        })
        .then(() => {
            res.status(200).json({ response: "Yay!"});
        });


});


app.get('/', (req, res, next) => {
    res.end("server listening");
});

app.listen(8081, () => {
    console.log('server listening on 8081');
});
