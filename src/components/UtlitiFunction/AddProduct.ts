export const getCartLength = (): number => {
  try {
    const cart = localStorage.getItem("cart");
    const cartArray: string[] = cart ? JSON.parse(cart) : [];
    return cartArray.length;
  } catch (error) {
    console.error("Error retrieving cart length:", error);
    return 0; // Fail-safe
  }
};

export const addToCart = (id: number): boolean => {
  try {
    // Convert the id to a string
    const idString = id.toString();

    // Retrieve the existing cart from localStorage
    const cart = localStorage.getItem("cart");
    const cartArray: string[] = cart ? JSON.parse(cart) : [];

    // Check if the item is already in the cart
    if (!cartArray.includes(idString)) {
      cartArray.push(idString);
      localStorage.setItem("cart", JSON.stringify(cartArray));

      // Trigger custom event to notify updates
      const cartEvent = new CustomEvent("cartUpdated");
      window.dispatchEvent(cartEvent);

      return true; // Successfully added
    } else {
      return false; // Already in cart
    }
  } catch (error) {
    console.error("Error adding to cart:", error);
    return false; // Fail-safe
  }
};
