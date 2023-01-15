import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
	userName: string;
	email: string;
	isAdmin: string;
	userId: string;
}

const initialState: UserState | null = null;

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction) => {
			localStorage.setItem('user', JSON.stringify(action.payload));
		},
		getUser: (state, action: PayloadAction) => {
			const user = JSON.parse(localStorage.getItem('user') as string);
			state = user;
		},
		removeUser: (state, action: PayloadAction) => {
			localStorage.removeItem('user');
		},
	},
});

// Action creators are generated for each case reducer function
export const { setUser, getUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
