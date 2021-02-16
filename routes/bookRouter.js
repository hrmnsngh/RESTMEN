const express = require('express');

function routes(Book){
    const bookRouter = express.Router();
    bookRouter.route("/books")
    .get((req, res)=>{
        const {query} = req;
        Book.find(query,(err, books)=>{
            if(err){
                return res.send(err);
            }
            return res.status(200).json(books);
        })
    })
    .post((req, res)=>{
        const book = new Book(req.body);
        //console.log(book);
        book.save();
        return res.status(201).json(book);
    });

    bookRouter.route("/books/:bookId")
    .get((req, res)=>{
        Book.findById(req.params.bookId,(err, books)=>{
            if(err){
                return res.status(400).send(err);
            }
            return res.status(200).json(books);
        })
    })

    return bookRouter;
}

module.exports = routes;