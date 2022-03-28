import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import {Action} from 'redux'
import userReducer from './slices/userSlice';

const makeStore = () => configureStore({
  reducer:{
    user: userReducer,
  },
  devTools: true
})

// export const fetchSubject = (id) => async (dispatch) => {
//   const timeoutPromise = (timeout) => new Promise(resolve => setTimeout(resolve, timeout));
//   await timeoutPromise(200);
//   dispatch(subjectSlice.actions.setEnt({
//       [id]: {
//           id,
//           name: `Subject ${id}`,
//       },
//   }));
// };
export const wrapper = createWrapper(makeStore);

// let store;
// export const initialiseStore = (preloadedState) => {
//   let _store = store ?? createStore(preloadedState);

//   if (preloadedState && store) {
//    _store = createStore({ ...store.getState(), ...preloadedState });
//     store = undefined;
//   }

//   // For SSG and SSR always create a new store
//   if (typeof window === 'undefined') return _store;
//   // Create the store once in the client
//   if (!store) store = _store;

//   return _store;
// };