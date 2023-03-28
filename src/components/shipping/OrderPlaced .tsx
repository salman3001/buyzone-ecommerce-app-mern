import { Alert } from '@mui/material';
import React, { useEffect, type Dispatch, type FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/cartslice';
import MuiLink from '../nav/MuiLink';

const OrderPlaced: FunctionComponent<{ setActiveStep: Dispatch<React.SetStateAction<number>> }> = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(clearCart());
	}, []);
	return (
		<Alert
			sx={{
				my: 4,
			}}
		>
			Oder Placed Successfully !!
			<br />
			<br />
			Go to -
			<MuiLink to="/user/orders" label="My Orders" />
		</Alert>
	);
};

export default OrderPlaced;
