
export const addToLocalStorage = (id) => {
    let cart = {}

    // get cart from Localstorage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart)
    }
    // Add items
    const quantity = cart[id]
    if (quantity) {
        const newQuantity = quantity + 1
        cart[id] = newQuantity
    }
    else {
        cart[id] = 1
    }
    localStorage.setItem('cart', JSON.stringify(cart))
    
}


export const getLocalStorageCart = () => {
    let cart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}
