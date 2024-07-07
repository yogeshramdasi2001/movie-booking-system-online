const asyncHandler = require('express-async-handler');
const Booking = require('../models/Booking');
const Movie = require('../models/Movie');


const createBooking = asyncHandler(async(req, res) => {
    const { movieId, seats, showtime, totalPrice } = req.body;
    const movie = await Movie.findById(movieId);

    if (!movie) {
        res.status(404);
        throw new Error('Movie not found');
    }

    const booking = new Booking({
        user: req.user._id,
        movie: movieId,
        seats,
        showtime,
        totalPrice,
    });

    const createdBooking = await booking.save();
    res.status(201).json(createdBooking);
});

const getMyBookings = asyncHandler(async(req, res) => {
    const bookings = await Booking.find({ user: req.user._id }).populate('movie');
    res.json(bookings);
});


module.exports = { createBooking, getMyBookings };