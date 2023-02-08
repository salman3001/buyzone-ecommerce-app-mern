import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import tokenReducer from './tokenSlice';
import { userApi } from './api/userApi';
import { productApi } from './api/productsApi';
import { orderApi } from './api/ordersApi';
import cartReducer from './cartslice';
import shippingScreenReducer from './shippingScreenSlice';

export const store = configureStore({
	reducer: {
		user: userReducer,
		token: tokenReducer,
		cart: cartReducer,
		shippingScreen: shippingScreenReducer,
		[userApi.reducerPath]: userApi.reducer,
		[productApi.reducerPath]: productApi.reducer,
		[orderApi.reducerPath]: orderApi.reducer,
	},
	middleware: (gDM) => gDM().concat(userApi.middleware, productApi.middleware, orderApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
