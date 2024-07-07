import {
    BOOKING_CREATE_REQUEST,
    BOOKING_CREATE_SUCCESS,
    BOOKING_CREATE_FAIL,
    BOOKING_LIST_MY_REQUEST,
    BOOKING_LIST_MY_SUCCESS,
    BOOKING_LIST_MY_FAIL,
} from '../constants/bookingConstants';

export const bookingCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case BOOKING_CREATE_REQUEST:
            return { loading: true };
        case BOOKING_CREATE_SUCCESS:
            return { loading: false, success: true, booking: action.payload };
        case BOOKING_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const bookingListMyReducer = (state = { bookings: [] }, action) => {
    switch (action.type) {
        case BOOKING_LIST_MY_REQUEST:
            return { loading: true };
        case BOOKING_LIST_MY_SUCCESS:
            return { loading: false, bookings: action.payload };
        case BOOKING_LIST_MY_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};