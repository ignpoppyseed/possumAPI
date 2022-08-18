var express = require("express");
const fs = require('fs');
var path = require('path');
var favicon = require('serve-favicon');
var app = express();app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.use('/images', express.static('./images'));

app.get("/", (req, res, next) => {

    res.writeHead(200, {'content-type': 'text/html'});
    fs.createReadStream('index.html').pipe(res)

});
app.use("/random", (req, res, next) => {

    const length = fs.readdirSync('./images').length
    min = Math.ceil(length);
    max = Math.floor(1);
    var num = Math.floor(Math.random() * (max - min + 1) + min);
    var respn1 = 'https://possums.cloverbrand.xyz/images/'+num+'.jpg'
    res.json({"url": respn1});

});
