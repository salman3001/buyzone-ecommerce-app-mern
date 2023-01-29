import { Delete } from '@mui/icons-material';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5173/' }),
	tagTypes: ['Users'],
	endpoints: (builder) => ({
		Login: builder.mutation<any, any>({
			query: (body) => ({ url: 'api/login', method: 'POST', body }),
		}),
		Logout: builder.query<any, any>({
			query: () => '/api/logout',
		}),
		GetUsers: builder.query<any, any>({
			query: () => 'api/users',
			providesTags: [{ type: 'Users', id: 'List' }],
		}),
		DeleteUser: builder.mutation({
			query: (id) => ({
				url: `/api/user${id}`,
				method: 'DELETE',
				body: { _id: id },
			}),
			invalidatesTags: [
				{
					type: 'Users',
					id: 'List',
				},
			],
		}),
		UpdateUser: builder.mutation<any, any>({
			query: ({ _id, ...body }) => ({
				url: `api/users/${_id}`,
				method: 'POST',
				body,
			}),
			invalidatesTags: (error, result, { _id }) => [{ type: 'Users', id: _id }],
		}),
	}),
});

export const { useLoginQuery } = userApi;
