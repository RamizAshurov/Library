var express = require("express"),
    bodyParser = require("body-parser"),
    fs = require("fs");
    
var app = express(),
    urlencodedParser = bodyParser.urlencoded({extended: false});
    // jsonParser = bodyParser.json();

app.use(express.static(__dirname + "/public"));

app.get("/books", function(req,res) {
    var books = JSON.parse(fs.readFileSync("books.json")),
        names = books[0].name;
    for (var i = 1; i < books.length; i++) {
        names += "\n" + books[i].name 
    }
    res.send(names)
});

app.get("/books/:id", function(req,res) {
    var books = JSON.parse(fs.readFileSync("books.json")),
        book = null;
    for (var i = 0; i < books.length; i++) {
        if (books[i].id == req.params["id"]) {
            book = books[i]
            break
        }
    }
    if (book) {
        res.send(book.name)
    } else {
        res.send("Error")
    }
})

app.get("/books?free", function(req,res) {
    var books = JSON.parse(fs.readFileSync("books.json")),
        names = "";
    for (var i = 0; i < books.length; i++) {
        if (books[i].price == 0) {
            names += ((i == 0) ? "" : "\n")  + books[i].name
        }
    }
    console.log(names)
    res.send(names)
})
app.delete("/books/:id", function(req,res) {
    var books = JSON.parse(fs.readFileSync("books.json")),
        index = -1;
    for (var i = 0; i < books.length; i++) {
        if (books[i].id == req.params["id"]) {
            index = i
            break
        }
    }
    if(index >= 0) {
        var arr = books.filter(function(book,i) {
            return i != index
        });
        fs.writeFileSync("books.json",JSON.stringify(arr))
        res.send(books[index].name)
    }
})

app.post("/books", urlencodedParser, function (req, res) {
    if(!req.body) return res.sendStatus(400);
    var books = JSON.parse(fs.readFileSync("books.json")),
        book = {name: req.body.bookName, price: req.body.bookPrice},
        id = 0;
    for (var i = 0; i < books.length; i++) {
        if (books[i].id > id ) id = books[i].id + 1
    }
    book.id = id;
    books.push(book);
    console.log(book);
    fs.writeFileSync("books.json",JSON.stringify(books))
    res.send(req.body.bookName);
});

app.put("/books/:id", urlencodedParser, function(req,res) {
    var books = JSON.parse(fs.readFileSync("books.json"));
    books[req.params["id"] - 1].name = req.body.bookName;
    books[req.params["id"] - 1].price = req.body.bookPrice;
    console.log(books[req.params["id"]]);
    console.log(books)
    fs.writeFileSync("books.json",JSON.stringify(books))
    res.send()
})
app.listen(3000);