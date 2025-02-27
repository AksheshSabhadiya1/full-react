import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    cart : [{id: 1, name: 'cart'}]
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            const cartData = {
                id: nanoid(),
                name: action.payload
            }
            state.cart.push(cartData)
        },

        updateQuantity: (state, action) => {
            state.cart = state.cart.map((item) => item.id === action.payload.id ? {...item, name: action.payload.cartData} : item.id)
        },

        deleteCart: (state, action) => {
            state.cart = state.cart.filter((item)=> item.id !== action.payload)
        },
    }
})


export const {addCart, updateCart, deleteCart} = cartSlice.actions

export default cartSlice.reducer