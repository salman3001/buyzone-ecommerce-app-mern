import { Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { useGetordersQuery } from '../../redux/api/ordersApi';
import OrderCard from './OrderCard';

interface ISearch {
	status?: 'Pending' | 'Confirmed' | 'Delivered' | 'Cancled';
}

export const Orders = () => {
	const [query] = useSearchParams();
	const search: ISearch = {};
	const status = query.get('status');

	if (status != null) search.status = status;

	const { data: Orders, isError, isLoading, isFetching } = useGetordersQuery({ ...search });
	return (
		<Box
			sx={{
				width: 1,
				py: 2,
			}}
		>
			{isLoading || isFetching
				? 'Loading...'
				: isError
				? 'Error Loading orders'
				: Orders?.map((order, index) => (
						<Box key={index}>
							<OrderCard
								id={order._id}
								date={order.createdAt}
								status={order.status}
								totalItems={order.products.length}
							/>
						</Box>
				  ))}
		</Box>
	);
};
