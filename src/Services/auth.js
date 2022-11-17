const register = (data) => {
  localStorage.setItem('users', JSON.stringify(data));

  return { response: true };
};
const login = ({ email, password }) => {
  const res = JSON.parse(localStorage.getItem('users'));
  if (res.dataSignup.email !== email) {
    return { response: false };
  }
  if (res.dataSignup.password !== password) {
    return { response: false };
  }
  return { response: true };
};
export { register, login };
