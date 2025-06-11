export const getItemFromLocalStorage = (itemKey) => {
  const strItem = localStorage.getItem(itemKey);
  return JSON.parse(strItem);
};
