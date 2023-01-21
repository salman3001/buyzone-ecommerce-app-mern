import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type UserState = {
	user: {
		id: string;
		isAdmin: boolean;
		name: string;
		email: string;
	} | null;
};

const initialState: UserState = { user: null };

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserState['user']>) => {
			localStorage.setItem('user', JSON.stringify(action.payload));
			state.user = action.payload;
		},
		removeUser: (state) => {
			localStorage.removeItem('user');
			state.user = null;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
