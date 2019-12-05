var express = require('express');
var app = express();
var port = 3000
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var urlencodedParser = bodyParser.urlencoded({extended: false});

// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port);
console.log("Listening at 3000");
app.set("view engine", "ejs");
app.use(express.static("./script"));
// app.use(express.static(__dirname +'/views'));

// module.exports = function(app){
var personSchema = new mongoose.Schema({
    name: String,
    in: String,
    out: String
});
var person = mongoose.model("crudcollections", personSchema);

//sets uri for connection
mongoose.connect("mongodb://localhost:27017/test", {useNewUrlParser: true});
//sets error trapping function if db connection fails
mongoose.connection.on("error", console.error.bind(console, "connection error: "));

app.get("/", function(req,res){
    person.find({}, function(err, data){
        console.log(">>>> " + data );
        res.render("register", {data: data});
    });
})
app.get("/register", function(req,res){
    res.render("register");
})
app.post("/register", urlencodedParser, function(req, res){
    //line below means once connection to db is made, do function
        var input = new person(req.body);
        console.log(req.body);
        input.save(function (err, data){
            if (err) throw err;
        });
});
app.post("/edit", urlencodedParser, function(req, res){
    var id = req.body._id;
    delete(req.body._id);
    console.log(req.body._id);
    delete(req.body._id);
    person.updateOne({_id: id}, req.body, function(err, res){
    });
});

app.post("/test", urlencodedParser, function(req, res){
    console.log("testing!!");
});

app.delete("/delete", urlencodedParser, function(req, res){
    console.log("sulod!!")
    console.log(req.body._id);
    
    person.findByIdAndRemove(req.body._id, function(err){
        if(err) return res.status(500).send(err);
    });
});

app.post("/out", urlencodedParser, function(req, res){
    console.log(req.body);
    person.findByIdAndUpdate(req.body._id, req.body, {new:true}, (err, doc) => {
        if(err) return res.status(500).send(err);
    });
});
