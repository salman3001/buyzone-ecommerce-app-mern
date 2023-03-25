import { baseApi } from './baseApi';

export const reviewsApi = baseApi.injectEndpoints({
	endpoints: (builder) => ({
		getReviews: builder.query<IReview[], string>({
			query: (productId) => `reviews/${productId}`,
			providesTags: (result, error, productId) => [{ type: 'Reviews', id: productId }],
		}),
		DeleteReview: builder.mutation<IReview, string>({
			query: (reviewId) => ({
				url: `reviews/${reviewId}`,
				method: 'DELETE',
			}),
			invalidatesTags: (result, error, id) => [
				{ type: 'Reviews', id: result?.productId },
				{ type: 'Products', id: result?.productId },
			],
		}),
		AddReview: builder.mutation<IReview, IReview>({
			query: (body) => ({
				url: 'reviews',
				method: 'POST',
				body,
			}),
			invalidatesTags: (result: IReview) => [{ type: 'Reviews', id: result?.productId }],
		}),
	}),
});

export const { useDeleteReviewMutation, useGetReviewsQuery, useAddReviewMutation } = reviewsApi;
