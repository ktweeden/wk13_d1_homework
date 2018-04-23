const express = require('express');
const BooksData = require('../data/books_data.js');
const booksData = new BooksData();

const booksRouter = new express.Router();

booksRouter.get('/', function (req, res) {
  res.json(booksData.all());
});

booksRouter.get('/:id', function(req, res) {
  const book = booksData.find(req.params.id);
  res.json({book: book});
});

booksRouter.post('/', function(req, res) {
  booksData.add(req.body.book);
  res.json(booksData.all());
});

booksRouter.put('/:id', function(req, res) {
  const book = req.body.book;
  const index = req.params.id;
  booksData.update(index, book);
  res.json(booksData.all());
});

booksRouter.delete('/:id', function(req, res) {
  booksData.delete(req.body.id);
  res.json(booksData.all());
});

module.exports = booksRouter;
