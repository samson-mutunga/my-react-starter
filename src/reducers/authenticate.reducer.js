import { START_LOGIN_USER, SUCCESSFUL_LOGIN, UNSUCCESSFUL_LOGIN } from '../actions/actions.constants';
const initials = {
    id_token: null,
    profile: null,
    loading: false,
    error: false,
    authenticated: false,
    message: ""
};

export function setUser(profile, id_token) {
  if (!localStorage.getItem('id_token')) {
    localStorage.setItem('profile', JSON.stringify(profile));
    localStorage.setItem('id_token', id_token);
  }
}

export function signOutUser() {
  localStorage.removeItem('profile');
  localStorage.removeItem('id_token');
}


export function isAuthenticated () {
    if (localStorage.getItem('id_token')) {
      return true;
    }
    return false;
}
export default function authReducer ( state = initials, action ) {
    switch ( action.type ) {
        case START_LOGIN_USER: {
            state = Object.assign ( {}, state, {loading: true, error:false, authenticated:false, id_token: null});
            return state;
        }

        case SUCCESSFUL_LOGIN: {
            const { token, profile, message } = action.data;
            setUser(profile, token);        
            state = Object.assign ( {}, state, {authenticated: true, profile: profile, message:message, id_token: token, loading: false, error:false });
            return state;
        }

        case UNSUCCESSFUL_LOGIN: {
            state = Object.assign ( {}, state, action.error, {loading: false, error: true} );
            return state;
        }
    }
    return state;
}