import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const navSlice = createSlice({
  name: "navbar",
  initialState: {
    open: false,
  },

  reducers: {
    setNavState: (state, action) => {
      state.open = action.payload;
    },
  },

//   extraReducers: {
//     [HYDRATE]: (state, action) => {
//       // handle client
//       if (action.payload) {
//         state.open = action.payload.navbar.open;
//       }
//     },
//   },
});

export const { setNavState } = navSlice.actions

// export const selectUser = UserSlice.state;

export default navSlice.reducer;
