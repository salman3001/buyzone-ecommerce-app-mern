import { Box, Divider } from '@mui/material';
import { AdminMenu } from '../components/AdminMenu';
import { Sidebar } from '../components/Sidebar';
import Products from '../components/Products';
import { useParams } from 'react-router-dom';
import { AddNewProduct } from '../components/AddNewProduct';
import { Orders } from '../components/Orders';
import { TotalSales } from '../components/TotalSales';

export const Dashboard = () => {
	const param = useParams();
	const { menu } = param;

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: ['column', 'row'],
				bgcolor: 'background.paper',
				minHeight: 'inherit',
			}}
		>
			<Sidebar Content={AdminMenu} />
			<Divider orientation="vertical" flexItem />
			{menu === 'Products' ? (
				<Products />
			) : menu === 'Add new product' ? (
				<AddNewProduct />
			) : menu === 'Orders' ? (
				<Orders />
			) : menu === 'Total Sales' ? (
				<TotalSales />
			) : (
				'Welcome to admin dashboard'
			)}
		</Box>
	);
};
