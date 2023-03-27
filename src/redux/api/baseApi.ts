import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
	reducerPath: 'basApi',
	baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL + 'api/buyzone', credentials: 'include' }),
	tagTypes: ['orders', 'Auth', 'Products', 'Reviews', 'Users'],
	endpoints: () => ({}),
});
