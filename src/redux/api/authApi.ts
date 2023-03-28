import { baseApi } from './baseApi';

const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		Login: builder.mutation<{ user: IUser; token: string }, { email: string; password: string }>({
			query: (body) => ({ url: 'auth/login', method: 'POST', body }),
		}),
		// Logout: builder.query<null, null>({
		// 	query: () => 'auth/logout',
		// }),
		// GetRefreshToken: builder.query<null, null>({
		// 	query: () => 'auth/getrefreshtoken',
		// }),
		IsLogedIn: builder.query<{ message: boolean }, null>({
			query: () => 'auth/isloggedin',
		}),
		IsAdmin: builder.query<{ message: boolean }, null>({
			query: () => 'auth/isadmin',
		}),
	}),
});

export const { useIsLogedInQuery, useIsAdminQuery, useLoginMutation } = authApi;
