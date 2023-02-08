import { Alert } from '@mui/material';
import React, { type Dispatch, type FunctionComponent } from 'react';
import MuiLink from '../nav/MuiLink';

const OrderPlaced: FunctionComponent<{ setActiveStep: Dispatch<React.SetStateAction<number>> }> = () => {
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
