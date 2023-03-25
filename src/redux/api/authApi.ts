import { baseApi } from './baseApi';

const authApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		Login: builder.mutation<any, { email: string; password: string }>({
			query: (body) => ({ url: 'auth/login', method: 'POST', body }),
		}),
		Logout: builder.query<null, null>({
			query: () => 'auth/logout',
		}),
		GetRefreshToken: builder.query<null, null>({
			query: () => 'auth/getrefreshtoken',
		}),
		IsLogedIn: builder.query<null, null>({
			query: () => 'auth/isloggedin',
		}),
		IsAdmin: builder.query<null, null>({
			query: () => 'auth/isadmin',
		}),
	}),
});

export const { useGetRefreshTokenQuery, useLoginMutation, useLogoutQuery, useIsLogedInQuery, useIsAdminQuery } =
	authApi;
