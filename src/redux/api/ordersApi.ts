import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
interface IParams {
	status?: 'Pending' | 'Confirmed' | 'Delivered' | 'Cancled';
}

export const orderApi = createApi({
	reducerPath: 'orderApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5173/' }),
	tagTypes: ['orders'],
	endpoints: (build) => ({
		Getorders: build.query<IOrder[], IParams>({
			query: (param) => ({
				url: 'api/orders',
				params: { ...param },
			}),
			transformResponse(result: { Orders: IOrder[] }, meta, arg) {
				return result.Orders;
			},
			providesTags: (result) =>
				result != null
					? [...result.map(({ _id }) => ({ type: 'orders' as const, id: _id })), { type: 'orders', id: 'LIST' }]
					: [{ type: 'orders', id: 'LIST' }],
		}),
		Getorder: build.query<IOrder, string>({
			query: (id) => `api/orders/${id}`,
			transformResponse(result: { Order: IOrder }, meta, arg) {
				return result.Order;
			},
			providesTags: (_result, _err, id) => [{ type: 'orders', id }],
		}),
		Addorder: build.mutation<IOrder, IOrder>({
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

export const { useGetordersQuery, useUpdateorderMutation, useAddorderMutation, useGetorderQuery } = orderApi;
