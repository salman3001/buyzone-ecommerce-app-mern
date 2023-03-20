import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../Utils/baseUrl';

export const reviewsApi = createApi({
	reducerPath: 'reviewsApi',
	baseQuery: fetchBaseQuery({ baseUrl: baseUrl + 'api/buyzone' }),
	tagTypes: ['Reviews'],
	endpoints: (builder) => ({
		getReviews: builder.query<IReview[], string>({
			query: (productId) => `{reviews/${productId}}`,
			providesTags: (result, error, productId) => [{ type: 'Reviews', id: productId }],
		}),
		DeleteReview: builder.mutation<IReview, string>({
			query: (reviewId) => ({
				url: `reviews/${reviewId}`,
				method: 'DELETE',
			}),
			invalidatesTags: (result, error, id) => [{ type: 'Reviews', id: result?.productId }],
		}),
	}),
});

export const { useDeleteReviewMutation, useGetReviewsQuery } = reviewsApi;
