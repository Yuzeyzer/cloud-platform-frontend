const initialState = {
  currentUser: {},
  isAuth: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_LOGIN': {
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
      };
    }
    case 'USER_LOGOUT': {
      localStorage.removeItem('token');
      return {
        ...state,
        currentUser: {},
        isAuth: false,
      };
    }
    default: {
      return state;
    }
  }
}
