import {
    START_FETCHING_CATEGORIES,
    SUCCESSFUL_FETCHING_CATEGORIES,
    FAILED_FETCHING_CATEGORIES
} from '../actions/actions.constants';

const initials = {
    loading: false,
    error: false,
    categories: []
};

export default function categoriesReducer ( state = initials, action ) {
    switch ( action.type ) {
        case START_FETCHING_CATEGORIES: {
            state = Object.assign ( {}, state, {loading: true} );
            return state;
        }
        case SUCCESSFUL_FETCHING_CATEGORIES: {
            state = Object.assign ( {}, state, {loading: false, error: false, categories: action.data} );
            return state;
        }
    }

    return state;
}