const postNewFood = (data) => {
  localStorage.setItem('saved', JSON.stringify(data));
};

const getSavedFoods = () => {
  const foods = JSON.parse(localStorage.getItem('saved'));

  return foods;
};

export { postNewFood, getSavedFoods };
