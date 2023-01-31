import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Cookie, CookieSharp } from '@mui/icons-material';

export type UserState = {
	user: IUser | null;
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
		getUser: (state) => {
			const user = localStorage.getItem('user');
			user && (state.user = JSON.parse(user));
		},
		removeUser: (state) => {
			localStorage.removeItem('user');
			state.user = null;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setUser, removeUser, getUser } = userSlice.actions;

export default userSlice.reducer;
