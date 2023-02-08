import { Stack } from '@mui/material';
import MuiLink from '../nav/MuiLink';

const MyOrderCategories = () => {
	return (
		<Stack gap={2}>
			<MuiLink to="/user/orders" label="All Orders" />
			<MuiLink to="/user/orders?status=Pending" label="Pending Orders" />
			<MuiLink to="/user/orders?status=Delivered" label="Delivered Orders" />
			<MuiLink to="/user/orders?status=Cancled" label="Cancled Orders" />
		</Stack>
	);
};

export default MyOrderCategories;
