import { createSlice } from "@reduxjs/toolkit";

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
        
    },
})


export default cartSlice.reducer