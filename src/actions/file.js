import axios from 'axios';
import { setFiles } from '../reducers/fileReducer';

export const getFiles = (dirId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/files${dirId ? '?parent=' + dirId : ''}`,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } },
      );
      dispatch(setFiles(response.data));
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
};
