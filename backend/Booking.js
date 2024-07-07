const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
    seats: [{ type: String, required: true }],
    showtime: { type: String, required: true },
    totalPrice: { type: Number, required: true },
    paid: { type: Boolean, default: false },
    paidAt: { type: Date },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;