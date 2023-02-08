import { Typography, Box, Stack, Container, Button } from '@mui/material';
import React, { type FunctionComponent, type Dispatch } from 'react';
import { useSelector } from 'react-redux';
import { useAddorderMutation } from '../../redux/api/ordersApi';
import { type RootState } from '../../redux/store';
import SummaryProductCard from './SummaryProductCard';

const OrderSummery: FunctionComponent<{ setActiveStep: Dispatch<React.SetStateAction<number>> }> = ({
	setActiveStep,
}) => {
	const orderDetail = useSelector((state: RootState) => state.shippingScreen);
	const [addOrder, { isError, isLoading, isSuccess }] = useAddorderMutation();

	const handelSubmit = async () => {
		await addOrder(orderDetail).unwrap();
		!isError && setActiveStep(3);
	};
	return (
		<Container maxWidth="sm">
			<Stack gap={4} pt={2} alignItems="center" width={[280, 400]}>
				<Typography fontWeight="bold">Order Summary</Typography>
				<Stack gap={2}>
					{orderDetail?.products.map((product, index) => (
						<Box key={index}>
							<SummaryProductCard id={product.productId} price={product.price} qty={product.quantity} />
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
				<Button variant="contained" onClick={handelSubmit} disabled={isLoading}>
					Confirm & Place Order
				</Button>
			</Stack>
		</Container>
	);
};

export default OrderSummery;
