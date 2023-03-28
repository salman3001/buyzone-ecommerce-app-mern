import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

export const baseApi = createApi({
	reducerPath: 'basApi',

	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_BASE_URL + 'api/buyzone',
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as RootState).user.token;

			// If we have a token set in state, let's assume that we should be passing it.
			if (token) {
				headers.set('authorization', `Bearer ${token}`);
			}

			return headers;
		},
	}),
	tagTypes: ['orders', 'Auth', 'Products', 'Reviews', 'Users'],
	endpoints: () => ({}),
});
