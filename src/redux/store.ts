import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import cartReducer from './cartslice';
import shippingScreenReducer from './orderSlice';

import { baseApi } from './api/baseApi';

export const store = configureStore({
	reducer: {
		user: userReducer,
		cart: cartReducer,
		shippingScreen: shippingScreenReducer,
		[baseApi.reducerPath]: baseApi.reducer,
	},
	middleware: (gDM) => gDM().concat(baseApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
