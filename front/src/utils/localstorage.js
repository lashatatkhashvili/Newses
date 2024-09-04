export const getDataFromLocalStorage = (item) => {
  const data = localStorage.getItem(item);
  return data ? JSON.parse(data) : null;
};

export const setDataToLocalStorage = (item, data) => {
  localStorage.setItem(item, JSON.stringify(data));
};

export const clearDataFromLocalStorage = () => {
  localStorage.clear();
};
