import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetorderQuery } from '../../redux/api/ordersApi';
import SummaryProductCard from '../shipping/SummaryProductCard';

const Order = () => {
	const param = useParams<{ id: string }>();

	const { data: orderDetail, isError, isLoading, isFetching } = useGetorderQuery(param.id);

	return (
		<Container maxWidth="sm">
			{isLoading || isFetching ? (
				'Loading...'
			) : isError ? (
				'Error'
			) : (
				<Stack gap={4} pt={2} alignItems="center" width={[280, 400]}>
					<Typography fontWeight="bold">Order Summary</Typography>
					<Stack gap={2}>
						{orderDetail?.products.map((product, index) => (
							<Box key={index}>
								<SummaryProductCard id={product.id} price={product.price} qty={product.quantity} />
							</Box>
						))}
					</Stack>
					<Stack alignSelf="end">
						<Typography
							sx={{
								fontWeight: 'bold',
							}}
						>
							Total {orderDetail.products.reduce((acc, { price, quantity }) => acc + price * quantity, 0)} $
						</Typography>
					</Stack>
					<Stack
						sx={{
							width: 1,
							alignItems: 'center',
						}}
					>
						<Typography fontWeight="bold">Delivery Address</Typography>
						<Typography>
							Building- {orderDetail.deliveryAddress.building}, Street- {orderDetail.deliveryAddress.street}, city-{' '}
							{orderDetail.deliveryAddress.city}, pin- {orderDetail.deliveryAddress.pin}, Mobile no. -{' '}
							{orderDetail.deliveryAddress?.mobile}, UAE
						</Typography>
					</Stack>

					<Stack
						sx={{
							width: 1,
							alignItems: 'center',
						}}
					>
						<Typography fontWeight="bold">Payment Detail</Typography>
						<Stack direction="row">
							<Typography>Payment Method -</Typography>
							<Typography>{orderDetail.payment.mode === 'cod' && 'Cash on delvery'}</Typography>
						</Stack>
						<Stack direction="row">
							<Typography>Payment Status -</Typography>
							<Typography>{orderDetail.payment?.paid === true ? 'Paid' : 'Pending'}</Typography>
						</Stack>
					</Stack>
				</Stack>
			)}
		</Container>
	);
};

export default Order;
