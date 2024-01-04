
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
    // Filter Cart To check if Item already exits
    const existingProduct = cart.map(data => data._id === product._id)
    //Find already cart Item to Update Quantity
    let newCart = cart.find(data => data._id === product._id)
    if (!existingProduct.length) {
        cart.push(product)
        localStorage.setItem('cart', JSON.stringify(cart))
    } else if (newCart) {
        //Assingng New Cart into Cart agter updating Quantity
        cart[newCart.quantity = product.quantity + newCart.quantity]
        localStorage.setItem('cart', JSON.stringify(cart))
    } else {
        cart.push(product)
        localStorage.setItem('cart', JSON.stringify(cart))

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
