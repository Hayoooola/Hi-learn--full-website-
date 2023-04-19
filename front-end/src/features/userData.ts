import { createSlice } from "@reduxjs/toolkit";

const initialUserData = { isUserLogin: false, userData: {} };
const fetchUserData = createSlice({
    name: "userStatus",
    initialState: initialUserData,
    reducers: {
        loginSuccessful: (state, action) => {
            // put user data to local storage
            localStorage.setItem("user", JSON.stringify(action.payload));

            return { isUserLogin: true, userData: action.payload };
        }
    }
});

export const { loginSuccessful } = fetchUserData.actions;
export default fetchUserData.reducer;