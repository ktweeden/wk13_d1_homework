const express = require('express');
const FilmsData = require('../data/films_data.js');
const filmsData = new FilmsData();

const filmsRouter = new express.Router();

filmsRouter.get('/', function (req, res) {
  const allFilms = filmsData.all();
  res.json({films: allFilms});
});

filmsRouter.get('/:id', function(req, res) {
  const film = filmsData.find(req.params.id);
  res.json({film: film});
});

filmsRouter.post('/', function(req, res) {
  filmsData.add(req.body.film);
  res.json(filmsData.all());
});

filmsRouter.put('/:id', function(req, res) {
  const film = req.body.film;
  const index = req.params.id;
  filmsData.update(index, film);
  res.json(filmsData.all());
});

filmsRouter.delete('/:id', function(req, res) {
  filmsData.delete(req.body.id);
  res.json(filmsData.all());
});

module.exports = filmsRouter;
