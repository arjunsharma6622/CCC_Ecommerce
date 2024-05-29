import { createSlice } from "@reduxjs/toolkit";


const orderSlice = createSlice({
    name : 'order',
    initialState : {
        prevOrders : []
    },
    reducers: {
        addToPreviousOrders : (state, action) => {
            state.prevOrders.push(action.payload)
        }
    }
})


export const {addToPreviousOrders} = orderSlice.actions

export default orderSlice.reducer