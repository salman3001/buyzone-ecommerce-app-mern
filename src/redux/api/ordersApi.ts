import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const orderApi = createApi({
	reducerPath: 'orderApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5173/' }),
	tagTypes: ['orders'],
	endpoints: (build) => ({
		Getorders: build.query<IOrder[], null>({
			query: () => 'api/orders',
			providesTags: (result) =>
				result != null
					? [...result.map(({ _id }) => ({ type: 'orders' as const, id: _id })), { type: 'orders', id: 'LIST' }]
					: [{ type: 'orders', id: 'LIST' }],
		}),
		Addorder: build.mutation<void, IOrder>({
			query: (body) => ({
				url: `api/orders`,
				method: 'POST',
				body,
			}),
			invalidatesTags: [{ type: 'orders', id: 'LIST' }],
		}),
		Updateorder: build.mutation<IOrder, { id: string; body: Partial<IOrder> }>({
			query: ({ id, body }) => ({
				url: `api/orders`,
				params: { id },
				method: 'PATCH',
				body,
			}),
			invalidatesTags: (_result, _err, { id }) => [{ type: 'orders', id }],
		}),
	}),
});

export const { useGetordersQuery, useUpdateorderMutation, useAddorderMutation } = orderApi;
