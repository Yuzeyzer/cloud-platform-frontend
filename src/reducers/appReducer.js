const SHOW_LOADER = 'SHOW_UPLOADED';
const HIDE_LOADER = 'HIDE_LOADED';

const initialState = {
  loader: false,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loader: true };
    case HIDE_LOADER:
      return { ...state, loader: false };
    default:
      return state;
  }
}

export const showLoader = () => ({ type: SHOW_LOADER });
export const hideLoader = () => ({ type: HIDE_LOADER });
