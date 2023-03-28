import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
	user: IUser | null;
	token: {
		exp: number;
		iat: number;
	} | null;
}

const user = localStorage.getItem('user');
const token = localStorage.getItem('token');

const initialState: UserState = {
	user: user !== null ? (JSON.parse(user) as IUser) : null,
	token: token !== null ? (JSON.parse(token) as UserState['token']) : null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserState>) => {
			localStorage.setItem('user', JSON.stringify(action.payload.user));
			localStorage.setItem('token', JSON.stringify(action.payload.token));
			state.user = action.payload.user;
			state.token = action.payload.token;
		},
		removeUser: (state) => {
			localStorage.removeItem('user');
			localStorage.removeItem('token');
			state.user = null;
			state.token = null;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
