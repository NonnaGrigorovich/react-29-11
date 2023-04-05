import { createSlice } from "@reduxjs/toolkit";
import { omit } from "lodash";

type ProductsInCartType = {
    [id: number]: number
}

const initialState: ProductsInCartType ={
    1: 3,
    2: 3,
}

export const cartSlice = createSlice({
    name: 'productsInCart',
    initialState,
    reducers: {
        addProductToCart: (state,action) => ({
            ...state,
            [action.payload.id]:
            state[action.payload.id] || 0 + action.payload.count
        }),
        removeproductFromCart: (state, action) => omit(state, action.payload),
        changeProductQuantity: (state, action) => ({
            ...state,
            [action.payload.id]: action.payload.count,
        })
    },
})

export const { 
    addProductToCart, 
    removeproductFromCart, 
    changeProductQuantity 
} = cartSlice.actions

export default cartSlice.reducer