import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";




export const UserSlice = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    error: false,
    user: null,
  },

  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      // handle client
      state.user = action.payload.user.user;
    },
  },
});

export const { setUserData } = UserSlice.actions

// export const selectUser = UserSlice.state;

export default UserSlice.reducer
