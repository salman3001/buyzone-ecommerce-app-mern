import { Box, Stack, Step, StepLabel, Stepper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setStatus, setUserId } from '../../redux/orderSlice';
import { type RootState } from '../../redux/store';
import { AddressForm } from './AddressForm';
import OrderPlaced from './OrderPlaced ';
import OrderSummery from './OrderSummery';
import Payment from './Payment';

const steps = ['Address', 'Payment', 'Order Summery', 'Order Placed'];

const ShippingScreen = () => {
	const [activeStep, setActiveStep] = useState(0);
	const { user } = useSelector((state: RootState) => state.user);
	const { items: cartItems } = useSelector((state: RootState) => state.cart);
	const dispacth = useDispatch();

	useEffect(() => {
		dispacth(setUserId(user?.id));
		dispacth(setProducts(cartItems));
		dispacth(setStatus('Pending'));
	}, []);

	return (
		<Stack alignItems={'center'} width={1} py={2}>
			<Stepper activeStep={activeStep} alternativeLabel>
				{steps.map((label) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
					</Step>
				))}
			</Stepper>
			<Box>
				{activeStep === 0 ? (
					<AddressForm setActiveStep={setActiveStep} />
				) : activeStep === 1 ? (
					<Payment setActiveStep={setActiveStep} />
				) : activeStep === 2 ? (
					<OrderSummery setActiveStep={setActiveStep} />
				) : activeStep === 3 ? (
					<OrderPlaced setActiveStep={setActiveStep} />
				) : null}
			</Box>
		</Stack>
	);
};

export default ShippingScreen;
