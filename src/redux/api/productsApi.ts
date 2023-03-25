import { baseApi } from './baseApi';

const productApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		GetProducts: build.query<Iproduct[], Partial<IProductQueryString>>({
			query: (queryString) => ({
				url: 'products',
				params: queryString,
			}),
			providesTags: [{ type: 'Products', id: 'LIST' }],
		}),
		GetProduct: build.query<Iproduct, string>({
			query: (id) => `products/${id}`,
			providesTags: (result, error, id) => [{ type: 'Products', id }],
		}),
		AddProduct: build.mutation<void, Iproduct>({
			query: (body) => ({
				url: `products`,
				method: 'POST',
				body,
			}),
			invalidatesTags: [{ type: 'Products', id: 'LIST' }],
		}),
		UpdateProduct: build.mutation<Iproduct, { id: string; body: Partial<Iproduct> }>({
			query: ({ id, body }) => ({
				url: `products${id}`,
				method: 'PATCH',
				body,
			}),
			invalidatesTags: (_result, _err, { id }) => [
				{ type: 'Products', id },
				{ type: 'Products', id: 'LIST' },
			],
		}),
		DeleteProduct: build.mutation<void, string>({
			query: (id) => ({
				url: `products${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: (_result, _err, id) => [
				{ type: 'Products', id },
				{ type: 'Products', id: 'LIST' },
			],
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
