import { createSlice } from "@reduxjs/toolkit";

const firstname = JSON.parse(localStorage.getItem("firstname"));

const initialState = {
  isLoggedIn: false,
  firstname: firstname ? firstname : "",
  user: {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    gender: "",
    marital_status: "",
    photo: "",
    dob: "",
    
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_LOGIN(state, action) {
      state.isLoggedIn = action.payload;
    },
    SET_NAME(state, action) {
      localStorage.setItem("firstname", JSON.stringify(action.payload));
      state.firstname = action.payload;
    },
    SET_USER(state, action) {
      const profile = action.payload;
      state.user.firstname = profile.firstname;
      state.user.lastname = profile.lastname;
      state.user.email = profile.email;
      state.user.phone = profile.phone;
      state.user.dob = profile.dob;
      state.user.gender = profile.gender;
      state.user.marital_status = profile.marital_status;

    },
  },
});

export const { SET_LOGIN, SET_NAME, SET_USER } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectName = (state) => state.auth.firstname;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
