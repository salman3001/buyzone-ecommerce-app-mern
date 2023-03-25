import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../Utils/baseUrl';

export const baseApi = createApi({
	reducerPath: 'basApi',
	baseQuery: fetchBaseQuery({ baseUrl: baseUrl + 'api/buyzone', credentials: 'include' }),
	tagTypes: ['orders', 'Auth', 'Products', 'Reviews', 'Users'],
	endpoints: () => ({}),
});
