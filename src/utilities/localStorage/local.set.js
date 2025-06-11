export const setItemToLocalStorage = (itemKey, item) => {
  const strItem = JSON.stringify(item);
  localStorage.setItem(itemKey, strItem);
};
