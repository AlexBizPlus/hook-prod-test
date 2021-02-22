export const addCartOrder = (cartProducts) => {
  const order = [];
  cartProducts.map((item) => order.push(item.price * item.count));
  return Math.round(order.reduce((sum, item) => sum + item, 0) * 100) / 100;
};
