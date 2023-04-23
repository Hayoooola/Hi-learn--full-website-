import { createSlice } from "@reduxjs/toolkit";

interface IProp {
    userCart: string[];
    openCart: boolean;
}

const initialState: IProp = { userCart: [], openCart: false };
const cartState = createSlice({
    initialState: initialState,
    name: "cart",
    reducers: {
        addToCart: (state, action) => {
            const prevData = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart") || "") : [];
            const updatedData = prevData.includes(action.payload) ? prevData : [...prevData, action.payload];

            localStorage.setItem("cart", JSON.stringify(updatedData));

            return { userCart: updatedData, openCart: true };
        },

        removeFromCart: (state, action) => {
            const prevData: string[] = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart") || "") : [];
            const updatedData = prevData.includes(action.payload) ? prevData.filter(item => item !== action.payload) : prevData;

            localStorage.setItem("cart", JSON.stringify(updatedData));

            return { userCart: updatedData, openCart: state.openCart };
        },

        refreshCart: () => {
            const prevData = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart") || "") : [];

            return { userCart: prevData, openCart: false };
        }
    }
});


export const { addToCart, refreshCart, removeFromCart } = cartState.actions;
export default cartState;