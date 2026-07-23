const isInCart = (state, id) => {
  const result = !!state.selectedItems.find((item) => item.id === id);
  return result;
};

export const quantityCount = (state, id) => {
  const item = state.selectedItems.find((item) => item.id === id);
  return item ? item.quantity : 0;
};

export const formatPrice = (price) => {
  return new Intl.NumberFormat("fa-IR").format(price);
};
export { isInCart };
