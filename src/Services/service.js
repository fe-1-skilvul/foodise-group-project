const postNewFood = (data) => {
  localStorage.setItem('saved', JSON.stringify(data));

  console.log('berhasil');
};

const getSavedFoods = () => {
  const foods = JSON.parse(localStorage.getItem('saved'));

  return foods;
};

export { postNewFood, getSavedFoods };
