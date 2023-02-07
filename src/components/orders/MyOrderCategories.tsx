import { Stack } from '@mui/material';
import MuiLink from '../nav/MuiLink';

const MyOrderCategories = () => {
	return (
		<Stack gap={2}>
			<MuiLink to="/user/myorders/pending" label="Pending Orders" />
			<MuiLink to="/user/myorders/delivered" label="Delivered Orders" />
			<MuiLink to="/user/myorders/cancled" label="Cancled Orders" />
		</Stack>
	);
};

export default MyOrderCategories;
