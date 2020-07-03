const saveToLS = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    throw new Error();
  }
};

const getFromLS = key => {
  try {
    const items = localStorage.getItem(key);
    return items ? JSON.parse(items) : null;
  } catch (error) {
    throw new Error();
  }
};

export default { saveToLS, getFromLS };
