import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
} from './reducers/userReducers';
import {
    movieListReducer,
    movieDetailsReducer,
} from './reducers/movieReducers';
import {
    bookingCreateReducer,
    bookingListMyReducer,
} from './reducers/bookingReducers';

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    movieList: movieListReducer,
    movieDetails: movieDetailsReducer,
    bookingCreate: bookingCreateReducer,
    bookingListMy: bookingListMyReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) :
    null;

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];



export default store;