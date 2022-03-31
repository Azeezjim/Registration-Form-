import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const creatorSlice = createSlice({
  name: "creators",
  initialState: {
    creators:  [
        {
          username: "testuser",
          image: "https://picsum.photos/id/237/200/200",
        },
        {
          username: "asafasaasc",
          image: "https://picsum.photos/id/236/200/200",
        },
        {
          username: "sadcasca",
          image: "https://picsum.photos/id/238/200/200",
        },
        {
          username: "sdsacasca",
          image: "https://picsum.photos/id/239/200/200",
        },
        {
          username: "xaxxsxa",
          image: "https://picsum.photos/id/227/200/200",
        },
        {
          username: "asd_sksc_s",
          image: "https://picsum.photos/id/229/200/200",
        },
        {
          username: "ascsama",
          image: "https://picsum.photos/id/247/200/200",
        },
        {
          username: "anilsenayyyy",
          image: "https://picsum.photos/id/257/200/200",
        },
        {
          username: "anilsenay1",
          image: "https://picsum.photos/id/256/200/200",
        },
        {
          username: "anilsenay2",
          image: "https://picsum.photos/id/267/200/200",
        },
        {
          username: "anilsenay3",
          image: "https://picsum.photos/id/266/200/200",
        },
        {
          username: "anilsenay4",
          image: "https://picsum.photos/id/261/200/200",
        },
        {
          username: "anilsenay5",
          image: "https://picsum.photos/id/260/200/200",
        },
      ],
  },

//   reducers: {
//     setUserData: (state, action) => {
//       state.user = action.payload;
//     },
//   },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      // handle client
      state.creators = action.payload.creators.creators;
    },
  },
});

// export const { setUserData } = UserSlice.actions

// export const selectUser = UserSlice.state;

export default creatorSlice.reducer
