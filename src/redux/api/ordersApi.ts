import { removeUser } from '../userSlice';
import { baseApi } from './baseApi';
interface IParams {
	status?: 'Pending' | 'Confirmed' | 'Delivered' | 'Cancled';
}

const orderApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		Getorders: build.query<IOrder[], IParams>({
			query: (param) => ({
				url: 'orders',
				params: { ...param },
			}),
			providesTags: [{ type: 'orders', id: 'LIST' }],
		}),
		Getorder: build.query<IOrder, string>({
			query: (id) => `orders/${id}`,
			providesTags: (_result, _err, id) => [{ type: 'orders', id }],
		}),
		Addorder: build.mutation<IOrder, IOrder>({
			query: (body) => ({
				url: `orders`,
				method: 'POST',
				body,
			}),
			invalidatesTags: [{ type: 'orders', id: 'LIST' }],
		}),
		Updateorder: build.mutation<IOrder, { id: string; body: Partial<IOrder> }>({
			query: ({ id, body }) => ({
				url: `orders/${id}`,
				method: 'PATCH',
				body,
			}),
			invalidatesTags: (_result, _err, { id }) => [
				{ type: 'orders', id },
				{ type: 'orders', id: 'LIST' },
			],
		}),
	}),
});

export const { useGetordersQuery, useUpdateorderMutation, useAddorderMutation, useGetorderQuery } = orderApi;
