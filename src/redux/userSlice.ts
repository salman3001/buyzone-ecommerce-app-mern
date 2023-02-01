import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
	user: IUser | null;
}

const user = localStorage.getItem('user');

const initialState: UserState = { user: user !== null ? (JSON.parse(user) as IUser) : null };

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
