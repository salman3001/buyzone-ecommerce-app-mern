import { Box, Divider } from '@mui/material';
import { Categories } from '../components/Categories';
import { Sidebar } from '../components/Sidebar';
import Products from '../components/Products'
export const Home = () => {



	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: ['column', 'row'],
				bgcolor: 'background.paper',
				minHeight: 'inherit',
			}}
		>
			<Sidebar Content={Categories} />
			<Divider orientation="vertical" flexItem />
			<Products />
		</Box>
	);
};
