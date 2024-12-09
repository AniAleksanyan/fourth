import express from 'express'
import bodyParser from 'body-parser'
const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/", function(req, res){
    res.write("ok ")
    res.write("hello2 ")
    res.end("hello")
});

app.get("/contacts", function(req, res) {
    const arr = ["Tiko", "Narek", "Karen"];

    res.send(arr);
})

app.post("/contacts", function(req, res) {
    console.log(req.body);

    res.end("message: ok")
})

app.get("/contacts/:id", function(req, res) {
    const {id} = req.params;

    res.send({user:id});
})


app.listen(5001)