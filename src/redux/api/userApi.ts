import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5173/' }),
	tagTypes: ['Users'],
	endpoints: (builder) => ({
		Login: builder.mutation<IUser, any>({
			query: (body) => ({ url: 'api/login', method: 'POST', body }),
			transformResponse: (response: { user: IUser }, meta, arg) => response.user,
		}),
		Logout: builder.mutation({
			query: () => ({ url: 'api/logout', method: 'POST' }),
		}),
		GetUsers: builder.query<IUser[], any>({
			query: (id) => 'api/users',
			providesTags: (result) =>
				result
					? [...result.map(({ _id }) => ({ type: 'Users' as const, _id })), { type: 'Users', id: 'LIST' }]
					: [{ type: 'Users', id: 'LIST' }],
		}),
		GetProfile: builder.query<IUser[], string>({
			query: (id) => `api/users${id}`,
			providesTags: (_result, _error, id) => [{ type: 'Users', id }],
		}),
		UpdateUser: builder.mutation<IUser, Partial<IUser>>({
			query: (body) => ({
				url: `api/users/`,
				method: 'PATCH',
				body,
			}),
			invalidatesTags: (user, _error, _arg) => [{ type: 'Users', id: user?._id }],
		}),
	}),
});

export const {
	useLoginMutation,
	useLogoutMutation,
	useGetProfileQuery,
	useGetUsersQuery,
	useLazyGetProfileQuery,
	useUpdateUserMutation,
} = userApi;
