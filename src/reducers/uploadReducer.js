const SHOW_UPLOADER = 'SHOW_UPLOADED';
const HIDE_UPLOADER = 'HIDE_UPLOADER';
const ADD_UPLOAD_FILE = 'ADD_UPLOAD_FILE';
const REMOVE_UPLOAD_FILE = 'REMOVE_UPLOAD_FILE';
const CHANGE_UPLOAD_FILE = 'CHANGE_UPLOAD_FILE';

const initialState = {
  isVisible: true,
  files: [],
};

export default function uploadReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_UPLOADER:
      return { ...state, isVisible: true };
    case HIDE_UPLOADER:
      return { ...state, isVisible: false };
    case ADD_UPLOAD_FILE:
      return { ...state, files: [...state.files, { ...action.payload, id: state.length }] };
    case REMOVE_UPLOAD_FILE:
      return { ...state, files: [...state.files.filter((file) => file.id !== action.payload)] };
    default:
      return state;
  }
}

export const SHOW_UPLOADER_ACTION = () => ({ type: SHOW_UPLOADER });
export const HIDE_UPLOADER_ACTION = () => ({ type: HIDE_UPLOADER });
export const ADD_UPLOAD_FILE_ACTION = () => ({ type: ADD_UPLOAD_FILE });
export const REMOVE_UPLOAD_FILE_ACTION = () => ({ type: REMOVE_UPLOAD_FILE });
