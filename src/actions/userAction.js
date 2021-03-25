import axios from 'axios';

export const registration = async (name, email, password) => {
  try {
    const response = await axios.post('http://localhost:8080/api/auth/registration', {
      name,
      email,
      password,
    });
    console.log(response)
    alert(response.data.message);
    console.log(response.data.message)
  } catch (error) {
    alert(error);
    console.log(error)
  }
};
