import axios from 'axios';

export const getFiles = (dirId) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/files${dirId ? '?parent=' + dirId : ''}`,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } },
      );
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };
};
