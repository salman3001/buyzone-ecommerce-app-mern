import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type TokenState = string;

const initialState: TokenState = '';

export const tokenSlice = createSlice({
	name: 'token',
	initialState,
	reducers: {
		setToken: (state, action: PayloadAction) => {
			localStorage.setItem('token', JSON.stringify(action.payload));
		},
		getToken: (state, action: PayloadAction) => {
			const token = JSON.parse(localStorage.getItem('token') as string);
			state = token;
		},
		removeToken: (state, action: PayloadAction) => {
			localStorage.removeItem('token');
		},
	},
});

// Action creators are generated for each case reducer function
export const { setToken, getToken, removeToken } = tokenSlice.actions;

export default tokenSlice.reducer;
