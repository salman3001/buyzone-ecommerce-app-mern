import { Divider, Stack, Typography } from '@mui/material';
import React, { type FunctionComponent } from 'react';
import { useGetProductQuery } from '../../redux/api/productsApi';

interface ISummaryProductcard {
	id: string;
	qty: number;
	price: number;
}
const SummaryProductCard: FunctionComponent<ISummaryProductcard> = ({ id, qty, price }) => {
	const { data: item, isLoading, isFetching, isError } = useGetProductQuery(id);

	return (
		<>
			{isLoading ? (
				<Typography>Loading...</Typography>
			) : isFetching ? (
				<Typography>Loading...</Typography>
			) : isError ? (
				<Typography>Something went wrong</Typography>
			) : (
				<>
					<Stack direction={['row', 'row']} height={20} justifyContent="space-between">
						<Typography
							sx={{
								fontSize: '.9em',
								maxWidth: 280,
								height: ['1.4em'],
								overflow: 'hidden',
							}}
						>
							{item.name}
						</Typography>
						<Stack direction="row">
							<Typography px={4}>x{qty}</Typography>
							<Typography>{price * qty}$</Typography>
						</Stack>
					</Stack>

					<Divider />
				</>
			)}
			{}
		</>
	);
};

export default SummaryProductCard;
