import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import tokenReducer from './tokenSlice';
import { userApi } from './api/userApi';
import { productApi } from './api/productsApi';
import cartReducer from './cartslice';

export const store = configureStore({
	reducer: {
		user: userReducer,
		token: tokenReducer,
		cart: cartReducer,
		[userApi.reducerPath]: userApi.reducer,
		[productApi.reducerPath]: productApi.reducer,
	},
	middleware: (gDM) => gDM().concat(userApi.middleware, productApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
