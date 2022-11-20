const getCurrentUser = () => {
  const user = JSON.parse(localStorage.getItem('users'));
  return user;
};

const postUserRegister = (data) => {
  localStorage.setItem('users', JSON.stringify(data));
};
const register = (data) => {
  const current = getCurrentUser();
  console.log(current);
  if (current === null) {
    console.log('null');
    postUserRegister([data]);
    return { response: true };
  }
  if (current !== null) {
    console.log('nonull');
    let newdata = [...current, data];
    postUserRegister(newdata);
    return { response: true };
  }

  return { response: true };
};

const login = ({ email, password }) => {
  const res = getCurrentUser();
  let response = false;
  res.map((user, i) => {
    if (user.email === email && user.password === password) {
      localStorage.setItem('ActiveUser', JSON.stringify(user));
      return (response = true);
    }
  });
  return { response: response };
};
export { register, login };
