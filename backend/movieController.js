const asyncHandler = require('express-async-handler');
const Movie = require('../models/Movie');

const getMovies = asyncHandler(async(req, res) => {
    const movies = await Movie.find({});
    res.json(movies);
});

const createMovie = asyncHandler(async(req, res) => {
    const { title, genre, showtimes } = req.body;

    const movie = new Movie({ title, genre, showtimes });

    const createdMovie = await movie.save();
    res.status(201).json(createdMovie);
});


module.exports = {
    getMovies,
    createMovie
};