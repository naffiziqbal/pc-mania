
export const addToLocalStorage = (product) => {
    // console.log(product)
    let cart = []

    // get cart from Localstorage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart)
    }
    // Add items
    // console.log(cart)
    const existingProduct = cart.map(data => data._id === product._id)
    // console.log(existingProduct)
    if (!existingProduct.length) {
        cart.push(product)
        localStorage.setItem('cart', JSON.stringify(cart))
    } else {
        let newCart = cart.find(data => data._id === product._id)
        // console.log(newCart)
        if (newCart) {
            cart[newCart.quantity = product.quantity + newCart.quantity]
            // cart.push(newCart)
            // console.log(cart)
            localStorage.setItem('cart', JSON.stringify(cart))
        } else {
            cart.push(product)
            localStorage.setItem('cart', JSON.stringify(cart))

        }
    }


}


export const getLocalStorageCart = () => {
    let cart = [];

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}
