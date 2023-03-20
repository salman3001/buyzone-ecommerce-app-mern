import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../Utils/baseUrl';

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({ baseUrl: baseUrl + 'api/buyzone' }),
	tagTypes: ['Users'],
	endpoints: (builder) => ({
		GetUsers: builder.query<IUser[], any>({
			query: () => 'users',
			providesTags: [{ type: 'Users', id: 'LIST' }],
		}),
		GetUser: builder.query<IUser[], string>({
			query: (id) => `users${id}`,
			providesTags: (_result, _error, id) => [{ type: 'Users', id }],
		}),
		UpdateUser: builder.mutation<IUser, { id: string; body: Partial<IUser> }>({
			query: ({ id, body }) => ({
				url: `users/${id}`,
				method: 'PATCH',
				body,
			}),
			invalidatesTags: (_user, _error, { id }) => [{ type: 'Users', id }],
		}),
		DeleteUser: builder.mutation<IUser, string>({
			query: (id) => ({
				url: `users/${id}`,
				method: 'Delete',
			}),
			invalidatesTags: (_result, _error, id) => [
				{ type: 'Users', id },
				{ type: 'Users', id: 'LIST' },
			],
		}),
	}),
});

export const { useGetUsersQuery, useGetUserQuery, useUpdateUserMutation } = userApi;
