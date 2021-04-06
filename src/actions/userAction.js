import axios from 'axios';

const userLogin = (user) => ({
  type: 'USER_LOGIN',
  payload: user,
});

export const userLogout = () => ({
  type: 'USER_LOGOUT',
});

export const registration = async (registerBody) => {
  try {
    const response = await axios.post('http://localhost:8080/api/auth/registration', {
      ...registerBody,
    });
    alert(response.data.message);
  } catch (error) {
    alert(error);
  }
};

export const login = (loginBody) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        ...loginBody,
      });
      dispatch(userLogin(response.data.user));
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      alert(error, 'здесь');
    }
  };
};

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:8080/api/auth/auth', 
      { headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}});
      dispatch(userLogin(response.data.user));
      // console.log(response.data);
    } catch (error) {
      localStorage.removeItem('token')
      alert(error, 'здесь');
    }
  };
};

