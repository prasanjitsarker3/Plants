export const getCartLength = (): number => {
  try {
    const cart = localStorage.getItem("cart");
    const cartArray: string[] = cart ? JSON.parse(cart) : [];
    console.log(cartArray.length);
    return cartArray.length;
  } catch (error) {
    console.error("Error retrieving cart length:", error);
    return 0;
  }
};
