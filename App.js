const express = require("express");
const fs = require('fs');

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname));
app.get('/',function(req, res){
    res.sendFile(__dirname+"/Form.html");
});

app.post('/form-submit', function(req, res){
    var data = JSON.stringify(req.body);
    fs.appendFile('FormData.json', data+", ", err=>{
        if(err){
            throw err
        }
        console.log("File is updated.");
        res.sendFile(__dirname+'/FormData.json');
    })
});

app.listen(8000);