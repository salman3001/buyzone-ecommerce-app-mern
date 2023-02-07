import { Box } from '@mui/material';
import MuiLink from './MuiLink';

const menuItems = ['Add new product', 'Products', 'Orders', 'Total Sales'];

export const AdminMenu = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: 1,
				py: 2,
			}}
		>
			{menuItems.map((category, index) => (
				<div key={index}>
					<MuiLink to={`/admin/dashboard/${category.replace(/\s/g, '')}`} label={category} />
				</div>
			))}
		</Box>
	);
};
