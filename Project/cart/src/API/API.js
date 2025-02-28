import axios from "axios";


const api = axios.create(
    {
        baseURL: 'https://fakestoreapi.com'
    }
)


export const fetchAllData = async () => {
    // const res = await api.get('/products?_start=0&limit=4')
    const res = await api.get('/products')
    return res.data
}


export default function addCart(id) {
   
    const getData = JSON.parse(localStorage.getItem('products')) || [];
    const existingCart = JSON.parse(localStorage.getItem('cartData')) || [];

    const item = getData.find(item => item.id === id);

    if (item) {
        const CartItem = existingCart.find(cartItem => cartItem.id === id);

        if (CartItem) {
            if(CartItem.quantity === item.quantity){
                CartItem.quantity += item.quantity 
                CartItem.price = item.price * CartItem.quantity
            }else if(CartItem.quantity || item.quantity){
                CartItem.quantity += item.quantity 
                CartItem.price = item.price * CartItem.quantity
            }

        } else {
            existingCart.push({ ...item, quantity: item.quantity, price: item.price * item.quantity });
        }

        localStorage.setItem('cartData', JSON.stringify(existingCart));
    }
    
    const totalItems = existingCart.reduce((total, item) => total + item.quantity, 0);
    localStorage.setItem('cartitem',JSON.stringify(totalItems))
    window.dispatchEvent(new Event('storage'));
}



// export const searchbarAllData = async (value) => {
//    const res = await api.get(`/products/category/${value}`)
//    return res.data
// }