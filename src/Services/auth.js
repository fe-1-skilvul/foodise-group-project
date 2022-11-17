const register = (data) => {
  localStorage.setItem('users', JSON.stringify(data));

  return { response: true };
};

export { register };
