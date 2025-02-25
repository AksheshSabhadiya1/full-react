import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


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
            }else if(CartItem.quantity || item.quantity){
                CartItem.quantity += item.quantity 
            }else{
                CartItem.quantity += Math.max(CartItem.quantity , item.quantity);
            }
        } else {
            existingCart.push({ ...item, quantity: item.quantity });
        }

        localStorage.setItem('cartData', JSON.stringify(existingCart));
        window.dispatchEvent(new Event('storage'));
    }
}
