import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : []
    },
    reducers : {
        addToCart : (state, action) => {
            state.items.push(action.payload)
        },
        removeFromCart : (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        updateQuantity : (state, action) => {
            const {productId, newQuantity} = action.payload
            const itemToUpdate = state.items.find(item => item.id === productId)

            if(itemToUpdate){
                itemToUpdate.quantity = newQuantity
            }

        },
        emptyCart : (state, action) => {
            state.items = []
        }
    }

})

export const{addToCart, removeFromCart, updateQuantity, emptyCart} = cartSlice.actions
export default cartSlice.reducer