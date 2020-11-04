const http = require('http');
const path = require('path');
const express = require("express");
const app = express();
const port = 8080;
// const favicon = require('express-favicon');
// app.use(favicon(__dirname + './build/favicon.ico'));

const bodyParser = require('body-parser');

// const root = 'http://jsonplaceholder.typefcode.com/';
// let uri = root + 'posts'
// let formdata;
// let option = {
//     method: 'POST',
//     node: 'cors',
//     body: formdata
// }
// // let req = new Request(uri, option);

// fetch(req)
//     .then((response) => {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error('error')
//         }
//     })
//     .then((j) => {
//         console.log(j);
//     })
//     .catch((err) => {
//         console.log('Error', err);
//     });

// app.use(bodyParser.urlencoded());
// app.use(express.static(__dirname + './build'));

app.get('/', function (req, res) {
    // res.sendFile(path.join(__dirname, "./build"));
    res.send("hello world").end()
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})