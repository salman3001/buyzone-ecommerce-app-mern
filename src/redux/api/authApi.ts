import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../Utils/baseUrl';

export const authApi = createApi({
	reducerPath: 'authApi',
	baseQuery: fetchBaseQuery({ baseUrl: baseUrl + 'api/buyzone' }),
	tagTypes: ['Auth'],
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
			query: () => 'islogedin',
		}),
		IsAdmin: builder.query<null, null>({
			query: () => 'isadmin',
		}),
	}),
});

export const { useGetRefreshTokenQuery, useLoginMutation, useLogoutQuery, useIsLogedInQuery, useIsAdminQuery } =
	authApi;
