export const  getCartData = () => {
    const cartData = localStorage.getItem('products');
    return cartData ? JSON.parse(cartData) : [];
};