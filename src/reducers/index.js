import { combineReducers } from 'redux';
import auth from './authenticate.reducer';
import categories from './categories.reducer';


const rootReducer = combineReducers ({
    auth,
    categories
});

export default rootReducer;