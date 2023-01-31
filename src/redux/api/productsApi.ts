import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productApi = createApi({
	reducerPath: 'ProductApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5173/' }),
	tagTypes: ['Products'],
	endpoints: (build) => ({
		GetProducts: build.query<Iproduct[], Partial<IProductQueryString>>({
			query: (queryString) => ({
				url: 'api/products',
				params: queryString,
			}),
			providesTags: (result) =>
				result
					? [...result.map(({ _id }) => ({ type: 'Products' as const, id: _id })), { type: 'Products', id: 'LIST' }]
					: [{ type: 'Products', id: 'LIST' }],
		}),
		GetProduct: build.query<Iproduct, string>({
			query: (id) => `api/products/${id}`,
			transformResponse: (response: { product: Iproduct }, meta, id) => response.product,
			providesTags: (result, error, id) => [{ type: 'Products', id }],
		}),
		AddProduct: build.mutation<void, Iproduct>({
			query: (body) => ({
				url: `api/products`,
				method: 'POST',
				body,
			}),
			invalidatesTags: [{ type: 'Products', id: 'LIST' }],
		}),
		UpdateProduct: build.mutation<Iproduct, { id: string; body: Partial<Iproduct> }>({
			query: ({ id, body }) => ({
				url: `api/products${id}`,
				method: 'PATCH',
				body,
			}),
			invalidatesTags: (_result, _err, { id }) => [{ type: 'Products', id: id }],
		}),
		DeleteProduct: build.mutation<void, string>({
			query: (id) => ({
				url: `api/products${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: [{ type: 'Products', id: 'LIST' }],
		}),
	}),
});

export const {
	useGetProductsQuery,
	useGetProductQuery,
	useDeleteProductMutation,
	useUpdateProductMutation,
	useAddProductMutation,
} = productApi;
